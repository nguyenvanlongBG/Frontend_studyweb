"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[4002],{4002:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=s(3396);const i={class:"tabs-exam"};function n(t,e,s,n,d,h){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r,null,{default:(0,a.w5)((({Component:t})=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(t),null,{"list-tabs":(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",{class:"tab-exam",onClick:e[0]||(e[0]=t=>h.getExam(1))},"Bài thi 1 "),(0,a._)("div",{class:"tab-exam",onClick:e[1]||(e[1]=t=>h.getExam(1))},"Bài thi 2 "),(0,a._)("div",{class:"tab-exam",onClick:e[2]||(e[2]=t=>h.getExam(1))},"Bài thi 3 "),(0,a._)("div",{class:"tab-exam",onClick:e[3]||(e[3]=t=>h.getExam(1))},"Bài thi 4 ")])])),_:2},1024))])),_:1})}s(7658);var d=s(8883),h=s(2483),r={name:"HistoryTestComponent",components:{},setup(){const t=null;return{idTest:t}},created(){this.testId?this.idTest=this.testId:this.idTest=parseInt((0,h.yj)().params.idTest)},create(){this.$watch((()=>this.$route.query),(()=>{this.handleGetData()}))},mounted(){this.handleGetData()},methods:{refreshData(){},getExam(t){d.Z.push({name:"historyTest",params:{idTest:this.idTest,idExam:t}})},async handleGetData(){let t={idTest:this.idTest};console.log(t),d.Z.push({name:"historyTest",params:{idTest:this.idTest,idExam:1}})}}},o=s(89);const l=(0,o.Z)(r,[["render",n]]);var c=l}}]);
//# sourceMappingURL=4002.9b2297cf.js.map