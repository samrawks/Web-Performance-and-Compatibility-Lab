!function(n,e,t){function o(n,e){return typeof n===e}function s(){var n,e,t,s,i,a,l;for(var c in f){if(n=[],e=f[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)n.push(e.options.aliases[t].toLowerCase());for(s=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)a=n[i],l=a.split("."),1===l.length?u[l[0]]=s:(!u[l[0]]||u[l[0]]instanceof Boolean||(u[l[0]]=new Boolean(u[l[0]])),u[l[0]][l[1]]=s),r.push((s?"":"no-")+l.join("-"))}}function i(n){var e=p.className,t=u._config.classPrefix||"";if(d&&(e=e.baseVal),u._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(o,"$1"+t+"js$2")}u._config.enableClasses&&(e+=" "+t+n.join(" "+t),d?p.className.baseVal=e:p.className=e)}function a(n,e){if("object"==typeof n)for(var t in n)c(n,t)&&a(t,n[t]);else{n=n.toLowerCase();var o=n.split("."),s=u[o[0]];if(2==o.length&&(s=s[o[1]]),"undefined"!=typeof s)return u;e="function"==typeof e?e():e,1==o.length?u[o[0]]=e:(!u[o[0]]||u[o[0]]instanceof Boolean||(u[o[0]]=new Boolean(u[o[0]])),u[o[0]][o[1]]=e),i([(e&&0!=e?"":"no-")+o.join("-")]),u._trigger(n,e)}return u}var r=[],f=[],l={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var t=this;setTimeout(function(){e(t[n])},0)},addTest:function(n,e,t){f.push({name:n,fn:e,options:t})},addAsyncTest:function(n){f.push({name:null,fn:n})}},u=function(){};u.prototype=l,u=new u;var c,p=e.documentElement,d="svg"===p.nodeName.toLowerCase();!function(){var n={}.hasOwnProperty;c=o(n,"undefined")||o(n.call,"undefined")?function(n,e){return e in n&&o(n.constructor.prototype[e],"undefined")}:function(e,t){return n.call(e,t)}}(),l._l={},l.on=function(n,e){this._l[n]||(this._l[n]=[]),this._l[n].push(e),u.hasOwnProperty(n)&&setTimeout(function(){u._trigger(n,u[n])},0)},l._trigger=function(n,e){if(this._l[n]){var t=this._l[n];setTimeout(function(){var n,o;for(n=0;n<t.length;n++)(o=t[n])(e)},0),delete this._l[n]}},u._q.push(function(){l.addTest=a}),u.addTest("svgasimg",e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),s(),i(r),delete l.addTest,delete l.addAsyncTest;for(var h=0;h<u._q.length;h++)u._q[h]();n.Modernizr=u}(window,document);