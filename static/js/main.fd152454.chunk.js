(this["webpackJsonpkanban-project"]=this["webpackJsonpkanban-project"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(4),i=n.n(s),r=n(2),o=n(5),d=n(1),l=c.a.memo((function(e){var t=e.task,n=e.index;return Object(d.jsx)(o.b,{draggableId:t.id,index:n,children:function(e,n){return Object(d.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({className:"list-item"},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:t.content}))}})})),b=c.a.memo((function(e){var t=e.tasks;return Object(a.useEffect)((function(){}),[t]),t.map((function(e,t){return Object(d.jsx)(l,{task:e,index:t},e.id)}))})),j=n(7),u=n(3),O=n(9),m={tasks:{"task-1":{id:"task-1",content:"Login page \u2013 performance issues"},"task-2":{id:"task-2",content:"Sprint bugfix"},"task-3":{id:"task-3",content:"Shop page \u2013 performance issues"},"task-4":{id:"task-4",content:"Checkout bugfix"},"task-5":{id:"task-5",content:"Shop bug1"},"task-6":{id:"task-6",content:"Shop bug2"},"task-7":{id:"task-7",content:"Shop bug3"},"task-8":{id:"task-8",content:"Shop bug4"},"task-9":{id:"task-9",content:"Shop bug5"},"task-10":{id:"task-10",content:"User page \u2013 performance issues"},"task-11":{id:"task-11",content:"Auth bugfix"},"task-12":{id:"task-12",content:"Main page \u2013 performance issues"},"task-13":{id:"task-13",content:"Main page bugfix"}},columns:{"column-1":{id:"column-1",title:"Backlog",tasksOrder:["task-1","task-2"],isEditing:!1},"column-2":{id:"column-2",title:"Planning",tasksOrder:["task-3","task-4","task-5","task-6","task-7","task-8","task-9"],isEditing:!1},"column-3":{id:"column-3",title:"Doing",tasksOrder:["task-10","task-11"],isEditing:!1},"column-4":{id:"column-4",title:"Done",tasksOrder:["task-12","task-13"],isEditing:!1}},columnsOrder:["column-1","column-2","column-3","column-4"]},k=c.a.createContext(),h=function(e){var t=e.children,n=Object(a.useState)(m),c=Object(O.a)(n,2),s=c[0],i=c[1];return Object(d.jsx)(k.Provider,{value:{state:s,onDragEnd:function(e){var t,n=e.draggableId,a=e.destination,c=e.source;if(a&&(a.droppableId!==c.droppableId||a.index!==c.index))if(s.columns[c.droppableId]!==s.columns[a.droppableId]){var o=s.columns[c.droppableId],d=s.columns[a.droppableId],l=Object(j.a)(o.tasksOrder),b=Object(j.a)(d.tasksOrder);l.splice(c.index,1),b.splice(a.index,0,n);var O=Object(r.a)(Object(r.a)({},o),{},{tasksOrder:l}),m=Object(r.a)(Object(r.a)({},d),{},{tasksOrder:b}),k=Object(r.a)(Object(r.a)({},s),{},{columns:Object(r.a)(Object(r.a)({},s.columns),{},(t={},Object(u.a)(t,o.id,Object(r.a)({},O)),Object(u.a)(t,d.id,Object(r.a)({},m)),t))});i(k)}else{var h=s.columns[c.droppableId],x=Object(j.a)(h.tasksOrder);x.splice(c.index,1),x.splice(a.index,0,n);var p=Object(r.a)(Object(r.a)({},h),{},{tasksOrder:x}),g=Object(r.a)(Object(r.a)({},s.columns),{},Object(u.a)({},h.id,Object(r.a)({},p))),f=Object(r.a)(Object(r.a)({},s),{},{columns:g});i(f)}},addData:function(e,t,n){var a=s.columns[e],c=s.tasks,o=Object.keys(c).length,d="task-".concat(o+1),l={id:d,content:t};c[d]=l;var b=Object(j.a)(a.tasksOrder);b.push(d);var O=Object(r.a)(Object(r.a)({},a),{},{tasksOrder:b}),m=Object(r.a)(Object(r.a)({},s),{},{tasks:c,columns:Object(r.a)(Object(r.a)({},s.columns),{},Object(u.a)({},a.id,Object(r.a)({},O)))});i(m)},handleEditing:function(e){var t=s.columns[e];t.isEditing=!0;var n=Object(r.a)(Object(r.a)({},s),{},{columns:Object(r.a)(Object(r.a)({},s.columns),{},Object(u.a)({},t.id,Object(r.a)({},t)))});i(n)},endEditing:function(e){var t=s.columns[e];t.isEditing=!1;var n=Object(r.a)(Object(r.a)({},s),{},{columns:Object(r.a)(Object(r.a)({},s.columns),{},Object(u.a)({},t.id,Object(r.a)({},t)))});i(n)}},children:t})},x=k,p=function(e){var t=e.columnId,n=Object(a.useContext)(x),c=n.addData,s=n.endEditing,i=Object(a.useRef)(null);return Object(d.jsxs)("form",{className:"form-submit-content",children:[Object(d.jsx)("input",{autoFocus:!0,className:"input",type:"text",placeholder:"Write a task here",ref:function(e){return i=e},defaultValue:"",minLength:"2",maxLength:"60"}),Object(d.jsx)("button",{type:"button",className:"button-submit",onClick:function(){s(t),""===i.value?alert("Task cannot be empty!"):c(t,i.value)},children:"Submit"})]})},g=n(13),f=function(e){var t=e.columnId,n=e.isEditing,c=Object(a.useContext)(x).handleEditing;return n?Object(d.jsx)(p,{columnId:t}):Object(d.jsxs)("div",{className:"add-card_button",children:[Object(d.jsx)(g.a,{onClick:function(){return c(t)},className:"add-card_button-icon"}),Object(d.jsx)("p",{className:"add-card_text",children:"Add Card"})]})},v=c.a.memo((function(e){var t=e.tasks,n=e.column,a=e.isEditing;return Object(d.jsx)("div",{className:"column is-marginless",children:Object(d.jsxs)("div",{className:"card card-radius ",children:[Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("p",{className:"title-board_name",children:n.title}),Object(d.jsx)(o.c,{droppableId:n.id,children:function(e,n){return Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:"list is-hoverable"},e.droppableProps),{},{ref:e.innerRef,style:{background:n.isDraggingOver?"lightblue":"",overflow:"scroll"},children:[Object(d.jsx)(b,{tasks:t}),e.placeholder]}))}})]}),Object(d.jsx)(f,{columnId:n.id,isEditing:a})]})})})),N=function(e){var t=e.state,n=e.onDragEnd;return Object(d.jsx)("div",{className:"body-container_content",children:Object(d.jsx)(o.a,{onDragEnd:n,children:Object(d.jsx)("div",{className:"container bg-blue",children:Object(d.jsx)("div",{className:"columns is-multiline is-mobile",children:t.columnsOrder.map((function(e,n){var a=t.columns[e],c=a.isEditing,s=a.tasksOrder.map((function(e){return t.tasks[e]}));return Object(d.jsx)(v,{tasks:s,index:n,column:a,isEditing:c},a.id)}))})})})})},E=function(e){var t=e.state;return Object(a.useEffect)((function(){console.log(t.columns["column-4"].tasksOrder.length)}),[t]),Object(d.jsxs)("div",{className:"footer-container_content",children:[Object(d.jsxs)("div",{className:"footer-container_info",children:[Object(d.jsxs)("h3",{children:["Acive Tasks: ",t.columns["column-1"].tasksOrder.length," "]}),Object(d.jsxs)("h3",{children:["Finished Tasks: ",t.columns["column-4"].tasksOrder.length]})]}),Object(d.jsx)("div",{className:"footer-container_author",children:Object(d.jsx)("h3",{children:"Kanban board by Khakim Zhumagaliyev"})})]})},I=n.p+"static/media/user.ba55084e.svg",_=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],s=function(){c(!n)};return Object(d.jsxs)("div",{className:"header-container_content",children:[Object(d.jsx)("h1",{children:"Awesome Kanban Board"}),Object(d.jsxs)("div",{className:"header-container_information",children:[Object(d.jsxs)("div",{className:"header-container_user",children:[Object(d.jsx)("img",{onClick:s,className:"header-container_user-image",src:I,alt:"Not found"}),Object(d.jsx)("button",{onClick:s,className:"".concat(n?"up":"down")})]}),Object(d.jsx)("div",{className:"header-container_menu",style:{display:n?"block":"none"},children:Object(d.jsxs)("ul",{className:"header-container_menu-content",children:[Object(d.jsx)("li",{children:"Profile"}),Object(d.jsx)("li",{children:"Log out"})]})})]})]})};var y=function(){var e=Object(a.useContext)(x),t=e.state,n=e.onDragEnd;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(_,{}),Object(d.jsx)(N,{state:t,onDragEnd:n}),Object(d.jsx)(E,{state:t})]})};n(23);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{children:Object(d.jsx)(y,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fd152454.chunk.js.map