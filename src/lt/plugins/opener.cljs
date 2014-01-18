(ns lt.plugins.opener
  (:require [clojure.string :as string]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.platform :refer [platform]]
            [lt.objs.console :as console]
            [lt.objs.files :as files]
            [lt.objs.workspace :as workspace]
            [lt.objs.tabs :as tabs])
  (:require-macros [lt.macros :refer [behavior]]))

(def spawn (.-spawn (js/require "child_process")))

(defn sh [[command & args]]
  (let [proc (spawn command (to-array args))
        stderr (.-stderr proc)
        stdout (.-stdout proc)
        err (atom "")
        out (atom "")]
    (.setEncoding stderr "utf8")
    (.setEncoding stdout "utf8")
    (.on stdout "data" (fn [s] (swap! out #(str % s))))
    (.on stderr "data" (fn [s] (swap! err #(str % s))))
    (.on proc "error" (fn []))
    (.on proc "close" (fn [code]
                        (when (seq @err)
                          (console/error (str "Opener: " @err)))
                        (when (seq @out)
                          (.log js/console @out))))))

(object/object* ::settings
                :tags #{::settings}
                :terminal {}
                :open {}
                :platform platform)

(defn set-shell-command! [this type os command]
  (object/update! this [type] #(assoc % os command)))

(behavior ::set-terminal
          :for #{::settings}
          :triggers #{:object.instant}
          :desc "Opener plugin: Set platform specific shell command to start Terminal"
          :params [{:label "platform"
                    :type :string
                    :items [:windows :linux :mac]}
                   {:label "command (as a list of args, not a string)"
                    :type :list}]
          :reaction (fn [this os cmd]
                      (set-shell-command! this :terminal os cmd)))

(behavior ::set-open
          :for #{::settings}
          :triggers #{:object.instant}
          :desc "Opener plugin: Set platform specific Open command"
          :params [{:label "platform"
                    :type :string
                    :items [:windows :linux :mac]}
                   {:label "command (as a list of args, not a string)"
                    :type :list}]
          :reaction (fn [this os cmd]
                      (set-shell-command! this :open os cmd)))

(def settings (object/create ::settings))

(defn ->command [type path]
  (->> (-> @settings type platform)
       (map #(string/replace % "{{path}}" path))))

(defn open [type path]
  (if-let [command (seq (->command type (if (seq path) path (files/home))))]
    (sh command)
    (console/error (str "Opener plugin: Shell command " type " is not setuped for your platform " (:platform @settings)))))

(defn empty->nil [str]
  (if (seq str)
    str
    nil))

(defn active-path []
  (empty->nil
   (if-let [tab (tabs/active-tab)]
     (tabs/->path tab))))

(defn active-workspace-dir []
  "Our definition of what the term 'workspace directory' means"
  (empty->nil
   (let [dirs (:folders @workspace/current-ws)]
     (if-not (seq (next dirs))
       (first dirs)
       (let [path (active-path)]
         (first (filter #(.startsWith path %) dirs)))))))

(defn ->dir [path]
  (when path
    (if (files/dir? path)
      path
      (files/parent path))))

(cmd/command {:command ::open-terminal-in-active-workspace
              :desc "Terminal: Open in active workspace"
              :exec (fn []
                      (open :terminal (active-workspace-dir)))})

(cmd/command {:command ::open-terminal-in-active-dir
              :desc "Terminal: Open in active dir"
              :exec (fn []
                      (open :terminal (->dir (active-path))))})

(cmd/command {:command ::open-active-workspace-dir
              :desc "Open active workspace dir"
              :exec (fn []
                      (open :open (active-workspace-dir)))})

(cmd/command {:command ::open-terminal-in-active-dir
              :desc "Open active dir"
              :exec (fn []
                      (open :open (->dir (active-path))))})