(this["webpackJsonpreact-redux-project"]=this["webpackJsonpreact-redux-project"]||[]).push([[0],{51:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,d,s,j,u,l,b,p,h,O,x=n(0),f=n.n(x),v=n(21),g=n.n(v),m=n(11),y=(n(51),n(18)),w=n(3),E=n(1),k=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:"Fake Shop"})})})},_=n(14),T=n.n(_),C=n(22),D=n(37),P=n.n(D).a.create({baseURL:"https://fakestoreapi.com"}),S="FETCH_PRODUCTS",L="SET_PRODUCTS",F="SELECTED_PRODUCT",R="REMOVE_SELECTED_PRODUCT",N="DELETE_PRODUCT",U=n(4),I=n(5),M=I.a.div(c||(c=Object(U.a)(["\n  display: flex;\n  width: 85%;\n  margin: 2rem auto;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),A=I.a.div(r||(r=Object(U.a)(["\n  height: 70%;\n  width: 80%;\n  margin: 0.3rem auto;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]))),B=I.a.img(a||(a=Object(U.a)(["\n  width: inherit;\n  @media (max-width: 960px) {\n    width: 100%;\n  }\n"]))),J=I.a.div(i||(i=Object(U.a)(["\n  height: 26rem;\n  width: 20rem;\n  padding: 5px;\n  margin: 1rem 2rem;\n"]))),V=I.a.div(o||(o=Object(U.a)(["\n  height: 26rem;\n  border: 1px solid black;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition-duration: 0.5s;\n  &:hover {\n    border: none;\n    box-shadow: 0 0 15px;\n    transform: scale(1.05);\n  }\n  &:hover .button_box {\n    display: flex;\n    justify-content: space-around;\n  }\n  &:hover .content_hover {\n    border-bottom: 1px solid black;\n    border-radius: 0;\n  }\n"]))),X=I.a.div(d||(d=Object(U.a)(["\n  height: 27%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-top: 1px solid black;\n  background-color: whitesmoke;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]))),$=I.a.div(s||(s=Object(U.a)(["\n  display: none;\n"]))),z=I.a.button(j||(j=Object(U.a)(["\n  border: none;\n  width: 35%;\n  height: 1rem;\n  background-color: whitesmoke;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.red?"#ff000059":"#00ff7159"})),H=I.a.div(u||(u=Object(U.a)(["\n  padding: 5px;\n"]))),q=I.a.div(l||(l=Object(U.a)(["\n  font-size: x-large;\n  font-weight: bold;\n"]))),G=I.a.div(b||(b=Object(U.a)(["\n  opacity: 0.5;\n"]))),K=I.a.div(p||(p=Object(U.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 40rem;\n  margin: 2rem auto;\n  width: 90%;\n  @media (max-width: 960px) {\n    flex-wrap: wrap;\n  }\n"]))),Q=I.a.div(h||(h=Object(U.a)(["\n  display: flex;\n  max-width: 50%;\n"]))),W=I.a.div(O||(O=Object(U.a)(["\n  padding: 0 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  text-align: start;\n  @media (max-width: 960px) {\n    text-align: center;\n    align-items: center;\n  }\n"]))),Y=function(){var e=Object(m.c)((function(e){return e.allProducts.products})),t=Object(m.b)(),n=e.map((function(e){var n=e.id,c=e.title,r=e.image,a=e.price,i=e.category;return Object(E.jsx)(J,{children:Object(E.jsxs)(V,{children:[Object(E.jsx)(A,{children:Object(E.jsx)(B,{src:r,alt:c})}),Object(E.jsxs)(X,{className:"content_hover",children:[Object(E.jsx)(H,{children:c}),Object(E.jsxs)(q,{children:["$ ",a]}),Object(E.jsx)(G,{children:i})]}),Object(E.jsxs)($,{className:"button_box",children:[Object(E.jsx)(z,{children:Object(E.jsx)(y.b,{to:"/project-react-redux/product/".concat(n),children:"Details"})}),Object(E.jsx)(z,{onClick:function(){return t(function(e){return function(){var t=Object(C.a)(T.a.mark((function t(n){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("/products/".concat(e),{method:"DELETE"}).catch((function(e){console.log("Error",e)}));case 2:c=t.sent,n({type:N,payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},red:!0,children:"Delete"})]})]})},n)}));return Object(E.jsx)(E.Fragment,{children:n})},Z=function(){var e=Object(m.c)((function(e){return e})),t=Object(m.b)();return Object(x.useEffect)((function(){t(function(){var e=Object(C.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products").catch((function(e){console.log("Error",e)}));case 2:n=e.sent,t({type:S,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),console.log("Products:",e),Object(E.jsx)("div",{children:0===Object.keys(e.allProducts.products).length?Object(E.jsx)("div",{children:"...Loading"}):Object(E.jsx)(M,{children:Object(E.jsx)(Y,{})})})},ee=function(){var e=Object(w.f)().productId,t=Object(m.c)((function(e){return e.product}));console.log(t);var n=t.image,c=t.title,r=t.price,a=t.category,i=t.description,o=Object(m.b)();return Object(x.useEffect)((function(){var t;return e&&""!==e&&o((t=e,function(){var e=Object(C.a)(T.a.mark((function e(n){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products/".concat(t)).catch((function(e){console.log("Error",e)}));case 2:c=e.sent,n({type:F,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),function(){o(function(e){return{type:R,payload:e}}())}}),[e]),Object(E.jsx)("div",{children:0===Object.keys(t).length?Object(E.jsx)("div",{children:"...Loading"}):Object(E.jsxs)(K,{children:[Object(E.jsx)(Q,{children:Object(E.jsx)(B,{src:n})}),Object(E.jsxs)(W,{children:[Object(E.jsx)("h1",{children:c}),Object(E.jsxs)(q,{children:["$",r]}),Object(E.jsx)("h3",{children:a}),Object(E.jsx)("p",{children:i}),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:Object(E.jsx)("i",{className:"shop icon"})}),Object(E.jsx)("div",{children:"Add to Cart"})]})]})]})})};n(73);var te=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(k,{}),Object(E.jsxs)(w.c,{children:[Object(E.jsx)(w.a,{exact:!0,path:"/project-react-redux/",component:Z}),Object(E.jsx)(w.a,{path:"/project-react-redux/product/:productId",exact:!0,component:ee}),Object(E.jsx)(w.a,{children:"404 Not Found"})]})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},ce=n(16),re=n(12),ae={products:[]},ie=Object(ce.b)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(re.a)(Object(re.a)({},e),{},{products:t.payload});case N:return Object(re.a)(Object(re.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload.id}))});case S:return Object(re.a)(Object(re.a)({},e),{},{products:t.payload});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(re.a)(Object(re.a)({},e),t.payload);case R:return{};default:return e}}}),oe=n(42),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.c,se=Object(ce.d)(ie,de(Object(ce.a)(oe.a)));g.a.render(Object(E.jsx)(f.a.StrictMode,{children:Object(E.jsx)(m.a,{store:se,children:Object(E.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[74,1,2]]]);
//# sourceMappingURL=main.83ed9bc9.chunk.js.map