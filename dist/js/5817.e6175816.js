"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[5817],{6015:function(e,t,i){i.d(t,{$2:function(){return a},Jp:function(){return l},Yq:function(){return c},_P:function(){return h},ab:function(){return o},hW:function(){return p},sp:function(){return r},yD:function(){return s}});var n=i(4471);function r(e){return(0,n.Z)({url:"/test/list",method:"get",data:e})}function s(e){return(0,n.Z)({url:"/test/"+e+"/detail",method:"get"})}function a(e){return(0,n.Z)({url:"/test/create",method:"post",data:e})}function o(e){return(0,n.Z)({url:"/test/update",method:"put",data:e})}function c(e,t){return(0,n.Z)({url:"/test/"+e+"/import",method:"post",data:t})}function l(e,t){return(0,n.Z)({url:"/test/"+e+"/nummericalQuestion",method:"get",params:t})}function h(e,t){return(0,n.Z)({url:"/test/"+e+"/exams",method:"get",params:t})}function p(e){return(0,n.Z)({url:"/test/"+e+"/report",method:"get"})}},5817:function(e,t,i){i.r(t),i.d(t,{default:function(){return O}});var n=i(3396),r=i(7139);const s={key:0,class:"container-report-exam"},a=(0,n._)("h2",null,"Báo cáo bài thi",-1),o=(0,n._)("div",{class:"list-type-report"},[(0,n._)("button",{class:"type-report"},"Lượt làm bài"),(0,n._)("button",{class:"type-report"},"Điểm trung bình")],-1),c=(0,n._)("h3",null,"Số lượt làm bài",-1),l={id:"chart-amount"},h=(0,n._)("h2",null,"Báo cáo theo chương",-1),p={class:"box-filter"},u={class:"content-filters"},m=(0,n._)("div",{class:"icon-search"},[(0,n._)("i",{class:"fa-solid fa-magnifying-glass"})],-1),d={class:"list-type-report"},B={key:0,class:"chart-percent",id:"chart-percent"};function f(e,t,i,f,g,b){const y=(0,n.up)("apexchart"),v=(0,n.up)("VueMultiselect");return f.render?((0,n.wg)(),(0,n.iD)("div",s,[a,o,c,(0,n._)("div",l,[(0,n.Wm)(y,{type:"bar",height:"350",options:g.amount.chartOptions,series:g.amount.series},null,8,["options","series"])]),h,(0,n._)("div",p,[(0,n._)("div",u,[(0,n.Wm)(v,{class:(0,r.C_)(e.colorSelect),modelValue:g.filterChapters,"onUpdate:modelValue":t[0]||(t[0]=e=>g.filterChapters=e),"open-direction":"bottom",options:g.chapters?g.chapters:[],multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Chương",label:"name","track-by":"name","preselect-first":!1,onSelect:e.selectItems,onRemove:e.removeItems},null,8,["class","modelValue","options","onSelect","onRemove"]),(0,n.Wm)(v,{class:(0,r.C_)(e.colorSelect),modelValue:g.selectLevels,"onUpdate:modelValue":t[1]||(t[1]=e=>g.selectLevels=e),"open-direction":"bottom",options:g.levels?g.levels:[],multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Mức độ",label:"name","track-by":"name","preselect-first":!1,onSelect:e.selectItems,onRemove:e.removeItems},null,8,["class","modelValue","options","onSelect","onRemove"])]),m]),(0,n._)("div",d,[(0,n._)("button",{class:"type-report",onClick:t[2]||(t[2]=(...e)=>b.chartQuantityChapter&&b.chartQuantityChapter(...e))},"Số lượng"),(0,n._)("button",{class:"type-report",onClick:t[3]||(t[3]=(...e)=>b.chartPercentChapter&&b.chartPercentChapter(...e))},"Tỷ lệ")]),f.refresh?((0,n.wg)(),(0,n.iD)("div",B,[(0,n.Wm)(y,{type:"bar",height:"350",options:g.percent.chartOptions,series:g.percent.series},null,8,["options","series"])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)}var g=i(4870),b=i(2483),y=i(407),v=i.n(y),k=i(6015),x=i(6368),C={name:"ReportTeacherComponent",components:{apexchart:v(),VueMultiselect:x.ZP},setup(){const e=parseInt((0,b.yj)().params.idTest),t=(0,g.iH)(!0),i=(0,g.iH)(!0);return{idTest:e,render:t,refresh:i}},mounted(){this.handleGetData()},data(){return{filterChapters:[],selectLevels:[],chapters:[{id:1,name:"Tích phân"},{id:2,name:"Hàm số"},{id:3,name:"Hình học"},{id:4,name:"Bất đẳng thức"},{id:5,name:"Tích phân NC"},{id:6,name:"Hàm số NC"},{id:7,name:"Hình học NC"},{id:8,name:"Bất đẳng thức mở rộng"}],levels:[{id:1,name:"Nhận biết"},{id:2,name:"Thông hiểu"},{id:3,name:"Vận dụng"},{id:4,name:"Vận dụng cao"}],amount:{series:[{name:"Số lượt làm bài",data:[9.9,8.9,7.1,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9,9,8,7,8,9,9]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{total:{enabled:!0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{tickPlacement:"on",type:"String",categories:["Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4","Bài 1","Bài 2","Bài 3","Bài 4"]},legend:{position:"right",offsetY:40},fill:{opacity:1}}},percent:{series:[{name:"Đúng",data:[44,55,41,37,22,43,21]},{name:"Sai",data:[53,32,33,52,13,43,32]},{name:"Chưa làm",data:[12,17,11,9,15,11,20]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},title:{text:"100% Chương"},xaxis:{categories:["Bất đẳng thức","Hàm số","Hình học không gian","Tích phân","Đạo hàm","Hình học giải tích"]},tooltip:{y:{formatter:function(e){return e+" điểm"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40}}},score:{chartOptions:{dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}}},series:[{name:"Số lượng",data:[31,40,28,51,42,109,100]}]}}},methods:{chartQuantityChapter(){console.log("OK"),this.percent.chartOptions.chart.stackType=null,this.refresh=!1,this.$nextTick((()=>{this.refresh=!0}))},chartPercentChapter(){console.log("OK"),this.percent.chartOptions.chart.stackType="100%",this.refresh=!1,this.$nextTick((()=>{this.refresh=!0}))},async handleGetData(){const e=await(0,k.hW)(this.idTest),t=e.data;this.amount.series=t.series.series_bar,this.amount.chartOptions.xaxis.categories=t.horizontal.columns_bar,this.percent.series=t.series.series_bar,this.percent.chartOptions.xaxis.categories=t.horizontal.columns_bar,this.score.chartOptions.xaxis.categories=t.horizontal.scoreName,this.score.series[0].data=t.series.seriesScore,this.render=!1,this.$nextTick((()=>{this.render=!0}))}}},_=i(89);const T=(0,_.Z)(C,[["render",f]]);var O=T}}]);
//# sourceMappingURL=5817.e6175816.js.map