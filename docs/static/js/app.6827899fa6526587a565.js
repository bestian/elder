webpackJsonp([1],{"32n6":function(t,s,i){t.exports=i.p+"static/img/th.ccb2778.jpg"},"8IJ6":function(t,s){},"8bzE":function(t,s){},Fd83:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a=i("mvHQ"),n=i.n(a),c={name:"App",data:function(){return{card_list:[{img:"https://i.imgur.com/9g8Snz6.jpg",name:"天使"},{img:"https://i.imgur.com/rPCYQls.png",name:"圓臉"},{img:"https://i.imgur.com/SuLzJZ3.png",name:"蟲蟲"}]}},methods:{add:function(t,s){this.card_list.push({img:t,name:s}),this.setLocal()},remove:function(t){this.card_list.splice(t,1),this.setLocal()},getLocal:function(){this.card_list=JSON.parse(this.$localStorage.get("card_list"))},setLocal:function(){this.$localStorage.set("card_list",n()(this.card_list)),console.log(this.$localStorage.get("card_list"))}},mounted:function(){console.log(this.$localStorage.get("card_list")),this.$localStorage.get("card_list")&&this.getLocal()}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"ui fixed top labeled icon menu"},[i("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[i("i",{staticClass:"home icon"}),t._v("配對遊戲\n    ")]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/fishing",exact:""}},[i("i",{staticClass:"question circle icon"}),t._v("釣魚遊戲\n    ")]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/edit",exact:"",title:"Setting"}},[i("i",{staticClass:"cogs icon"}),t._v("編輯照片\n    ")]),t._v(" "),t._m(0)],1),t._v(" "),i("router-view",{attrs:{card_list:t.card_list},on:{add:t.add,remove:t.remove}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"right item",attrs:{href:"https://github.com/bestian/elder/",title:"View it on Github"}},[s("i",{staticClass:"github icon"}),this._v("專案頁\n    ")])}]};var o=i("VU/8")(c,r,!1,function(t){i("Fd83")},null,null).exports,l=i("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"page"},[s("div",{staticClass:"ui image card"},[s("img",{attrs:{src:i("32n6")}}),this._v(" "),s("h1",[this._v("讚!")])])])])}]};var h=i("VU/8")({name:"win",data:function(){return{}}},d,!1,function(t){i("rzWb")},"data-v-3aa9cc89",null).exports,u={name:"HelloWorld",props:["card_list"],components:{win:h},data:function(){return{a:0,b:0,c:0,w:0,speed:.25,hard:!1,msg:"看到兩者相同時，請按空白鍵或圖"}},methods:{go:function(){this.w||(this.hard&&Math.floor(this.a)<Math.floor(this.a+Number(this.speed))&&(this.b=Math.floor(Math.random()*this.card_list.length),this.c=Math.floor(Math.random()*this.card_list.length)),this.a+=Number(this.speed))},check:function(){var t=Math.floor(this.a)%this.card_list.length;this.hard?t!==this.b&&t!==this.c&&this.b!==this.c||this.win():t===this.b&&this.win()},reset:function(){this.b=Math.floor(Math.random()*this.card_list.length),this.c=Math.floor(Math.random()*this.card_list.length),this.w=0},win:function(){this.w++,setTimeout(this.reset,3e3)}},mounted:function(){setInterval(this.go,500),this.reset(),window.addEventListener("keyup",this.check)}},v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hello"},[i("br"),t._v(" "),i("div",{staticClass:"ui equal width grid"},[i("div",{staticClass:"column",on:{click:function(s){t.check()}}},[i("div",{staticClass:"ui card"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hard,expression:"!hard"}],staticClass:"content"},[i("span",{staticClass:"header"},[t._v(t._s(t.card_list[Math.floor(t.a)%t.card_list.length].name))])]),t._v(" "),i("div",{staticClass:"image"},[i("img",{staticClass:"a",attrs:{src:t.card_list[Math.floor(t.a)%t.card_list.length].img}})])])]),t._v(" "),i("div",{staticClass:"column",on:{click:function(s){t.check()}}},[i("div",{staticClass:"ui card"},[i("div",{staticClass:"content"},[i("span",{staticClass:"header"},[t._v(t._s(t.card_list[t.b].name))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hard,expression:"!hard"}],staticClass:"image"},[i("img",{staticClass:"a",attrs:{src:t.card_list[t.b].img}})])])]),t._v(" "),t.hard?i("div",{staticClass:"column",on:{click:function(s){t.check()}}},[i("div",{staticClass:"ui card"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hard,expression:"!hard"}],staticClass:"content"},[i("span",{staticClass:"header"},[t._v(t._s(t.card_list[t.c].name))])]),t._v(" "),i("div",{staticClass:"image"},[i("img",{staticClass:"a",attrs:{src:t.card_list[t.c].img}})])])]):t._e()]),t._v(" "),i("h1",[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.w,expression:"!w"}]},[t._v(t._s(t.msg)+"\n      "),i("br"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"ui center aligned segment"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"inline fields"},[i("div",{staticClass:"field"},[i("router-link",{staticClass:"ui huge button",attrs:{to:"/edit",exact:"",title:"Setting"}},[i("i",{staticClass:"cogs icon"}),t._v("編輯照片\n              ")])],1),t._v(" "),i("label",[t._v("速度：")]),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"ui radio checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"one",value:"0.25"},domProps:{checked:t._q(t.speed,"0.25")},on:{change:function(s){t.speed="0.25"}}}),t._v(" "),i("label",{attrs:{for:"one"}},[t._v("慢")])])]),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"ui radio checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"two",value:"0.5"},domProps:{checked:t._q(t.speed,"0.5")},on:{change:function(s){t.speed="0.5"}}}),t._v(" "),i("label",{attrs:{for:"two"}},[t._v("中")])])]),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"ui radio checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"three",value:"1"},domProps:{checked:t._q(t.speed,"1")},on:{change:function(s){t.speed="1"}}}),t._v(" "),i("label",{attrs:{for:"three"}},[t._v("快")])])]),t._v(" "),i("label",[t._v("難度：")]),t._v(" "),i("div",{staticClass:"ui slider checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.hard,expression:"hard"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.hard)?t._i(t.hard,null)>-1:t.hard},on:{change:function(s){var i=t.hard,e=s.target,a=!!e.checked;if(Array.isArray(i)){var n=t._i(i,null);e.checked?n<0&&(t.hard=i.concat([null])):n>-1&&(t.hard=i.slice(0,n).concat(i.slice(n+1)))}else t.hard=a}}}),t._v(" "),i("label",{attrs:{for:"checkbox"}},[t._v("較難")])])])])])])]),t._v(" "),i("win",{directives:[{name:"show",rawName:"v-show",value:t.w,expression:"w"}]})],1)},staticRenderFns:[]};var m=i("VU/8")(u,v,!1,function(t){i("8bzE")},"data-v-55643cc0",null).exports,f={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h1",[i("router-link",{staticClass:"ui huge button",attrs:{to:"/",exact:""}},[i("i",{staticClass:"home icon"}),t._v("玩照片\n    ")])],1),t._v(" "),i("ol",t._l(t.card_list,function(s,e){return i("li",{key:e},[i("img",{attrs:{src:s.img},on:{click:function(i){t.url=s.img,t.name=s.name}}}),t._v(" "),i("a",{staticClass:"ui bottom attached red basic button",attrs:{title:"刪除"},on:{click:function(s){t.remove(e)}}},[i("i",{staticClass:"window close icon"}),t._v("刪除"+t._s(s.name))])])})),t._v(" "),i("ul",[i("li",[i("div",{staticClass:"ui action input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"新增圖片網址"},domProps:{value:t.url},on:{input:function(s){s.target.composing||(t.url=s.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"新增名字"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{src:t.url}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"ui green button",on:{click:function(s){t.add(t.url,t.name),t.url="",t.name=""}}},[i("i",{staticClass:"plus icon"}),t._v("新增照片")]),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:!t.url,expression:"!url"}],staticClass:"ui blue button",attrs:{href:"https://imgur.com/",target:"_blank",title:"上傳照片"}},[i("i",{staticClass:"cloud upload icon"}),t._v("上傳照片")])])])])])},staticRenderFns:[]};var _=i("VU/8")({name:"Editor",props:["card_list"],data:function(){return{url:"",name:""}},methods:{add:function(t,s){this.$emit("add",t,s)},remove:function(t){this.$emit("remove",t)}}},f,!1,function(t){i("8IJ6")},"data-v-1dd50f07",null).exports,p={name:"Fishing",props:["card_list"],components:{win:h},data:function(){return{w:!1,winning:!1,fishs1:[],fishs2:[],face0:-1,face1:-1}},methods:{flip:function(t,s){0!==s||this.w||(this.face0=t),1!==s||this.w||(this.face1=t),this.w||this.fishs1[this.face0].img!==this.fishs2[this.face1].img?!this.w&&this.face0>-1&&this.face1>-1&&(this.w=!0,setTimeout(this.flipback,500)):(this.w=!0,setTimeout(this.remove,1e3))},isWin:function(){for(var t=!0,s=0;s<this.fishs1.length;s++)""!==this.fishs1[s].img&&(t=!1);return t},remove:function(){this.fishs1[this.face0]={img:"",name:""},this.fishs2[this.face1]={img:"",name:""},this.flipback(),this.isWin()&&(this.win(),setTimeout(this.reset,3e3))},flipback:function(){this.face0=-1,this.face1=-1,this.w=!1},reset:function(){this.fishs1=this.card_list.slice().sort(function(){return Math.random()-.5}),this.fishs2=this.card_list.slice().sort(function(){return Math.random()-.5}),this.winning=!1},win:function(){this.winning=!0}},mounted:function(){this.reset()}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"ui grid"},t._l(t.fishs1,function(s,e){return i("div",{key:s.img+e,staticClass:"three wide column",class:[t.face0==e?"face":"back",s.img?"good":"null"],on:{click:function(s){t.flip(e,0)}}},[i("div",{staticClass:"ui centered card"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hard,expression:"!hard"}],staticClass:"content"},[i("span",{staticClass:"header"},[t._v(t._s(t.face0==e?s.name:"?"))])]),t._v(" "),i("div",{staticClass:"image"},[i("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:s.img}})])])])})),t._v(" "),i("div",{staticClass:"ui grid"},t._l(t.fishs2,function(s,e){return i("div",{key:e,staticClass:"three wide r column",class:[t.face1==e?"face":"back",s.img?"good":"null"],on:{click:function(s){t.flip(e,1)}}},[i("div",{staticClass:"ui centered card"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hard,expression:"!hard"}],staticClass:"content"},[i("span",{staticClass:"header"},[t._v(t._s(t.face1==e?s.name:"?"))])]),t._v(" "),i("div",{staticClass:"image"},[i("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:s.img}})])])])})),t._v(" "),i("win",{directives:[{name:"show",rawName:"v-show",value:t.winning,expression:"winning"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"intro"},[s("br"),this._v(" "),s("h2",[this._v("點擊卡片，翻出相同的圖即可消去")])])}]};var w=i("VU/8")(p,g,!1,function(t){i("jt9E")},"data-v-4ea279e4",null).exports;e.a.use(l.a);var C=new l.a({routes:[{path:"/",name:"Main",component:m},{path:"/edit",name:"Editor",component:_},{path:"/fishing",name:"Fishing",component:w}]}),b=i("UnSZ"),k=i.n(b);e.a.config.productionTip=!1,e.a.use(k.a),e.a.localStorage.set("someNumber",123),new e.a({el:"#app",router:C,components:{App:o},template:"<App/>"})},jt9E:function(t,s){},rzWb:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6827899fa6526587a565.js.map