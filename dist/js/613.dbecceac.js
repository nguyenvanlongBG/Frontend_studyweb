"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[613],{4941:function(t,e,n){n.d(e,{C6:function(){return a},g7:function(){return u},jN:function(){return r},lT:function(){return l},qY:function(){return o},un:function(){return s}});var i=n(4471);function s(t){return console.log(t),(0,i.Z)({url:"/exam/createNew",method:"post",data:t})}function a(t){return console.log(t),(0,i.Z)({url:"/exam/do",method:"put",data:t})}function o(t,e){return(0,i.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function u(t,e){return(0,i.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function r(t,e){return(0,i.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function l(t){return(0,i.Z)({url:"/exam/"+t+"/report",method:"GET"})}},718:function(t,e,n){n.r(e),n.d(e,{default:function(){return $}});var i=n(3396),s=n(7139);const a={class:"info-list-question"},o={class:"mark-header"},u=(0,i._)("h1",null,"Chấm bài thi",-1),r=(0,i._)("h3",null,"Điểm 9",-1),l={class:"mark-type-question"},c=(0,i._)("h3",null,"Câu hỏi",-1),d={class:"menu-create"},m={class:"page"},p={class:"end-action"};function h(t,e,n,h,q,g){const k=(0,i.up)("NavbarListComponent"),w=(0,i.up)("LoadingComponent"),_=(0,i.up)("MarkQuestionComponent"),v=(0,i.up)("paginate");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k,{numericalQuestion:h.numericalQuestion,onMoveQuestion:g.moveQuestion},null,8,["numericalQuestion","onMoveQuestion"]),(0,i._)("div",a,[(0,i._)("div",o,[u,r,(0,i._)("div",l,[c,(0,i._)("div",d,[(0,i._)("button",{class:"create-button-type",onClick:e[0]||(e[0]=e=>t.createQuestion(2))}," Trắc nghiệm "),(0,i._)("button",{class:"create-button-type",onClick:e[1]||(e[1]=e=>t.createQuestion(1))}," Điền đáp án "),(0,i._)("button",{class:"create-button-type",onClick:e[2]||(e[2]=e=>t.createQuestion(3))}," Tự luận ")])])]),h.isLoading?((0,i.wg)(),(0,i.j4)(w,{key:0})):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",m,[(0,i._)("h2",null," Trang "+(0,s.zw)(h.currentPage),1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.questions,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.Wm)(_,{question:t,index:h.startIndex+e,ref_for:!0,ref:"question_"+t.question.question_id,id:"question_"+t.question.question_id,onMark:g.markPoint},null,8,["question","index","id","onMark"])])))),128)),(0,i._)("div",p,[(0,i._)("button",{class:"update-create-question-button",onClick:e[3]||(e[3]=(...t)=>g.save&&g.save(...t))}," Lưu trang ")]),(0,i.Wm)(v,{"page-count":h.totalPage,"page-range":3,"margin-pages":2,"click-handler":g.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item","active-class":"active-class"},null,8,["page-count","click-handler"])],64))])],64)}var q=n(4501),g=n(4941),k=n(6015),w=n(4870),_=n(2483),v=n(8812),y=n(2822),f=n(9242);const x=t=>((0,i.dD)("data-v-414c1cf6"),t=t(),(0,i.Cn)(),t),C={class:"question"},D={key:0},b={key:0,class:"fa fa-caret-down color-brand","aria-hidden":"true"},P={key:1,class:"fa-solid fa-caret-up color-brand"},Q={class:"answer-result"},T={class:"answer-mark"},H=x((()=>(0,i._)("h4",null,"Đáp án học sinh",-1))),E={class:"result"},Z=x((()=>(0,i._)("h4",null,"Đáp án ",-1))),I={class:"mark"},L=x((()=>(0,i._)("h4",null,"Điểm ",-1))),M={class:"mark-point"},A=["disabled","max"],G={class:"max-point"};function N(t,e,n,a,o,u){const r=(0,i.up)("QuestionComponent"),l=(0,i.up)("LatexComponent");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",C,[a.display?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h3",D," Câu "+(0,s.zw)(n.index),1)),(0,i.Wm)(f.uT,{name:"slide-fade"},{default:(0,i.w5)((()=>[a.display?((0,i.wg)(),(0,i.j4)(r,{key:0,question:n.question,ref:"question_"+n.question.question.question_id,id:"question_"+n.question.question.question_id,index:n.index,type:4,send:t.sendData,isOwner:!0},null,8,["question","id","index","send"])):(0,i.kq)("",!0)])),_:1}),(0,i._)("div",{onClick:e[0]||(e[0]=t=>a.display=!a.display),class:"pull-up-down"},[a.display?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("i",b)),a.display?((0,i.wg)(),(0,i.iD)("i",P)):(0,i.kq)("",!0)])]),(0,i._)("div",null,[(0,i._)("div",Q,[(0,i._)("div",T,[H,(0,i.Wm)(l,{isUpdate:!1,content:a.contentAnswer?a.contentAnswer:""},null,8,["content"])]),(0,i._)("div",E,[Z,(0,i.Wm)(l,{isUpdate:!1,content:n.question.question.contentResult?n.question.question.contentResult:""},null,8,["content"])]),(0,i._)("div",I,[L,(0,i._)("div",M,[(0,i.wy)((0,i._)("input",{type:"number",disabled:2==n.question.question.type,class:"point",max:n.question.question.point,min:"0","onUpdate:modelValue":e[1]||(e[1]=t=>o.markPoint=t)},null,8,A),[[f.nr,o.markPoint]]),(0,i._)("span",G,"/"+(0,s.zw)(n.question.question.point),1)])])])])])}var W=n(8174),j=n(9064),U={name:"MarkQuestionComponent",components:{QuestionComponent:j.Z,Transition:f.uT,LatexComponent:W.Z},watch:{markPoint(){this.$emit("mark",{question_id:this.question.question.question_id,point:this.markPoint})}},props:["question","index"],setup(){const t=(0,w.iH)(!0),e=(0,w.iH)("");return{display:t,contentAnswer:e}},created(){2!=this.question.question.type&&1!=this.question.question.type||(this.display=!1),2==this.question.question.type?this.question.choices.forEach((t=>{t.id==this.question.question.answer&&(this.contentAnswer=t.content)})):this.contentAnswer=this.question.question.answer},data(){return{markPoint:this.question.question.markPoint}},methods:{}},Y=n(89);const z=(0,Y.Z)(U,[["render",N],["__scopeId","data-v-414c1cf6"]]);var B=z,O={name:"MarkTestComponent",components:{paginate:q.Z,NavbarListComponent:y.Z,LoadingComponent:v.Z,MarkQuestionComponent:B},setup(){const t=parseInt((0,_.yj)().params.idTest),e=parseInt((0,_.yj)().params.idExam),n=(0,w.iH)(!1),i=(0,w.iH)(!1),s=(0,w.iH)([]),a=(0,w.iH)(1),o=(0,w.iH)(1),u=(0,w.iH)(1),r=(0,w.iH)([]),l=(0,w.iH)(""),c=(0,w.iH)(!0),d=(0,w.iH)(0),m=(0,w.iH)({mark:new Map});return{idTest:t,idExam:e,isLoading:n,isUpdateEssay:i,questions:s,currentPage:a,totalPage:o,startIndex:u,numericalQuestion:r,moveTo:l,sendData:m,indexNewQuestion:d,render:c}},create(){this.$watch((()=>this.$route.query),(()=>{this.handleGetData()}))},mounted(){this.handleGetData()},methods:{refreshData(){this.listQuestionFollow=new Set,this.questionsDelete=[],this.sendData=new Set},async handleGetData(){var t={idExam:this.idExam,current_page:this.currentPage};try{const n=await(0,g.qY)(this.idTest,t);if(n){this.questions=n.data?.questions,this.answersData=n.data?.answers,this.idExam=n.data?.exam_id,this.isOwner=n.data?.isOwner,console.log(n.data?.pages);let t=n.data?.pages;this.startIndex=t.startIndex,this.totalPage=t.totalPage}var e={current_page:this.currentPage,exam_id:this.idExam,type:4};const i=await(0,k.Jp)(this.idTest,e);i&&(this.numericalQuestion=i.data)}finally{this.isLoading=!1}},choiceAnswer(t){var e=document.getElementById("question_"+t);e.classList.add("answer-content-choice")},clickCallback(t){this.currentPage=t,this.handleGetData()},Next(t){this.page=t,this.handleGetData()},Prev(t){this.page=t,this.handleGetData()},moveQuestion(t,e){if(t==this.currentPage){this.moveTo=e;let t=document.getElementById(e);t.scrollIntoView()}else this.currentPage=t,this.moveTo=e,this.handleGetData(),setTimeout((()=>{let t=document.getElementById(e);t.scrollIntoView()}),1e3)},markPoint(t){this.sendData.mark.set(t.question_id,t)},async save(){console.log(Array.from(this.sendData.mark.values()));let t={current_page:this.currentPage,mark:Array.from(this.sendData.mark.values())};await(0,g.g7)(this.idExam,t)}}};const V=(0,Y.Z)(O,[["render",h]]);var $=V}}]);
//# sourceMappingURL=613.dbecceac.js.map