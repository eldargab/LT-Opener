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
                          (console/error (str "Opener plugin: " @err)))
                        (when (seq @out)
                          (.log js/console (str "Opener plugin: " @out)))))))

(object/object* ::settings
                :tags #{::settings}
                :terminal {}
                :open {}
                :reveal {}
                :platform platform)

(behavior ::set-shell-command
          :for #{::settings}
          :triggers #{:object.instant}
          :desc "Opener plugin: Set platform specific shell command for a given action"
          :params [{:label "Command type"
                    :type :keyword
                    :items [:terminal :open :reveal]}
                   {:label "platform"
                    :type :keyword
                    :items [:windows :linux :mac]}
                   {:label "command (as a list of args, not a string)"
                    :type :list}]
          :reaction (fn [this type os command]
                      (object/update! this [type] #(assoc % os command))))

(def settings (object/create ::settings))

(defn ->command [type path]
  (->> (-> @settings type platform)
       (map #(string/replace % "{{path}}" path))))

(defn open [type path]
  (if-let [command (seq (->command type path))]
    (sh command)
    (console/error (str "Opener plugin: Shell command " type " is not setuped for your platform " (:platform @settings)))))

(defn empty->nil [str]
  (if (seq str)
    str
    nil))

(defn active-path []
  (empty->nil
   (if-let [tab (tabs/active-tab)]
     (or (-> @tab :info :path) ;; just (tabs/->path tab) fails some times
         (-> @tab :path)))))

(defn active-workspace-dir []
  "Our definition of what the term 'workspace directory' means"
  (empty->nil
   (let [dirs (:folders @workspace/current-ws)]
     (if-not (seq (next dirs))
       (first dirs)
       (if-let [path (active-path)]
         (first (filter #(.startsWith path %) dirs)))))))

(defn ->dir [path]
  (when path
    (if (files/dir? path)
      path
      (files/parent path))))

(behavior ::add-menu-items
          :triggers #{:menu-items}
          :for #{:tree-item}
          :desc "Opener plugin: Add menu items"
          :reaction (fn [this items]
                      (conj items
                            {:type "separator"
                             :order 90}
                            {:label "Open"
                             :order 91
                             :click (fn [] (open :open (:path @this)))}
                            {:label "Reveal"
                             :order 92
                             :click (fn [] (open :reveal (:path @this)))}
                            {:label "Open Terminal here"
                             :order 93
                             :click (fn [] (open :terminal (->dir (:path @this))))})))

(defn- or-home [getter] ;; lets just do something instead of complaining
  (or (getter) (files/home)))

(cmd/command {:command ::open-terminal-in-active-workspace
              :desc "Terminal: Open in active workspace"
              :exec (fn []
                      (open :terminal (or-home active-workspace-dir)))})

(cmd/command {:command ::open-terminal-in-active-dir
              :desc "Terminal: Open in active dir"
              :exec (fn []
                      (open :terminal (->dir (or-home active-path))))})

(cmd/command {:command ::open-active-workspace
              :desc "Explorer: Open active workspace"
              :exec (fn []
                      (open :open (or-home active-workspace-dir)))})

(cmd/command {:command ::reveal-active-item
              :desc "Explorer: Reveal active item"
              :exec (fn []
                      (open :reveal (or-home active-path)))})