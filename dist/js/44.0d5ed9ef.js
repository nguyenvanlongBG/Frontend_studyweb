"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[44],{4941:function(t,e,a){a.d(e,{C6:function(){return i},g7:function(){return s},jN:function(){return p},lT:function(){return c},qY:function(){return o},un:function(){return r}});var n=a(4471);function r(t){return console.log(t),(0,n.Z)({url:"/exam/createNew",method:"post",data:t})}function i(t){return console.log(t),(0,n.Z)({url:"/exam/do",method:"put",data:t})}function o(t,e){return(0,n.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function s(t,e){return(0,n.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function p(t,e){return(0,n.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function c(t){return(0,n.Z)({url:"/exam/"+t+"/report",method:"GET"})}},2044:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(3396);const r={key:0,class:"container-report-exam"},i={id:"chart-amount"},o={id:"chart-percent"},s={id:"chart-pie"};function p(t,e,a,p,c,u){const d=(0,n.up)("apexchart");return c.render?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.WI)(t.$slots,"list-tabs"),(0,n._)("div",i,[(0,n.Wm)(d,{type:"bar",height:"350",options:c.amount.chartOptions,series:c.amount.series},null,8,["options","series"])]),(0,n._)("div",o,[(0,n.Wm)(d,{type:"bar",height:"350",options:c.percent.chartOptions,series:c.percent.series},null,8,["options","series"])]),(0,n._)("div",s,[(0,n.Wm)(d,{type:"pie",width:"380",options:c.pie.chartOptions,series:c.pie.series},null,8,["options","series"])])])):(0,n.kq)("",!0)}var c=a(2483),u=a(407),d=a.n(u),h=a(4941),l={name:"ReportExamComponent",components:{apexchart:d()},setup(){const t=parseInt((0,c.yj)().params.idTest),e=parseInt((0,c.yj)().params.idExam);return{idTest:t,idExam:e}},mounted(){this.handleGetData()},data(){return{render:!0,amount:{series:[{name:"PRODUCT A",data:[44,55,41]},{name:"PRODUCT B",data:[13,23,20]},{name:"PRODUCT C",data:[11,17,15]},{name:"PRODUCT D",data:[21,7,25]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{total:{enabled:!0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OK"]},tooltip:{y:{formatter:function(t){return t+" điểm"}}},legend:{position:"right",offsetY:40},fill:{opacity:1}}},percent:{series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!1}},stroke:{width:1,colors:["#fff"]},title:{text:"100% Stacked Bar"},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014]},tooltip:{y:{formatter:function(t){return t+" điểm"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40}}},pie:{series:[0,0,0],chartOptions:{chart:{width:380,type:"pie"},labels:["Làm đúng","Làm sai","Chưa làm"],tooltip:{y:{formatter:function(t){return t+" điểm"}}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}}},methods:{async handleGetData(){const t=await(0,h.lT)(19),e=t.data;this.amount.series=e.series,this.amount.chartOptions.xaxis.categories=e.columns_name,console.log(this.amount.chartOptions.xaxis.categories),this.percent.series=e.series,this.percent.chartOptions.xaxis.categories=e.columns_name,e.series[0].data.forEach((t=>{this.pie.series[0]+=t})),e.series[1].data.forEach((t=>{this.pie.series[1]+=t})),e.series[2].data.forEach((t=>{this.pie.series[2]+=t})),this.render=!1,this.$nextTick((()=>{this.render=!0}))}}},m=a(89);const f=(0,m.Z)(l,[["render",p]]);var g=f}}]);
//# sourceMappingURL=44.0d5ed9ef.js.map