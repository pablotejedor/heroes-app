(this["webpackJsonpheroes-team"]=this["webpackJsonpheroes-team"]||[]).push([[0],{47:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),s=a(37),n=a.n(s),l=(a(47),a(25)),i=a(2),d=a(12),o=a.n(d),j=a(16),b=a(11),h=a(9),m=a(20),u=a.n(m),x=a(1),O=function(e){var t=e.history,a=Object(c.useState)(null),r=Object(b.a)(a,2),s=r[0],n=r[1],l=function(){var e=Object(j.a)(o.a.mark((function e(a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"POST",url:"http://challenge-react.alkemy.org",data:{email:a.email,password:a.password}});case 3:c=e.sent,localStorage.setItem("token",c.data.token),t.replace("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Invalid credentials");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(h.c,{onSubmit:l,validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},initialValues:{email:"",password:""},children:function(e){var t=e.errors,a=e.isValid,c=e.touched;return Object(x.jsxs)(h.b,{children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"inputEmail",className:"form-label",children:"Email"}),Object(x.jsx)(h.a,{type:"email",className:"form-control",id:"inputEmail",name:"email"}),t.email&&c.email?Object(x.jsx)("div",{className:"text-danger",children:t.email}):null]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"inputPassword",className:"form-label",children:"Password"}),Object(x.jsx)(h.a,{type:"password",className:"form-control",id:"inputPassword",name:"password"}),t.password&&c.password?Object(x.jsx)("div",{className:"text-danger",children:t.password}):null]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!a,children:"Enviar"}),s?Object(x.jsx)("div",{className:"text-danger",children:s}):null]})}})},p=a(41),v=function(e){var t=e.hero,a=e.setHeroTeam,c={backgroundColor:"".concat({good:"#236494",bad:"#b61617"}[t.biography.alignment]),width:"18rem"};return Object(x.jsxs)("div",{class:"card",style:c,children:[Object(x.jsx)("img",{class:"card-img-top",src:t.image.url,alt:t.id}),Object(x.jsxs)("div",{class:"card-body",children:[Object(x.jsx)("h5",{class:"card-title",children:t.name}),Object(x.jsx)("button",{onClick:function(){return a((function(e){return[t].concat(Object(p.a)(e))}))},type:"button",className:"btn btn-light",children:"Add to my team"})]})]})},f=function(e){var t=e.setHeroTeam,a=Object(c.useState)(null),r=Object(b.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)([]),i=Object(b.a)(l,2),d=i[0],m=i[1],O=function(){var e=Object(j.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/380601706991561/search/".concat(t.search),data:{search:t.search}});case 3:a=e.sent,m(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n("No such hero with that name");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"mt-5",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-5",children:[Object(x.jsx)("h4",{children:"Search:"}),Object(x.jsx)("hr",{}),Object(x.jsx)(h.c,{onSubmit:O,validate:function(e){var t={};return e.search||(t.search="Required"),t},initialValues:{search:""},children:function(e){var t=e.errors,a=e.isValid,c=e.touched;return Object(x.jsxs)(h.b,{children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(h.a,{type:"search",className:"form-control",name:"search",placeholder:"Search a hero by name"}),t.search&&c.search?Object(x.jsx)("div",{className:"text-danger",children:t.search}):null]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!a,children:"Search"}),s?Object(x.jsx)("div",{className:"text-danger",children:s}):null]})}})]}),Object(x.jsxs)("div",{className:"col-7",children:[Object(x.jsx)("h4",{children:" Results "}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:"d-flex",children:Object(x.jsx)("div",{className:"card",children:d?d.map((function(e){return Object(x.jsx)(v,{hero:e,setHeroTeam:t},e.id)})):Object(x.jsx)("p",{className:"text-danger",children:"No results. Please enter a valid name"})})})]})]})})})},g=function(e){var t=e.hero;console.log(t);return Object(x.jsxs)("div",{style:{width:"18rem"},children:[Object(x.jsx)("img",{class:"card-img-top",src:t.image.url,alt:t.id}),Object(x.jsxs)("div",{class:"card-body",children:[Object(x.jsx)("h5",{class:"card-title",children:t.name}),Object(x.jsx)("p",{class:"card-text",children:"Attributes:"})]})]})},N=function(e){var t=e.heroTeam;return console.log(t),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"MyTeam"}),Object(x.jsx)("div",{className:"d-flex",children:t.map((function(e){return Object(x.jsx)(g,{hero:e},e.id)}))})]})},w=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{setHeroTeam:r}),Object(x.jsx)("div",{className:"d-flex",children:Object(x.jsx)(N,{heroTeam:a})})]})},y=a(21),k=a(42),S=["component"];var T=function(e){var t=e.component,a=Object(k.a)(e,S),c=localStorage.getItem("token");return Object(x.jsx)(i.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){return c?Object(x.jsx)(t,Object(y.a)({},e)):Object(x.jsx)(i.a,{to:"/login"})}}))},E=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/login",component:O}),Object(x.jsx)(T,{exact:!0,path:"/",component:w})]})})};var A=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(E,{})})};n.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.93b83215.chunk.js.map