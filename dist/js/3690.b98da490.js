"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[3690],{7389:function(e,i,s){s.d(i,{Z:function(){return g}});var t=s(3396),d=s(9242),n=s(7139);const a={key:0,class:"container-nav-question"},o={key:0,class:"nav-question"},l={class:"overview-exam"},v=(0,t._)("span",{class:"nameUser"}," Họ và tên: Nguyễn Văn A ",-1),c=(0,t._)("span",{class:"navbar-list-question"}," Danh sách câu hỏi ",-1),r={class:"list-numerical-question"},u=["id","onClick"],p={class:"nav-hiden-display"},h={class:"icon-nav"};function m(e,i,s,m,f,_){return(0,t.wg)(),(0,t.iD)("div",a,[m.displayShrink?((0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(d.uT,{name:"slide-fade"},{default:(0,t.w5)((()=>[(0,t._)("div",l,[v,(0,t._)("div",null,[c,(0,t._)("div",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.numericalQuestion.data,((e,i)=>((0,t.wg)(),(0,t.iD)("div",{key:i,class:(0,n.C_)(m.classType[parseInt(e.type)]),id:"link_"+e.id,onClick:i=>_.moveToQuestion(e.page,e.id)},(0,n.zw)(i+1),11,u)))),128))])])])])),_:1})])):(0,t.kq)("",!0),(0,t._)("div",p,[(0,t._)("button",h,[(0,t._)("i",{class:"fa-solid fa-list-check",onClick:i[0]||(i[0]=e=>m.displayShrink=!m.displayShrink)})])])])}var f=s(4870),_={name:"NavbarListComponent",props:["numericalQuestion","render"],watch:{render(){this.reload=!1,console.log("OK"),this.$nextTick((()=>{this.reload=!0}))}},setup(){const e=(0,f.iH)(!0),i=(0,f.iH)(["stt-question answer-content-choice","stt-question answer-content-choice-checked","stt-question answer-content-choice-true","stt-question answer-content-choice-wrong"]),s=(0,f.iH)(!0),t=(0,f.iH)("class-nav");return{classType:i,reload:e,displayShrink:s,classNav:t}},methods:{moveToQuestion(e,i){console.log("In navbar"),console.log("Navbar page "+e),this.$emit("moveQuestion",e,"question_"+i)}},components:{Transition:d.uT}},b=s(89);const k=(0,b.Z)(_,[["render",m]]);var g=k},3690:function(e,i,s){s.r(i),s.d(i,{default:function(){return Re}});var t=s(3396),d=s(7139);const n=e=>((0,t.dD)("data-v-0ce5e66c"),e=e(),(0,t.Cn)(),e),a={key:0},o={class:"select-vehicle"},l={class:"box-select-vehicle"},v={class:"box-vehicle"},c={class:"box-button-select"},r={class:"box-button-select"},u={class:"board"},p=n((()=>(0,t._)("div",{class:"bottom-board"},[(0,t._)("div",{class:"scape"})],-1))),h={key:1},m={class:"board"},f=n((()=>(0,t._)("div",{class:"bottom-board"},[(0,t._)("div",{class:"scape"})],-1)));function _(e,i,s,n,_,b){const k=(0,t.up)("VueMultiselect"),g=(0,t.up)("QuestionComponent"),C=(0,t.up)("BackgroudReviewSpeed"),w=(0,t.up)("NavbarListComponent");return 1==n.step?((0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(C,{speed:_.speed},{vehicles:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",l,[(0,t._)("i",{class:"fa-solid fa-caret-left icon-move-select-vehicle",onClick:i[0]||(i[0]=e=>b.selectSpeed(-1))}),(0,t._)("div",v,[((0,t.wg)(),(0,t.j4)((0,t.LL)(n.selectedVehicleComponent)))]),(0,t._)("i",{class:"fa-solid fa-caret-right icon-move-select-vehicle",onClick:i[1]||(i[1]=e=>b.selectSpeed(1))})]),(0,t._)("div",c,[(0,t.Wm)(k,{class:"select-mode",modelValue:_.mode,"onUpdate:modelValue":i[2]||(i[2]=e=>_.mode=e),"open-direction":"bottom",options:_.modes,multiple:!1,"close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Chế độ",label:"name","track-by":"name","preselect-first":!1,onSelect:e.selectItems,onRemove:e.removeItems,"select-label":"","deselect-label":""},null,8,["modelValue","options","onSelect","onRemove"])]),(0,t._)("div",r,[(0,t._)("button",{class:"button-select",onClick:i[3]||(i[3]=(...e)=>b.nextStep&&b.nextStep(...e))}," OK ")])])])),"slot-board":(0,t.w5)((()=>[(0,t._)("div",{class:(0,d.C_)("notice-board board-even side-move-speed-"+_.speed)},[(0,t._)("div",u,[(0,t.Wm)(g,{question:_.question,type:"2"},null,8,["question"])]),p],2)])),_:1},8,["speed"])])):((0,t.wg)(),(0,t.iD)("div",h,[(0,t.Wm)(C,{speed:_.speed,stop:_.stop},(0,t.Nv)({vehicles:(0,t.w5)((()=>[(0,t._)("div",{class:"select-vehicle stop-run-vehicle",onClick:i[4]||(i[4]=(...e)=>b.statusMove&&b.statusMove(...e))},[((0,t.wg)(),(0,t.j4)((0,t.LL)(_.Component),{stop:_.stop},null,8,["stop"]))])])),"slot-board":(0,t.w5)((()=>[n.refresh?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,d.C_)("notice-board board-even  side-move-speed-"+_.speed+(_.stop?" pause":" run"))},[(0,t._)("div",m,[(0,t.Wm)(g,{question:_.question,type:"4",onSubmit:b.submit},null,8,["question","onSubmit"])]),f],2)):(0,t.kq)("",!0)])),_:2},[n.render?{name:"navlist",fn:(0,t.w5)((()=>[(0,t.Wm)(w,{numericalQuestion:_.numericalQuestion,onMoveQuestion:b.moveQuestion},null,8,["numericalQuestion","onMoveQuestion"])])),key:"0"}:void 0]),1032,["speed","stop"])]))}s(7658);var b=s(8883);const k={class:"container-car"},g=(0,t._)("div",{id:"front-spinner1"},null,-1),C=(0,t._)("div",{id:"front-spinner2"},null,-1),w=(0,t._)("div",{id:"front-spinner3"},null,-1),B=[g,C,w],q=(0,t._)("div",{id:"front-spinner1"},null,-1),y=(0,t._)("div",{id:"front-spinner2"},null,-1),S=(0,t._)("div",{id:"front-spinner3"},null,-1),x=[q,y,S],T=(0,t.uE)('<div id="carbody"><div id="ctop"></div><div id="cbottom"></div><div id="headlight"><div id="lightbeam"></div></div><div id="taillight"></div><div id="doorhandle"></div></div><div id="carshadow"></div>',2);function D(e,i,s,n,a,o){return(0,t.wg)(),(0,t.iD)("div",k,[(0,t._)("div",{id:"wheelfront",class:(0,d.C_)(s.stop?" pause":" run")},B,2),(0,t._)("div",{id:"wheelrear",class:(0,d.C_)(s.stop?" pause":" run")},x,2),T])}var Q={name:"CarComponent",props:["stop"]},Z=s(89);const V=(0,Z.Z)(Q,[["render",D]]);var I=V;const K=e=>((0,t.dD)("data-v-6057f1d3"),e=e(),(0,t.Cn)(),e),M={class:"container-bike"},H={class:"bike"},O={class:"frame-bike"},W=(0,t.uE)('<div class="frame-bike one" data-v-6057f1d3></div><div class="frame-bike two" data-v-6057f1d3></div><div class="frame-bike three" data-v-6057f1d3></div><div class="frame-bike four" data-v-6057f1d3></div><div class="frame-bike five" data-v-6057f1d3></div><div class="frame-bike six" data-v-6057f1d3></div><div class="frame-bike seat" data-v-6057f1d3></div>',7),L=K((()=>(0,t._)("div",{class:"frame-bike handle"},null,-1))),N={class:"wheel"},R={class:"wheel left"},$=(0,t.uE)('<div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div>',6),E=[$],U={class:"wheel right"},j=(0,t.uE)('<div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div><div class="spoke" data-v-6057f1d3></div>',6),A=[j];function z(e,i,s,n,a,o){return(0,t.wg)(),(0,t.iD)("div",M,[(0,t._)("div",H,[(0,t._)("div",O,[W,(0,t._)("div",{class:(0,d.C_)("frame-bike pedal"+(s.stop?" pause":" run"))},null,2),L]),(0,t._)("div",N,[(0,t._)("div",R,[(0,t._)("div",{class:(0,d.C_)(["spokes",s.stop?" pause":" run"])},E,2)]),(0,t._)("div",U,[(0,t._)("div",{class:(0,d.C_)(["spokes",s.stop?" pause":" run"])},A,2)])])])])}var P={name:"BikeComponent",props:["stop"]};const Y=(0,Z.Z)(P,[["render",z],["__scopeId","data-v-6057f1d3"]]);var F=Y;const G=e=>((0,t.dD)("data-v-7280f03a"),e=e(),(0,t.Cn)(),e),J={class:"container-snail"},X=G((()=>(0,t._)("h1",null,null,-1))),ee=G((()=>(0,t._)("div",{id:"snail"},[(0,t._)("div",{id:"shell"}),(0,t._)("div",{id:"slug"})],-1))),ie=G((()=>(0,t._)("div",{id:"slime"},null,-1))),se=[X,ee,ie];function te(e,i,s,d,n,a){return(0,t.wg)(),(0,t.iD)("div",J,se)}var de={name:"SnailComponent",props:["stop"]};const ne=(0,Z.Z)(de,[["render",te],["__scopeId","data-v-7280f03a"]]);var ae=ne,oe=s(7621);const le={class:"review-run"},ve=(0,t.uE)('<div id="dude" data-v-327aa604><div id="legl" class="leg" data-v-327aa604></div><div id="body" data-v-327aa604>^</div><div id="legr" class="leg" data-v-327aa604></div></div><div id="girl" data-v-327aa604><div id="arm1" data-v-327aa604></div><div id="arm2" data-v-327aa604></div><div id="hip1" data-v-327aa604><div id="knee1" data-v-327aa604></div></div><div id="hip2" data-v-327aa604><div id="knee2" data-v-327aa604></div></div></div>',2),ce=[ve];function re(e,i,s,d,n,a){return(0,t.wg)(),(0,t.iD)("div",le,ce)}var ue={name:"ReviewUniversalComponent",data(){return{speed:4,stop:!1}}};const pe=(0,Z.Z)(ue,[["render",re],["__scopeId","data-v-327aa604"]]);var he=pe;const me=e=>((0,t.dD)("data-v-3f816d3d"),e=e(),(0,t.Cn)(),e),fe={id:"carblock"},_e={id:"background"},be=me((()=>(0,t._)("div",{id:"stars"},null,-1))),ke=me((()=>(0,t._)("div",{id:"sun"},null,-1))),ge=me((()=>(0,t._)("div",{id:"moon"},[(0,t._)("div",{id:"mooncurve"})],-1))),Ce=(0,t.uE)('<div id="h2peak1" data-v-3f816d3d></div><div id="h2peak2" data-v-3f816d3d></div><div id="h2top" data-v-3f816d3d></div><div id="h2baseleft" data-v-3f816d3d></div><div id="h2baseright" data-v-3f816d3d></div>',5),we=[Ce],Be=me((()=>(0,t._)("div",{id:"h1top"},null,-1))),qe=me((()=>(0,t._)("div",{id:"h1baseleft"},null,-1))),ye=me((()=>(0,t._)("div",{id:"h1baseright"},null,-1))),Se=[Be,qe,ye],xe=me((()=>(0,t._)("div",{id:"cloud-front"},null,-1))),Te=me((()=>(0,t._)("div",{id:"tree"},null,-1))),De={class:"vehicle"},Qe={id:"road"};function Ze(e,i,s,n,a,o){return(0,t.wg)(),(0,t.iD)("div",fe,[(0,t.WI)(e.$slots,"navlist",{},void 0,!0),(0,t._)("div",_e,[(0,t.WI)(e.$slots,"slot-board",{},void 0,!0),be,ke,ge,(0,t._)("div",{id:"cloud-back",class:(0,d.C_)("time-speed-move-"+s.speed+(s.stop?" pause":" run"))},null,2),(0,t._)("div",{id:"hill2",class:(0,d.C_)("time-speed-move-"+s.speed+(s.stop?" pause":" run"))},we,2),(0,t._)("div",{id:"hill1",class:(0,d.C_)("time-speed-move-"+s.speed+(s.stop?" pause":" run"))},Se,2),xe,Te]),(0,t._)("div",De,[(0,t.WI)(e.$slots,"vehicles",{},void 0,!0)]),(0,t._)("div",Qe,[(0,t._)("div",{class:(0,d.C_)("road-lane speed-road-"+s.speed+(s.stop?" pause":" run"))},null,2)])])}var Ve={name:"BackgroudReviewSpeed",components:{},watch:{stop(){console.log(1==this.stop)}},mounted(){this.moveBoard()},props:["speed","stop"],data(){return{indexBoard:-2,boards:[{content:"Biển 1"},{content:"Biển 2"},{content:"Biển 3"},{content:"Biển 4"},{content:"Biển 5"},{content:"Biển 6"},{content:"Biển 7"},{content:"Biển 8"}]}},methods:{moveBoard(){this.indexBoard<this.boards.length-2?this.indexBoard+=2:this.indexBoard=0,setTimeout(this.moveBoard,2e4)},moveTest(){b.Z.push({name:"detailTest",params:{idTest:1}})}}};const Ie=(0,Z.Z)(Ve,[["render",Ze],["__scopeId","data-v-3f816d3d"]]);var Ke=Ie,Me=s(6404),He=s(7389),Oe=s(4870),We=s(6368),Le={name:"SpeedReviewComponent",components:{NavbarListComponent:He.Z,QuestionComponent:Me.Z,BackgroudReviewSpeed:Ke,CarComponent:I,BikeComponent:F,TurtleComponent:oe.Z,SnailComponent:ae,ReviewUniversalComponent:he,VueMultiselect:We.ZP},setup(){const e=(0,Oe.iH)(I),i=(0,Oe.iH)(1),s=(0,Oe.iH)(!0),t=(0,Oe.iH)(!0);return{selectedVehicleComponent:e,step:i,refresh:s,render:t}},mounted(){this.listSee=Array.from({length:this.questions.length},((e,i)=>i)),this.moveBoard()},watch:{mode(){console.log(this.mode)}},data(){return{modes:[{id:1,name:"Lần lượt"},{id:2,name:"Ngẫu nhiên"}],mode:{id:1,name:"Lần lượt"},stop:!1,speed:4,Component:null,indexBoard:-1,boards:[{content:"Biển 1"},{content:"Biển 2"},{content:"Biển 3"},{content:"Biển 4"},{content:"Biển 5"},{content:"Biển 6"},{content:"Biển 7"},{content:"Biển 8"}],numericalQuestion:{data:[{id:1,type:1,page:1},{id:2,type:1,page:1}]},questions:[{question:{question_id:1,type:2,content:"OK1",suggest:null},choices:[{id:1,content:"OK1"}],page:1},{question:{question_id:1,type:2,content:"OK2",suggest:null},choices:[{id:1,content:"OK1"},{id:2,content:"OK2"},{id:3,content:"OK3"},{id:4,content:"OK4"}],page:1}],done:[],listSee:[],question:{question:{question_id:1,type:2,content:"OK",suggest:null},choices:[],solutions:[]}}},methods:{statusMove(){this.stop?this.stop=!1:this.stop=!0},moveQuestion(e,i){console.log(e+i),this.question=this.questions[0],this.refresh=!1,this.$nextTick((()=>{this.refresh=!0,this.stop=!1}))},moveBoard(){if(1==this.mode.id)this.indexBoard<this.questions.length-1?this.indexBoard+=1:this.indexBoard=0;else if(this.listSee.length>=1){let e=Math.floor(Math.random()*this.listSee.length);this.indexBoard=this.listSee[e],this.question=this.questions[this.indexBoard],this.listSee.splice(e,1)}else{let e=this.questions.length,i=this.done.length;if(e==i)for(let t=0;t<this.questions.length;t++)this.listSee.push(t);else for(let t=0;t<this.questions.length;t++)this.done.includes(t)||this.listSee.push(t);let s=Math.floor(Math.random()*this.listSee.length);this.indexBoard=this.listSee[s],this.question=this.questions[this.indexBoard]}this.refresh=!1,this.$nextTick((()=>{this.refresh=!0})),setTimeout(this.moveBoard,2e4)},moveTest(){b.Z.push({name:"detailTest",params:{idTest:1}})},selectSpeed(e){switch(this.speed+=e,this.speed){case 6:this.selectedVehicleComponent=ae,this.speed=1;break;case 5:this.selectedVehicleComponent=he;break;case 4:this.selectedVehicleComponent=I;break;case 3:this.selectedVehicleComponent=F;break;case 2:this.selectedVehicleComponent=oe.Z;break;case 1:this.selectedVehicleComponent=ae;break;case 0:this.selectedVehicleComponent=I,this.speed=4;break}},nextStep(){this.Component=this.selectedVehicleComponent,this.step=2},submit(e){console.log(e),this.numericalQuestion.data[this.indexBoard].type=e?2:3,console.log(this.numericalQuestion.data),this.render=!1,this.$nextTick((()=>{this.render=!0})),this.done.push(this.indexBoard)}}};const Ne=(0,Z.Z)(Le,[["render",_],["__scopeId","data-v-0ce5e66c"]]);var Re=Ne},7621:function(e,i,s){s.d(i,{Z:function(){return r}});var t=s(3396);const d={class:"container-turtle"},n=(0,t.uE)('<div class="totaal" data-v-2b6e0f58><div class="lichaam" data-v-2b6e0f58></div><div class="hoofd" data-v-2b6e0f58><div class="oog" data-v-2b6e0f58></div></div><div class="poot_voor" data-v-2b6e0f58></div><div class="poot_achter" data-v-2b6e0f58></div><div class="staart" data-v-2b6e0f58></div></div><div class="quote" data-v-2b6e0f58></div>',2),a=[n];function o(e,i,s,n,o,l){return(0,t.wg)(),(0,t.iD)("div",d,a)}var l={name:"TurtleComponent"},v=s(89);const c=(0,v.Z)(l,[["render",o],["__scopeId","data-v-2b6e0f58"]]);var r=c}}]);
//# sourceMappingURL=3690.b98da490.js.map