"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,a=t(9439),u=t(2791),c=t(7689),i=t(1362),s=t(269),o=t(168),p=t(5706).Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n  margin-left: 20px;\n  margin-right: 20px;\n"]))),f=t(184),l=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,c.UO)().movieId,l=(0,u.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1];return(0,u.useEffect)((function(){v(!0),(0,s.Oy)(o).then((function(n){r(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[o]),(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(i.a,{}),0!==t.length&&(0,f.jsx)("div",{children:(0,f.jsx)(p,{children:t.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",n.author]}),(0,f.jsx)("p",{children:n.content})]},n.id)}))})}),0===t.length&&(0,f.jsx)("div",{children:"We don't have reviews for this movie"})]})}},269:function(n,e,t){t.d(e,{Df:function(){return o},Oy:function(){return l},UO:function(){return h},V0:function(){return p},dB:function(){return f}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243),i="feafde17f0d0230d9e73e9fe3d719207",s="https://api.themoviedb.org/3/",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"search/movie"),{params:{api_key:i,language:"en-US",query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e),{params:{api_key:i,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/credits"),{params:{api_key:i,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.62f7e9ef.chunk.js.map