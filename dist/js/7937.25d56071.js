"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[7937],{7937:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var s=n(3396),o=n(6335),i=n(1613);const l={class:"container-review"},a={class:"action-group"},c=(0,s._)("div",{class:"tool-button"}," Tạo đề chơi ",-1),d={class:"event-group"},u={class:"detail-event"},r=(0,s._)("img",{class:"image-event-group",src:o},null,-1),p={class:"info-event"},v=(0,s.uE)('<div><div class="info-event-detail"> Người tạo: <span class="special-info">Nguyễn Văn A</span></div><div class="info-event-detail"> Môn học: <span class="special-info">Toán</span></div><div class="info-event-detail"> Chủ đề: <span class="special-info">Bất đẳng thức</span></div></div>',1),m={class:"action-event"},h=(0,s._)("button",{class:"tool-button"},"Lịch sử",-1),b={class:"detail-event"},_=(0,s._)("img",{class:"image-event-group",src:i},null,-1),g={class:"info-event"},w=(0,s.uE)('<div><div class="info-event-detail"> Người tạo: <span class="special-info">Nguyễn Văn A</span></div><div class="info-event-detail"> Môn học: <span class="special-info">Toán</span></div><div class="info-event-detail"> Chủ đề: <span class="special-info">Bất đẳng thức</span></div></div>',1),C={class:"action-event"},f=(0,s._)("button",{class:"tool-button"},"Lịch sử",-1);function y(e,t,n,o,i,y){const k=(0,s.up)("ModalCreateReview");return(0,s.wg)(),(0,s.iD)(s.HY,null,[i.visibleCreateReview?((0,s.wg)(),(0,s.j4)(k,{key:0,onClose:t[0]||(t[0]=e=>i.visibleCreateReview=!1)})):(0,s.kq)("",!0),(0,s._)("div",l,[(0,s._)("div",a,[(0,s._)("div",{class:"tool-button",onClick:t[1]||(t[1]=(...e)=>y.createReview&&y.createReview(...e))}," + Tạo đề ôn "),c]),(0,s._)("div",d,[(0,s._)("div",u,[r,(0,s._)("div",p,[v,(0,s._)("div",m,[(0,s._)("button",{class:"tool-button",onClick:t[2]||(t[2]=(...e)=>y.openTest&&y.openTest(...e))},"Làm thường"),(0,s._)("button",{class:"tool-button",onClick:t[3]||(t[3]=(...e)=>y.openTest&&y.openTest(...e))},"Làm tốc độ"),h])])]),(0,s._)("div",b,[_,(0,s._)("div",g,[w,(0,s._)("div",C,[(0,s._)("button",{class:"tool-button",onClick:t[4]||(t[4]=(...t)=>e.openRoomPlay&&e.openRoomPlay(...t))},"Vào chơi"),f])])])])])],64)}n(7658);var k=n(8883);const T=e=>((0,s.dD)("data-v-5cd47e36"),e=e(),(0,s.Cn)(),e),q={class:"modal-bank-overlay"},Q={class:"container-create-review"},V={class:"close-button"},D={class:"container-list-question"},x={class:"header-list-exams"},A=T((()=>(0,s._)("h1",null," Tạo đề ôn ",-1))),R={class:"flex-end"},S={key:0},M={key:0,class:"body-container-create-review"},H=T((()=>(0,s._)("h3",null,"Chủ đề",-1))),L={class:"container-choice-topic"},U={class:"flex-end"},j={key:1,class:"body-container-create-review"},N=T((()=>(0,s._)("h3",null,"Nội dung",-1))),Z={class:"container-choice-topic"},B={class:"flex-end"},K={key:1,class:"body-container-create-review"},I={class:"flex-end"};function O(e,t,n,o,i,l){const a=(0,s.up)("VueMultiselect"),c=(0,s.up)("LatexComponent"),d=(0,s.up)("QuestionComponent");return(0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("div",Q,[(0,s._)("div",V,[(0,s._)("button",{onClick:t[0]||(t[0]=e=>l.close()),class:"close-modal-solution"},"X")]),(0,s._)("div",D,[(0,s._)("div",x,[A,(0,s._)("div",R,[(0,s._)("button",{class:"button",onClick:t[1]||(t[1]=e=>o.typeCreate=1)}," Ngẫu nhiên "),(0,s._)("button",{class:"button",onClick:t[2]||(t[2]=e=>o.typeCreate=2)}," Tự tạo ")])]),1==o.step?((0,s.wg)(),(0,s.iD)("div",S,[1==o.typeCreate?((0,s.wg)(),(0,s.iD)("div",M,[H,(0,s._)("div",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.topics,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"topic-level",key:e.id},[(0,s.Wm)(a,{modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,options:i.subjects?i.subjects:[],multiple:!1,"close-on-select":!0,"clear-on-select":!0,"preserve-search":!0,placeholder:"Chủ đề",label:"name","track-by":"name","preselect-first":!0},null,8,["modelValue","onUpdate:modelValue","options"]),(0,s.Wm)(a,{modelValue:e.level,"onUpdate:modelValue":t=>e.level=t,options:i.levels?i.levels:[],multiple:!1,"close-on-select":!0,"clear-on-select":!0,"preserve-search":!0,placeholder:"Mức độ",label:"name","track-by":"name","preselect-first":!0},null,8,["modelValue","onUpdate:modelValue","options"])])))),128)),(0,s._)("div",{class:"add-topic-level",onClick:t[3]||(t[3]=(...e)=>l.addTopicLevel&&l.addTopicLevel(...e))}," Thêm chủ đề ")]),(0,s._)("div",U,[(0,s._)("button",{class:"button",onClick:t[4]||(t[4]=e=>l.move(-1))}," Trở lại "),(0,s._)("button",{class:"button",onClick:t[5]||(t[5]=e=>l.move(1))}," OK ")])])):((0,s.wg)(),(0,s.iD)("div",j,[N,(0,s._)("div",Z,[(0,s.Wm)(c,{isUpdate:!0,content:i.content,onUpdate:e.update,ref:"dataUpload"},null,8,["content","onUpdate"])]),(0,s._)("div",B,[(0,s._)("button",{class:"button",onClick:t[6]||(t[6]=e=>l.move(-1))}," Trở lại "),(0,s._)("button",{class:"button",onClick:t[7]||(t[7]=e=>l.move(1))}," OK ")])]))])):((0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.questions,((n,o)=>((0,s.wg)(),(0,s.j4)(d,{key:o,question:n,ref_for:!0,ref:"question_"+n.question.question_id,onCreate:e.createQuestion,onUpdate:t[8]||(t[8]=t=>e.updateQuestion()),onDelete:e.deleteQuestion,onAddlistQuestionFollow:e.addlistQuestionFollow,id:"question_"+n.question.question_id,index:e.startIndex+o,type:2,isOwner:"true",onSeeSolution:e.seeSolution,listItemsSubject:e.listItemsSubject},null,8,["question","onCreate","onDelete","onAddlistQuestionFollow","id","index","onSeeSolution","listItemsSubject"])))),128))]),(0,s._)("div",I,[(0,s._)("button",{class:"button",onClick:t[9]||(t[9]=e=>l.move(-1))}," Trở lại "),(0,s._)("button",{class:"button",onClick:t[10]||(t[10]=e=>l.move(1))}," OK ")])]))])])])}var F=n(592),E=n(6404),P=n(4870),W=n(6368),Y=n(4471);function G(e){return(0,Y.Z)({url:"/review/create",method:"post",data:e})}var $={name:"ModalAddQuestionBank",components:{VueMultiselect:W.ZP,LatexComponent:F.Z,QuestionComponent:E.Z},setup(){const e=(0,P.iH)(1),t=(0,P.iH)(1),n=(0,P.iH)(!1),s=(0,P.iH)({}),o=(0,P.iH)(!0);return{typeCreate:e,step:t,displayAdd:n,solution:s,render:o}},watch:{selectAll(){this.displayAdd=!this.displayAdd,this.selectAll[0]?(this.questions.forEach((e=>{this.selectQuestions.add(e.question.question_id)})),console.log(this.selectQuestions)):this.selectQuestions=new Set},selectQuestions(){0!=this.selectQuestions.size?this.displayAdd=!0:this.displayAdd=!1,console.log("Question Select"),console.log(this.selectQuestions)}},computed:{},data(){return{content:'<p>Bài 1&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><munder><mi>lim</mi><mrow><mn>1</mn><mo>→</mo><mo>∞</mo></mrow></munder></math></p>',questions:[],subjects:[{name:"Hình học",id:2},{name:"Bất đẳng thức",id:3},{name:"Tích phân",id:4}],levels:[{name:"Nhận biết",id:1},{name:"Thông hiểu",id:2},{name:"Vận dụng",id:3},{name:"Vận dụng cao",id:4}],topics:[{id:1,name:{name:"Hình học",id:2},level:{name:"Thông hiểu",id:2}},{id:2,name:{name:"Bất đẳng thức",id:2},level:{name:"Vận dụng cao",id:4}}],selectAll:[],selectQuestions:new Set,listFilters:[{id:1,name:"OK"}]}},mounted(){this.handleGetData()},props:["idSolution"],methods:{async handleGetData(){},close(){this.$emit("close")},addTopicLevel(){this.topics.push({id:4,name:{id:"",name:""},level:{id:"",name:""}})},async move(e){if(1==e){if(2==this.typeCreate){let e={document:this.$refs.dataUpload["editorData"]};const t=await G(e);this.questions=t.data,console.log(this.questions)}this.step=2,console.log("Next")}else this.step=1}}},z=n(89);const X=(0,z.Z)($,[["render",O],["__scopeId","data-v-5cd47e36"]]);var J=X,ee={name:"ReviewComponent",components:{ModalCreateReview:J},data(){return{visibleCreateReview:!1}},methods:{openTest(){k.Z.push({name:"detail-review",query:{type:1}})},createReview(){this.visibleCreateReview=!0}}};const te=(0,z.Z)(ee,[["render",y]]);var ne=te},1613:function(e,t,n){e.exports=n.p+"img/playing-card.98271668.png"},6335:function(e,t,n){e.exports=n.p+"img/test.15ecf9e9.png"}}]);
//# sourceMappingURL=7937.25d56071.js.map