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

lt.plugins.opener.sh = (function sh(p__8762){var vec__8764 = p__8762;var command = cljs.core.nth.call(null,vec__8764,0,null);var args = cljs.core.nthnext.call(null,vec__8764,1);var proc = lt.plugins.opener.spawn.call(null,command,cljs.core.to_array.call(null,args));var stderr = proc.stderr;var stdout = proc.stdout;var err = cljs.core.atom.call(null,"");var out = cljs.core.atom.call(null,"");stderr.setEncoding("utf8");
stdout.setEncoding("utf8");
stdout.on("data",(function (s){return cljs.core.swap_BANG_.call(null,out,(function (p1__8760_SHARP_){return [cljs.core.str(p1__8760_SHARP_),cljs.core.str(s)].join('');
}));
}));
stderr.on("data",(function (s){return cljs.core.swap_BANG_.call(null,err,(function (p1__8761_SHARP_){return [cljs.core.str(p1__8761_SHARP_),cljs.core.str(s)].join('');
}));
}));
proc.on("error",(function (){return null;
}));
return proc.on("close",(function (code){if(cljs.core.seq.call(null,cljs.core.deref.call(null,err)))
{lt.objs.console.error.call(null,[cljs.core.str("Opener plugin: "),cljs.core.str(cljs.core.deref.call(null,err))].join(''));
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,out)))
{return console.log([cljs.core.str("Opener plugin: "),cljs.core.str(cljs.core.deref.call(null,out))].join(''));
} else
{return null;
}
}));
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),null], null), null),new cljs.core.Keyword(null,"terminal","terminal",4127622638),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"open","open",1017321916),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reveal","reveal",4374518591),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"platform","platform",2888588261),lt.objs.platform.platform);

lt.plugins.opener.__BEH__set_shell_command = (function __BEH__set_shell_command(this$,type,os,command){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (p1__8765_SHARP_){return cljs.core.assoc.call(null,p1__8765_SHARP_,os,command);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","set-shell-command","lt.plugins.opener/set-shell-command",2986662918),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.opener.__BEH__set_shell_command,new cljs.core.Keyword(null,"desc","desc",1016984067),"Opener plugin: Set platform specific shell command for a given action",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Command type",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"keyword","keyword",4494463323),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terminal","terminal",4127622638),new cljs.core.Keyword(null,"open","open",1017321916),new cljs.core.Keyword(null,"reveal","reveal",4374518591)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"platform",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"keyword","keyword",4494463323),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"linux","linux",1116882022),new cljs.core.Keyword(null,"mac","mac",1014012097)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"command (as a list of args, not a string)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174),null], null), null));

lt.plugins.opener.settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.opener","settings","lt.plugins.opener/settings",720243174));

lt.plugins.opener.set_path = (function set_path(command,path){return cljs.core.map.call(null,(function (p1__8766_SHARP_){return clojure.string.replace.call(null,p1__8766_SHARP_,"{{path}}",path);
}),command);
});

lt.plugins.opener.open = (function open(type,path){var temp__4090__auto__ = cljs.core.seq.call(null,lt.plugins.opener.set_path.call(null,(((type instanceof cljs.core.Keyword))?lt.objs.platform.platform.call(null,type.call(null,cljs.core.deref.call(null,lt.plugins.opener.settings))):type),path));if(temp__4090__auto__)
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

lt.plugins.opener.active_item = (function active_item(){return lt.plugins.opener.empty__GT_nil.call(null,(function (){var temp__4090__auto__ = lt.objs.tabs.active_tab.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var tab = temp__4090__auto__;var or__6741__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab));
}
} else
{return null;
}
})());
});

lt.plugins.opener.active_workspace_dir = (function active_workspace_dir(){return lt.plugins.opener.empty__GT_nil.call(null,(function (){var dirs = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.next.call(null,dirs))))
{return cljs.core.first.call(null,dirs);
} else
{var temp__4090__auto__ = lt.plugins.opener.active_item.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var path = temp__4090__auto__;return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8767_SHARP_){return path.startsWith(p1__8767_SHARP_);
}),dirs));
} else
{return null;
}
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

