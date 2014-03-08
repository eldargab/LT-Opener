#Opener

![Screenshot](http://snag.gy/fAV7T.jpg)

It also presents a notion of "Active item" and can be used
to run arbitrary shell commands againts it.

##Usage

Besides the above menu the following commands are available

  * Terminal: Open in active workspace `:lt.plugins.opener/open-terminal-in-active-workspace`
  * Terminal: Open in active dir `:lt.plugins.opener/open-terminal-in-active-dir`
  * Explorer: Open active workspace `:lt.plugins.opener/open-active-workspace`
  * Explorer: Reveal active item `:lt.plugins.opener/reveal-active-item`
  * Run shell command againts active item (#item-type #command) (hidden) `:lt.plugins.opener/shell`

where

  * `Active item` - is what is opened in the currently active tab
  * `Active dir` - the dir of the active item (if file) or active item itself
  * `Active workspace dir` - folder from the current workspace that is also a parent
  of the active item. If there is only one folder, that one will be returned
  regardless of the active item.

##Customization

Use `:lt.plugins.opener/set-shell-command` behavior to
setup platform specific command for a given action. For example

```clojure
;; set the terminal to iTerm
{:+ {:lt.plugins.opener/settings
     [(:lt.plugins.opener/set-shell-command
       :terminal
       :mac
       ["open" "{{path}}" "-a" "iTerm"])]}}
```

`{{path}}` token will be replaced with the given file system path
during invocation. Note, that a command is not a string, but a list
of command line arguments.

Use `:lt.plugins.opener/shell` for shortcuting arbitrary shell command.
For example:

```Clojure

{:app {;; add active file to git with Alt+s
       "alt-s" [(:lt.plugins.opener/shell :active-item ["git" "add" "{{path}}"])]}
       ;; Platform indirection is also supported
       "alt-w" [(:lt.plugins.opener/shell :active-workspace-dir :open)]}
```

##Quirks

Commands for windows are not provided. PR's are welcome.

On linuxes we do not have cross platform tools to do the job.
By default we use `xdg-open(1)` for opening, `nautilus`
for revealing and `gnome-terminal` as a terminal.

##Installation

Available in the central plugin repository.
You might need to run `Refresh plugin list`, `Reload app behaviors`
commands after installation.
