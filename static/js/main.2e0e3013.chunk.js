(this.webpackJsonphxdev=this.webpackJsonphxdev||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),s=n.n(a),i=(n(54),n(84)),j=n(48),o=n(5),l=(n(55),n(87)),d=n(83),b=n(1),u=function(){var e=(new Date).getFullYear();return Object(b.jsx)(l.a,{fixed:"bottom",bg:"dark",variant:"dark",children:Object(b.jsx)(d.a,{lg:12,className:"text-center text-muted",children:Object(b.jsxs)("div",{children:[e," - ",e+1," All Rights Reserved by Aleksandar Jovanov"]})})})},h=n(88),x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(l.a.Brand,{href:"/HXDev",children:"HXDev"}),Object(b.jsxs)(h.a,{className:"me-auto",children:[Object(b.jsx)(h.a.Link,{href:"#/projects",children:"Projects"}),Object(b.jsx)(h.a.Link,{href:"#/skills",children:"Skills"}),Object(b.jsx)(h.a.Link,{href:"#/about",children:"About"})]})]})})})},O=function(){return Object(b.jsx)("div",{children:"About me"})},f=n(23),m=n.n(f),v=n(34),p=n(7),g=n(47),k=n.n(g),w=r.a.createContext(void 0);w.displayName="ProjectContext";var P=function(e){var t=Object(c.useState)(!1),n=Object(p.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(p.a)(s,2),j=i[0],o=i[1],l=function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,k.a.get("https://api.github.com/users/ajaksmaniac/repos").then((function(e){return o(e.data),a(!1),e.data}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(w.Provider,{value:{allProjects:j,isLoading:r,fetchProjects:l},children:e.children})};var L=n(86),y=n(89),A=n(85),N=function(e){var t=e.name,n=e.description,c=e.clone_url;e.image;return Object(b.jsxs)(y.a,{className:"mb-2",bg:"dark",style:{width:"18dp",height:"60dp",paddingTop:"30dp",color:"white"},children:[Object(b.jsx)(y.a.Header,{children:Object(b.jsx)(y.a.Title,{children:t})}),Object(b.jsxs)(y.a.Body,{children:[Object(b.jsx)(y.a.Text,{children:n}),Object(b.jsx)(y.a.Link,{href:c,children:Object(b.jsx)(A.a,{bg:"dark",children:"GitHub"})})]})]})},C=function(e){var t=function(){var e=Object(c.useContext)(w);if(void 0===e)throw new Error("Context must be used within a Provider");return e}(),n=t.allProjects,r=t.isLoading,a=t.fetchProjects,s=Object(c.useState)(!1),j=Object(p.a)(s,2),o=j[0],l=j[1];return Object(c.useEffect)((function(){Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,a();case 3:console.log(r),console.log("AAAA",n),l(!1);case 6:case"end":return e.stop()}}),e)})))()}),[o]),Object(b.jsx)(i.a,{className:"mt-5 ",children:Object(b.jsx)("div",{className:"row",children:r?Object(b.jsx)(L.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(b.jsx)(b.Fragment,{children:n&&n.length>0&&n.map((function(e){return Object(b.jsx)("div",{className:"col-sm-4",children:Object(b.jsx)(N,{id:e.id,name:e.name,description:e.description,clone_url:e.clone_url,image:"asd"})})}))})})})},F=function(){return Object(b.jsx)(P,{children:Object(b.jsx)(C,{})})},S=function(){return Object(b.jsx)("div",{children:"My Skills"})},T=function(){return Object(b.jsx)("div",{children:"Welcome"})};var B=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(i.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/*",element:Object(b.jsx)(T,{})}),Object(b.jsx)(o.a,{path:"/about",element:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"/projects",element:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/skills",element:Object(b.jsx)(S,{})})]})}),Object(b.jsx)(u,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()}},[[81,1,2]]]);
//# sourceMappingURL=main.2e0e3013.chunk.js.map