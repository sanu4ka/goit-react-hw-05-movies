"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[109],{368:function(n,t,e){e.d(t,{O:function(){return a}});var r=e(689),c=e(87),u=e(184),a=function(n){var t=n.moviesList,e=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title||n.name})},n.id)}))})}},109:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),c="Movies_movies__dY00w",u=e(791),a=e(87),o=e(422),i=e(184),s=function(n){var t=n.onSubmit;return(0,i.jsxs)("form",{onSubmit:function(n){return t(n)},children:[(0,i.jsx)("input",{name:"name",type:"text"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},f=e(368),p=function(){var n=(0,u.useState)(""),t=(0,r.Z)(n,2),e=t[0],p=t[1],h=(0,u.useState)([]),v=(0,r.Z)(h,2),l=v[0],m=v[1],d=(0,a.lr)(),y=(0,r.Z)(d,2),x=y[0],w=y[1],k=l.length>0&&e;return(0,u.useEffect)((function(){p(x.get("query")),e&&(0,o.V0)(e).then((function(n){m(n.results)}))}),[e,x]),(0,i.jsxs)("section",{className:c,children:[(0,i.jsx)(s,{onSubmit:function(n){n.preventDefault();var t=n.target.name.value;p(""!==t?t:""),w(""!==t?{query:t}:{})}}),k&&(0,i.jsx)(f.O,{moviesList:l})]})}},422:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{TP:function(){return v},z0:function(){return m},jW:function(){return y},V0:function(){return p},Df:function(){return s}});var u=e(757),a=e.n(u),o="https://api.themoviedb.org/3/",i="c51dc08f163886b6996fd9c932dc96f4";function s(){return f.apply(this,arguments)}function f(){return(f=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return l.apply(this,arguments)}function l(){return(l=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return d.apply(this,arguments)}function d(){return(d=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return x.apply(this,arguments)}function x(){return(x=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=109.46d4d2eb.chunk.js.map