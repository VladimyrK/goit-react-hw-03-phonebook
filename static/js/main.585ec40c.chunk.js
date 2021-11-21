(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(16),n(10)),s=n(2),u=n(3),l=n(5),b=n(4),d=n(9),h=n(11),j=(n(17),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",id:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.setState({id:Object(h.a)()},(function(){t.props.onSubmit(t.state),t.reset()}))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(j.jsx)("button",{children:"Add contact"})]})}}]),n}(a.Component),m=f,p=n(6),O=n.n(p);n(21);var v=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[n,": ",a]}),Object(j.jsx)("button",{type:"button",onClick:function(){return r(e)},children:"Delete"})]})},C=(n(22),function(t){var e=t.items,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsx)(v,{id:e,name:a,number:r,onDeleteContact:n},e)}))})});C.protTypes={items:O.a.objectOf(O.a.string),onDeleteContact:O.a.func};var x=C,g=(n(23),function(t){var e=t.value,n=t.onFilter;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})}),y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("This name already in contacts"):t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.filterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.filterHandler=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{value:t,onFilter:this.filterHandler}),Object(j.jsx)(x,{items:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),S=y;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.585ec40c.chunk.js.map