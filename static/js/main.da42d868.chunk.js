(this["webpackJsonpnewton-finance_test-task"]=this["webpackJsonpnewton-finance_test-task"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=a(1),i=a(2),s=a.n(i),u=a(5),m=a(6),p=new function e(){var t=this;Object(m.a)(this,e),this._BASE_URL="https://jsonplaceholder.typicode.com/",this.getData=function(){var e=Object(u.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t._BASE_URL+a);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPosts=function(){return t.getData("posts")},this.getComment=function(e){return t.getData("comments/?postId=".concat(e))}},d=function(e){var t=e.onClick,a=e.className;return c.a.createElement("button",{className:a,onClick:t},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439")},f=(a(13),function(e){var t=e.data,a=Object(n.useState)([]),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),m=u[0],f=u[1],b=Object(n.useState)(!1),v=Object(l.a)(b,2),E=v[0],g=v[1],h=Object(n.useState)(!1),_=Object(l.a)(h,2),j=_[0],O=_[1],k=j?"card card_gold":"card",C=E?{gridRow:"".concat(Math.ceil(t.id/2),"/").concat(o.length)}:void 0,N=o.map((function(e){var t=e.id,a=e.name,n=e.body;return c.a.createElement("div",{key:t,className:"card__comment comment"},c.a.createElement("h3",{className:"comment__title"},t,")",a),c.a.createElement("p",{className:"comment__body"},n))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("article",{style:C,onDoubleClick:function(e){O(!j)},className:k},c.a.createElement("h3",{className:"card__title"},t.id,") ",t.title),c.a.createElement("div",{className:"card__body"},t.body),c.a.createElement(d,{className:"card__btn",onClick:function(){m||(p.getComment(t.id).then(i),f(!0)),g(!E)}}),E&&N))}),b=(a(14),function(e){var t=e.data;return c.a.createElement("div",{className:"list-container"},!!t&&t.map((function(e){return c.a.createElement(f,{key:e.id,data:e})})))}),v=(a(15),function(e){var t=e.nav,a=e.onClickPagination;return c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{onClick:function(){return a(t.prev_page)}},"< prev")," page ".concat(t.cur_page," of ").concat(t.pages," "),c.a.createElement("button",{onClick:function(){return a(t.next_page)}},"next >"))}),E=function(e){var t=e.value,a=e.handleChange;return c.a.createElement("label",null,"Posts per page:",c.a.createElement("select",{value:"".concat(t),onChange:function(e){a(+e.target.value)}},c.a.createElement("option",{value:"4"},"5"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"20"},"20")))};a(16);var g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){p.getPosts().then(r)}),[]);var o=Object(n.useState)(1),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(2),d=Object(l.a)(m,2),f=d[0],g=d[1],h=Object(n.useState)(1),_=Object(l.a)(h,2),j=_[0],O=_[1],k=Object(n.useState)(10),C=Object(l.a)(k,2),N=C[0],S=C[1],y=a.length,w=Math.ceil(y/N),x={cur_page:s,next_page:f,prev_page:j,pages:w},P=a.filter((function(e,t){return t>=(s-1)*N&&t<s*N&&e}));return c.a.createElement("main",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"app__title"},"Posts:"),c.a.createElement(E,{value:N,handleChange:function(e){S(e)}})),c.a.createElement(b,{data:P}),c.a.createElement(v,{nav:x,onClickPagination:function(e){u(e),O(e-1!==0?e-1:w),g(e!==w?e+1:1)}}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.da42d868.chunk.js.map