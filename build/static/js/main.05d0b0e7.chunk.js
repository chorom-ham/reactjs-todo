(this["webpackJsonpreactjs-todo"]=this["webpackJsonpreactjs-todo"]||[]).push([[0],{22:function(e,n,t){"use strict";t.r(n);var c,r=t(0),i=t.n(r),o=t(9),a=t.n(o),j=t(2),d=t(3),f=t(1);function b(){return Object(f.jsx)(m,{children:"React.js\ub85c \ub9cc\ub4e0 TO-DO APP"})}var u,s,l,m=d.c.header(c||(c=Object(j.a)(["\n  background-color: #00462a;\n  color: #ffffff;\n  font-size: 2rem;\n  height: 7rem;\n  display: flex;\n  align-items: center;\n  padding-left: 5rem;\n"]))),O=t(4),h=0;function g(e){var n=Object(r.useState)(""),t=Object(O.a)(n,2),c=t[0],i=t[1];return Object(f.jsxs)(z,{onSubmit:function(n){n.preventDefault(),""!==c&&(e.onSubmit({id:h,text:c,check:!1}),h++,i(""))},children:[Object(f.jsx)(S,{id:"newItem",type:"text",onChange:function(e){i(e.target.value)},value:c}),Object(f.jsx)(w,{type:"submit",children:"\ucd94\uac00"})]})}var x,p,v,k,z=d.c.form(u||(u=Object(j.a)(["\n  background-color: #272727;\n  display: flex;\n  color: #000000;\n  font-size: 2rem;\n  height: 7rem;\n  align-items: center;\n  padding-left: 5rem;\n  padding-right: 5rem;\n"]))),S=d.c.input(s||(s=Object(j.a)(["\n  font-size: 3rem;\n  border: 0;\n  flex: 1;\n"]))),w=d.c.button(l||(l=Object(j.a)(["\n  font-size: 2rem;\n  border: 0;\n  margin-left: 1rem;\n  padding: 0.5rem;\n"])));function y(e){return Object(f.jsxs)(F,{children:[Object(f.jsxs)(L,{onClick:function(n){n.preventDefault(),e.toggleLine()},children:[e.text," ",e.check?"\uc644\ub8cc":"\ubbf8\uc644\ub8cc"]}),Object(f.jsx)(P,{onClick:function(n){n.preventDefault(),e.remove()},children:"X"})]})}var C,D,F=d.c.form(x||(x=Object(j.a)(["\n  margin: 1rem;\n"]))),L=d.c.span(p||(p=Object(j.a)(["\n  ","\n"])),(function(e){return Object(d.b)(v||(v=Object(j.a)(["\n    font-size: 2rem;\n    text-decoration: ",";\n  "])),e.check?"line-through":"none")})),P=d.c.button(k||(k=Object(j.a)(["\n  background: #272727;\n  color: #ffffff;\n  margin-left: 1rem;\n  border: none;\n  border-radius: 50%;\n  font-size: 2rem;\n"])));function I(){var e=Object(r.useState)([]),n=Object(O.a)(e,2),t=n[0],c=n[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{onSubmit:function(e){c(t.concat({id:e.id,text:e.text,check:e.check}))}}),Object(f.jsx)(A,{children:"\ud560 \uc77c \ubaa9\ub85d"}),Object(f.jsx)(J,{children:t.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(y,{id:e.id,text:e.text,check:e.check,remove:function(){return n=e.id,r=e.text,void(window.confirm(r+"\uc744/\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(c(t.filter((function(e){return e.id!==n}))),console.log(t)));var n,r},toggleLine:function(){return function(e){var n=t.map((function(n){return n.id===e&&(n.check=!n.check),n}));c(n)}(e.id)}})},e.id)}))})]})}var T,B,J=d.c.ul(C||(C=Object(j.a)(["\n  margin-left: 10rem;\n"]))),A=d.c.p(D||(D=Object(j.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n  margin-left: 10rem;\n"]))),E=Object(d.a)(T||(T=Object(j.a)(["\n  html {\n    font-size : 10px;\n  }\n  body {\n    margin: 0;\n    background-color: #eeeecc;\n  }\n"]))),M=d.c.div(B||(B=Object(j.a)([""])));var R=function(){return Object(f.jsxs)(M,{children:[Object(f.jsx)(E,{}),Object(f.jsx)(b,{}),Object(f.jsx)(I,{})]})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root")),X()}},[[22,1,2]]]);
//# sourceMappingURL=main.05d0b0e7.chunk.js.map