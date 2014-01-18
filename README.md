#Opener

Native OS open-reveal functionality for LightTable.

![Screenshot](http://snag.gy/fAV7T.jpg)

##Usage

Besides the above menu the following commands are available

  * Terminal: Open in active workspace `:lt.plugins.opener/open-terminal-in-active-workspace`
  * Terminal: Open in active dir `:lt.plugins.opener/open-terminal-in-active-dir`
  * Explorer: Open active workspace `:lt.plugins.opener/open-active-workspace`
  * Explorer: Reveal active item `:lt.plugins.opener/reveal-active-item`

Active workspace means either:

  1. Folder of the current workspace (if there is only one such)
  2. Folder of the current workspace that is also a parent of the currently opened file

No shortcuts are assigned by default.

##Customization

Use `:lt.plugins.opener/set-shell-command` behavior to
setup platform specific command for a given action. For example

```clojure
{:+ {:lt.plugins.opener/settings
     [(:lt.plugins.opener/set-shell-command
       :open
       :mac
       ["open" "{{path}}"])]}}
```

This way a standard `open` command for mac is setuped.
`{{path}}` token will be replaced with the given file system path
during invocation. Note, that command is not a string, but a list
of command line arguments.

##Quirks

Currently only commands for mac are provided out of the box.
Pull requests with plausible defaults for other platforms are welcome.

OS X `Open Terminal` command can be better. Currently it
brings all terminal windows to front. Although Alt+Tabbing
with utilities like [Witch](http://manytricks.com/witch/)
works as expected, you probably want to see only one window
in such case. If you know how to achive this, please tell.


##Installation

Available in the central plugin repository.
You might need to run `Refresh plugin list`, `Reload app behaviors`
commands after installation.