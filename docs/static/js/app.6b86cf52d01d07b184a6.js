webpackJsonp([1],{"+ffn":function(t,i){},"1G/Q":function(t,i){},"32n6":function(t,i,e){t.exports=e.p+"static/img/th.ccb2778.jpg"},"8IJ6":function(t,i){},"9p1f":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),a=e("mvHQ"),n=e.n(a),r={name:"App",data:function(){return{card_list:[{img:"https://i.imgur.com/9g8Snz6.jpg",name:"天使"},{img:"https://i.imgur.com/rPCYQls.png",name:"圓臉"},{img:"https://i.imgur.com/SuLzJZ3.png",name:"蟲蟲"}]}},methods:{add:function(t,i){this.card_list.push({img:t,name:i}),this.setLocal()},remove:function(t){this.card_list.splice(t,1),this.setLocal()},getLocal:function(){this.card_list=JSON.parse(this.$localStorage.get("card_list"))},setLocal:function(){this.$localStorage.set("card_list",n()(this.card_list)),console.log(this.$localStorage.get("card_list"))}},mounted:function(){console.log(this.$localStorage.get("card_list")),this.$localStorage.get("card_list")&&this.getLocal()}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui fixed top labeled icon menu"},[e("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[e("i",{staticClass:"home icon"}),t._v("配對\n    ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/fishing",exact:""}},[e("i",{staticClass:"question circle icon"}),t._v("釣魚\n    ")]),t._v(" "),t._m(0),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/edit",exact:"",title:"Setting"}},[e("i",{staticClass:"cogs icon"}),t._v("編輯照片\n    ")])],1),t._v(" "),e("router-view",{attrs:{card_list:t.card_list},on:{add:t.add,remove:t.remove}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"right item",attrs:{href:"https://github.com/bestian/elder/",title:"View it on Github"}},[i("i",{staticClass:"github icon"}),this._v("專案\n    ")])}]};var o=e("VU/8")(r,c,!1,function(t){e("1G/Q")},null,null).exports,l=e("/ocq"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticClass:"page"},[i("div",{staticClass:"ui image card"},[i("img",{attrs:{src:e("32n6")}}),this._v(" "),i("h1",[this._v("讚!")])])])])}]};var d=e("VU/8")({name:"win",data:function(){return{}}},h,!1,function(t){e("rzWb")},"data-v-3aa9cc89",null).exports,u={name:"HelloWorld",props:["card_list"],components:{win:d},data:function(){return{a:0,b:0,c:0,w:0,speed:.25,hard:!1,msg:"看到相同的照片時，請按空白鍵或點擊某張圖"}},methods:{go:function(){this.w||(this.hard&&Math.floor(this.a)<Math.floor(this.a+Number(this.speed))&&(this.b=Math.floor(Math.random()*this.card_list.length),this.c=Math.floor(Math.random()*this.card_list.length)),this.a+=Number(this.speed))},check:function(){var t=Math.floor(this.a)%this.card_list.length;this.hard?t!==this.b&&t!==this.c&&this.b!==this.c||this.win():t===this.b&&this.win()},reset:function(){this.b=Math.floor(Math.random()*this.card_list.length),this.c=Math.floor(Math.random()*this.card_list.length),this.w=0},win:function(){this.w++,setTimeout(this.reset,3e3)}},mounted:function(){setInterval(this.go,500),this.reset(),window.addEventListener("keyup",this.check)}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hello"},[e("br"),t._v(" "),e("div",{staticClass:"ui equal width grid"},[e("div",{staticClass:"column",on:{click:function(i){t.check()}}},t._l(t.card_list,function(i,s){return e("img",{directives:[{name:"show",rawName:"v-show",value:Math.floor(t.a)%t.card_list.length==s,expression:"Math.floor(a) % card_list.length == index"}],key:s,staticClass:"a",attrs:{src:i.img}})})),t._v(" "),e("div",{staticClass:"column",on:{click:function(i){t.check()}}},[e("img",{staticClass:"a",attrs:{src:t.card_list[t.b].img}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hard,expression:"hard"}],staticClass:"column",on:{click:function(i){t.check()}}},[e("img",{staticClass:"a",attrs:{src:t.card_list[t.c].img}})])]),t._v(" "),e("h1",[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.w,expression:"!w"}]},[t._v(t._s(t.msg)+"\n      "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"ui center aligned segment"},[e("div",{staticClass:"ui form"},[e("div",{staticClass:"inline fields"},[e("div",{staticClass:"field"},[e("router-link",{staticClass:"ui huge button",attrs:{to:"/edit",exact:"",title:"Setting"}},[e("i",{staticClass:"cogs icon"}),t._v("編輯照片\n              ")])],1),t._v(" "),e("label",[t._v("速度：")]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"one",value:"0.25"},domProps:{checked:t._q(t.speed,"0.25")},on:{change:function(i){t.speed="0.25"}}}),t._v(" "),e("label",{attrs:{for:"one"}},[t._v("慢")])])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"two",value:"0.5"},domProps:{checked:t._q(t.speed,"0.5")},on:{change:function(i){t.speed="0.5"}}}),t._v(" "),e("label",{attrs:{for:"two"}},[t._v("中")])])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"ui radio checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{type:"radio",id:"three",value:"1"},domProps:{checked:t._q(t.speed,"1")},on:{change:function(i){t.speed="1"}}}),t._v(" "),e("label",{attrs:{for:"three"}},[t._v("快")])])]),t._v(" "),e("label",[t._v("難度：")]),t._v(" "),e("div",{staticClass:"ui slider checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.hard,expression:"hard"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.hard)?t._i(t.hard,null)>-1:t.hard},on:{change:function(i){var e=t.hard,s=i.target,a=!!s.checked;if(Array.isArray(e)){var n=t._i(e,null);s.checked?n<0&&(t.hard=e.concat([null])):n>-1&&(t.hard=e.slice(0,n).concat(e.slice(n+1)))}else t.hard=a}}}),t._v(" "),e("label",{attrs:{for:"checkbox"}},[t._v("較難")])])])])])])]),t._v(" "),e("win",{directives:[{name:"show",rawName:"v-show",value:t.w,expression:"w"}]})],1)},staticRenderFns:[]};var m=e("VU/8")(u,v,!1,function(t){e("9p1f")},"data-v-43e0de62",null).exports,f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",[e("router-link",{staticClass:"ui huge button",attrs:{to:"/",exact:""}},[e("i",{staticClass:"home icon"}),t._v("玩照片\n    ")])],1),t._v(" "),e("ol",t._l(t.card_list,function(i,s){return e("li",{key:s},[e("img",{attrs:{src:i.img},on:{click:function(e){t.url=i.img,t.name=i.name}}}),t._v(" "),e("a",{staticClass:"ui bottom attached red basic button",attrs:{title:"刪除"},on:{click:function(i){t.remove(s)}}},[e("i",{staticClass:"window close icon"}),t._v("刪除"+t._s(i.name))])])})),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"ui action input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"新增圖片網址"},domProps:{value:t.url},on:{input:function(i){i.target.composing||(t.url=i.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"新增名字"},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{src:t.url}}),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"ui green button",on:{click:function(i){t.add(t.url,t.name),t.url="",t.name=""}}},[e("i",{staticClass:"plus icon"}),t._v("新增照片")]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:!t.url,expression:"!url"}],staticClass:"ui blue button",attrs:{href:"https://imgur.com/",target:"_blank",title:"上傳照片"}},[e("i",{staticClass:"cloud upload icon"}),t._v("上傳照片")])])])])])},staticRenderFns:[]};var p=e("VU/8")({name:"Editor",props:["card_list"],data:function(){return{url:"",name:""}},methods:{add:function(t,i){this.$emit("add",t,i)},remove:function(t){this.$emit("remove",t)}}},f,!1,function(t){e("8IJ6")},"data-v-1dd50f07",null).exports,_={name:"Fishing",props:["card_list"],components:{win:d},data:function(){return{w:!1,winning:!1,fishs1:[],fishs2:[],face0:-1,face1:-1}},methods:{flip:function(t,i){0!==i||this.w||(this.face0=t),1!==i||this.w||(this.face1=t),this.w||this.fishs1[this.face0]!==this.fishs2[this.face1]?!this.w&&this.face0>-1&&this.face1>-1&&(this.w=!0,setTimeout(this.flipback,500)):(this.w=!0,setTimeout(this.remove,1e3))},isWin:function(){for(var t=!0,i=0;i<this.fishs1.length;i++)""!==this.fishs1[i]&&(t=!1);return t},remove:function(){this.fishs1[this.face0]="",this.fishs2[this.face1]="",this.flipback(),this.isWin()&&(this.win(),setTimeout(this.reset,3e3))},flipback:function(){this.face0=-1,this.face1=-1,this.w=!1},reset:function(){this.fishs1=this.card_list.slice().sort(function(){return Math.random()-.5}).map(function(t){return t.img}),this.fishs2=this.card_list.slice().sort(function(){return Math.random()-.5}).map(function(t){return t.img}),this.winning=!1},win:function(){this.winning=!0}},mounted:function(){this.reset()}},g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"ui grid"},t._l(t.fishs1,function(i,s){return e("div",{key:i+s,staticClass:"three wide column",class:[t.face0==s?"face":"back",i?"good":"null"],on:{click:function(i){t.flip(s,0)}}},[e("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:i}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!i,expression:"!f"}],staticClass:"big"},[t._v("x")])])})),t._v(" "),e("div",{staticClass:"ui grid"},t._l(t.fishs2,function(i,s){return e("div",{key:s,staticClass:"three wide r column",class:[t.face1==s?"face":"back",i?"good":"null"],on:{click:function(i){t.flip(s,1)}}},[e("img",{class:t.fishs1[t.face0]==t.fishs2[t.face1]?"gold":"",attrs:{src:i}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!i,expression:"!f"}],staticClass:"big"},[t._v("x")])])})),t._v(" "),e("win",{directives:[{name:"show",rawName:"v-show",value:t.winning,expression:"winning"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"intro"},[i("br"),this._v(" "),i("h2",[this._v("點擊卡片，翻出相同的圖即可消去")])])}]};var w=e("VU/8")(_,g,!1,function(t){e("+ffn")},"data-v-8fdfa938",null).exports;s.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"Main",component:m},{path:"/edit",name:"Editor",component:p},{path:"/fishing",name:"Fishing",component:w}]}),C=e("UnSZ"),k=e.n(C);s.a.config.productionTip=!1,s.a.use(k.a),s.a.localStorage.set("someNumber",123),new s.a({el:"#app",router:b,components:{App:o},template:"<App/>"})},rzWb:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.6b86cf52d01d07b184a6.js.map