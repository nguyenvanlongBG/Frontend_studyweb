"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[698],{4941:function(t,e,n){n.d(e,{C6:function(){return s},g7:function(){return r},jN:function(){return u},lT:function(){return l},qY:function(){return o},un:function(){return i}});var a=n(4471);function i(t){return console.log(t),(0,a.Z)({url:"/exam/createNew",method:"post",data:t})}function s(t){return console.log(t),(0,a.Z)({url:"/exam/do",method:"put",data:t})}function o(t,e){return(0,a.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function r(t,e){return(0,a.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function u(t,e){return(0,a.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function l(t){return(0,a.Z)({url:"/exam/"+t+"/report",method:"GET"})}},7026:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(3396),i=n(7139);const s={class:"history-exam"},o={class:"info-list-question"},r={class:"buttons-exam"},u={class:"page"},l=(0,a._)("div",{class:"end-action"},null,-1);function d(t,e,n,d,c,m){const h=(0,a.up)("NavbarListComponent"),p=(0,a.up)("LoadingComponent"),g=(0,a.up)("QuestionComponent"),x=(0,a.up)("paginate");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(h,{numericalQuestion:d.numericalQuestion,onMoveQuestion:m.moveQuestion},null,8,["numericalQuestion","onMoveQuestion"]),(0,a._)("div",o,[(0,a.WI)(t.$slots,"list-tabs"),d.isLoading?((0,a.wg)(),(0,a.j4)(p,{key:0})):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("div",r,[(0,a._)("h3",null,"Điểm "+(0,i.zw)(d.point),1),(0,a._)("button",{class:"report-exam",onClick:e[0]||(e[0]=(...t)=>m.reportExam&&m.reportExam(...t))},"Báo cáo")]),(0,a._)("div",u,[(0,a._)("h2",null," Trang "+(0,i.zw)(d.currentPage),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.questions,((t,e)=>((0,a.wg)(),(0,a.j4)(g,{key:e,question:t,ref_for:!0,ref:"question_"+t.question.question_id,id:"question_"+t.question.question_id,index:d.startIndex+e,type:3,isOwner:d.isOwner},null,8,["question","id","index","isOwner"])))),128)),l,(0,a.Wm)(x,{"page-count":d.totalPage,"page-range":3,"margin-pages":2,"click-handler":m.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item","active-class":"active-class"},null,8,["page-count","click-handler"])],64))])])}n(7658);var c=n(9064),m=n(4501),h=n(6015),p=n(4870),g=n(2483),x=n(8812),w=n(2822),f=n(4941),v=n(8883),q={name:"HistoryExamComponent",components:{QuestionComponent:c.Z,paginate:m.Z,NavbarListComponent:w.Z,LoadingComponent:x.Z},setup(){const t=parseInt((0,g.yj)().params.idTest),e=(0,p.iH)(!1),n=(0,p.iH)(!0),a=(0,p.iH)([]),i=(0,p.iH)(1),s=(0,p.iH)(1),o=(0,p.iH)(1),r=(0,p.iH)([]),u=(0,p.iH)(""),l=(0,p.iH)(!0),d=(0,p.iH)(0),c=(0,p.iH)(0),m=(0,p.iH)(!1);return{idTest:t,isLoading:e,canUpdate:n,questions:a,currentPage:i,totalPage:s,startIndex:o,numericalQuestion:r,moveTo:u,indexNewQuestion:d,isOwner:m,point:c,render:l}},create(){this.$watch((()=>this.$route.query),(()=>{this.handleGetData()}))},data(){return{examId:""}},mounted(){this.handleGetData()},methods:{refreshData(){this.listQuestionFollow=new Set,this.questionsDelete=[],this.sendData={questions:{create:[],update:[],delete:[],deleteResult:[],updateResults:[]},choices:{create:[],update:[],delete:[]}}},async handleGetData(){var t={idExam:this.examId,current_page:this.currentPage};try{const n=await(0,f.qY)(this.idTest,t);if(n){this.questions=n.data?.questions,this.answersData=n.data?.answers,this.examId=n.data?.exam_id,this.point=n.data?.point,this.isOwner=n.data?.isOwner,console.log(n.data?.pages);let t=n.data?.pages;this.startIndex=t.startIndex,this.totalPage=t.totalPage}var e={exam_id:this.examId,current_page:this.currentPage,type:3};const a=await(0,h.Jp)(this.idTest,e);a&&(this.numericalQuestion=a.data)}finally{this.isLoading=!1}},addlistQuestionFollow(t){console.log(t),this.listQuestionFollow.add(t)},clickCallback(t){this.currentPage=t,this.handleGetData()},Next(t){this.page=t,this.handleGetData()},Prev(t){this.page=t,this.handleGetData()},reportExam(){v.Z.push({name:"reportExam",params:{idTest:this.idTest,idExam:this.examId}})},moveQuestion(t,e){if(t==this.currentPage){this.moveTo=e;let t=document.getElementById(e);t.scrollIntoView()}else this.currentPage=t,this.moveTo=e,this.handleGetData(),setTimeout((()=>{let t=document.getElementById(e);t.scrollIntoView()}),1e3)}}},y=n(89);const _=(0,y.Z)(q,[["render",d]]);var k=_}}]);
//# sourceMappingURL=698.86b27844.js.map