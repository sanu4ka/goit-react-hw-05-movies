"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[37],{37:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(439),c="MovieDetailsCast_cast__5WwbK",a=e(791),u=e(689),o=e(422),i=e(184),s=function(){var t=(0,u.UO)().movieId,n=(0,a.useState)(null),e=(0,r.Z)(n,2),s=e[0],p=e[1];return(0,a.useEffect)((function(){(0,o.z0)(t).then((function(t){p(t.cast)})).catch()}),[t]),s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:c,children:s.map((function(t){var n=t.id,e=t.name,r=t.character,c=t.profile_path,a="https://image.tmdb.org/t/p/w500".concat(c);return c||(a="https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg"),(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a,alt:e,width:"120"}),(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:r})]},n)}))})}):(0,i.jsx)("p",{className:c,children:"Unfortunately, there is no cast for this movie"})}},422:function(t,n,e){function r(t,n,e,r,c,a,u){try{var o=t[a](u),i=o.value}catch(s){return void e(s)}o.done?n(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function o(t){r(u,c,a,o,i,"next",t)}function i(t){r(u,c,a,o,i,"throw",t)}o(void 0)}))}}e.d(n,{TP:function(){return l},z0:function(){return d},jW:function(){return w},V0:function(){return f},Df:function(){return s}});var a=e(757),u=e.n(a),o="https://api.themoviedb.org/3/",i="c51dc08f163886b6996fd9c932dc96f4";function s(){return p.apply(this,arguments)}function p(){return(p=c(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=37.1e0ae26f.chunk.js.map