!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function u(t){try{a(o.next(t))}catch(t){i(t)}}function l(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,l)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const r=n(1),i=n(2);r.default.plugins.register({onStart:function(){return o(this,void 0,void 0,(function*(){yield r.default.contentScripts.register(i.ContentScriptType.MarkdownItPlugin,"sortableMdTable","./sortableMdTable.js")}))}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=joplin},function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.ContentScriptType=e.SettingStorage=e.AppType=e.SettingItemType=e.ToolbarButtonLocation=e.isContextMenuItemLocation=e.MenuItemLocation=e.ImportModuleOutputFormat=e.FileSystemItem=void 0,function(t){t.File="file",t.Directory="directory"}(e.FileSystemItem||(e.FileSystemItem={})),function(t){t.Markdown="md",t.Html="html"}(e.ImportModuleOutputFormat||(e.ImportModuleOutputFormat={})),function(t){t.File="file",t.Edit="edit",t.View="view",t.Note="note",t.Tools="tools",t.Help="help",t.Context="context",t.NoteListContextMenu="noteListContextMenu",t.EditorContextMenu="editorContextMenu",t.FolderContextMenu="folderContextMenu",t.TagContextMenu="tagContextMenu"}(o=e.MenuItemLocation||(e.MenuItemLocation={})),e.isContextMenuItemLocation=function(t){return[o.Context,o.NoteListContextMenu,o.EditorContextMenu,o.FolderContextMenu,o.TagContextMenu].includes(t)},function(t){t.NoteToolbar="noteToolbar",t.EditorToolbar="editorToolbar"}(e.ToolbarButtonLocation||(e.ToolbarButtonLocation={})),function(t){t[t.Int=1]="Int",t[t.String=2]="String",t[t.Bool=3]="Bool",t[t.Array=4]="Array",t[t.Object=5]="Object",t[t.Button=6]="Button"}(e.SettingItemType||(e.SettingItemType={})),function(t){t.Desktop="desktop",t.Mobile="mobile",t.Cli="cli"}(e.AppType||(e.AppType={})),function(t){t[t.Database=1]="Database",t[t.File=2]="File"}(e.SettingStorage||(e.SettingStorage={})),function(t){t.MarkdownItPlugin="markdownItPlugin",t.CodeMirrorPlugin="codeMirrorPlugin"}(e.ContentScriptType||(e.ContentScriptType={}))}]);