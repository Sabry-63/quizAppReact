(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{145:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(33),i=c.n(r),s=c(28),j=c(53),o=c(14),l=c(10),u=c(196),b=c(202),d=c(191),O=c(194),h=c(180),f="CHANGE_CATEGORY",p="CHANGE_DEFFICLTY",x="CHANGE_TYPE",m="CHANGE_AMOUNT",v="CHANGE_SCORE",y=function(e){return{type:m,payload:e}},g=function(e){return{type:v,payload:e}},_=c(1),q=function(e){var t=e.label,c=e.options,n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],j=r[1],o=Object(s.b)();return Object(_.jsx)(h.a,{mt:3,width:"100%",children:Object(_.jsxs)(u.a,{fullWidth:!0,size:"small",children:[Object(_.jsx)(b.a,{children:t}),Object(_.jsx)(d.a,{value:i,label:t,onChange:function(e){switch(j(e.target.value),t){case"Category":o((c=e.target.value,{type:f,payload:c}));break;case"Difficulty":o(function(e){return{type:p,payload:e}}(e.target.value));break;case"Type":o(function(e){return{type:x,payload:e}}(e.target.value));break;default:return}var c},children:c.map((function(e){var t=e.id,c=e.name;return Object(_.jsx)(O.a,{value:t,children:c},t)}))})]})})},S=c(206),C=c(207),E=c(200),w=c(197),A=function(){var e=Object(s.b)();return Object(_.jsx)(h.a,{mt:3,width:"100%",children:Object(_.jsx)(u.a,{fullWidth:!0,children:Object(_.jsx)(w.a,{onChange:function(t){e(y(t.target.value))},variant:"outlined",label:"Amount Of Questions",type:"number",size:"small"})})})},k=c(79),T=c.n(k);T.a.defaults.baseURL="https://opentdb.com/";var W=function(e){var t=e.url,c=Object(a.useState)(null),n=Object(l.a)(c,2),r=n[0],i=n[1],s=Object(a.useState)(""),j=Object(l.a)(s,2),o=j[0],u=j[1],b=Object(a.useState)(!0),d=Object(l.a)(b,2),O=d[0],h=d[1];return Object(a.useEffect)((function(){T.a.get(t).then((function(e){return i(e.data)})).catch((function(e){return u(e)})).finally((function(){return h(!1)}))}),[t]),{respons:r,error:o,loading:O}},z=function(){var e=W({url:"/api_category.php"}),t=e.respons,c=e.error,a=e.loading,n=Object(o.f)();if(a)return Object(_.jsx)(h.a,{mt:20,children:Object(_.jsx)(S.a,{})});if(c)return Object(_.jsx)(C.a,{variant:"h6",mt:20,color:"red",children:"Some Went Wrong!"});return Object(_.jsxs)("div",{children:[Object(_.jsx)(C.a,{variant:"h2",fontWeight:"bold",children:"Quiz App"}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n("/questions")},children:[Object(_.jsx)(q,{options:t.trivia_categories,label:"Category"}),Object(_.jsx)(q,{options:[{id:"easy",name:"Easy"},{id:"medium",name:"Medium"},{id:"hard",name:"Hard"}],label:"Difficulty"}),Object(_.jsx)(q,{options:[{id:"multiple",name:"Multiple Choise"},{id:"boolean",name:"True / False"}],label:"Type"}),Object(_.jsx)(A,{}),Object(_.jsx)(h.a,{mt:3,width:"100%",children:Object(_.jsx)(E.a,{fullWidth:!0,variant:"contained",type:"submit",children:"Get Start"})})]})]})},G=c(15),M=c(21),N=c(190),H=c(201),D=c(183),R=c(198),F=c(208),I=c(193),Y=c(80),Q=c(4),B=c(203),J=Object(Q.a)(B.a)((function(e){var t=e.theme;return Object(M.a)(Object(M.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.secondary})})),L=function(){var e=Object(s.c)((function(e){return e})),t=e.qu_category,c=e.qu_diffic,n=e.qu_type,r=e.qu_amount,i=e.score,j=Object(o.f)(),b=Object(s.b)(),d=Object(a.useRef)(null),O=Object(a.useState)(0),h=Object(l.a)(O,2),f=h[0],p=h[1],x=Object(a.useState)([]),m=Object(l.a)(x,2),v=m[0],y=m[1],q=Object(a.useState)(""),w=Object(l.a)(q,2),A=w[0],k=w[1],T=Object(a.useState)(!0),z=Object(l.a)(T,2),M=z[0],Q=z[1],B=Object(a.useRef)(null),L="/api.php?amount=".concat(r),U=W({url:L}),P=U.respons,K=U.loading;Object(a.useEffect)((function(){if(null===P||void 0===P?void 0:P.results.length){var e=P.results[f],t=Object(G.a)(e.incorrect_answers);t.splice((c=e.incorrect_answers.length,Math.floor(Math.random()*Math.floor(c))),0,e.correct_answer),y(t)}var c}),[P,f]);var V=Object(a.useState)(60),X=Object(l.a)(V,2),Z=X[0],$=X[1];if(Object(a.useEffect)((function(){if(Z<=0)return B.current.click(),void $(60);if(!K){var e=setInterval((function(){$((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[Z,K]),t&&(L=L.concat("&category=".concat(t))),c&&(L=L.concat("&difficulty=".concat(c))),n&&(L=L.concat("&type=".concat(n))),K)return Object(_.jsx)(N.a,{mt:20,children:Object(_.jsx)(S.a,{})});return Object(_.jsxs)(N.a,{children:[Object(_.jsxs)(H.a,{container:!0,spacing:1,children:[Object(_.jsx)(H.a,{item:!0,xs:6,md:8,children:Object(_.jsx)(J,{children:Object(_.jsxs)(C.a,{variant:"h5",children:["Question ",f+1," /",P.results.length]})})}),Object(_.jsx)(H.a,{item:!0,xs:6,md:4,children:Object(_.jsx)(J,{children:Object(_.jsxs)(C.a,{variant:"h6",color:Z<10?"red":"",children:["Timer : ",Z]})})})]}),Object(_.jsxs)(H.a,{mt:2,spacing:2,container:!0,children:[Object(_.jsx)(H.a,{item:!0,xs:12,children:Object(_.jsx)(J,{children:Object(_.jsx)("form",{onSubmit:function(e){e.preventDefault(),f+1<P.results.length?(p(f+1),$(60),Q(!0)):j("/score"),A===P.results[f].correct_answer&&b(g(i+1))},ref:d,children:Object(_.jsxs)(u.a,{sx:{m:3},component:"fieldset",variant:"standard",children:[Object(_.jsx)(D.a,{component:"legend",children:Object(Y.decode)(P.results[f].question)}),Object(_.jsx)(R.a,{"aria-label":"quiz",name:"quiz",value:A,onChange:function(e){k(e.target.value),Q(!1)},children:v.map((function(e,t){return Object(_.jsx)(F.a,{value:e,control:Object(_.jsx)(I.a,{}),label:Object(Y.decode)(e)},t)}))}),Object(_.jsx)(E.a,{sx:{mt:1,mr:1},type:"submit",variant:"contained",ref:B,className:!1===M?"show":"hidden",children:"Check Answer"})]})})})}),Object(_.jsx)(H.a,{item:!0,xs:12,children:Object(_.jsx)(J,{children:Object(_.jsxs)(C.a,{variant:"h6",children:["Your Score ",i," / ",P.results.length]})})})]})]})},U=Object(Q.a)(B.a)((function(e){var t=e.theme;return Object(M.a)(Object(M.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.secondary})})),P=function(){var e=Object(s.b)(),t=Object(o.f)(),c=Object(s.c)((function(e){return e})).score;return Object(_.jsx)(H.a,{container:!0,children:Object(_.jsx)(H.a,{container:!0,children:Object(_.jsx)(H.a,{item:!0,xs:!0,mt:10,children:Object(_.jsxs)(U,{children:[Object(_.jsxs)(C.a,{variant:"h3",fontWeight:"bold",my:3,children:["Final Score ",c]}),Object(_.jsx)(h.a,{p:5,children:Object(_.jsx)(E.a,{variant:"outlined",onClick:function(){e(g(0)),e(y(50)),t("/")},children:"Back To Setting!"})})]})})})})},K=c(209),V=(c(145),function(){return Object(_.jsx)(j.a,{children:Object(_.jsx)(K.a,{maxWidth:"sm",children:Object(_.jsx)(h.a,{textAlign:"center",mt:5,children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/",exact:!0,element:Object(_.jsx)(z,{})}),Object(_.jsx)(o.a,{path:"/questions",element:Object(_.jsx)(L,{})}),Object(_.jsx)(o.a,{path:"/score",element:Object(_.jsx)(P,{})})]})})})})}),X=c(102),Z={qu_category:"",qu_diffic:"",qu_type:"",qu_amount:10,score:0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(M.a)(Object(M.a)({},e),{},{qu_category:t.payload});case p:return Object(M.a)(Object(M.a)({},e),{},{qu_diffic:t.payload});case x:return Object(M.a)(Object(M.a)({},e),{},{qu_type:t.payload});case m:return Object(M.a)(Object(M.a)({},e),{},{qu_amount:t.payload});case v:return Object(M.a)(Object(M.a)({},e),{},{score:t.payload});default:return e}},ee=Object(X.a)($);i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(s.a,{store:ee,children:Object(_.jsx)(V,{})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.74f6bf15.chunk.js.map