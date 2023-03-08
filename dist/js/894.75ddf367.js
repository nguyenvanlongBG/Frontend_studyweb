"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[894],{6015:function(t,e,a){a.d(e,{$2:function(){return l},Jp:function(){return d},_P:function(){return u},ab:function(){return n},hW:function(){return c},sp:function(){return i},yD:function(){return r}});var s=a(4471);function i(t){return(0,s.Z)({url:"/test/list",method:"get",data:t})}function r(t){return(0,s.Z)({url:"/test/"+t+"/detail",method:"get"})}function l(t){return(0,s.Z)({url:"/test/create",method:"post",data:t})}function n(t){return(0,s.Z)({url:"/test/update",method:"put",data:t})}function d(t,e){return(0,s.Z)({url:"/test/"+t+"/nummericalQuestion",method:"get",params:e})}function u(t,e){return(0,s.Z)({url:"/test/"+t+"/exams",method:"get",params:e})}function c(t){return(0,s.Z)({url:"/test/"+t+"/report",method:"get"})}},2894:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var s=a(3396),i=a(7139);const r=t=>((0,s.dD)("data-v-bfa71e3e"),t=t(),(0,s.Cn)(),t),l={class:"container-list-exam"},n={class:"header-list-exams"},d=r((()=>(0,s._)("h1",null," Danh sách bài thi ",-1))),u={class:"mark-type-filter"},c={class:"container-table"},o={class:"table"},m=(0,s.uE)('<div class="table-header" data-v-bfa71e3e><div class="header__item" data-v-bfa71e3e><a id="name" class="filter__link" href="#" data-v-bfa71e3e>Mã bài thi</a></div><div class="header__item" data-v-bfa71e3e><a id="wins" class="filter__link filter__link--number" href="#" data-v-bfa71e3e>Họ và tên</a></div><div class="header__item" data-v-bfa71e3e><a id="draws" class="filter__link filter__link--number" href="#" data-v-bfa71e3e>Thời gian nộp bài</a></div><div class="header__item" data-v-bfa71e3e><a id="losses" class="filter__link filter__link--number" href="#" data-v-bfa71e3e>Điểm</a></div><div class="header__item" data-v-bfa71e3e><a id="total" class="filter__link filter__link--number" href="#" data-v-bfa71e3e>Hành động</a></div></div>',1),f={class:"table-row"},h={class:"table-data"},b={class:"table-data"},_=r((()=>(0,s._)("div",{class:"table-data"},null,-1))),k={class:"table-data"},p={class:"table-data"},v=["onClick"],C=["onClick"];function y(t,e,a,r,y,w){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",n,[d,(0,s._)("div",u,[(0,s._)("button",{class:"status-mark green",style:(0,i.j5)(r.pressNotCompleteMarked?r.styleObject:""),onClick:e[0]||(e[0]=t=>w.filterStatus(2))}," Chưa chấm ",4),(0,s._)("button",{class:"status-mark blue",style:(0,i.j5)(r.pressMarked?r.styleObject:""),onClick:e[1]||(e[1]=t=>w.filterStatus(1))}," Đã chấm ",4),(0,s._)("button",{class:"status-mark",style:(0,i.j5)(r.pressAll?r.styleObject:""),onClick:e[2]||(e[2]=t=>w.filterStatus(0))}," Tất cả ",4),(0,s._)("button",{class:"status-mark",style:(0,i.j5)(r.pressStatistical?r.styleObject:""),onClick:e[3]||(e[3]=t=>w.statistical())}," Thống kê ",4)])]),(0,s._)("div",c,[(0,s._)("div",o,[m,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(y.exams,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"table-content",key:t.id},[(0,s._)("div",f,[(0,s._)("div",h,"#"+(0,i.zw)(t.id),1),(0,s._)("div",b,(0,i.zw)(t.user_name),1),_,(0,s._)("div",k,(0,i.zw)(t.point),1),(0,s._)("div",p,[t.is_marked?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"tool-button-mark green",onClick:e=>w.mark(t.id)}," Chấm ",8,v)),t.is_marked?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"tool-button-mark blue",onClick:e=>w.mark(t.id)}," Chấm lại ",8,C)):(0,s.kq)("",!0)])])])))),128))])])])}a(7658);var w=a(8883),g=a(6015),x=a(4870),j=a(2483),D={name:"ListExamComponent",setup(){const t=parseInt((0,j.yj)().params.idTest),e=(0,x.iH)({status:0}),a=(0,x.iH)(!0),s=(0,x.iH)(!1),i=(0,x.iH)(!1),r=(0,x.iH)(!1),l=(0,x.iH)({"box-shadow":"0 5px #666",transform:"translateY(4px)"});return{idTest:t,filter:e,styleObject:l,pressAll:a,pressStatistical:s,pressMarked:i,pressNotCompleteMarked:r}},data(){return{exams:[]}},mounted(){this.handleGetData()},methods:{mark(t){w.Z.push({name:"markExam",params:{idExam:t}})},refreshButton(){this.pressAll=!1,this.pressMarked=!1,this.pressNotCompleteMarked=!1,this.pressStatistical=!1},filterStatus(t){this.refreshButton(),0==t&&(this.pressAll=!0),1==t&&(this.pressMarked=!0),2==t&&(this.pressNotCompleteMarked=!0),this.filter.status=t},statistical(){this.refreshButton(),this.pressStatistical=!0},async handleGetData(){const t=await(0,g._P)(this.idTest,this.filter);this.exams=t.data}}},H=a(89);const M=(0,H.Z)(D,[["render",y],["__scopeId","data-v-bfa71e3e"]]);var Z=M}}]);
//# sourceMappingURL=894.75ddf367.js.map