webpackJsonp([1],{"537w":function(t,i){},"7UGq":function(t,i){},Au1c:function(t,i){},Gb8q:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a={name:"App",data:function(){return{img_list:["https://i.imgur.com/9g8Snz6.jpg","https://i.imgur.com/rPCYQls.png","https://i.imgur.com/SuLzJZ3.png"]}},methods:{add:function(t){this.img_list.push(t),this.setLocal()},remove:function(t){this.img_list.splice(t,1),this.setLocal()},getLocal:function(){console.log(this.$localStorage.get("img_list")),this.img_list=this.$localStorage.get("img_list").split(",")},setLocal:function(){this.$localStorage.set("img_list",this.img_list),console.log(this.$localStorage.get("img_list"))}},mounted:function(){console.log(this.$localStorage.get("img_list")),this.$localStorage.get("img_list")&&this.getLocal()}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ui fixed top labeled icon menu"},[s("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[s("i",{staticClass:"home icon"}),t._v("配對\n    ")]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/fishing",exact:""}},[s("i",{staticClass:"question circle icon"}),t._v("釣魚\n    ")]),t._v(" "),t._m(0),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/edit",exact:"",title:"Setting"}},[s("i",{staticClass:"cogs icon"}),t._v("編輯照片\n    ")])],1),t._v(" "),s("router-view",{attrs:{img_list:t.img_list},on:{add:t.add,remove:t.remove}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"right item",attrs:{href:"https://github.com/bestian/elder/",title:"View it on Github"}},[i("i",{staticClass:"github icon"}),this._v("專案\n    ")])}]};var o=s("VU/8")(a,n,!1,function(t){s("Au1c")},null,null).exports,r=s("/ocq"),c={name:"HelloWorld",props:["img_list"],data:function(){return{a:0,b:0,c:0,w:0,speed:.25,hard:!1,msg:"看到相同的照片時，請按空白鍵或點擊某張圖"}},methods:{go:function(){this.w||(this.hard&&Math.floor(this.a)<Math.floor(this.a+Number(this.speed))&&(this.b=Math.floor(Math.random()*this.img_list.length),this.c=Math.floor(Math.random()*this.img_list.length)),this.a+=Number(this.speed))},check:function(){var t=Math.floor(this.a)%this.img_list.length;this.hard?t!==this.b&&t!==this.c&&this.b!==this.c||this.win():t===this.b&&this.win()},reset:function(){this.b=Math.floor(Math.random()*this.img_list.length),this.c=Math.floor(Math.random()*this.img_list.length),this.w=0},win:function(){this.w++,setTimeout(this.reset,3e3)}},mounted:function(){setInterval(this.go,500),this.reset(),window.addEventListener("keyup",this.check)}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hello"},[e("br"),t._v(" "),e("div",{staticClass:"ui equal width grid"},[e("div",{staticClass:"column",on:{click:function(i){t.check()}}},t._l(t.img_list,function(i,s){return e("img",{directives:[{name:"show",rawName:"v-show",value:Math.floor(t.a)%t.img_list.length==s,expression:"Math.floor(a) % img_list.length == index"}],key:s,staticClass:"a",attrs:{src:i}})})),t._v(" "),e("div",{staticClass:"column",on:{click:function(i){t.check()}}},[e("img",{staticClass:"a",attrs:{src:t.img_list[t.b]}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hard,expression:"hard"}],staticClass:"column",on:{click:function(i){t.check()}}},[e("img",{staticClass:"a",attrs:{src:t.img_list[t.c]}})])]),t._v(" "),e("h1",[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.w,expression:"!w"}]},[t._v(t._s(t.msg)+"\n      "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"ui center aligned segment"},[e("div",{staticClass:"ui form"},[e("div",{staticClass:"inline fields"},[e("div",{staticClass:"field"},[e("router-link",{staticClass:"ui huge button",attrs:{to:"/edit",exact:"",title:"Setting"}},[e("i",{staticClass:"cogs icon"}),t._v("編輯照片\n              ")])],1),t._v(" "),e("label",[t._v("速度：")]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"one",value:"0.25"},domProps:{checked:t._q(t.speed,"0.25")},on:{change:function(i){t.speed="0.25"}}}),t._v(" "),e("label",{attrs:{for:"one"}},[t._v("慢")])])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"two",value:"0.5"},domProps:{checked:t._q(t.speed,"0.5")},on:{change:function(i){t.speed="0.5"}}}),t._v(" "),e("label",{attrs:{for:"two"}},[t._v("中")])])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"three",value:"1"},domProps:{checked:t._q(t.speed,"1")},on:{change:function(i){t.speed="1"}}}),t._v(" "),e("label",{attrs:{for:"three"}},[t._v("快")])])]),t._v(" "),e("label",[t._v("難度：")]),t._v(" "),e("div",{staticClass:"ui slider checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.hard,expression:"hard"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.hard)?t._i(t.hard,null)>-1:t.hard},on:{change:function(i){var s=t.hard,e=i.target,a=!!e.checked;if(Array.isArray(s)){var n=t._i(s,null);e.checked?n<0&&(t.hard=s.concat([null])):n>-1&&(t.hard=s.slice(0,n).concat(s.slice(n+1)))}else t.hard=a}}}),t._v(" "),e("label",{attrs:{for:"checkbox"}},[t._v("較難")])])])])])])]),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.w,expression:"w"}],attrs:{id:"win1",src:s("u+ph")}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.w,expression:"w"}],attrs:{id:"win2",src:s("u+ph")}})])},staticRenderFns:[]};var h=s("VU/8")(c,l,!1,function(t){s("7UGq")},"data-v-567f4b7a",null).exports,u={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("h1",[s("router-link",{staticClass:"ui huge button",attrs:{to:"/",exact:""}},[s("i",{staticClass:"home icon"}),t._v("玩照片\n    ")])],1),t._v(" "),s("ol",t._l(t.img_list,function(i,e){return s("li",{key:e},[s("img",{attrs:{src:i},on:{click:function(s){t.url=i}}}),t._v(" "),s("a",{staticClass:"ui bottom attached red basic button",attrs:{title:"刪除"},on:{click:function(i){t.remove(e)}}},[s("i",{staticClass:"window close icon"}),t._v("刪除")])])})),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"ui action input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"新增圖片網址"},domProps:{value:t.url},on:{input:function(i){i.target.composing||(t.url=i.target.value)}}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{src:t.url}}),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"ui green button",on:{click:function(i){t.add(t.url),t.url=""}}},[s("i",{staticClass:"plus icon"}),t._v("新增照片")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.url,expression:"!url"}],staticClass:"ui blue button",attrs:{href:"https://imgur.com/",target:"_blank",title:"上傳照片"}},[s("i",{staticClass:"cloud upload icon"}),t._v("上傳照片")])])])])])},staticRenderFns:[]};var d=s("VU/8")({name:"Editor",props:["img_list"],data:function(){return{url:""}},methods:{add:function(t){this.$emit("add",t)},remove:function(t){this.$emit("remove",t)}}},u,!1,function(t){s("Gb8q")},"data-v-4e1b4e6f",null).exports,m={name:"Editor",props:["img_list"],data:function(){return{w:!1,winning:!1,fishs1:[],fishs2:[],face0:-1,face1:-1}},methods:{flip:function(t,i){0!==i||this.w||(this.face0=t),1!==i||this.w||(this.face1=t),this.w||this.fishs1[this.face0]!==this.fishs2[this.face1]?!this.w&&this.face0>-1&&this.face1>-1&&(this.w=!0,setTimeout(this.flipback,500)):(this.w=!0,setTimeout(this.remove,1e3))},isWin:function(){for(var t=!0,i=0;i<this.fishs1.length;i++)""!==this.fishs1[i]&&(t=!1);return t},remove:function(){this.fishs1[this.face0]="",this.fishs2[this.face1]="",this.flipback(),this.isWin()&&(this.win(),setTimeout(this.reset,3e3))},flipback:function(){this.face0=-1,this.face1=-1,this.w=!1},reset:function(){this.fishs1=this.img_list.slice().sort(function(){return Math.random()-.5}),this.fishs2=this.img_list.slice().sort(function(){return Math.random()-.5}),this.winning=!1},win:function(){this.winning=!0}},mounted:function(){this.reset()}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"ui grid"},t._l(t.fishs1,function(i,s){return e("div",{key:i,staticClass:"three wide column",class:[t.face0==s?"face":"back",i?"good":"null"],on:{click:function(i){t.flip(s,0)}}},[e("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:i}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!i,expression:"!f"}],staticClass:"big"},[t._v("x")])])})),t._v(" "),e("div",{staticClass:"ui grid"},t._l(t.fishs2,function(i,s){return e("div",{key:s,staticClass:"three wide r column",class:[t.face1==s?"face":"back",i?"good":"null"],on:{click:function(i){t.flip(s,1)}}},[e("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:i}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!i,expression:"!f"}],staticClass:"big"},[t._v("x")])])})),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.winning,expression:"winning"}],attrs:{id:"win1",src:s("u+ph")}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.winning,expression:"winning"}],attrs:{id:"win2",src:s("u+ph")}})])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"intro"},[i("br"),this._v(" "),i("h2",[this._v("點擊卡片，翻出相同的圖即可消去")])])}]};var f=s("VU/8")(m,v,!1,function(t){s("537w")},"data-v-08a7253a",null).exports;e.a.use(r.a);var g=new r.a({routes:[{path:"/",name:"Main",component:h},{path:"/edit",name:"Editor",component:d},{path:"/fishing",name:"Fishing",component:f}]}),p=s("UnSZ"),_=s.n(p);e.a.config.productionTip=!1,e.a.use(_.a),e.a.localStorage.set("someNumber",123),new e.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},"u+ph":function(t,i,s){t.exports=s.p+"static/img/animated-congratulation-image-0058.9afd611.gif"}},["NHnr"]);
//# sourceMappingURL=app.152735474d25808988b5.js.map