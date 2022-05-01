exports.default=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toggleCheckbox=t.getItemsAt=t.TextItemType=t.clickAt=t.getClickCoord=t.getMatchAt=t.isCheckbox=t.isLink=void 0;const n=r(1);function i(e,t,r){let n=null;if(t.lastIndex=0,!t.global)return console.error("getMatchAt requires a global regex; Consider adding a `g` after ${regex}"),null;do{if(n=t.exec(e),!n)break;const i=n.index,o=i+n[0].length;if(i<=r&&r<=o)return n}while(n);return null}var o;function g(e,t){let{line:r,ch:o}=t;const g=e.getLine(r),s=i(g,n.link_regex,o);if(!s)return;let l="";for(let e=1;e<=4;e++)l=l||s[e];return l&&l.endsWith(")")?i(g,n.image_regex,o)&&(l=l.slice(0,l.length-1)):l&&(l.endsWith('"')||l.endsWith("'"))&&(l=l.slice(0,l.length-1)),l=l.split(" ")[0],l}function s(e,t){const{line:r,ch:o}=t,g=e.getLine(r),s=i(g,n.checkbox_regex,o);return s&&s[3]?{match:s,lineText:g,line:r}:null}function l(e,t){const r=e.getCursor(),{match:n,line:i,lineText:o}=s(e,t);let g=o.indexOf(n[3]),l=g+n[3].length;const c=" "===n[3][1]?"[x]":"[ ]";return e.replaceRange(c,{ch:g,line:i},{ch:l,line:i},"+input"),e.setCursor(r,null,{scroll:!1}),!0}t.isLink=function(e){return!!e.target&&e.target.classList.contains("cm-rm-link")},t.isCheckbox=function(e){return!!e.target&&e.target.classList.contains("cm-rm-checkbox")},t.getMatchAt=i,t.getClickCoord=function(e,t){return(r=e.coordsChar({left:t.clientX,top:t.clientY})).sticky&&"before"===r.sticky?{ch:r.ch-1,line:r.line}:r;var r},t.clickAt=function(e,t){if(!e.state.richMarkdown)return;const r=e.state.richMarkdown.settings;if(r.links){const r=g(e,t);if(r)return{name:"followLink",url:r}}return r.checkbox&&l(e,t),null},function(e){e.Link="link",e.Checkbox="checkbox"}(o=t.TextItemType||(t.TextItemType={})),t.getItemsAt=function(e,t){if(!e.state.richMarkdown)return null;const r=e.state.richMarkdown.settings;let n=[];if(r.links){const r=g(e,t);r&&n.push({type:o.Link,url:r,coord:t})}if(r.checkbox){s(e,t)&&n.push({type:o.Checkbox,coord:t})}return n},t.toggleCheckbox=l},function(e,t,r){"use strict";function n(e,t,r){return{name:"RichMarkdownOverlay-"+e,requiredSettings:r,token:function(r){const n=function(e,t){return e.lastIndex=t.pos,e.exec(t.string)}(t,r),i=r.baseToken();if((null==i?void 0:i.type)&&(i.type.includes("jn-inline-code")||i.type.includes("comment")||i.type.includes("katex")))r.pos+=i.size;else{if(n&&n.index===r.pos)return r.pos+=n[0].length||1,e;n?r.pos=n.index:r.skipToEnd()}return null}}}Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.table_regex=t.blockquote_regex=t.hr_regex=t.list_token_regex=t.header_regex=t.strike_token_regex=t.sup_token_regex=t.sub_token_regex=t.insert_token_regex=t.highlight_token_regex=t.strong_underline_regex=t.strong_star_regex=t.emph_underline_regex=t.emph_star_regex=t.sup_regex=t.sub_regex=t.insert_regex=t.highlight_regex=t.html_image_regex=t.image_regex=t.link_regex=t.checkbox_inner_regex=t.checkbox_regex=void 0,t.checkbox_regex=/^(\s*)([*+-] )(\[[Xx ]\])\s.*$/g,t.checkbox_inner_regex=/(?<=\[)[Xx ](?=\])/g,t.link_regex=/(?<![\\])\[[^\]]*\]\(([^\(]+)\)|<([^>\s]+\.[^>\s]+)>|((?:[a-zA-Z0-9\+\.\-])+:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|(?:[a-zA-Z0-9\+\.\-])+:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}[^\)])|joplin:\/\/x-callback-url\/.*/g,t.image_regex=/!\[[^\]]*\]\([^\(]+\)/g,t.html_image_regex=/<img([^>]+?)\/?>/g,t.highlight_regex=/(?<!\\)==(?=[^\s])[^=]*[^=\s\\]==/g,t.insert_regex=/(?<!\\)\+\+(?=[^\s])[^\+]*[^\+\s\\]\+\+/g,t.sub_regex=/(?<![\\~])~(?=[^\s])[^~]*[^~\s\\]~/g,t.sup_regex=/(?<![\\[])\^(?=[^\s])[^\^]*[^\^\s\\[]\^/g,t.emph_star_regex=/(?<![\\\*])\*(?!\*)/g,t.emph_underline_regex=/(?<![\\\_])\_(?!\_)/g,t.strong_star_regex=/(?<![\\\*])\*\*(?!\*)/g,t.strong_underline_regex=/(?<![\\\_])\_\_(?!\_)/g,t.highlight_token_regex=/(?<![\\=])==(?!=)/g,t.insert_token_regex=/(?<![\\\+])\+\+(?!\+)/g,t.sub_token_regex=/(?<![\\~])~(?!~)/g,t.sup_token_regex=/(?<![\\\^])\^(?!\^)/g,t.strike_token_regex=/(?<![\\~])~~(?!~~)/g,t.header_regex=/^\s*#+\s/g,t.list_token_regex=/^(\s*)([*+-] \[[Xx ]\]\s|[*+->]\s|(\d+)([.)]\s))(\s*)/g,t.hr_regex=/^([*\-_])(?:\s*\1){2,}\s*$/,t.blockquote_regex=/^\s*\>+\s/g,t.table_regex=/^\|[^\n]+\|/g;const i=[n("rm-checkbox",t.checkbox_regex,[]),n("rm-checkbox-check",t.checkbox_inner_regex,["extraCSS"]),n("rm-link",t.link_regex,[]),n("rm-image",t.image_regex,[]),n("rm-image",t.html_image_regex,[]),n("rm-list-token",t.list_token_regex,[]),n("rm-ins",t.insert_regex,["insertHighlight"]),n("rm-sub",t.sub_regex,["subHighlight"]),n("rm-sup",t.sup_regex,["supHighlight"]),n("rm-header-token",t.header_regex,["extraCSS"]),n("line-cm-rm-blockquote",t.blockquote_regex,["extraCSS"]),n("rm-em-token",t.emph_star_regex,["extraCSS"]),n("rm-em-token",t.emph_underline_regex,["extraCSS"]),n("rm-strong-token",t.strong_star_regex,["extraCSS"]),n("rm-strong-token",t.strong_underline_regex,["extraCSS"]),n("rm-highlight",t.highlight_regex,["markHighlight"]),n("rm-highlight-token",t.highlight_token_regex,["extraCSS","markHighlight"]),n("rm-ins-token",t.insert_token_regex,["extraCSS","insertHighlight"]),n("rm-sub-token",t.sub_token_regex,["extraCSS","subHighlight"]),n("rm-sup-token",t.sup_token_regex,["extraCSS","supHighlight"]),n("rm-strike-token",t.strike_token_regex,["extraCSS"]),n("rm-hr line-cm-rm-hr",t.hr_regex,["extraCSS"])];function o(e,t){for(let r of t)if(!e[r])return!1;return!0}t.add=function(e){if(e.state.richMarkdown)for(let t of i)o(e.state.richMarkdown.settings,t.requiredSettings)&&e.addOverlay(t)},t.remove=function(e){for(let t of i)e.removeOverlay(t)}}]).default;