"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[5531],{4941:function(t,e,a){a.d(e,{C6:function(){return i},g7:function(){return o},jN:function(){return d},lT:function(){return r},qY:function(){return l},un:function(){return n}});var s=a(4471);function n(t){return console.log(t),(0,s.Z)({url:"/exam/createNew",method:"post",data:t})}function i(t){return console.log(t),(0,s.Z)({url:"/exam/do",method:"put",data:t})}function l(t,e){return(0,s.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function o(t,e){return(0,s.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function d(t,e){return(0,s.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function r(t){return(0,s.Z)({url:"/exam/"+t+"/report",method:"GET"})}},6015:function(t,e,a){a.d(e,{$2:function(){return l},Jp:function(){return d},_P:function(){return r},ab:function(){return o},hW:function(){return u},sp:function(){return n},yD:function(){return i}});var s=a(4471);function n(t){return(0,s.Z)({url:"/test/list",method:"get",data:t})}function i(t){return(0,s.Z)({url:"/test/"+t+"/detail",method:"get"})}function l(t){return(0,s.Z)({url:"/test/create",method:"post",data:t})}function o(t){return(0,s.Z)({url:"/test/update",method:"put",data:t})}function d(t,e){return(0,s.Z)({url:"/test/"+t+"/nummericalQuestion",method:"get",params:e})}function r(t,e){return(0,s.Z)({url:"/test/"+t+"/exams",method:"get",params:e})}function u(t){return(0,s.Z)({url:"/test/"+t+"/report",method:"get"})}},1266:function(t,e,a){a.d(e,{Z:function(){return z}});var s=a(3396),n=a(9242);const i=t=>((0,s.dD)("data-v-e1db378c"),t=t(),(0,s.Cn)(),t),l={class:"modal-answer-overlay",style:{"overflow-y":"scroll"}},o={class:"form-create-test"},d=i((()=>(0,s._)("h1",null,"Tạo kì thi",-1))),r={class:"table-input"},u=i((()=>(0,s._)("th",{class:"label-input"}," Tên kì thi ",-1))),c=i((()=>(0,s._)("th",{class:"label-input"}," Kì thi môn ",-1))),p=i((()=>(0,s._)("th",{class:"label-input"}," Ghi chú ",-1))),h=i((()=>(0,s._)("th",{class:"label-input"}," Phần thưởng ",-1))),m=i((()=>(0,s._)("th",{class:"label-input"}," Làm nhiều lần ",-1))),_={class:"radio-choice"},y={class:"choice"},b=i((()=>(0,s._)("label",{class:"label-content",for:"allowRework_1"},"Có",-1))),f={class:"choice"},k=i((()=>(0,s._)("label",{class:"label-content",for:"allowRework_0"},"Không",-1))),w=i((()=>(0,s._)("th",{class:"label-input"}," Xem đáp án ngay sau khi nộp bài ",-1))),T={class:"radio-choice"},g={class:"choice"},v=i((()=>(0,s._)("label",{class:"label-content",for:"markOption_1"},"Có",-1))),S={class:"choice"},C=i((()=>(0,s._)("label",{class:"label-content",for:"markOption_1"},"Không",-1))),M=i((()=>(0,s._)("th",{class:"label-input"}," Thời gian bắt đầu ",-1))),Z=i((()=>(0,s._)("th",{class:"label-input"}," Thời gian kết thúc ",-1))),V={class:"buttons"},L=i((()=>(0,s._)("br",null,null,-1)));function D(t,e,a,i,D,H){const U=(0,s.up)("VueMultiselect"),j=(0,s.up)("Datepicker");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",o,[d,(0,s._)("table",r,[(0,s._)("tr",null,[u,(0,s._)("td",null,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>D.dataSend.name=t),id:"name",type:"text",class:"input-data",placeholder:"Tên kì thi"},null,512),[[n.nr,D.dataSend.name]])])]),(0,s._)("tr",null,[c,(0,s._)("td",null,[(0,s.Wm)(U,{modelValue:D.valueSubject,"onUpdate:modelValue":e[1]||(e[1]=t=>D.valueSubject=t),options:i.subjects?i.subjects:[],multiple:!1,"close-on-select":!0,"clear-on-select":!0,"preserve-search":!0,placeholder:"Môn học",label:"name","track-by":"name","preselect-first":!0},null,8,["modelValue","options"])])]),(0,s._)("tr",null,[p,(0,s._)("td",null,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>D.dataSend.note=t),id:"nameTest",type:"text",class:"input-data",placeholder:"Ghi chú"},null,512),[[n.nr,D.dataSend.note]])])]),(0,s._)("tr",null,[h,(0,s._)("td",null,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>D.dataSend.reward_init=t),id:"nameTest",type:"number",class:"input-data",placeholder:"Số exu"},null,512),[[n.nr,D.dataSend.reward_init]])])]),(0,s._)("tr",null,[m,(0,s._)("td",_,[(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>D.dataSend.allow_rework=t),id:"allowRework_1",type:"radio",name:"allowRework",class:"radio",value:"true"},null,512),[[n.G2,D.dataSend.allow_rework]]),b]),(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>D.dataSend.allow_rework=t),id:"allowRework_0",type:"radio",name:"allowRework",class:"radio",value:"false"},null,512),[[n.G2,D.dataSend.allow_rework]]),k])])]),(0,s._)("tr",null,[w,(0,s._)("td",T,[(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>D.dataSend.mark_option=t),id:"markOption_1",type:"radio",name:"markOption",class:"radio",value:"1"},null,512),[[n.G2,D.dataSend.mark_option]]),v]),(0,s._)("div",S,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>D.dataSend.mark_option=t),id:"markOption_0",type:"radio",name:"markOption",class:"radio",value:"0"},null,512),[[n.G2,D.dataSend.mark_option]]),C])])]),(0,s._)("tr",null,[M,(0,s._)("td",null,[(0,s.Wm)(j,{modelValue:D.dataSend.time_start,"onUpdate:modelValue":e[8]||(e[8]=t=>D.dataSend.time_start=t)},null,8,["modelValue"])])]),(0,s._)("tr",null,[Z,(0,s._)("td",null,[(0,s.Wm)(j,{modelValue:D.dataSend.time_finish,"onUpdate:modelValue":e[9]||(e[9]=t=>D.dataSend.time_finish=t)},null,8,["modelValue"])])])]),(0,s._)("div",V,[(0,s._)("button",{class:"button-submit",onClick:e[10]||(e[10]=t=>H.close())},"Quay lại"),(0,s._)("button",{class:"button-submit",onClick:e[11]||(e[11]=t=>H.submit())},"Tạo đề thi")]),L]),(0,s._)("button",{onClick:e[12]||(e[12]=t=>H.close()),class:"close"},"X")])}a(7658);var H=a(8883),U=a(9024),j=a(6015),O=a(6368),R=a(4870),x={name:"ModalCreateTest",components:{VueMultiselect:O.ZP,Datepicker:U.Z},setup(){const t=(0,R.iH)([{name:"Toán",id:2},{name:"Hóa học",id:3},{name:"Vật lý",id:4}]);return{subjects:t}},data(){return{valueSubject:{},dataSend:{type:0,name:"",subject_id:1,note:"",belong_id:null,reward_init:0,allow_rework:!0,mark_option:0,time_start:new Date,time_finish:""}}},methods:{async submit(){this.dataSend.time_start=this.dataSend.time_start.toISOString().substring(0,10)+" "+this.dataSend.time_start.toISOString().substring(11,19),this.dataSend.time_finish&&(this.dataSend.time_finish=this.dataSend.time_finish.toISOString().substring(0,10)+" "+this.dataSend.time_finish.toISOString().substring(11,19)),this.dataSend.subject_id=this.valueSubject.id,parseInt(this.dataSend.mark_option)>=0&&(this.dataSend.mark_option=parseInt(this.dataSend.mark_option)),console.log(typeof this.dataSend.mark_option),console.log(this.dataSend);let t=await(0,j.$2)(this.dataSend);t.success&&H.Z.push({name:"updateTest",params:{idTest:t.data.test_id}})},close(){this.$emit("close")}}},G=a(89);const I=(0,G.Z)(x,[["render",D],["__scopeId","data-v-e1db378c"]]);var z=I},5531:function(t,e,a){a.r(e),a.d(e,{default:function(){return U}});var s=a(3396),n=a(7139);const i={class:"container"},l={class:"header-tests"},o={class:"myListTestTitle"},d={class:"list-tool-button-test"},r=["disabled"],u=["disabled"],c=["disabled"],p={class:"grid-container"};function h(t,e,a,h,m,_){const y=(0,s.up)("ModalCreateTest"),b=(0,s.up)("TestComponent");return(0,s.wg)(),(0,s.iD)("div",i,[m.modalCreateTest.visible?((0,s.wg)(),(0,s.j4)(y,{key:0,onClose:e[0]||(e[0]=t=>m.modalCreateTest.visible=!1)})):(0,s.kq)("",!0),(0,s._)("div",l,[(0,s._)("h1",o,(0,n.zw)(m.title),1),(0,s._)("div",d,[m.hasRole?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"tool-button-test",onClick:e[1]||(e[1]=(...t)=>_.createTest&&_.createTest(...t)),id:"create"}," Tạo đề thi ")):(0,s.kq)("",!0),(0,s._)("button",{class:"tool-button-test",onClick:e[2]||(e[2]=(...t)=>_.getMyListTests&&_.getMyListTests(...t)),disabled:m.hasRole,id:"doingTest"}," Chưa hoàn thành ",8,r),(0,s._)("button",{class:"tool-button-test",onClick:e[3]||(e[3]=(...t)=>_.getMyListTests&&_.getMyListTests(...t)),disabled:m.hasRole,id:"doingTest"}," Đã hoàn thành ",8,u),(0,s._)("button",{class:"tool-button-test",onClick:e[4]||(e[4]=(...t)=>_.getMyListTests&&_.getMyListTests(...t)),id:"myListTest"}," Bộ đề của tôi "),(0,s._)("button",{class:"tool-button-test",onClick:e[5]||(e[5]=(...t)=>_.getMyListTests&&_.getMyListTests(...t)),id:"myListTest"}," Chọn lọc "),(0,s._)("button",{class:"tool-button-test",onClick:e[6]||(e[6]=(...t)=>_.getMyListTests&&_.getMyListTests(...t)),disabled:!m.hasMyTests,id:"all"}," Bộ đề khác ",8,c)])]),(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.data,(t=>((0,s.wg)(),(0,s.j4)(b,{test:t,key:t.id,type:h.type},null,8,["test","type"])))),128))])])}var m=a(6015),_=a(1266);const y={class:"grid-item"},b={class:"header-test"},f={class:"mask"},k=(0,s.uE)('<div class="information-user"><div class="avatar"><a href="" class="circle"><img width="64" height="64" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128"></a></div><div class="information"><span> Nguyễn Văn A </span><span> 10/01/2022 </span></div></div>',1),w=(0,s._)("div",null," Số câu hỏi: ",-1),T=(0,s._)("div",null," Thời gian ",-1);function g(t,e,a,i,l,o){return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",b,[(0,s._)("div",f,[i.displayDo?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"tool-button",onClick:e[0]||(e[0]=t=>o.doTest(a.test.id))}," Xem chi tiết ")):(0,s.kq)("",!0)]),k]),(0,s._)("div",null," Kì thi: "+(0,n.zw)(a.test.name),1),(0,s._)("div",null," Mã đề thi: "+(0,n.zw)(a.test.id),1),w,T,(0,s._)("div",null," Thời gian mở đề: "+(0,n.zw)(a.test.time_start),1),(0,s._)("div",null," Ghi chú: "+(0,n.zw)(a.test.note),1),(0,s._)("div",null," Số học sinh tham gia: "+(0,n.zw)(a.test.candidates),1)])}a(7658);var v=a(8883),S=a(4941),C=a(4870),M={name:"TestComponent",props:["test","type"],setup(){const t=(0,C.iH)(!1),e=(0,C.iH)(!1),a=(0,C.iH)(!1),s=(0,C.iH)(!1),n=(0,C.iH)(!1),i=(0,C.iH)(!1),l=(0,C.iH)(!1);return{displayDo:t,displayUpdate:e,displayDelete:a,displayTry:s,displayContinue:n,displayHistory:i,displayMark:l}},created(){0==this.type&&(this.displayDo=!0,this.displayHistory=!0,this.displayUpdate=!0,this.displayMark=!0),1==this.type&&(this.displayHistory=!0,this.displayDo=!0,this.displayUpdate=!0,this.displayMark=!0),2==this.type&&(this.displayContinue=!0,this.displayHistory=!0,this.displayUpdate=!0,this.displayMark=!0)},methods:{tryTest(){},async doTest(t){await(0,S.un)({test_id:t}),v.Z.push({name:"detailTest",params:{idTest:t}})}}},Z=a(89);const V=(0,Z.Z)(M,[["render",g]]);var L=V,D={name:"TestsComponent",components:{ModalCreateTest:_.Z,TestComponent:L},setup(){const t=(0,C.iH)(0);return{type:t}},data(){return{data:[],modalCreateTest:{visible:!1},hasMyTests:!1,hasRole:!0,displayButton:!0,filter:{},title:"Tất cả bộ đề"}},mounted(){this.getListTest()},methods:{async getListTest(){const t=await(0,m.sp)(this.filter);this.data=t.data},createTest(){this.modalCreateTest.visible=!0},getMyListTests(){this.hasMyTests=!0,this.displayButton=!1,this.filter={},this.getListTest()}}};const H=(0,Z.Z)(D,[["render",h],["__scopeId","data-v-d46a8e4a"]]);var U=H}}]);
//# sourceMappingURL=5531.976bfc3d.js.map