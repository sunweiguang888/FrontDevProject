/*
 引用Sizzle框架
 函数介绍：
 var Sizzle = function( selector, context, results, seed ){}
 Sizzle有四个参数：
 　　selector	：选择表达式
 　　context	：上下文
 　　results	：结果集
 　　seed	：候选集
 实例说明：
 Sizzle('div',#test,[#a,#b],[#c,#d,#e])就是在集合[#c,#d,#e]中查找满足条件（在#test范围中并标签名为div）的元素，然后将满足条件的结果存入[#a,#b]中，假设满足条件的有#d,#e，最后获得就是[#a,#b,#d,#e]。
 * */
/*! Sizzle v2.2.2-pre | (c) jQuery Foundation, Inc. | jquery.org/license */
!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),"function"==typeof define&&define.amd?define(function(){return fa}):"undefined"!=typeof module&&module.exports?module.exports=fa:a.Sizzle=fa}(window);


/**
 * swg框架
 * swg框架包含：CSS选择器、DOM操作、常用工具方法 三部分。
 * 调用方法为：swg("")、swg("").children()、swg.getParam()
 * */
(function(){
	/**
	 * 选择器适配器，适配器模式
	 * @type {{select: Function}}
	 */
	var selectorAdapter = {
		select: function(selector, context, results, seed){
			return new Sizzle(selector, context, results, seed);
		}
	};
	var select = selectorAdapter.select;

	/**
	 * 构造函数新增方法
	 * @param constructor
	 * @param methodName
	 * @param handler
	 */
	function addMethod(constructor, methodName, handler){
		constructor.prototype[methodName] = handler;
	}

	/**
	 * 框架核心类，包含 HTMLElement数组 和 DOM操作方法
	 * @param nodes HTMLElement数组
	 * @constructor
	 */
	function Node(nodes) {
		if(!nodes instanceof Array) throw new Error("必须传入HTMLElement数组");
		this.nodes = nodes;
		this.length = this.nodes.length;
		for(var i in nodes){
			this[i] = nodes[i];
		}
	}
	/**
	 * Node工厂
	 * @type {{create: Function}}
	 */
	var NodeFactory = {
		create: function(nodes){
			return new Node(nodes);
		}
	}
	Node.prototype = {
		//Node实例的constructor属性并不一定指向构造函数，而是与Node.prototype.constructor指向相同
		constructor: Node,

		//*****************事件*****************
		/**
		 * 绑定事件和处理方法
		 * @param eventType 事件类型
		 * @param handler 处理方法
		 */
		bind: (function() {
			//addEventListener 添加事件方法
			var addEventListener = (function() {
				if(window.addEventListener){
					return function(domNode, eventType, handler){
						//W3C，当为同一元素的同一事件添加处理方法时，会根据添加顺序依次执行
						domNode.addEventListener(eventType, handler, false);
					}
				} else if (window.attachEvent) {
					return function(domNode, eventType, handler){
						var dom0EventType = "on" + eventType;
						//IE 5 6 7 8，但执行顺序与添加顺序相反
						domNode.attachEvent(dom0EventType, function (event) {
							//提供自定义event.preventDefault()
							event.preventDefault = event.preventDefault instanceof Function ? event.preventDefault : function () {
								event.returnValue = false;//IE 5 6 7 8 9 10
							}
							//提供自定义event.stopPropagation()
							event.stopPropagation = event.stopPropagation instanceof Function ? event.preventDefault : function () {
								event.cancelBubble = true;//IE 6 7 8 9 10
							};
							//执行回调函数
							handler.call(domNode, event);
						});
					}
				}else{
					return function(domNode, eventType, handler){
						var dom0EventType = "on" + eventType;
						//一般不会执行，上面两种方法基本已经适用各种浏览器
						var oldHandler = domNode[dom0EventType];
						domNode[dom0EventType] = function (event) {
							//dom0级别事件event对象在window中获取
							event = event ? event : window.event;
							if (oldHandler instanceof Function) {
								oldHandler.call(domNode, event)
							}
							handler.call(domNode, event);
						}
					}
				}
			})();
			return function(eventType, handler) {
				this.each(function () {
					addEventListener(this, eventType, handler);
				});
				return this;
			}
		}()),
		/**
		 * 解除绑定事件
		 * @param eventType 事件类型
		 * @param handler 处理方法
		 */
		unbind: function(eventType, handler){
			this.each(function(){
				if(handler) {
					if (this.removeEventListener) {
						this.removeEventListener(eventType, handler, false);
					} else if (this.detachEvent) {
						this.detachEvent("on" + eventType, function () {
							handler.call(this);
						});
					} else {
						this["on"+eventType] = null;
					}
				}else{
					this["on"+eventType] = null;
				}
			});
		},
		/**
		 * 手动触发事件
		 * @param eventType 事件类型
		 */
		trigger: function(eventType){
			this.each(function(){
				try{
					//DOM
					var event = document.createEvent('Events');
					event.initEvent(eventType, true, false);
					this.dispatchEvent(event);
				}catch(e){
					//IE
					this.fireEvent('on'+eventType);
				}
			});
			return this;
		},
		/**
		 * 绑定或触发事件
		 * @param eventType 事件类型
		 */
		bindOrTrigger: function(eventType, handler){
			if(handler){
				this.bind(eventType, handler);
			}else{
				this.trigger(eventType);
			}
			return this;
		},

		//*****************元素筛选*****************
		/**
		 * 过滤方法，对Node进行过滤
		 * @param selector
		 * @returns {nodeArray}
		 */
		filter: function(selector){
			selector = selector ? selector : "*";
			var nodeArray = selectorAdapter.select(selector, null, null, this.nodes);
			return NodeFactory.create(nodeArray);
		},
		/**
		 * 查找兄弟节点
		 * @param selector
		 * @returns {*}
		 */
		siblings: function(selector){
			var array = [];
			this.each(function(){
				var childNodes = (this.parentNode || this.parent).childNodes;
				childNodes = swg.nodeListToNodeArray(childNodes);
				for (var j=0;j<childNodes.length;j++) {//去掉不是Element类型的节点和node自己
					if (childNodes[j].nodeType === 1 && childNodes[j] !== this) {
						array.push(childNodes[j]);
					}
				}
			});
			return NodeFactory.create(array).filter(selector);
		},
		/**
		 * 查找后面的兄弟节点
		 * @param selector
		 * @returns {*}
		 */
		afterSiblings: function(selector){
			var array = [];
			for(var i in this.nodes) {
				var node = this.nodes[i];
				var lastChild = node.parentNode.lastChild;
				while(node !== lastChild){
					node = node.nextSibling;
					if(node.nodeType === 1){
						array.push(node);
					}
				}
			}
			return NodeFactory.create(array).filter(selector);
		},
		/**
		 * 查找前面的兄弟节点
		 * @param selector
		 * @returns {*}
		 */
		beforeSiblings: function(selector){
			var array = [];
			for(var i in this.nodes) {
				var node = this.nodes[i];
				var firstChild = node.parentNode.firstChild;
				while(firstChild != node){
					firstChild = firstChild.nextSibling;
					if(node.nodeType === 1){
						array.push(node);
					}
				}
			}
			return NodeFactory.create(array).filter(selector);
		},
		/**
		 * 查找子元素
		 * @param selector
		 */
		children: function(selector){
			var array = [];
			this.each(function(){
				swg.each(this.childNodes, function(){
					if(this.nodeType === 1){
						array.push(this);
					}
				});
			});
			return NodeFactory.create(array).filter(selector);
		},
		/**
		 * 查找后代元素
		 * @param selector
		 */
		find: function(selector){
			var array = [];
			this.each(function(){
				array = array.concat(swg.getDescendantNodes(this));
			});
			return NodeFactory.create(array).filter(selector);
		},
		/**
		 * 获取第index个dom元素
		 * @param index
		 * @returns {*}
		 */
		get: function(index){
			return this.nodes[index];
		},
		/**
		 * 获取第index个元素
		 * @param index
		 * @returns {*}
		 */
		eq: function(index){
			return NodeFactory.create(this.nodes[index] ? [this.nodes[index]] : []);
		},
		/**
		 * 获取第一个元素
		 * @returns {*}
		 */
		first: function(){
			return this.eq(0);
		},
		/**
		 * 获取最后一个元素
		 * @returns {*}
		 */
		last: function(){
			return this.eq(this.length - 1)
		},
		/**
		 * 获取父节点
		 * @param selector
		 */
		parent: function(){
			var array = [];
			this.each(function(){
				array.push(this.parentNode);
			});
			return NodeFactory.create(array);
		},

		//*****************元素属性*****************
		/**
		 * 判断当前节点含有class
		 * @param index {number} 序号
		 */
		hasClass: function(className){
			var hasClass = false;
			this.each(function(){
				if(swg.hasClass(this, className)){
					hasClass = true;
				}
			});
			return hasClass;
		},
		/**
		 * 添加class
		 * @param className
		 */
		addClass: function(className){
			this.each(function(){
				if(!swg.hasClass(this, className)){
					this.className += (this.className ? " " : "") + className;
				}
			});
		},
		/**
		 * 设置行内style样式
		 * @param sName
		 * @param sValue
		 */
		css: function(sName, sValue){

			if(sName && swg.isString(sName)){
				sName = swg.cssToCamel(sName);
				if(sValue !== undefined){
					this.each(function(){
						this.style[sName] = sValue;
					})
					return this;
				}else{
					return this[0] ? this[0].style[sName] : "";
				}
			}else{
				return;
			}
		},
		/**
		 * 获取外部CSS样式，如css文件或style标签内应用到当前元素的样式
		 * @param sName
		 * @param sValue
		 */
		getLinkCss: function(sName){
			var firstNode = this[0];
			if(!firstNode) return;
			if(document.defaultView && document.defaultView.getComputedStyle){ // W3C
				return document.defaultView.getComputedStyle(firstNode, null).getPropertyValue(sName);
			}else if(firstNode.currentStyle){
				return firstNode.currentStyle[swg.cssToCamel(sName)];
			}else{
				return null;
			}
		},
		/**
		 * 删除class
		 * @param className
		 */
		removeClass: function(className){
			this.each(function(){
				var classNameArray = this.className.split(" ");
				for(var i=0;i<classNameArray.length;i++){
					if(classNameArray[i] == className){
						classNameArray.splice(i--, 1);
					}
				}
				this.className = classNameArray.join(" ");
			});
		},
		show: function(){
			this.each(function(){
				this.style.display = null;
			})
		},
		hide: function(){
			this.each(function(){
				this.style.display = "none";
			})
		},
		/**
		 * 获取||设置文本（获取第一个节点的文本||设置所有节点的文本）
		 */
		text: function(text){
			if(text === undefined || text === null){
				if(this.nodes.length > 0){
					if (typeof this.nodes[0].textContent == "string") {
						return this.nodes[0].textContent;//DOM3，IE9+
					} else if (this.nodes[0].innerText == "string") {
						return this.nodes[0].innerText;//DOM0
					} else {
						//老版本火狐不支持textContent
						function getText(node) {
							var text = "";
							for (var i in node.childNodes) {
								var cNode = node.childNodes[i];
								text += cNode.nodeType === 1 ? getText(cNode) : cNode.nodeValue;
							}
							return text;
						}
						return getText(this.nodes[0]);
					}
				}else{
					return;
				}
				return this.nodes.length > 0 ? this.nodes[0].value : undefined;
				/*var array = [];获取所有文本
				 if(typeof this.textContent == "string"){
				 this.each(function(){
				 array.push(this.textContent);//DOM3，IE9+
				 })
				 }else{
				 this.each(function(){
				 array.push(this.innerText);//DOM0
				 })
				 }
				 return array.length == 0 ? "" : array.join("");*/
			}else{
				if(typeof this.textContent == "string"){
					this.each(function(){
						this.textContent = text;
					})
				}else{
					this.each(function(){
						this.innerText = text;
					})
				}
			}
		},
		/**
		 * 获取||设置html（获取第一个节点的html||设置所有节点的html）
		 */
		html: function(value){
			if(value === undefined && value === null){
				return this.nodes.length > 0 ? this.nodes[0].innerHTML : undefined;
			}else{
				this.each(function(){
					this.innerHTML = value;
				})
			}
		},
		/**
		 * 获取||设置值（获取第一个节点的值||设置所有节点的值）
		 */
		val: function(value){
			if(value === undefined){
				return this.nodes.length > 0 ? this.nodes[0].value : undefined;
			}else{
				this.each(function(){
					this.value = value;
				})
			}
		},
		/**
		 * 设置或获取属性
		 * @param selector
		 */
		attr: function(attrName, attrValue){
			if(this.length > 0){
				if(attrValue !== undefined){
					this.each(function(){
						this.setAttribute(attrName, attrValue);
					})
				}else{
					if(this.nodes[0].getAttribute){
						return this.nodes[0].getAttribute(attrName);
					}else{
						return this.nodes[0][attrName];
					}
				}
			}
		},
		/**
		 * 删除属性
		 * @param selector
		 */
		removeAttr: function(attrName){
			if(this.length > 0){
				this.each(function(){
					this.removeAttribute(attrName);
				})
			}
		},

		//*****************DOM操作*****************
		/**
		 * 在最后一个子节点后面添加html或domNode）
		 * @param html或domNode
		 */
		append: function(param){
			if(typeof param == "string"){//不能使用innerHTML+=""的方式，因为会丢失已绑定的事件
				this.each(function(){
					this.insertAdjacentHTML("beforeend", param);
				})
			}else{
				this.each(function(){
					this.appendChild(param);
				});
			}
		},
		/**
		 * 在第一个子节点前面添加html或domNode）
		 * @param html或domNode
		 */
		prepend: function(param){
			if(typeof param == "string"){
				this.each(function(){
					this.insertAdjacentHTML("afterbegin", param);
				});
			}else{
				this.each(function(){
					this.insertBefore(param, this.firstChild);
				});
			}
		},
		/**
		 * 在当前节点前面添加html或domNode）
		 * @param html或domNode
		 */
		before: function(param){
			if(typeof param == "string"){
				this.each(function(){
					this.insertAdjacentHTML("beforebegin", param);
				});
			}else{
				this.each(function(){
					this.parentNode.insertBefore(param, this);
				});
			}
		},
		/**
		 * 在当前节点后面添加html或domNode）
		 * @param html或domNode
		 */
		after: function(param){
			if(typeof param == "string"){
				this.each(function(){
					this.insertAdjacentHTML("afterend", param);
				});
			}else{
				this.each(function(){
					if(this !== this.parentNode.lastChild){
						this.parentNode.insertBefore(param, this.nextSibling);
					}else{
						this.parentNode.appendChild(param);
					}
				});
			}
		},
		/**
		 * 删除当前节点
		 * @param selector
		 */
		remove: function(){
			this.each(function(){
				this.parentNode.removeChild(this);
			});
		},
		/**
		 * 替换，待研究
		 * @param param
		 */
		/*replaceWith: function(param){
			if(typeof param == "string"){
				var contener = document.createElement("div");
				contener.innerHTML = param;
				this.each(function(){
					this.parentNode.replaceChild(contener.firstChild.cloneNode(true), this);
				});
			}else{
				this.each(function(){
					this.parentNode.replaceChild(param.cloneNode(true), this);
				});
			}
		},*/
		empty: function(){
			this.each(function(){
				this.innerHTML = "";//此处应将后代节点绑定事件都解除，稍后实现
			});
		},

		//*****************工具*****************
		/**
		 * 无刷新异步提交表单
		 * @param form
		 * @param options
		 * Demo:
		 * swg.ajaxSubmit(document.getElementById("form"), {
				url : "./a.txt",
				method : "post",
				enctype: "multipart/form-data",
				data:{},
				success:function(data){
					alert(data)
				}
			});
		 */
		ajaxSubmit: function(options){
			this.each(function(){
				if(this.nodeName.toLowerCase() != "form"){
					alert(this+"不是form，无法进行submit");
					return;
				}
				var form = this;
				//文档中添加一个iframe
				var iframe = document.createElement("iframe");
				iframe.name = "iframe"+swg.randomInteger(10000, 99999);
				iframe.style.display = "none";
				document.body.appendChild(iframe);
				//将选项赋给form
				if(options.url){//地址
					form.action = options.url;
				}
				if(options.method){//方法
					form.method = options.method;
				}
				if(options.enctype){//编码格式
					form.enctype = options.enctype;
				}
				if(options.data){//将params.data中的参数附加到params.url后面
					for(var property in options.data){
						var value = options.data[property];
						form.action = swg.addParamToUrl(form.action, property, value);
					}
				}
				//成功回调方法
				iframe.onload = function(){
					if(options.success){
						try{
							var iframeDocument = iframe.contentWindow.document;
						}catch(error){
							if(error.name == "SecurityError"){
								alert("表单跨域提交，不能获取返回信息！"+form.action);
							}
						}
						if(iframeDocument.body) {//当返回JSON时
							options.success(iframeDocument.body.innerHTML);
						}else{//当返回XML时
							options.success(iframeDocument.documentElement.outerHTML);
						}
					}
					document.body.removeChild(iframe);
					form.target = undefined;
				}
				form.target = iframe.name;//表单的target指向iframe的name，利用iframe进行提交
				form.submit();
			});
		},
		/**
		 * 遍历节点
		 * @param handler
		 */
		each: function(handler){
			swg.each(this.nodes, handler);
		},
		/**
		 * 根据设置iframe中页面高度自动设置iframe高度
		 * @param iframeSelector
		 */
		setIframeAutoHeight: function(){
			this.each(function(){
				if(this.nodeName.toLowerCase() == "iframe"){
					var iframe = this;
					iframe[0].onload = function(){
						iframe.css("height", 0);
						var iframeHeight = parseInt(iframe[0].contentWindow.document.getElementsByTagName("body")[0].scrollHeight);
						iframe.css("height", iframeHeight + 50);
					};
				}
			})
		}
	};
	/**
	 * 为Node添加绑定事件方法
	 */
	(function(){
		var events = ["click", "dbclick", "focus", "blur", "change", "select", "keydown", "keyup", "mousedown", "mouseup", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousemove", "resize", "scroll", "submit", "load", "unload", "touchstart", "touchmove", "touchend", "touchcancel", "paste"];
		for(var i in events){
			(function(event){
				addMethod(Node, event, function(handler){
					this.bindOrTrigger(event, handler);
					return this;
				});
			})(events[i]);
		}
	})();







	/**
	 * 常用工具方法
	 */
	var util = {
		//*****************异步请求*****************
		/**
		 * ajax调用当前网站后台数据
		 * @param params
		 * 例子：
		 swg.ajax({
				url: "a.txt",
				method: "get",
				async: true,
				data:{
					烦烦烦: "访问",
					wefwef: "fwef"
				},
				success: function(data){
                	debugger
				},
				error: function(error, data){
					console.error("错误：" + error + "         " + data);
				}
			});
		 */
		ajax: function(params){
			var defaultParams = {//参数默认值
				url: "",
				method: "get",
				async: true,
				data: undefined,
				header: undefined,
				success: function(){},
				error: function(){}
			}
			swg.setObjectDefaultPropertyValues(params, defaultParams);//没传的参数用默认值
			if(params.data){//将params.data中的参数附加到params.url后面
				for(var property in params.data){
					var value = params.data[property];
					if(value instanceof Array){//数组
						swg.each(value, function(){
							params.url = swg.addParamToUrl(params.url, property, this);
						})
					}else{//不是数组
						params.url = swg.addParamToUrl(params.url, property, value);
					}
				}
			}
			//添加header
			function addHeaders(xhr, params){
				if(params.header){
					for(var property in params.header){
						var value = params.header[property];
						xhr.setRequestHeader(property, value);
					}
				}
			}
			//创建XMLHttpRequest对象
			function createXhr(){
				if(window.XMLHttpRequest){
					return new XMLHttpRequest();
				}else if(window.ActiveXObject){
					var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp.2.0","MSXML2.XMLHttp"];
					for(var i in versions){
						try{
							return new ActiveXObject(versions[i]);
						}catch(error){}
					}
				}else{
					alert("您的浏览器版本太低，不支持ajax.");
				}
			}
			var xhr = createXhr();
			xhr.onreadystatechange = function(){//监控xhr状态
				if(xhr.readyState === 4){
					if(xhr.status === 200){
						params.success(xhr.responseText);
					}else{
						params.error(xhr.statusText, xhr.responseText);
					}
					xhr = null;
				}
			}
			if(params.method === "get"){
				xhr.open("get", params.url, params.async);//准备好发送请求
				addHeaders(xhr, params);
				xhr.send(null);//没有时传null，因为有些浏览器需要这个参数
			}else if(params.method === "post"){
				var array = params.url.split("?");
				xhr.open("post", array[0], params.async);
				//如果不在消息头对消息体内容类型进行设置，则消息体内容类型会默认为文本。(而该设置应该在open()方法之后)
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				addHeaders(xhr, params);
				xhr.send(array[1] ? array[1] : null);//取url中“？”后面的查询字符串
			}else{
				console.error("调用swg.ajax()方法传入method参数不正确")
			}
		},
		/**
		 * 跨域调用方法
		 * @param url 调用地址(String类型)
		 * @param callback 回调函数(方法引用)
		 * @param jsonp 服务器端获取回调函数名的key，不传则默认值为"callback"(String类型)
		 * Demo:
		 swg.jsonp("http://hits.17173.com/1support/support_opb.php?channel=10009&web_id=1343267821&kind=1&action=0", function(data){
				data
				debugger
			},function(){
				console.error("错误");
			}, "callback");
		 */
		jsonp: function(url, success, error, jsonp){
			var script = document.createElement("script");
			if(!jsonp){
				jsonp = "callback";
			}
			var random = swg.randomInteger(1, 10000);//随机数，为了保存结果及方法名不冲突
			var jsonpResult = swg["jsonpResult"+random];
			var saveJsonpResult = "saveJsonpResult"+random;
			swg[saveJsonpResult] = function(data){
				jsonpResult = data;
			}
			if(/\?/.test(url)){
				url = url.concat("&", jsonp, "=swg."+saveJsonpResult);
			}else{
				url = url.concat("?", jsonp, "=swg."+saveJsonpResult);
			}
			script.src = url;
			if(script.onload !== undefined){//主流
				script.onload = function(){
					if(jsonpResult !== undefined){//成功
						success(jsonpResult);
					}else{//错误
						error ? error() : 0;
					}
					script.parentNode.removeChild(script);
				}
				script.onerror = function(event){
					script.parentNode.removeChild(script);
					error ? error() : 0;//无法获取任何错误信息，event对象中没有任何可用信息
				}
			}else if(script.onreadystatechange !== undefined){//IE 5 6 7 8
				script.onreadystatechange = function(){
					if(/loaded|complete/.test(this.readyState)){//加载过程中无论是否发生异常都会进入该代码块
						if(jsonpResult !== undefined) {//成功
							success(jsonpResult);
						}else{//错误
							error();//无法获取任何错误信息，onreadystatechange事件对应方法不会获取event对象
						}
						script.parentNode.removeChild(script);
					}
				}
			}
			jsonpResult = undefined;//清空之前保留的数据
			document.getElementsByTagName("head")[0].appendChild(script);
		},
		/**
		 * 给对象的属性设置默认值
		 * @param defaultObject 包含属性默认值的对象
		 * @param targetObject 目标对象
		 */
		setObjectDefaultPropertyValues: function(targetObject, defaultObject){
			for(var property in defaultObject){
				if(targetObject[property] === undefined){
					targetObject[property] = defaultObject[property];
				}
			}
		},
		/**
		 * 请求跨域资源（需要服务器端设置资源共享方式，以Java代码为例：response.setHeader("Access-Control-Allow-Origin", "*");）
		 * 说明：XMLHttpRequest对象也能跨域，但需要奖服务器端response头部的"Access-Control-Allow-Origin"设置为XXX域名。这样XXX域下的页面才能跨域访问该资源。
		 * （其实该资源已经返回到前台页面，只不过浏览器处于安全限制，对Access-Control-Allow-Origin做了判断，如果不符合条件将报出错误）
		 * IE早先通过XDomainRequest对象进行跨域访问，访问限制同上。但到了IE11已经将该对象摒弃。
		 * 如果服务器未对资源进行设置共享，则以Chrome为例会出现如下错误：
		 * XMLHttpRequest cannot load http://shouyou.com:8081/aaaa/EFwe. No 'Access-Control-Allow-Origin' header is present on the requested resource.
		 * Origin 'http://localhost:8888' is therefore not allowed access.
		 * @param params
		 * 例子：
		 swg.cors({
				url: "http://shouyou.com:8081/aaaa/EFwe",//a.txt http://k.189.cn/common/frameworks/jquery/jquery.form.js
				method: "post",
				async: true,
				data:{
					烦烦烦: "访问",
					aaa: "fwef二房"
				},
				success: function(data){
					alert(data);
				},
				error: function(error, data){
					alert(error);
				}
			});
		 */
		cors: function(params){//只能异步
			var defaultParams = {//参数默认值
				url: "",
				method: "get",
				data: undefined,
				success: function(){},
				error: function(){}
			}
			swg.setObjectDefaultPropertyValues(params, defaultParams);//没传的参数用默认值
			if(params.data){//将params.data中的参数附加到params.url后面
				for(var property in params.data){
					var value = params.data[property];
					params.url = swg.addParamToUrl(params.url, property, value);
				}
			}
			var xhr;
			if(window.XMLHttpRequest !== undefined && "withCredentials" in (xhr = new XMLHttpRequest())){//第二个条件是XMLHttpRequest2级，表示支持跨域请求的XMLHttpRequest对象
				xhr = new XMLHttpRequest();
			}else if(window.XDomainRequest){//IE 5 6 7 8 9 10
				xhr = new XDomainRequest();
			}else{
				alert("您的浏览器不支持CORS.");
			}
			xhr.onload = function(){//XMLHttpRequest2级和XDomainRequest都支持onload事件，因XDomainRequest不支持onreadystatechange，所以只能用onload事件
				params.success(xhr.responseText);
			}
			xhr.onerror = function(){
				params.error(xhr.statusText, xhr.responseText);
			}
			if(params.method === "get"){
				xhr.open("get", params.url, true);//准备好发送请求
				xhr.send(null);//没有时传null，因为有些浏览器需要这个参数
			}else if(params.method === "post"){
				var array = params.url.split("?");
				xhr.open("post", array[0], true);
				//如果不在消息头对消息体内容类型进行设置，则消息体内容类型会默认为文本。(而该设置应该在open()方法之后)
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(array[1] ? array[1] : null);//取url中“？”后面的查询字符串
			}else{
				console.error("调用swg.ajax()方法传入method参数不正确")
			}
		},
		/**
		 * 跨域post提交数据方法
		 * Demo:
			swg.crossDomainPost('http://localhost:8080/aaa/AAA', {
				haha: 'wefwefwfewfwe',
				gaga: 'fffffffffffff方法'
			}, function(){
				 alert('成功');
			});
		 */
		crossDomainPost: function(url, data, success){
			//iframe
			var iframe = document.createElement('iframe');
			iframe.name = 'crossDomainPost' + swg.randomInteger(100, 10000);
			iframe.style.display = "none";
			document.body.appendChild(iframe);

			//form
			var form = document.createElement("form");
			form.target = iframe.name;
			form.method = 'post';
			form.action = url;
			for(var property in data){
				var input = document.createElement('input');
				input.type = 'hidden';
				input.name = property;
				input.value = data[property];
				form.appendChild(input);
			}
			document.body.appendChild(form);

			//submit
			iframe.onload = success;
			form.submit();
		},

		//*****************工具方法*****************
		/**
		 * 判断正数
		 * @param n 被判断的数字
		 * @return {boolean}
		 */
		isPositiveInteger: function(n){
			return (n && n.toString().match(/^\d+$/)) ? true : false;
		},
		/**
		 * 校验身份证。用法：swg.checkIdCard.check()
		 */
		checkIdCard: {
			cityArray: {
				11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
			},
			regExp: /^(\d{6})(\d{4})([01]\d)([0123]\d)(\d{3})(\d|x|X)?$/,
			check: function(value) {
				if(!this.regExp.test(value)) return false;
				if(!this.isValidCity(value)) return false;
				if(!this.isValidBirth(value)) return false;
				if(!this.isValidCheckDigit(value)) return false;
				return true;
			},
			isValidCity: function(value){
				var city = value.substring(0, 2);
				return !!swg.checkIdCard.cityArray[parseInt(city)];
			},
			isValidBirth: function(value) {
				var year, month, day;
				if (value.length == 18) {
					year = value.substring(6, 10);
					month = value.substring(10, 12);
					day = value.substring(12, 14);
				} else if (value.length == 15) {
					year = "19" + value.substring(6, 8);
					month = value.substring(8, 10);
					day = value.substring(10, 12);
				} else
					return false;

				if (year < 1900)
					return false;
				if (month > 12 || month < 1)
					return false;
				if (day > 31 || day < 1)
					return false;

				try {
					var birth = new Date(year, month, day);
					var current = new Date();

					return birth.getTime() < current.getTime();
				} catch (e) {
					return false;
				}
			},
			isValidCheckDigit: function(value) {
				if (value.length == 18) {
					var weightArray = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
					var checkArray = [ '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3',
						'2' ];

					var sum = 0;
					for ( var i = 0; i < 17; i++) {
						sum += value.substring(i, i + 1) * weightArray[i];
					}
					var checkDigit = checkArray[sum % 11];
					return checkDigit == value.substring(17, 18);
				}
			}
		},
		/**
		 * 判断中文名
		 * @param name 名字
		 * @return
		 */
		checkChineseName: function(name){
			return (name && name.toString().match(/^[\u4E00-\u9FA5\uf900-\ufa2d]+$/)) ? true : false;
		},
		/**
		 * 添加收藏
		 */
		addFavorite: function() {
			var url = location.href;
			var title = document.getElementsByTagName("title")[0].innerText;
			try{
				window.external.addFavorite(url, title);
			}catch(e) {
				try{
					window.sidebar.addPanel(title, url, "");
				}catch (e) {
					alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
				}
			}
		},
		/**
		 * 检查网络资源是否存在
		 * @param url	资源地址
		 */
		checkResExist: function(url){
			var result;
			$.ajax({
				url : url,
				type : "get",
				cache : false,
				async : false,
				dataType : "text",
				data: {

				},
				traditional: true,
				success : function(data, textStatus){
					result = true;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown){
					result = false;
				}
			});
			return result;
		},
		/**
		 * 使所有input元素的placeHolder属性兼容
		 */
		makePlaceHolderCompatible: function(){
			if(navigator.userAgent.indexOf("MSIE 9.0") !== -1 || navigator.userAgent.indexOf("MSIE 8.0") !== -1){
				var $input = swg("input[placeHolder!='']");
				$input.focus(function(){
					if(swg(this).val() == swg(this).attr("placeHolder")){
						swg(this).val("");
						swg(this).removeClass("place_holder_text_color");
					}
				});
				$input.blur(function(){
					if(swg(this).val() == ""){
						swg(this).val(swg(this).attr("placeHolder"));
						swg(this).addClass("place_holder_text_color");
					}
				});
				$input.blur();
			}
		},
		/**
		 * 判断字符串是否以某个字符串结尾
		 * @param str
		 * @param endStr
		 * @return
		 */
		stringEndWith: function(str, endStr){
			return (str.lastIndexOf(endStr) == (str.length - endStr.length));
		},
		/**
		 * 获取low-high区间的数字
		 * @param low
		 * @param high
		 * @return
		 */
		randomFloat: function(min, max){
			return Math.random()*(max-min)+min;
		},
		randomInteger: function(min, max){
			return Math.floor(swg.randomFloat(min, max));
		},
		/**
		 * 交换数组元素位置
		 * @param array
		 * @param index1
		 * @param index2
		 */
		exchangeArrayElementPosition: function(array, index1, index2){
			if(index1 > index2){
				var temp = index1;
				index1 = index2;
				index2 = temp;
			}
			var temp = array[index2];
			for(var i=index2;i<index1;i++){
				array[i] = array[i+1];
			}
			array[index1] = temp;
		},
		/**
		 * 获取页面地址栏的参数
		 * @param name
		 */
		getParam: function(name, href){
			href ? "" : (href = location.href);
			if(href.indexOf("?") === -1) return;
			var search = href.split("?")[1];
			var array = search.split("&");
			for(var i in array){
				var map = array[i].split("=");
				if(map[0] == name){
					return map[1];
				}
			}
		},
		/**
		 * 获取event
		 * @param event
		 * @returns {*}
		 */
		getEvent: function(event){
			return event ? event : window.event;
		},
		/**
		 * 获取触发事件的元素的引用
		 * @param event 事件对象
		 * @returns target 触发事件的元素的引用
		 */
		getTarget: function(event){
			event = swg.getEvent(event);
			if(event.target){
				return event.target;
			}else{
				return event.srcElement;//IE 6 7 8 9 10
			}
		},
		/**
		 * 阻止事件的默认行为
		 * @param event
		 */
		preventDefault: function(event){
			event = swg.getEvent(event);
			if(event.preventDefault){
				event.preventDefault()
			}else{
				event.returnValue = false;//IE 5 6 7 8 9 10
			}
		},
		/**
		 * 获取键盘码
		 * @param event
		 */
		getKeyCode: function(event){
			event = swg.getEvent(event);
			return event.keyCode || event.charCode;
		},
		/**
		 * 阻止事件向上冒泡行为
		 * @param event
		 */
		stopPropagation: function(event){
			event = swg.getEvent(event);
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;//IE 6 7 8 9 10
			}
		},
		/**
		 * 断言方法，如果条件不成立，则抛出错误
		 * @param condition
		 * @param message
		 */
		assert: function(condition, message){
			if(!condition){
				throw new Error(message);
			}
		},
		initAutoRootSize: function(){
			swg.addEvent(window, "load", function(){
				function resetRem(){
					var ratio = 16;//iphone 4,root初始大小为24px
					var viewPortWidth = document.documentElement.clientWidth;//window.screen.width;不准//document.getElementsByTagName("body")[0].clientWidth;
					document.getElementsByTagName("html")[0].style.fontSize = (viewPortWidth / ratio) + "px";
				}
				resetRem();
				window.onresize = resetRem;
			});
		},
		/**
		 * 获取body右侧滚动条上方距离
		 * @returns {*|number}
		 */
		getBodyScrollTop: function(){
			var bodyScrollTop = document.getElementsByTagName("body")[0].scrollTop;//主流chrome safari opera，是在body上滚动
			var documentElementScrollTop = document.documentElement.scrollTop;//IE firefox 360，是在html上滚动
			return bodyScrollTop || documentElementScrollTop;
		},
		/**
		 * 加载屏幕内的图片
		 * 条件1：img元素设置了data-src
		 * 条件2：img的offsetTop小于屏幕底部的offsetTop，目前只适用于dom2以上
		 */
		loadLazyImg: function(){
			var viewHeightPlusScrollTop = swg.getBodyScrollTop() + document.documentElement.clientHeight;
			var imgs = document.querySelectorAll("img[data-src]");
			for(var i in imgs){
				var img = imgs[i];
				if(swg.getOffsetTop(img) < viewHeightPlusScrollTop){
					img.setAttribute("src",img.getAttribute("data-src"));
					img.src = img.getAttribute("data-src");
					img.removeAttribute("data-src");
				}
			}
		},
		/**
		 * 获取节点顶部距离文档html根节点顶部的距离
		 * @param node dom节点
		 * @returns {number}
		 * 说明：在IE8+和各主流浏览器中，dom.offsetTop是距离文档html根节点顶部的距离，在IE7及以下是距离父元素的距离。故做此兼容性处理
		 */
		getOffsetTop: function(node){
			var offsetTop = 0;
			for(;node.offsetParent;node = node.offsetParent){
				offsetTop += node.offsetTop;
			}
			return offsetTop;
		},
		/**
		 * 获取节点左侧距离文档html根节点左侧的距离
		 * @param node dom节点
		 * @returns {number}
		 * 说明：在IE8+和各主流浏览器中，dom.offsetTop是距离文档html根节点顶部的距离，在IE7及以下是距离父元素的距离。故做此兼容性处理。
		 */
		getOffsetLeft: function(node){
			var offsetLeft = 0;
			for(;node.offsetParent;node = node.offsetParent){
				offsetLeft += node.offsetLeft;
			}
			return offsetLeft;
		},
		/**
		 * 设置data-src的图片为懒加载
		 */
		initLoadLazyImg: function(){
			swg(window).bind("scroll", swg.loadLazyImg);
			swg(window).bind("load", swg.loadLazyImg);
			swg.loadLazyImg();
		},
		/**
		 * 时间格式化
		 * @param date 日期对象|时间戳数字|时间戳字符串
		 * @param format 格式化字符串
		 * @returns {String}
		 * Demo: swg.dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss:SSS);
		 */
		dateFormat: function(date, format) {
			if(date instanceof Date){
			}else if(typeof date === 'number'){
				date = new Date(date);
			}else if(Object.prototype.toString.call(date) === '[object String]'){
				date = new Date(parseInt(date));
			}else{
				return "";
			}
			if(!format){
				format = "yyyy-MM-dd HH:mm:ss";
			}
			var year = new String(date.getFullYear());
			var month = swg.oneTo2Digits(new String(date.getMonth() + 1));
			var dat = swg.oneTo2Digits(new String(date.getDate()));
			var hour = swg.oneTo2Digits(new String(date.getHours()));
			var minute = swg.oneTo2Digits(new String(date.getMinutes()));
			var second = swg.oneTo2Digits(new String(date.getSeconds()));
			var milliSeconds = new String(date.getMilliseconds());
			format = format.replace(/yyyy/g, year).replace(/yyy/g, year.substr(-3)).replace(/yy/g, year.substr(-2)).replace(/y/g, year.substr(-1));
			format = format.replace(/MM/g, month).replace(/M/g, month.substr(-1));
			format = format.replace(/dd/g, dat).replace(/d/g, dat.substr(-1));
			format = format.replace(/HH/g, hour).replace(/H/g, hour.substr(-1));
			format = format.replace(/mm/g, minute).replace(/m/g, minute.substr(-1));
			format = format.replace(/ss/g, second).replace(/s/g, second.substr(-1));
			format = format.replace(/SSS/g, milliSeconds).replace(/SS/g, month.substr(-2)).replace(/S/g, milliSeconds.substr(-1));
			return format;
		},
		oneTo2Digits: function(num){
			var num = new String(num);
			if(num.length == 1){
				return "0" + num;
			}
			return num;
		},
		/**
		 * 设置cookie
		 * @param key {string} 键
		 * @param value {string} 值
		 * @param expires {number} 过期时间
		 * @param path {string} 路径
		 * @param domain {string} 域
		 * @param secure {boolean} 为true时只有https协议下的请求才发送cookie
		 */
		setCookie: function(key, value, path, expires, domain, secure){
			return document.cookie = [
				encodeURIComponent(key) + "=" + encodeURIComponent(value),
				path ? ("; path=" + path) : "",
				(typeof expires == "number") ? ("; expires=" + (new Date(new Date().getTime() + expires)).toUTCString()) : "",
				domain ? ("; domain=" + domain) : "",
				secure ? ("; secure") : ""
			].join("");
		},
		/**
		 * 获取cookie
		 * @param key
		 * @returns {*}
		 */
		getCookie: function(key){
			key = encodeURIComponent(key);
			var array = document.cookie.split("; ");
			for(var i=0;i<array.length;i++){
				var temp = array[i].split("=");
				if(temp[0] == key){
					return decodeURIComponent(temp[1]);
				}
			}
		},
		/**
		 * 删除cookie
		 * @param key
		 * @param path
		 * @param domain
		 * @param secure
		 */
		deleteCookie: function(key, path, domain, secure){
			swg.setCookie(key, null, path, -10000000, domain, secure);
		},
		addParamToUrl: function(url, key, value){
			if(/\?/.test(url)){
				url = url.concat("&");
			}else{
				url = url.concat("?");
			}
			return url.concat(encodeURIComponent(key), "=", encodeURIComponent(value));
		},
		/**
		 * 判断节点是否含有class
		 * @param node
		 * @param className
		 * @returns {boolean}
		 */
		hasClass: function(node, className){
			if(!node.className) return;
			var array = node.className.split(" ");
			for(var i in array){
				if(array[i] == className){
					return true;
				}
			}
		},
		/**
		 * 获取nodeType=1的node数组（选择器依赖方法）
		 * （原生dom操作获取node集合时，往往会获取一些文本节点和无用的方法，这些是我们不需要的，所以要去掉）
		 * @param list
		 * @returns {Array}
		 */
		nodeListToNodeArray: function(nodeList){
			var nodeArray = [];
			for(var i=0;i<nodeList.length;i++){
				var node = nodeList[i];
				if(node.nodeType === 1){
					nodeArray.push(node);
				}
			}
			return nodeArray;
		},
		/**
		 * 数组去重（选择器依赖方法）
		 * @param array
		 */
		removeRepeat: function(array){
			for(var i=0;i<array.length-1;i++){
				for(var j=i+1;j<array.length;j++){
					if(array[i] === array[j]){
						array.splice(j, 1);
						j --;
					}
				}
			}
			return array;
		},
		/**
		 * 遍历数组（选择器依赖方法）
		 * @param array
		 * @param handler
		 */
		each: function(array, handler){
			if(array && array.length){
				for(var i=0;i<array.length;i++){
					handler.call(array[i], i);
				}
			}
		},
		/**
		 * 去除字符串前后的空白符（因IE8及其以下版本String类型的原型中没有trim()方法，所以在此实现）
		 * @param str
		 * @returns {XML|void|string}
		 */
		trim: function(str){
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		mergeArray: function(arrayA, arrayB){
			for(var i=0;arrayB && i<arrayB.length;i++){
				arrayA.push(arrayB[i]);
			}
			return arrayA;
		},
		getNodesChildren: function(nodes){
			var result = [];
			swg.each(nodes, function(){
				result = swg.mergeArray(result, this.childNodes);
			})
			return result;
		},
		getNodesDescendants: function(nodes){
			var result = [];
			swg.each(nodes, function(){
				var childNodes = this.childNodes;
				result = swg.mergeArray(result, childNodes);
				if(childNodes && childNodes.length > 0){
					result = swg.mergeArray(result, swg.getNodesDescendants(childNodes));
				}
			})
			return result;
		},
		/*获取浏览器距屏幕左侧距离*/
		getScreenLeft: function(){
			return typeof window.screenLeft == "number" ? window.screenLeft : window.screenX;
		},
		/*获取浏览器距屏幕顶部距离*/
		getScreenTop: function(){
			return typeof window.screenTop == "number" ? window.screenTop : window.screenY;
		},
		/*获取视口宽度*/
		getViewPortWidth: function(){
			var width = window.innerWidth;//IE 9+ 主流
			if(typeof width != "number"){
				if(document.compatMode == "CSS1Compat"){//IE 7 8
					width = document.documentElement.clientWidth;
				}else{
					width = document.body.clientWidth;
				}
			}
			return width;
		},
		/*获取视口高度*/
		getViewPortHeight: function(){
			var height = window.innerHeight;//IE 9+ 主流
			if(typeof height != "number"){
				if(document.compatMode == "CSS1Compat"){//IE 7 8
					height = document.documentElement.clientHeight;
				}else{
					height = document.body.clientHeight;
				}
			}
			return height;
		},
		isIE678: function(){
			var obj = {
				toString: function(){}
			};
			for(var i in obj){
				if(i == "toString"){
					return false;
				}
			}
			return true;
		},
		bodyAppendScript: function(url){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = url;
			document.body.appendChild(script);
		},
		headAppendLink: function(url){
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = url;
			var head = document.getElementsByTagName("head")[0];
			head.appendChild(link);
		},
		pxToNum: function(px){
			if(px === ""){
				return 0;
			}else{
				return px.replace("px", "") * 1;
			}
		},
		numToPx: function(num){
			return num + "px";
		},
		/**
		 * 获取事件的相关元素
		 * @param event
		 */
		getEventRelatedTarget: function(event) {
			if (event.relatedTarget) {
				return event.relatedTarget;
			} else if (event.toElement) {
				return event.toElement;
			} else if (event.fromElement) {
				return event.fromElement;
			} else {
				return null;
			}
		},
		isAndroid: function(){
			return navigator.userAgent.indexOf("Android") != -1;
		},
		isIos: function(){
			return navigator.userAgent.indexOf("iPhone") != -1;
		},
		getDescendantNodes: function(node){
			var array = [];
			swg.each(node.childNodes, function(){
				if(this.nodeType === 1){
					array.push(this);
					var descendantNodes = swg.getDescendantNodes(this);
					if(descendantNodes){
						array = array.concat(descendantNodes);
					}
				}
			})
			return array;
		},
		/**
		 * base64编码（不支持中文）
		 * @param {Object} str
		 */
		base64EncodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		base64DecodeChars: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
		base64encode: function(str){
			var out, i, len;
			var c1, c2, c3;
			len = str.length;
			i = 0;
			out = "";
			while (i < len) {
				c1 = str.charCodeAt(i++) & 0xff;
				if (i == len) {
					out += this.base64EncodeChars.charAt(c1 >> 2);
					out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
					out += "==";
					break;
				}
				c2 = str.charCodeAt(i++);
				if (i == len) {
					out += this.base64EncodeChars.charAt(c1 >> 2);
					out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
					out += this.base64EncodeChars.charAt((c2 & 0xF) << 2);
					out += "=";
					break;
				}
				c3 = str.charCodeAt(i++);
				out += this.base64EncodeChars.charAt(c1 >> 2);
				out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
				out += this.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
				out += this.base64EncodeChars.charAt(c3 & 0x3F);
			}
			return out;
		},
		/**
		 * base64解码（不支持中文）
		 * @param {Object} str
		 */
		base64decode: function(str){
			var c1, c2, c3, c4;
			var i, len, out;
			len = str.length;
			i = 0;
			out = "";
			while (i < len) {
				/* c1 */
				do {
					c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
				}
				while (i < len && c1 == -1);
				if (c1 == -1)
					break;
				/* c2 */
				do {
					c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
				}
				while (i < len && c2 == -1);
				if (c2 == -1)
					break;
				out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
				/* c3 */
				do {
					c3 = str.charCodeAt(i++) & 0xff;
					if (c3 == 61)
						return out;
					c3 = this.base64DecodeChars[c3];
				}
				while (i < len && c3 == -1);
				if (c3 == -1)
					break;
				out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
				/* c4 */
				do {
					c4 = str.charCodeAt(i++) & 0xff;
					if (c4 == 61)
						return out;
					c4 = this.base64DecodeChars[c4];
				}
				while (i < len && c4 == -1);
				if (c4 == -1)
					break;
				out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
			}
			return out;
		},
		/**
		 * 根据html页面代码建立document，当后台接口返回html时，可以对html进行DOM操作
		 * @param html
		 * @returns {*|swg.Node}
		 * 用法：
			var $document = swg.createHtmlDocument(html);
			$document.find(".content");
		 */
		createHtmlDocument: function(html){
			var div = document.createElement("div");
			div.innerHTML = html;
			return swg(div);
		},
		/**
		 * 在onpaste事件中获取剪贴板数据
		 * @param event
		 * @returns {string}
		 */
		getClipboardData: function(event){
			event = swg.getEvent(event);
			return event.clipboardData ? event.clipboardData.getData("Text") : window.clipboardData.getData("Text");
		},
		cssToCamel: function(cssName){
			return cssName ? cssName.toString().replace(/-(\w)/g, function(match, a, pos, originalText){
				return a.toUpperCase();
			}) : undefined;
		},
		/* 一些常用正则
		 "*":/[\w\W]+/,
		 "*6-16":/^[\w\W]{6,16}$/,
		 "n":/^\d+$/,
		 "n6-16":/^\d{6,16}$/,
		 "s":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
		 "s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
		 "p":/^[0-9]{6}$/,
		 "m":/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
		 "e":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		 "url":/^(\w+:\/\/)?\w+(\.\w+)+.*$/
		 "chinese": /\u4E00-\u9FA5/
		 */
		isEmail: function(value){
			return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
		},
		isMobile: function(value){
			return /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/.test(value);
		},
		isQQ: function(value){
			return /^\d{5,13}$/.test(value);
		},
		/*获取节点translateX的值*/
		getTranslateX: function(node){
			return node.style.transform ? /translateX\(([^)]*)px\)/.exec(node.style.transform)[1] * 1 : 0;
		},
		/*获取节点translateX的值*/
		getTranslateY: function(node){
			return node.style.transform ? /translateY\(([^)]*)px\)/.exec(node.style.transform)[1] * 1 : 0;
		},
		isString: function(str){
			return typeof str === "string" || str instanceof String;
		},
		isArray: function(o){
			//兼容性问题（o为undefined、null时报错）
			//return o.constructor == Array;

			//兼容性问题（o不能为跨iframe传递的数组对象）
			//return o instanceof Array;

			//兼容性最好
			/*
			 ECMA-262 写道
                 Object.prototype.toString( ) When the toString method is called, the following steps are taken:
                 1.Get the [[Class]] property of this object.
                 2.Compute a string value by concatenating the three strings “[object “, Result (1), and “]”.
                 3.Return Result (2)
                 上面的规范定义了Object.prototype.toString的行为：首先，取得对象的一个内部属性[[Class]]，然后依据这个属性，返回一个类似于"[object Array]"的字符串作为结果（看过ECMA标准的应该都知道，[[]]用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”）。利用这个方法，再配合call，我们可以取得任何对象的内部属性[[Class]]，然后把类型检测转化为字符串比较，以达到我们的目的。还是先来看看在ECMA标准中Array的描述吧。
			 ECMA-262 写道
                 new Array([ item0[, item1 [,…]]])
                 he [[Class]] property of the newly constructed object is set to “Array”.
			 */
			return Object.prototype.toString.call(o) === "[object Array]";
		}
	};

	/**
	 * 选择器
	 * @param 选择器表达式|原生node节点
	 * @returns {Node}
	 */
	var swg = function(param){
		if(param){
			if(param instanceof Function){
				//函数，则绑定load事件
				var handler = param;
				var node = new Node([window]);
				return node.bind("load", handler);
			}else if(window.HTMLElement && param instanceof HTMLElement){
				//HTMLElement节点
				var domNode = param;
				return new Node([domNode]);
			}else if(param.nodeType){
				//HTMLElement节点，兼容低版本IE
				return new Node([param]);
			}else{
				//字符串，用选择器结果作为参数实例化核心类
				var selector = param.toString();
				return new Node(Sizzle(selector));
			}
		}else{
			return new Node([]);
		}
	};

	//将util单体的方法附给swg
	for(var i in util){
		swg[i] = util[i];
	}

	/**
	 * 外部访问入口
	 */
	window.swg = swg;
})();

/*文档加载完毕后执行相应方法，如以下代码中需要jQuery*/
/*
(function(){
	var onload = window.onload;
	window.onload = function(){
		if(onload){
			onload();
		}
		//执行代码...

	}
})();
*/

