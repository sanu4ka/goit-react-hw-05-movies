"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[74],{74:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(439),c="MovieDetailsReviews_reviews__Lu6UI",u=e(791),a=e(689),o=e(422),i=e(184),s=function(){var n=(0,a.UO)().movieId,t=(0,u.useState)(null),e=(0,r.Z)(t,2),s=e[0],f=e[1];return(0,u.useEffect)((function(){(0,o.jW)(n).then((function(n){n.total_results&&f(n.results)})).catch()}),[n]),s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:c,children:s.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",e]}),(0,i.jsx)("p",{children:r})]},t)}))})}):(0,i.jsx)("p",{className:c,children:"Unfortunately, there is no reviews for this movie"})}},422:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{TP:function(){return l},z0:function(){return d},jW:function(){return w},V0:function(){return p},Df:function(){return s}});var u=e(757),a=e.n(u),o="https://api.themoviedb.org/3/",i="c51dc08f163886b6996fd9c932dc96f4";function s(){return f.apply(this,arguments)}function f(){return(f=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=74.acd85d55.chunk.js.map