lt.plugins.opener.__BEH__add_menu_items = (function __BEH__add_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),90], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open",new cljs.core.Keyword(null,"order","order",1119910592),91,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"open","open",1017321916),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Reveal",new cljs.core.Keyword(null,"order","order",1119910592),92,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"reveal","reveal",4374518591),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal here",new cljs.core.Keyword(null,"order","order",1119910592),93,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"terminal","terminal",4127622638),lt.plugins.opener.__GT_dir.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.opener","add-menu-items","lt.plugins.opener/add-menu-items",1598120963),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.opener.__BEH__add_menu_items,new cljs.core.Keyword(null,"desc","desc",1016984067),"Opener plugin: Add menu items",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-item","tree-item",999403348),null], null), null));

/**
* @param {...*} var_args
*/
lt.plugins.opener.or_ = (function() { 
var or___delegate = function (getters){return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__8768_SHARP_){return p1__8768_SHARP_.call(null);
}),getters)));
};
var or_ = function (var_args){
var getters = null;if (arguments.length > 0) {
  getters = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return or___delegate.call(this,getters);};
or_.cljs$lang$maxFixedArity = 0;
or_.cljs$lang$applyTo = (function (arglist__8772){
var getters = cljs.core.seq(arglist__8772);
return or___delegate(getters);
});
or_.cljs$core$IFn$_invoke$arity$variadic = or___delegate;
return or_;
})()
;

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-terminal-in-active-workspace","lt.plugins.opener/open-terminal-in-active-workspace",3652400249),new cljs.core.Keyword(null,"desc","desc",1016984067),"Terminal: Open in active workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"terminal","terminal",4127622638),lt.plugins.opener.or_.call(null,lt.plugins.opener.active_workspace_dir,(function (){return lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_item.call(null));
}),lt.objs.files.home));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-terminal-in-active-dir","lt.plugins.opener/open-terminal-in-active-dir",3260467649),new cljs.core.Keyword(null,"desc","desc",1016984067),"Terminal: Open in active dir",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"terminal","terminal",4127622638),lt.plugins.opener.or_.call(null,(function (){return lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_item.call(null));
}),lt.plugins.opener.active_workspace_dir,lt.objs.files.home));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","open-active-workspace","lt.plugins.opener/open-active-workspace",1221266040),new cljs.core.Keyword(null,"desc","desc",1016984067),"Explorer: Open active workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"open","open",1017321916),lt.plugins.opener.or_.call(null,lt.plugins.opener.active_workspace_dir,(function (){return lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_item.call(null));
}),lt.objs.files.home));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","reveal-active-item","lt.plugins.opener/reveal-active-item",3930885935),new cljs.core.Keyword(null,"desc","desc",1016984067),"Explorer: Reveal active item",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.opener.open.call(null,new cljs.core.Keyword(null,"reveal","reveal",4374518591),lt.plugins.opener.or_.call(null,lt.plugins.opener.active_item,lt.plugins.opener.active_workspace_dir,(function (){return cljs.core.first.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
}),(function (){return cljs.core.first.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
}),lt.objs.files.home));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.opener","shell","lt.plugins.opener/shell",4227035121),new cljs.core.Keyword(null,"desc","desc",1016984067),"Run shell command againts active item (#item #command)",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item,command){var path = (function (){var pred__8769 = cljs.core._EQ_;var expr__8770 = item;if(cljs.core.truth_(pred__8769.call(null,new cljs.core.Keyword(null,"active-workspace-dir","active-workspace-dir",918598720),expr__8770)))
{return lt.plugins.opener.active_workspace_dir.call(null);
} else
{if(cljs.core.truth_(pred__8769.call(null,new cljs.core.Keyword(null,"active-dir","active-dir",3056695480),expr__8770)))
{return lt.plugins.opener.__GT_dir.call(null,lt.plugins.opener.active_item.call(null));
} else
{if(cljs.core.truth_(pred__8769.call(null,new cljs.core.Keyword(null,"active-item","active-item",4211049708),expr__8770)))
{return lt.plugins.opener.active_item.call(null);
} else
{return null;
}
}
}
})();if(cljs.core.truth_(path))
{return lt.plugins.opener.open.call(null,command,path);
} else
{return lt.objs.console.error.call(null,[cljs.core.str("Opener plugin: Can't determine path for "),cljs.core.str(item)].join(''));
}
})], null));

}

//# sourceMappingURL=