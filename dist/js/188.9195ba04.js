"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[188],{4941:function(t,e,s){s.d(e,{C6:function(){return o},g7:function(){return d},jN:function(){return u},lT:function(){return r},qY:function(){return i},un:function(){return n}});var a=s(4471);function n(t){return console.log(t),(0,a.Z)({url:"/exam/createNew",method:"post",data:t})}function o(t){return console.log(t),(0,a.Z)({url:"/exam/do",method:"put",data:t})}function i(t,e){return(0,a.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function d(t,e){return(0,a.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function u(t,e){return(0,a.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function r(t){return(0,a.Z)({url:"/exam/"+t+"/report",method:"GET"})}},5930:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var a=s(3396);const n=t=>((0,a.dD)("data-v-b837c384"),t=t(),(0,a.Cn)(),t),o={class:"container"},i=(0,a.uE)('<div class="information-user" data-v-b837c384><div class="avatar" data-v-b837c384><a href="" class="circle" data-v-b837c384><img width="64" height="64" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" data-v-b837c384></a></div><div class="information" data-v-b837c384><span class="name-user" data-v-b837c384> Nguyễn Văn A </span><span class="level-user" data-v-b837c384><i class="fa-solid fa-medal" data-v-b837c384></i>Chuyên gia ra đề </span><span class="school-user" data-v-b837c384> Trường THPT Lục Nam </span></div></div>',1),d={class:"info-detail-test"},u=n((()=>(0,a._)("h2",null,"Giới thiệu về đề thi",-1))),r={class:"action-change-test"},l={class:"introduce-test"},c=n((()=>(0,a._)("h3",null,"Phí dự thi: Miễn phí",-1))),p={class:"action-normal"};function m(t,e,s,n,m,y){const h=(0,a.up)("LatexComponent");return(0,a.wg)(),(0,a.iD)("div",o,[i,(0,a._)("div",d,[u,(0,a._)("div",r,[n.displayUpdate?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[0]||(e[0]=t=>y.updateTest(n.testId))}," Sửa đề ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[1]||(e[1]=t=>y.deleteTest(n.testId))}," Sửa giới thiệu ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[2]||(e[2]=t=>y.deleteTest(n.testId))}," Xóa đề thi ")):(0,a.kq)("",!0)]),(0,a._)("div",l,[(0,a.Wm)(h,{isUpdate:"true"})]),c,(0,a._)("div",p,[n.displayTry?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[3]||(e[3]=t=>y.tryTest(n.testId))}," Thi thử ")):(0,a.kq)("",!0),n.displayDo?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[4]||(e[4]=t=>y.doTest(n.testId))}," Làm đề ")):(0,a.kq)("",!0),n.displayContinue?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[5]||(e[5]=t=>y.continueTest(n.testId))}," Làm tiếp ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:3,class:"tool-button-test",onClick:e[6]||(e[6]=t=>y.markTest(n.testId))}," Chấm điểm ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:4,class:"tool-button-test",onClick:e[7]||(e[7]=t=>y.reportTest(n.testId))}," Báo cáo ")):(0,a.kq)("",!0),n.displayHistory?((0,a.wg)(),(0,a.iD)("button",{key:5,class:"tool-button-test",onClick:e[8]||(e[8]=t=>y.historyTest(n.testId))}," Lịch sử ")):(0,a.kq)("",!0)])])])}s(7658);var y=s(8883),h=s(4870),T=s(2483),k=s(8174),b=s(4941),v={name:"TestDetailComponent",components:{LatexComponent:k.Z},setup(){const t=parseInt((0,T.yj)().params.idTest),e=(0,h.iH)(!0),s=(0,h.iH)(!0),a=(0,h.iH)(!0),n=(0,h.iH)(!0),o=(0,h.iH)(!0),i=(0,h.iH)(!0),d=(0,h.iH)(!0);return{testId:t,displayDo:e,displayUpdate:s,displayDelete:a,displayTry:n,displayContinue:o,displayHistory:i,displayMark:d}},mounted(){},methods:{tryTest(){},async doTest(t){await(0,b.un)({test_id:t}),y.Z.push({name:"doExam",params:{idTest:t}})},continueTest(t){y.Z.push({name:"doExam",params:{idTest:t}})},markTest(t){y.Z.push({name:"listExam",params:{idTest:t}})},reportTest(t){y.Z.push({name:"reportTest",params:{idTest:t}})},updateTest(t){y.Z.push({name:"updateTest",params:{idTest:t}})},historyTest(t){y.Z.push({name:"layoutHistoryTest",params:{idTest:t}})},deleteTest(t){y.Z.push({name:"deleteTest",params:{idTest:t}})}}},f=s(89);const g=(0,f.Z)(v,[["render",m],["__scopeId","data-v-b837c384"]]);var w=g}}]);
//# sourceMappingURL=188.9195ba04.js.map