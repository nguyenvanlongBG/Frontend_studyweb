"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[3897,9171],{4941:function(t,e,s){s.d(e,{C6:function(){return o},g7:function(){return d},jN:function(){return l},lT:function(){return r},qY:function(){return i},un:function(){return n}});var a=s(4471);function n(t){return console.log(t),(0,a.Z)({url:"/exam/createNew",method:"post",data:t})}function o(t){return console.log(t),(0,a.Z)({url:"/exam/do",method:"put",data:t})}function i(t,e){return(0,a.Z)({url:"/test/"+t+"/exam",method:"get",params:e})}function d(t,e){return(0,a.Z)({url:"/exam/"+t+"/mark",method:"PUT",data:e})}function l(t,e){return(0,a.Z)({url:"/test/"+t+"/submit",method:"put",data:e})}function r(t){return(0,a.Z)({url:"/exam/"+t+"/report",method:"GET"})}},3592:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=s(3396);const n=t=>((0,a.dD)("data-v-6762329a"),t=t(),(0,a.Cn)(),t),o={class:"container-detail-test"},i=(0,a.uE)('<div class="information-user" data-v-6762329a><div class="avatar" data-v-6762329a><a href="" class="circle" data-v-6762329a><img width="64" height="64" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" data-v-6762329a></a></div><div class="information" data-v-6762329a><span class="name-user" data-v-6762329a> Nguyễn Văn A </span><span class="level-user" data-v-6762329a><i class="fa-solid fa-medal" data-v-6762329a></i>Chuyên gia ra đề </span><span class="school-user" data-v-6762329a> Trường THPT Lục Nam </span></div></div>',1),d={class:"info-detail-test"},l=n((()=>(0,a._)("h2",null,"Giới thiệu về đề thi",-1))),r={class:"action-change-test"},u={class:"introduce-test"},c=n((()=>(0,a._)("h3",null,"Phí dự thi: Miễn phí",-1))),p={class:"action-normal"};function m(t,e,s,n,m,y){const h=(0,a.up)("LatexComponent");return(0,a.wg)(),(0,a.iD)("div",o,[i,(0,a._)("div",d,[l,(0,a._)("div",r,[n.displayUpdate?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[0]||(e[0]=t=>y.updateTest(n.testId))}," Sửa đề ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[1]||(e[1]=t=>y.deleteTest(n.testId))}," Sửa giới thiệu ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[2]||(e[2]=t=>y.deleteTest(n.testId))}," Xóa đề thi ")):(0,a.kq)("",!0)]),(0,a._)("div",u,[(0,a.Wm)(h,{isUpdate:"true"})]),c,(0,a._)("div",p,[n.displayTry?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[3]||(e[3]=t=>y.tryTest(n.testId))}," Thi thử ")):(0,a.kq)("",!0),n.displayDo?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[4]||(e[4]=t=>y.doTest(n.testId))}," Làm đề ")):(0,a.kq)("",!0),n.displayContinue?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[5]||(e[5]=t=>y.continueTest(n.testId))}," Làm tiếp ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:3,class:"tool-button-test",onClick:e[6]||(e[6]=t=>y.markTest(n.testId))}," Chấm điểm ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:4,class:"tool-button-test",onClick:e[7]||(e[7]=t=>y.reportTest(n.testId))}," Báo cáo ")):(0,a.kq)("",!0),n.displayHistory?((0,a.wg)(),(0,a.iD)("button",{key:5,class:"tool-button-test",onClick:e[8]||(e[8]=t=>y.historyTest(n.testId))}," Lịch sử ")):(0,a.kq)("",!0)])])])}s(7658);var y=s(8883),h=s(4870),v=s(2483),k=s(592),T=s(4941),b={name:"TestDetailComponent",components:{LatexComponent:k.Z},setup(){const t=null,e=(0,h.iH)(!0),s=(0,h.iH)(!0),a=(0,h.iH)(!0),n=(0,h.iH)(!0),o=(0,h.iH)(!0),i=(0,h.iH)(!0),d=(0,h.iH)(!0);return{testId:t,displayDo:e,displayUpdate:s,displayDelete:a,displayTry:n,displayContinue:o,displayHistory:i,displayMark:d}},props:["type"],created(){this.type?this.testId=1:this.testId=parseInt((0,v.yj)().params.idTest)},mounted(){},methods:{tryTest(){},async doTest(t){await(0,T.un)({test_id:t}),y.Z.push({name:"doExam",params:{idTest:t}})},continueTest(t){y.Z.push({name:"doExam",params:{idTest:t}})},markTest(t){y.Z.push({name:"listExam",params:{idTest:t}})},reportTest(t){y.Z.push({name:"reportTest",params:{idTest:t}})},updateTest(t){y.Z.push({name:"updateTest",params:{idTest:t}})},historyTest(t){y.Z.push({name:"layoutHistoryTest",params:{idTest:t}})},deleteTest(t){y.Z.push({name:"deleteTest",params:{idTest:t}})}}},f=s(89);const g=(0,f.Z)(b,[["render",m],["__scopeId","data-v-6762329a"]]);var C=g},9691:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var a=s(3396);const n={class:"container-detail-reference"},o={class:"layout-video"},i={class:"layout-test"};function d(t,e,s,d,l,r){const u=(0,a.up)("VideoComponent"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[(0,a.Wm)(u)]),(0,a._)("div",i,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(l.Component),{testId:l.testId,onDo:t.doExam,onUpdate:r.updateTest,onReport:t.reportTest,onDelete:t.deleteTest},null,40,["testId","onDo","onUpdate","onReport","onDelete"]))])),_:1})])])}const l={class:"container-video"},r=(0,a._)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/tgbNymZ7vqY"},"\r\n        ",-1),u=[r];function c(t,e,s,n,o,i){return(0,a.wg)(),(0,a.iD)("div",l,u)}var p={name:"VideoComponent"},m=s(89);const y=(0,m.Z)(p,[["render",c]]);var h=y,v=s(3592);const k=t=>((0,a.dD)("data-v-1708b049"),t=t(),(0,a.Cn)(),t),T={class:"container-detail-test"},b=(0,a.uE)('<div class="information-user" data-v-1708b049><div class="avatar" data-v-1708b049><a href="" class="circle" data-v-1708b049><img width="64" height="64" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" data-v-1708b049></a></div><div class="information" data-v-1708b049><span class="name-user" data-v-1708b049> Nguyễn Văn A </span><span class="level-user" data-v-1708b049><i class="fa-solid fa-medal" data-v-1708b049></i>Chuyên gia ra đề </span><span class="school-user" data-v-1708b049> Trường THPT Lục Nam </span></div></div>',1),f={class:"info-detail-test"},g=k((()=>(0,a._)("h2",null,"Giới thiệu về đề thi",-1))),C={class:"action-change-test"},w={class:"introduce-test"},D=k((()=>(0,a._)("h3",null,"Phí dự thi: Miễn phí",-1))),I={class:"action-normal"};function H(t,e,s,n,o,i){const d=(0,a.up)("LatexComponent");return(0,a.wg)(),(0,a.iD)("div",T,[b,(0,a._)("div",f,[g,(0,a._)("div",C,[n.displayUpdate?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[0]||(e[0]=t=>i.updateTest(o.testId))}," Sửa đề ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[1]||(e[1]=t=>i.deleteTest(o.testId))}," Sửa giới thiệu ")):(0,a.kq)("",!0),n.displayDelete?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[2]||(e[2]=t=>i.deleteTest(o.testId))}," Xóa đề thi ")):(0,a.kq)("",!0)]),(0,a._)("div",w,[(0,a.Wm)(d,{isUpdate:"true"})]),D,(0,a._)("div",I,[n.displayTry?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"tool-button-test",onClick:e[3]||(e[3]=t=>i.tryTest(o.testId))}," Thi thử ")):(0,a.kq)("",!0),n.displayDo?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"tool-button-test",onClick:e[4]||(e[4]=t=>i.doTest(o.testId))}," Làm đề ")):(0,a.kq)("",!0),n.displayContinue?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"tool-button-test",onClick:e[5]||(e[5]=t=>i.continueTest(o.testId))}," Làm tiếp ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:3,class:"tool-button-test",onClick:e[6]||(e[6]=t=>i.markTest(o.testId))}," Chấm điểm ")):(0,a.kq)("",!0),n.displayMark?((0,a.wg)(),(0,a.iD)("button",{key:4,class:"tool-button-test",onClick:e[7]||(e[7]=t=>i.reportTest(o.testId))}," Báo cáo ")):(0,a.kq)("",!0),n.displayHistory?((0,a.wg)(),(0,a.iD)("button",{key:5,class:"tool-button-test",onClick:e[8]||(e[8]=t=>i.historyTest(o.testId))}," Lịch sử ")):(0,a.kq)("",!0)])])])}var _=s(4870),q=s(592),Z={name:"DetailReferenceComponent",components:{LatexComponent:q.Z},setup(){const t=(0,_.iH)(!0),e=(0,_.iH)(!0),s=(0,_.iH)(!0),a=(0,_.iH)(!0),n=(0,_.iH)(!0),o=(0,_.iH)(!0),i=(0,_.iH)(!0);return{displayDo:t,displayUpdate:e,displayDelete:s,displayTry:a,displayContinue:n,displayHistory:o,displayMark:i}},props:["type"],created(){this.testId=1},data(){return{testId:1}},mounted(){},methods:{tryTest(){},doTest(t){this.$emit("do",t)},continueTest(t){this.$emit("continue",t)},markTest(t){this.$emit("mark",t)},reportTest(t){this.$emit("report",t)},updateTest(t){this.$emit("update",t)},historyTest(t){this.$emit("history",t)},deleteTest(t){this.$emit("delete",t)}}};const x=(0,m.Z)(Z,[["render",H],["__scopeId","data-v-1708b049"]]);var L=x,U=s(294),M={name:"DetailReference",components:{VideoComponent:h,DetailTestComponent:v["default"],DetailReferenceComponent:L},data(){return{testId:null,Component:L}},mounted(){},methods:{updateTest(t){this.testId=t,this.Component=U["default"]}}};const E=(0,m.Z)(M,[["render",d]]);var N=E}}]);
//# sourceMappingURL=3897.64cde7b7.js.map