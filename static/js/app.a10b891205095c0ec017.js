webpackJsonp([1],{"+5xw":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.allItems,function(t){return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("h2",{staticStyle:{"line-height":"16px"}},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.items,function(s){return n("div",{staticClass:"text row"},[n("div",{staticClass:"content",on:{mouseover:function(t){e.mouseOver(t)},mouseleave:function(t){e.mouseLeave(t)}}},[n("div",{staticClass:"item"},[n("el-tag",{attrs:{type:"gray"}},[e._v(e._s(s.user.name))]),e._v("\n          "+e._s(s.title)+"\n        ")],1),e._v(" "),n("el-button",{staticClass:"delete",attrs:{type:"primary",icon:"close",size:"mini"},on:{click:function(n){e.deleteItem(t,s)}}})],1)])})],2)}))},i=[],a={render:s,staticRenderFns:i};t.a=a},"+YyO":function(e,t,n){"use strict";var s=n("NYxO");t.a={name:"Markdown",data:function(){return{}},computed:Object(s.c)({allPeople:"getAllPeople",allItems:"getDashboard"}),methods:{generateMarkdown:function(){return this.allItems},generateMembers:function(){return this.allPeople}}}},"0HoI":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("KPT Sample")]),e._v(" "),n("dashboard"),e._v("\n  Copyright (c) 2017 Hiroaki Egusa\n  Released under the MIT license\n")],1)},i=[],a={render:s,staticRenderFns:i};t.a=a},Aq8q:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.people,function(t,s){return n("ul",[n("li",{on:{mouseover:function(t){e.mouseOver(t)},mouseleave:function(t){e.mouseLeave(t)}}},[t.edit?e._e():n("div",{staticClass:"display",staticStyle:{display:"inline"},domProps:{textContent:e._s(t.name)},on:{click:function(e){t.edit=!0}}}),e._v(" "),t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"elm.name"},{name:"focus",rawName:"v-focus"}],ref:"textInput",refInFor:!0,staticStyle:{display:"inline"},attrs:{type:"text"},domProps:{value:t.name},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.edit(t)},blur:function(n){t.edit=!1,e.isButtonDisabled=!1},input:[function(n){n.target.composing||e.$set(t,"name",n.target.value)},function(t){e.isButtonDisabled=!0}]}}):e._e(),e._v(" "),n("el-button",{staticClass:"delete",attrs:{type:"primary",icon:"close",size:"mini"},on:{click:function(n){e.deleteMember(t)}}})],1),e._v(" "),s===e.people.length-1?n("li",[n("el-button",{attrs:{disabled:e.isButtonDisabled,size:"mini",icon:"plus"},on:{click:e.addMemberForm}})],1):e._e()])}))},i=[],a={render:s,staticRenderFns:i};t.a=a},"B/u7":function(e,t){},BQAu:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{attrs:{type:"card"}},[n("el-tab-pane",{attrs:{label:"Top"}},[n("top")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"Write"}},[n("write")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"Member"}},[n("member")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"Markdown"}},[n("markdown")],1)],1)},i=[],a={render:s,staticRenderFns:i};t.a=a},"E+fs":function(e,t,n){"use strict";var s=n("NYxO");t.a={name:"Write",data:function(){return{items:[{userId:"",type:"",title:""},{userId:"",type:"",title:""}]}},computed:Object(s.c)({people:"getAllPeople"}),methods:{onSubmit:function(){console.log(this.items),this.$store.dispatch("add",{items:this.items}),this.items=[{userId:"",type:"",title:""},{userId:"",type:"",title:""}]},addForm:function(){this.items.push({user:"",type:"",title:""}),1===this.items.length&&(this.items=[{userId:"",type:"",title:""},{userId:"",type:"",title:""}])},deleteItem:function(e){this.items.splice(e,1)}}}},IcnI:function(e,t,n){"use strict";var s,i=n("bOdI"),a=n.n(i),r=n("7+uW"),o=n("NYxO");r.default.use(o.a);var l={user:{id:0,name:"test user",edit:!1},members:[{id:1,name:"test userA",edit:!1},{id:2,name:"test userB",edit:!1}],lastUserId:2,dashboard:[{title:"KEEP",items:[{title:"keep1",userId:0,createdAt:""},{title:"keep2",userId:1,createdAt:""}]},{title:"PROBLEM",items:[{title:"problem1",userId:1,createdAt:""},{title:"problem2",userId:2,createdAt:""}]},{title:"TRY",items:[{title:"try1",userId:1,createdAt:""},{title:"try2",userId:0,createdAt:""}]}]},u={add:function(e,t){(0,e.commit)("ADD_ITEMS",{items:t.items})},delete:function(e,t){(0,e.commit)("DELETE_ITEM",{label:t.label,item:t.item})},addMember:function(e,t){(0,e.commit)("ADD_MEMBER",{member:t.member})},editMember:function(e,t){(0,e.commit)("EDIT_MEMBER",{member:t.member})},deleteMember:function(e,t){(0,e.commit)("DELETE_MEMBER",{member:t.member})},hasDashboardItem:function(e,t){var n=(e.commit,e.state),s=t.user;return n.dashboard.some(function(e){return e.items.some(function(e){return e.userId===s.id})})}},c=(s={},a()(s,"ADD_ITEMS",function(e,t){t.items.forEach(function(t){e.dashboard.map(function(e){e.title===t.type&&e.items.push({title:t.title,userId:t.userId})})})}),a()(s,"DELETE_ITEM",function(e,t){var n=t.label,s=t.item,i=void 0,a=void 0;e.dashboard.forEach(function(e,t){e.title===n.title&&(i=t,a=e.items.findIndex(function(e){return e.title===s.title}))}),e.dashboard[i].items.splice(a,1)}),a()(s,"ADD_MEMBER",function(e,t){var n=t.member;this.state.members.push(n),this.state.lastUserId++}),a()(s,"EDIT_MEMBER",function(e,t){var n=t.member;0===n.id&&(this.state.user=n),0!==n.id&&this.state.members.forEach(function(e){e.id===n.id&&(e=n)})}),a()(s,"DELETE_MEMBER",function(e,t){var n=t.member,s=e.members.findIndex(function(e){return e.id===n.id});e.members.splice(s,1)}),s),d={getDashboard:function(e){var t=e.dashboard[0].items.map(function(t){return 0===t.userId&&(t.user=e.user),0!==t.userId&&(t.user=e.members.find(function(e){return t.userId===e.id})),t}),n=e.dashboard[1].items.map(function(t){return 0===t.userId&&(t.user=e.user),0!==t.userId&&(t.user=e.members.find(function(e){return t.userId===e.id})),t}),s=e.dashboard[2].items.map(function(t){return 0===t.userId&&(t.user=e.user),0!==t.userId&&(t.user=e.members.find(function(e){return t.userId===e.id})),t}),i=[];return i.push({title:"KEEP",items:t}),i.push({title:"PROBLEM",items:n}),i.push({title:"TRY",items:s}),i},getAllPeople:function(e){var t=[];return t.push(e.user),e.members.forEach(function(e){return t.push(e)}),t},getLastUserId:function(e){return e.lastUserId}};t.a=new o.a.Store({state:l,actions:u,mutations:c,getters:d})},M93x:function(e,t,n){"use strict";function s(e){n("Wuy1")}var i=n("xJD8"),a=n("0HoI"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,null,null);t.a=l.exports},Mbub:function(e,t,n){"use strict";var s=n("Dd8w"),i=n.n(s),a=n("NYxO"),r=n("7+uW"),o={inserted:function(e){r.default.nextTick(function(){e.focus()})}};t.a={name:"Member",data:function(){return{isButtonDisabled:!1}},computed:Object(a.c)({people:"getAllPeople",lastUserId:"getLastUserId"}),methods:i()({},Object(a.b)({hasDashboardItem:"hasDashboardItem"}),{mouseOver:function(e){var t=e.currentTarget.lastElementChild;null!==t.style&&(t.style.display="inline-block")},mouseLeave:function(e){var t=e.currentTarget.lastElementChild;null!==t.style&&(t.style.display="none")},edit:function(e){e.edit=!e.edit,""===e.name&&(e.name="dummy name"),this.$store.dispatch("editMember",{member:e})},addMemberForm:function(){var e=this.lastUserId+1;this.$store.dispatch("addMember",{member:{id:e,name:"",edit:!0}})},deleteMember:function(e){var t=this;this.hasDashboardItem({user:e}).then(function(n){console.log(n),n?alert("this user has item"):t.$store.dispatch("deleteMember",{member:e})})}}),directives:{focus:o}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i=n("M93x"),a=n("YaEn"),r=n("q8zI"),o=(n.n(r),n("zL8q")),l=n.n(o),u=n("9JMe"),c=(n.n(u),n("IcnI"));s.default.config.productionTip=!1,s.default.use(l.a),Object(u.sync)(c.a,a.a),new s.default({el:"#app",router:a.a,store:c.a,template:"<App/>",components:{App:i.a}})},OJAy:function(e,t,n){"use strict";function s(e){n("jFge")}var i=n("E+fs"),a=n("ZRiE"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,"data-v-01be87bf",null);t.a=l.exports},PSCu:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  "+e._s(e.generateMembers())+"\n  "),n("br"),e._v("\n  "+e._s(e.generateMarkdown())+"\n")])},i=[],a={render:s,staticRenderFns:i};t.a=a},TGvd:function(e,t,n){"use strict";function s(e){n("eP+d")}var i=n("aEfQ"),a=n("BQAu"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,null,null);t.a=l.exports},Wuy1:function(e,t){},YaEn:function(e,t,n){"use strict";var s=n("7+uW"),i=n("/ocq"),a=n("wxRh"),r=n("OJAy"),o=n("ep0M"),l=n("k2iK");s.default.use(i.a),t.a=new i.a({mode:"history",routes:[{path:"/",name:"top",component:a.a},{path:"/write",name:"write",component:r.a},{path:"/member",name:"member",component:o.a},{path:"/markdown",name:"markdown",component:l.a}]})},ZRiE:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"wrapper",attrs:{gutter:20}},e._l(e.items,function(t,s){return n("div",[n("el-col",{attrs:{span:12}},[n("el-card",{staticClass:"box-card"},[s<e.items.length-1?n("el-form",{attrs:{model:t,"label-width":"60px"}},[n("el-form-item",{attrs:{label:"Member"}},[n("el-select",{attrs:{placeholder:"Select"},model:{value:t.userId,callback:function(n){e.$set(t,"userId",n)},expression:"elm.userId"}},e._l(e.people,function(e){return n("el-option",{attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"Type"}},[n("el-select",{attrs:{placeholder:"Select"},model:{value:t.type,callback:function(n){e.$set(t,"type",n)},expression:"elm.type"}},[n("el-option",{attrs:{label:"KEEP",value:"KEEP"}}),e._v(" "),n("el-option",{attrs:{label:"PROBLEM",value:"PROBLEM"}}),e._v(" "),n("el-option",{attrs:{label:"TRY",value:"TRY"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Idea"}},[n("el-input",{model:{value:t.title,callback:function(n){e.$set(t,"title",n)},expression:"elm.title"}})],1),e._v(" "),n("el-button",{staticClass:"delete",attrs:{type:"primary",icon:"circle-cross",size:"mini"},on:{click:function(t){e.deleteItem(s)}}})],1):e._e(),e._v(" "),s===e.items.length-1?n("div",[n("div",{staticStyle:{width:"40%",height:"200px",display:"inline-block",color:"#e2e2e2"}},[n("el-button",{staticClass:"delete",attrs:{icon:"plus"},on:{click:e.addForm}})],1)]):e._e()],1)],1)],1)})),e._v(" "),n("div",[n("el-button",{on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)},i=[],a={render:s,staticRenderFns:i};t.a=a},aEfQ:function(e,t,n){"use strict";var s=n("wxRh"),i=n("OJAy"),a=n("ep0M"),r=n("k2iK");t.a={name:"Dashboard",components:{Top:s.a,Write:i.a,Member:a.a,Markdown:r.a}}},"eP+d":function(e,t){},ep0M:function(e,t,n){"use strict";function s(e){n("B/u7")}var i=n("Mbub"),a=n("Aq8q"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,"data-v-0eac746a",null);t.a=l.exports},jFge:function(e,t){},k2iK:function(e,t,n){"use strict";function s(e){n("riRN")}var i=n("+YyO"),a=n("PSCu"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,"data-v-3312863f",null);t.a=l.exports},q8zI:function(e,t){},riRN:function(e,t){},vYTR:function(e,t){},wxRh:function(e,t,n){"use strict";function s(e){n("vYTR")}var i=n("ylou"),a=n("+5xw"),r=n("VU/8"),o=s,l=r(i.a,a.a,!1,o,"data-v-008ad835",null);t.a=l.exports},xJD8:function(e,t,n){"use strict";var s=n("TGvd");t.a={name:"app",components:{Dashboard:s.a}}},ylou:function(e,t,n){"use strict";var s=n("NYxO");t.a={name:"Top",data:function(){return{}},computed:Object(s.c)({allItems:"getDashboard"}),methods:{mouseOver:function(e){var t=e.currentTarget.lastElementChild;null!==t.style&&(t.style.display="inline-block")},mouseLeave:function(e){var t=e.currentTarget.lastElementChild;null!==t.style&&(t.style.display="none")},deleteItem:function(e,t){this.$store.dispatch("delete",{label:e,item:t})}}}}},["NHnr"]);
//# sourceMappingURL=app.a10b891205095c0ec017.js.map