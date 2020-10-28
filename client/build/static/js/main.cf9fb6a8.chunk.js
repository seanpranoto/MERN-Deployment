(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,r){},34:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),o=r.n(c),s=r(23),a=r.n(s),i=(r(33),r(34),r(3)),j=r(5),d=r(10),p=r(7);function u(){var e=Object(d.a)(["\n    background:",";\n    text-align:center;\n    width:",";\n    padding:","\n"]);return u=function(){return e},e}function l(){var e=Object(d.a)(["\n    border: 2px solid black;\n    width:",";\n    padding:",";\n    margin:",";\n    background:",";\n"]);return l=function(){return e},e}var h=p.a.div(l(),(function(e){return e.widthProps||""}),(function(e){return e.paddingProps||""}),(function(e){return e.marginProps||""}),(function(e){return e.bgColorProps})),b=p.a.button(u(),(function(e){return e.bgColorProps||"#ffe599"}),(function(e){return e.widthProps||""}),(function(e){return e.paddingProps||""})),g=r(4),O=r.n(g),f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),r=t[0],o=t[1],s=Object(c.useState)(""),a=Object(j.a)(s,2),d=a[0],p=a[1],u=Object(c.useState)("backlog"),l=Object(j.a)(u,1)[0],g=Object(c.useState)([]),f=Object(j.a)(g,2),m=f[0],x=f[1],P=[];r.length<3&&P.push("Project must be at least 3 charaters long"),d.length<1&&P.push("Due Date is required");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{to:"/",children:"Back to Dashboard"}),Object(n.jsx)("h4",{style:{background:"white",zIndex:"999",position:"absolute",top:"4.3rem",left:"25rem"},children:"Plan a new project"}),Object(n.jsxs)(h,{widthProps:"50%",paddingProps:"1rem",marginProps:"1rem auto",children:[P.map((function(e,t){return Object(n.jsx)("p",{children:e},t)})),m.map((function(e,t){return Object(n.jsx)("p",{children:e},t)})),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.a.post("http://localhost:8000/api/project",{project:r,dueDate:d,status:l}).then((function(){return Object(i.c)("/")})).catch((function(e){for(var t=e.response.data.errors,r=[],n=0,c=Object.keys(t);n<c.length;n++){var o=c[n];r.push(t[o].message)}x(r)}))},children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{htmlFor:"project",children:"Project: "}),Object(n.jsx)("input",{type:"text",name:"project",onChange:function(e){return o(e.target.value)}})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{htmlFor:"date",children:"Due Date:"}),Object(n.jsx)("input",{type:"date",name:"date",onChange:function(e){return p(e.target.value)}})]}),Object(n.jsx)(b,{bgColorProps:"#9fc5f8",widthProps:"90%",paddingProps:"0.2rem",children:"Plan Project"})]})]})]})},m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),r=t[0],o=t[1],s={backlog:{background:"#9fc5f8",marginRight:"23rem"},inProgress:{background:"#ffe599"},completed:{background:"#b6d7a8",marginLeft:"23rem"}};return Object(c.useEffect)((function(){O.a.get("http://localhost:8000/api/project/").then((function(e){return o(e.data)})).catch((function(e){return console.log("err: "+e)}))}),[r]),Object(n.jsxs)(h,{paddingProps:"1rem",children:[Object(n.jsx)("h3",{style:s.backlog,children:"Backlog"}),Object(n.jsx)("h3",{style:s.inProgress,children:"In Progress"}),Object(n.jsx)("h3",{style:s.completed,children:"Completed"}),r.map((function(e){return"backlog"===e.status?Object(n.jsxs)(h,{widthProps:"30%",marginProps:"0.5rem",paddingProps:"0.5rem",children:[Object(n.jsx)("p",{children:e.project}),Object(n.jsx)("p",{children:e.dueDate}),Object(n.jsx)("p",{children:e.status}),Object(n.jsx)(b,{onClick:function(){O.a.put("http://localhost:8000/api/project/".concat(e._id),{project:e.project,dueDate:e.dueDate,status:"inProgress"})},widthProps:"60%",children:"Start Project  "})]}):"inProgress"===e.status?Object(n.jsxs)(h,{widthProps:"30%",marginProps:"0.5rem 0.5rem 0.5rem 32rem",paddingProps:"0.5rem",children:[Object(n.jsx)("p",{children:e.project}),Object(n.jsx)("p",{children:e.dueDate}),Object(n.jsx)("p",{children:e.status}),Object(n.jsx)(b,{onClick:function(){O.a.put("http://localhost:8000/api/project/".concat(e._id),{project:e.project,dueDate:e.dueDate,status:"completed"})},bgColorProps:"#b6d7a8",widthProps:"60%",children:"Move to Completed"})]}):Object(n.jsxs)(h,{widthProps:"30%",marginProps:"0.5rem 0.5rem 0.5rem 64rem",paddingProps:"0.5rem",children:[Object(n.jsx)("p",{children:e.project}),Object(n.jsx)("p",{children:e.dueDate}),Object(n.jsx)("p",{children:e.status}),Object(n.jsx)(b,{onClick:function(){O.a.delete("http://localhost:8000/api/project/".concat(e._id))},bgColorProps:"#ea9999",widthProps:"60%",children:"X          Remove Project  "})]})})),Object(n.jsx)(i.a,{to:"/projects/new",children:Object(n.jsx)(b,{bgColorProps:"#9fc5f8",widthProps:"10%",style:{display:"block"},children:"Add New Project"})})]})};var x=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Project Manager"}),Object(n.jsxs)(i.b,{children:[Object(n.jsx)(f,{path:"/projects/new"}),Object(n.jsx)(m,{path:"/"})]})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,59)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),o(e),s(e)}))};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.cf9fb6a8.chunk.js.map