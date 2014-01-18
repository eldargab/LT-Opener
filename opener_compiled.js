if(!lt.util.load.provided_QMARK_('lt.plugins.opener')) {
goog.provide('lt.plugins.opener');
goog.require('cljs.core');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.command');

lt.plugins.opener.spawn = require("child_process").spawn;

lt.plugins.opener.sh = (function sh(p__8421){var vec__8423 = p__8421;var command = cljs.core.nth.call(null,vec__8423,0,null);var args = cljs.core.nthnext.call(null,vec__8423,1);var proc = lt.plugins.opener.spawn.call(null,command,cljs.core.to_array.call(null,args));var stderr = proc.stderr;var stdout = proc.stdout;var err = cljs.core.atom.call(null,"");var out = cljs.core.atom.call(null,"");stderr.setEncoding("utf8");
stdout.setEncoding("utf8");
stdout.on("data",(function (s){return cljs.core.swap_BANG_.call(null,out,(function (p1__8419_SHARP_){return [cljs.core.str(p1__8419_SHARP_),cljs.core.str(s)].join('');
}));
}));
stderr.on("data",(function (s){return cljs.core.swap_BANG_.call(null,err,(function (p1__8420_SHARP_){return [cljs.core.str(p1__8420_SHARP_),cljs.core.str(s)].join('');
}));
}));
proc.on("error",(function (){return null;
}));
return proc.on("close",(function (code){if(cljs.core.seq.call(null,cljs.core.deref.call(null,err)))
{lt.objs.console.error.call(null,[cljs.core.str("Opener: "),cljs.core.str(cljs.core.deref.call(null,err))].join(''));
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,out)))
{return console.log(cljs.core.deref.call(null,out));
} else
{return null;
}
}));
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),null], null), null),new cljs.core.Keyword(null,"terminal","terminal",4127622638),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"open","open",1017321916),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"platform","platform",2888588261),lt.objs.platform.platform);

lt.plugins.opener.set_shell_command_BANG_ = (function set_shell_command_BANG_(this$,type,os,command){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (p1__8424_SHARP_){return cljs.core.assoc.call(null,p1__8424_SHARP_,os,command);
}));
});

lt.plugins.opener.__BEH__set_terminal = (function __BEH__set_terminal(this$,os,cmd){return lt.plugins.opener.set_shell_command_BANG_.call(null,this$,new cljs.core.Keyword(null,"terminal","terminal",4127622638),os,cmd);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","set-terminal","lt.plugins.opener/set-terminal",2186905338),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.opener.__BEH__set_terminal,new cljs.core.Keyword(null,"desc","desc",1016984067),"Opener plugin: Set platform specific shell command to start Terminal",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"platform",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"linux","linux",1116882022),new cljs.core.Keyword(null,"mac","mac",1014012097)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"command (as a list of args, not a string)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),null], null), null));

lt.plugins.opener.__BEH__set_open = (function __BEH__set_open(this$,os,cmd){return lt.plugins.opener.set_shell_command_BANG_.call(null,this$,new cljs.core.Keyword(null,"open","open",1017321916),os,cmd);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","set-open","lt.plugins.opener/set-open",520801612),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.opener.__BEH__set_open,new cljs.core.Keyword(null,"desc","desc",1016984067),"Opener plugin: Set platform specific Open command",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"platform",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"linux","linux",1116882022),new cljs.core.Keyword(null,"mac","mac",1014012097)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"command (as a list of args, not a string)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),null], null), null));

lt.plugins.opener.settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174));

lt.plugins.opener.__GT_command = (function __GT_command(type,path){return cljs.core.map.call(null,(function (p1__8425_SHARP_){return clojure.string.replace.call(null,p1__8425_SHARP_,"{{path}}",path);
}),lt.objs.platform.platform.call(null,type.call(null,cljs.core.deref.call(null,lt.plugins.opener.settings))));
});

lt.plugins.opener.open = (function open(type,path){var temp__4090__auto__ = cljs.core.seq.call(null,lt.plugins.opener.__GT_command.call(null,type,((cljs.core.seq.call(null,path))?path:lt.objs.files.home.call(null))));if(temp__4090__auto__)
{var command = temp__4090__auto__;return lt.plugins.opener.sh.call(null,command);
} else
{return lt.objs.console.error.call(null,[cljs.core.str("Opener plugin: Shell command "),cljs.core.str(type),cljs.core.str(" is not setuped for your platform "),cljs.core.str(new cljs.core.Keyword(null,"platform","platform",2888588261).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.opener.settings)))].join(''));
}
});

lt.plugins.opener.empty__GT_nil = (function empty__GT_nil(str){if(cljs.core.seq.call(null,str))
{return str;
} else
{return null;
}
});

lt.plugins.opener.active_path = (function active_path(){return lt.plugins.opener.empty__GT_nil.call(null,(function (){var temp__4090__auto__ = lt.objs.tabs.active_tab.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var tab = temp__4090__auto__;return lt.objs.tabs.__GT_path.call(null,tab);
} else
{return null;
}
})());
});

lt.plugins.opener.active_workspace_dir = (function active_workspace_dir(){return lt.plugins.opener.empty__GT_nil.call(null,(function (){var dirs = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.next.call(null,dirs))))
{return cljs.core.first.call(null,dirs);
} else
{var path = lt.plugins.opener.active_path.call(null);return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8426_SHARP_){return path.startsWith(p1__8426_SHARP_);
}),dirs));
}
})());
});

lt.plugins.opener.__GT_dir = (function __GT_dir(path){if(cljs.core.truth_(path))
{if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return path;
} else
{return lt.objs.files.parent.call(null,path);
}
} else
{return null;
}
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-terminal-in-active-workspace","lt.plugins.opener/open-terminal-in-active-workspace",3652400249),new cljs.core.Keyword(null,"desc","desc",1016984067),"Terminal: Open in active workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"terminal","terminal",4127622638),lt.plugins.opener.active_workspace_dir.call(null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-terminal-in-active-dir","lt.plugins.opener/open-terminal-in-active-dir",3260467649),new cljs.core.Keyword(null,"desc","desc",1016984067),"Terminal: Open in active dir",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"terminal","terminal",4127622638),lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_path.call(null)));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-active-workspace-dir","lt.plugins.opener/open-active-workspace-dir",2856604216),new cljs.core.Keyword(null,"desc","desc",1016984067),"Open active workspace dir",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"open","open",1017321916),lt.plugins.opener.active_workspace_dir.call(null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-terminal-in-active-dir","lt.plugins.opener/open-terminal-in-active-dir",3260467649),new cljs.core.Keyword(null,"desc","desc",1016984067),"Open active dir",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"open","open",1017321916),lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_path.call(null)));
})], null));

}

//# sourceMappingURL=