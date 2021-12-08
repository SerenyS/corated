(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b1":function(t,e,n){"use strict";n("7f46")},"034f":function(t,e,n){"use strict";n("85ec")},"0f17":function(t,e,n){"use strict";n("8ef5")},"2c64":function(t,e,n){"use strict";n("df67")},"3a7d":function(t,e,n){},4822:function(t,e,n){"use strict";n("8ce3")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navComponent"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",id:"navigation"}},[n("b-navbar-brand",{attrs:{href:"\\"}},[t._v(" CoRated")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"\\projects"}},[t._v("My Projects")]),n("b-nav-item",{attrs:{href:"\\teams"}},[t._v("My Teams")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[n("b-icon",{attrs:{icon:"person-circle"}})],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"\\login"}},[t._v("Login")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},i=[],l={},c=l,u=(n("0f17"),n("2877")),d=Object(u["a"])(c,s,i,!1,null,null,null),p=d.exports,m={name:"App",components:{navComponent:p}},f=m,b=(n("034f"),Object(u["a"])(f,o,r,!1,null,null,null)),v=b.exports,h=n("5f5b"),g=n("b1e0"),w=n("0ff2"),P=n("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[a("source",{attrs:{src:n("da34"),type:"video/mp4"}})]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5",attrs:{id:"mainText"}},[n("h1",{staticClass:"display-4 font-weight-normal"},[t._v("CoRated")]),n("p",{staticClass:"lead font-weight-normal"},[t._v("Visualize, Vote, Create")]),n("a",{staticClass:"btn btn-outline-secondary",attrs:{id:"createNewProjectButton",href:"/newproject"}},[t._v("Create a new project")])])}],C={name:"Home",components:{}},j=C,x=(n("4822"),Object(u["a"])(j,_,y,!1,null,null,null)),k=x.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[n("form",{staticClass:"form-signin"},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),n("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),n("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""}}),n("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),n("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""}}),n("div",{staticClass:"checkbox mb-3"},[n("label",[n("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])]),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")])])])])}],E={name:"LogIn",components:{}},D=E,T=Object(u["a"])(D,O,$,!1,null,null,null),I=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{projects:""}},[t._m(0),n("main-component")],1)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[n("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[n("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Got a new project idea?")]),n("p",{staticClass:"lead font-weight-normal"},[t._v("Visualize it, together it can be Materialized")]),n("a",{staticClass:"btn btn-outline-secondary",attrs:{id:"createNewProjectButton",href:"/newproject"}},[t._v("New Project")])])])}],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row "},t._l(t.allposts,(function(e){return n("div",{key:e.id,staticClass:"card mb-4 shadow-sm",attrs:{id:"projectContainer"}},[n("a",{staticClass:"column col-xs-6",attrs:{id:"zoomIn"}},[n("img",{staticClass:"card-img-top",staticStyle:{height:"225px",display:"block","background-size":"cover"},style:{backgroundImage:"url("+e.data.cover+")"}})]),n("div",{staticClass:"card-body",staticStyle:{padding:"0,10px"}},[n("h2",{staticClass:"title"},[t._v(t._s(e.data.title))]),n("div",{staticClass:"description"},[t._v(t._s(e.data.content))]),n("br"),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[n("router-link",{attrs:{to:"/post/"+e.id}},[t._v(" View ")])],1)]),n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[n("b-icon",{attrs:{icon:"suit-heart-fill"},on:{click:t.like}}),t._v(" Like It ")],1),n("span",[t._v(" "+t._s(e.data.like)+" ")]),n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[n("b-icon",{attrs:{icon:"emoji-frown-fill"},on:{click:t.dislike}}),t._v(" Boo It ")],1),n("span",[t._v(t._s(e.data.dislike)+" ")])])])])})),0)])},N=[],F=(n("d3b7"),n("159b"),n("1da1")),A=n("d4ec"),L=n("bee2"),V=(n("b0c0"),n("b65f"),n("96cf"),n("59ca")),z=(n("e71f"),n("ea7b"),n("588e"),{apiKey:"AIzaSyACNyzw6mAw_5CrFFGIBRTwk54xwoCEYEI",authDomain:"jsfinal-4a327.firebaseapp.com",projectId:"jsfinal-4a327",storageBucket:"jsfinal-4a327.appspot.com",messagingSenderId:"147466836060",appId:"1:147466836060:web:b6c15c1c93c2535ef7ae99"}),B=function(){function t(){Object(A["a"])(this,t),V["initializeApp"](z),this.firestore=V["firestore"](),this.storage=V["storage"]()}return Object(L["a"])(t,[{key:"getAllPosts",value:function(){return V["firestore"]().collection("posts").get()}},{key:"getCurrentPost",value:function(t){return V["firestore"]().collection("posts").doc(t).get()}},{key:"createPost",value:function(t){return V["firestore"]().collection("posts").add(t)}},{key:"updatePost",value:function(t,e){return V["firestore"]().collection("posts").doc(t).set(e,{merge:!0})}},{key:"deletePost",value:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=V["storage"]().ref(),t.next=3,V["firestore"]().collection("posts").doc(e).delete().catch((function(t){console.log(t)}));case 3:return console.log("Post Deleted"),t.next=6,a.child(n).delete().catch((function(t){console.log(t)}));case 6:console.log("Image Deleted");case 7:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"handleFileUpload",value:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e){var n,a,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=V["storage"]().ref(),o=a.child(e.name),r=o.put(e),t.next=5,new Promise((function(t){r.on("state_changed",(function(t){var e=t.bytesTransferred/t.totalBytes*100;console.log(Math.trunc(e))}),(function(t){console.log(t+"error with promise")}),Object(F["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.getDownloadURL();case 2:a=e.sent,n=a,t();case 5:case"end":return e.stop()}}),e)}))))}));case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),U=new B,q={name:"Main",components:{},data:function(){return{allposts:[]}},created:function(){var t=this;U.getAllPosts().then((function(e){e.forEach((function(e){console.log(e.data());var n={id:e.id,data:e.data()};t.allposts.push(n)}))})).catch((function(t){console.log(t)}))},methods:{like:function(t){t.preventDefault();var e=this.post.like+1;U.updatePost(this.postId,e)},dislike:function(t){t.preventDefault();var e=this.post.dislike+1;U.updatePost(this.postId,e)}}},J=q,G=(n("c266"),Object(u["a"])(J,S,N,!1,null,null,null)),H=G.exports,K={name:"ProjectsView",components:{mainComponent:H}},W=K,X=Object(u["a"])(W,R,M,!1,null,null,null),Y=X.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teams"},[t._m(0),n("team-component")],1)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[n("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[n("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Multiple brains work better than one!")]),n("a",{staticClass:"btn btn-outline-secondary",attrs:{id:"createNewProjectButton",href:"/newTeam"}},[t._v(" Create New Team")])])])}],tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table table-hover table-xl mb-0"},[n("thead",[n("tr",[n("th",[t._v("Team Name")]),n("th",[t._v("Team Members")])])]),n("tbody",[n("tr",[n("td",{staticClass:"text-truncate"},[t._v("Project X")]),n("td",{staticClass:"text-truncate"},[n("ul",{staticClass:"list-unstyled order-list m-b-0"},[n("li",{staticClass:"team-member team-member-sm"},[n("img",{staticClass:"rounded-circle",attrs:{src:"https://bootdey.com/img/Content/avatar/avatar8.png",alt:"user","data-toggle":"tooltip",title:"","data-original-title":"Wildan Ahdian"}})]),n("li",{staticClass:"team-member team-member-sm"},[n("img",{staticClass:"rounded-circle",attrs:{src:"https://bootdey.com/img/Content/avatar/avatar7.png",alt:"user","data-toggle":"tooltip",title:"","data-original-title":"John Deo"}})]),n("li",{staticClass:"team-member team-member-sm"},[n("img",{staticClass:"rounded-circle",attrs:{src:"https://bootdey.com/img/Content/avatar/avatar1.png",alt:"user","data-toggle":"tooltip",title:"","data-original-title":"Sarah Smith"}})])])])])])])])}],nt={},at=nt,ot=(n("b62f"),Object(u["a"])(at,tt,et,!1,null,null,null)),rt=ot.exports,st={name:"teamView",components:{teamComponent:rt}},it=st,lt=Object(u["a"])(it,Q,Z,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("add-post")],1)},dt=[],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6",attrs:{id:"newProjectContainer"}},[n("b-form",{on:{submit:t.createPost}},[n("p",[t._v("Lets create this project")]),n("b-form-group",{attrs:{label:"Projec Title"}},[n("b-form-input",{attrs:{type:"text",id:"title",placeholder:"Name your project"},model:{value:t.newPost.title,callback:function(e){t.$set(t.newPost,"title",e)},expression:"newPost.title"}})],1),n("b-form-group",{attrs:{label:"Project Description"}},[n("b-form-input",{attrs:{type:"text",id:"content",placeholder:"Describe your project"},model:{value:t.newPost.content,callback:function(e){t.$set(t.newPost,"content",e)},expression:"newPost.content"}})],1),n("b-form-group",{attrs:{label:"Project Image"}}),n("div",{staticClass:"form-controL"},[n("input",{staticClass:"btn btn-outline-secondary",attrs:{type:"file",id:"cover"},on:{change:t.handleFile}})]),n("br"),n("b-button",{attrs:{type:"submit",value:"Create Post"}},[t._v(" Create New Project")])],1)],1)},mt=[],ft={name:"AddPost",data:function(){return{newPost:{title:"",content:"",cover:"",like:"",dislike:""}}},methods:{createPost:function(t){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,U.handleFileUpload(e.newPost.cover);case 3:return a=n.sent,n.next=6,U.storage.refFromURL(a);case 6:o=n.sent,r={title:e.newPost.title,content:e.newPost.content,cover:a,like:0,dislike:0,fileref:o.location.path},U.createPost(r).then((function(){e.$router.push({name:"Projects"})})).catch((function(t){return console.log(t)}));case 9:case"end":return n.stop()}}),n)})))()},handleFile:function(t){this.newPost.cover=t.target.files[0]}}},bt=ft,vt=(n("2c64"),Object(u["a"])(bt,pt,mt,!1,null,null,null)),ht=vt.exports,gt={name:"NewProjectView",components:{addPost:ht},props:{}},wt=gt,Pt=Object(u["a"])(wt,ut,dt,!1,null,null,null),_t=Pt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"col-md-6"},[n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Image:","label-for":"input-1"}},[n("form",[n("div",{staticClass:"custom-file"},[n("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile"}}),n("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[t._v("Choose file")])])])]),n("b-form-group",{attrs:{id:"input-group-2",label:"Teams Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"Enter Teams name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Teams Description:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",placeholder:"Enter Teams description",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),n("b-form-group",{attrs:{id:"input-group-4",label:"Team:","label-for":"input-4"}},[n("b-form-input",{attrs:{id:"input-4",placeholder:"Enter team name",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)])},Ct=[],jt={name:"NewTeamsView",components:{},data:function(){return{form:{name:"",image:null,description:"",team:""}}}},xt=jt,kt=Object(u["a"])(xt,yt,Ct,!1,null,null,null),Ot=kt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"post-container",attrs:{id:"projectDetails"}},[n("h2",[t._v("Project Details ")]),n("hr"),n("h3",[t._v(t._s(t.postData.title)+" ")]),n("section",[n("img",{staticStyle:{width:"400px",height:"600px","object-fit":"scale-down"},attrs:{src:t.postData.cover}}),n("h5",[t._v(t._s(t.postData.content))])]),n("button",{staticClass:"btn btn-outline-secondary",on:{click:t.toggleEditMode}},[t._v(" Edit ")]),t.editMode?n("div",[n("b-form",{attrs:{id:"singlePost"},on:{submit:t.updatePost}},[n("br"),n("b-form-group",{attrs:{label:"Projec Title"}},[n("b-form-input",{attrs:{type:"text",id:"title"},model:{value:t.editPost.title,callback:function(e){t.$set(t.editPost,"title",e)},expression:"editPost.title"}})],1),n("b-form-group",{attrs:{label:"Projec Description"}},[n("b-form-input",{attrs:{type:"text",id:"content"},model:{value:t.editPost.content,callback:function(e){t.$set(t.editPost,"content",e)},expression:"editPost.content"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editPost.fileref,expression:"editPost.fileref"}],attrs:{type:"hidden",id:"fileref"},domProps:{value:t.editPost.fileref},on:{input:function(e){e.target.composing||t.$set(t.editPost,"fileref",e.target.value)}}}),n("input",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",value:"Update Post"}})],1),n("br"),n("button",{staticClass:"btn btn-danger",on:{click:t.deletePost}},[t._v("Delete Project")])],1):t._e()])])},Et=[],Dt={name:"Post",data:function(){return{postData:{},postId:this.$route.params.id,editMode:!1,editPost:{title:"",content:"",fileref:"",cover:""}}},created:function(){var t=this;U.getCurrentPost(this.postId).then((function(e){t.postData=e.data(),t.editPost.title=e.data().title,t.editPost.content=e.data().content,t.editPost.fileref=e.data().fileref})).catch((function(t){return console.log(t)}))},methods:{toggleEditMode:function(){this.editMode=!this.editMode},handleFile:function(t){this.newPost.cover=t.target.files[0]},updatePost:function(t){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a,o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.preventDefault(),""==e.editPost.cover){n.next=12;break}return n.next=4,U.handleFileUpload(e.editPost.cover);case 4:return a=n.sent,n.next=7,U.storage.refFromURL(a);case 7:o=n.sent,r={title:e.editPost.title,content:e.editPost.content,cover:a,fileref:o.location.path},U.updatePost(e.postId,r).then(Object(F["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=U.storage.ref(),t.next=3,n.child(e.editPost.fileref).delete().catch((function(t){return console.log(t)}));case 3:e.$router.go();case 4:case"end":return t.stop()}}),t)})))),n.next=14;break;case 12:s={title:e.editPost.title,content:e.editPost.content},U.updatePost(e.postId,s).then((function(){console.log("data has been updated"),e.$router.go()}));case 14:case"end":return n.stop()}}),n)})))()},deletePost:function(){var t=this;U.deletePost(this.postId,this.postData.fileref).then((function(){t.$router.push({name:"Projects"})})).catch((function(t){return console.log(t)}))}}},Tt=Dt,It=(n("02b1"),Object(u["a"])(Tt,$t,Et,!1,null,null,null)),Rt=It.exports;a["default"].use(P["a"]);var Mt=[{path:"/",name:"Home",component:k},{path:"/login",name:"Login",component:I},{path:"/projects",name:"Projects",component:Y},{path:"/teams",name:"Teams",component:ct},{path:"/newProject",name:"newProject",component:_t},{path:"/newTeam",name:"newTeam",component:Ot},{path:"/post/:id",name:"Post",component:Rt}],St=new P["a"]({mode:"history",base:"",routes:Mt}),Nt=St;n("f9e3"),n("2dd8");a["default"].use(h["a"]),a["default"].use(g["a"]),a["default"].use(w["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Nt,render:function(t){return t(v)}}).$mount("#app")},6503:function(t,e,n){},"7f46":function(t,e,n){},"85ec":function(t,e,n){},"8ce3":function(t,e,n){},"8ef5":function(t,e,n){},b62f:function(t,e,n){"use strict";n("6503")},c266:function(t,e,n){"use strict";n("3a7d")},da34:function(t,e,n){t.exports=n.p+"media/team.mp4"},df67:function(t,e,n){}});
//# sourceMappingURL=app.js.map