(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(5),i=c.n(n),l=c(3),o=c.n(l),j=c(6),d=c(4);var u=function(e){var t=e.movie;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.poster_path+" poster"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("h3",{className:"card--title",children:t.title}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["MOVIE RATING: ",t.vote_average]})}),Object(a.jsx)("p",{className:"card--desc",children:t.overview})]})]})};c(13);var h=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)([]),i=Object(d.a)(n,2),l=i[0],h=i[1];function b(){return(b=Object(j.a)(o.a.mark((function e(t){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=1e719acef0a246ff1e0e560290c036ba&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(a);case 6:return r=e.sent,e.next=9,r.json();case 9:s=e.sent,h(s.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"form",onSubmit:function(e){return b.apply(this,arguments)},children:[Object(a.jsx)("label",{className:"label",htmlFor:"query",children:"Search Movie"}),Object(a.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"Search for a movie",value:c,onChange:function(e){var t=e.target.value;s(t)}}),Object(a.jsx)("button",{className:"button",type:"submit",disabled:""===c&&!0,children:" Search "})]}),Object(a.jsx)("div",{className:"card-list",children:l.filter((function(e){return e.poster_path})).map((function(e){return Object(a.jsx)(u,{movie:e},e.id)}))})]})})};function b(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"React Movie App"}),Object(a.jsx)(h,{})]})}i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6179cb40.chunk.js.map