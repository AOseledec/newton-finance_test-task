(this["webpackJsonpnewton-finance_test-task"]=this["webpackJsonpnewton-finance_test-task"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),i=a(1),s=a(2),o=a.n(s),m=a(5),u=a(6),p=new function e(){var t=this;Object(u.a)(this,e),this._BASE_URL="https://jsonplaceholder.typicode.com/",this.getData=function(){var e=Object(m.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t._BASE_URL+a);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPosts=function(){return t.getData("posts")},this.getComment=function(e){return t.getData("comments/?postId=".concat(e))}},b=(a(13),function(e){var t=e.data,a=Object(n.useState)([]),r=Object(i.a)(a,2),l=r[0],s=r[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],b=m[1],d=Object(n.useState)(!1),v=Object(i.a)(d,2),f=v[0],g=v[1],h=l.map((function(e){var t=e.id,a=e.name,n=e.body;return c.a.createElement("div",{key:t,className:"comment list-group-item list-group-item-action flex-column align-items-start"},c.a.createElement("h5",null,t,")",a),c.a.createElement("p",null,n))})),E=f?c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})):c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})),j=f?"border-primary":"border-secondary";return c.a.createElement("article",{className:"card md-6 "+j},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{onClick:function(){g(!f)}},E),c.a.createElement("h4",{className:"card-title"},t.id,") ",t.title),c.a.createElement("p",{className:"card-text"},t.body),c.a.createElement("button",{onClick:function(){l.length||p.getComment(t.id).then(s),b(!u)},type:"button",className:"btn btn-primary btn-sm"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")),c.a.createElement("div",{className:"list-group"},u&&h))}),d=(a(14),function(e){var t=e.data;return c.a.createElement("div",{className:"contianer"},c.a.createElement("div",{className:"card-columns"},!!t&&t.map((function(e){return c.a.createElement(b,{key:e.id,data:e})}))))}),v=(a(15),function(e){var t=e.nav,a=e.onClickPagination;return c.a.createElement("div",{className:"my-pagination"},c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return a(t.prev_page)}},"\xab")," page ".concat(t.cur_page," of ").concat(t.pages," "),c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return a(t.next_page)}},"\xbb"))}),f=function(e){var t=e.value,a=e.handleChange;return c.a.createElement("label",{htmlFor:"ppp"},"Posts per page:",c.a.createElement("select",{value:"".concat(t),id:"ppp",onChange:function(e){a(+e.target.value)}},c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"20"},"20")))};a(16);var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){p.getPosts().then(r)}),[]);var l=Object(n.useState)(1),s=Object(i.a)(l,2),o=s[0],m=s[1],u=Object(n.useState)(2),b=Object(i.a)(u,2),g=b[0],h=b[1],E=Object(n.useState)(1),j=Object(i.a)(E,2),w=j[0],O=j[1],N=Object(n.useState)(10),y=Object(i.a)(N,2),k=y[0],x=y[1],C=a.length,_=Math.ceil(C/k),S={cur_page:o,next_page:g,prev_page:w,pages:_},L=a.filter((function(e,t){return t>=(o-1)*k&&t<o*k&&e}));return c.a.createElement("main",{className:"main"},c.a.createElement("header",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",{className:"navbar-brand"},"Posts:"),c.a.createElement(f,{value:k,handleChange:function(e){x(e)}}))),c.a.createElement(d,{data:L}),c.a.createElement(v,{nav:S,onClickPagination:function(e){m(e),O(e-1!==0?e-1:_),h(e!==_?e+1:1)}}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.44733479.chunk.js.map