"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[233],{4501:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3396),s=n(7139),i=n(9242),l=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n};const r={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){let e={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let n={index:t,content:t+1,selected:t===this.selected-1};e[t]=n}else{const t=Math.floor(this.pageRange/2);let n=t=>{let n={index:t,content:t+1,selected:t===this.selected-1};e[t]=n},a=t=>{let n={disabled:!0,breakView:!0};e[t]=n};for(let e=0;e<this.marginPages;e++)n(e);let s=0;this.selected-t>0&&(s=this.selected-1-t);let i=s+this.pageRange-1;i>=this.pageCount&&(i=this.pageCount-1,s=i-this.pageRange+1);for(let e=s;e<=i&&e<=this.pageCount-1;e++)n(e);s>this.marginPages&&a(s-1),i+1<this.pageCount-this.marginPages&&a(i+1);for(let e=this.pageCount-1;e>=this.pageCount-this.marginPages;e--)n(e)}return e}},methods:{handlePageSelected(e){this.selected!==e&&(this.innerValue=e,this.$emit("update:modelValue",e),this.clickHandler(e))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return 1===this.selected},lastPageSelected(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},d=["tabindex","innerHTML"],o=["tabindex","innerHTML"],c=["onClick","onKeyup"],u=["tabindex","innerHTML"],g=["tabindex","innerHTML"],p=["innerHTML"],h=["innerHTML"],C=["onClick","onKeyup"],k=["innerHTML"],f=["innerHTML"];function y(e,t,n,l,r,y){return n.noLiSurround?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,s.C_)(n.containerClass)},[n.firstLastButton?((0,a.wg)(),(0,a.iD)("a",{key:0,onClick:t[8]||(t[8]=e=>y.selectFirstPage()),onKeyup:t[9]||(t[9]=(0,i.D2)((e=>y.selectFirstPage()),["enter"])),class:(0,s.C_)([n.pageLinkClass,y.firstPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.firstButtonText},null,42,p)):(0,a.kq)("",!0),y.firstPageSelected()&&n.hidePrevNext?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:1,onClick:t[10]||(t[10]=e=>y.prevPage()),onKeyup:t[11]||(t[11]=(0,i.D2)((e=>y.prevPage()),["enter"])),class:(0,s.C_)([n.prevLinkClass,y.firstPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.prevText},null,42,h)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.pages,(t=>((0,a.wg)(),(0,a.iD)(a.HY,null,[t.breakView?((0,a.wg)(),(0,a.iD)("a",{key:t.index,class:(0,s.C_)([n.pageLinkClass,n.breakViewLinkClass,t.disabled?n.disabledClass:""]),tabindex:"0"},[(0,a.WI)(e.$slots,"breakViewContent",{},(()=>[(0,a.Uk)((0,s.zw)(n.breakViewText),1)]))],2)):t.disabled?((0,a.wg)(),(0,a.iD)("a",{key:t.index,class:(0,s.C_)([n.pageLinkClass,t.selected?n.activeClass:"",n.disabledClass]),tabindex:"0"},(0,s.zw)(t.content),3)):((0,a.wg)(),(0,a.iD)("a",{key:t.index,onClick:e=>y.handlePageSelected(t.index+1),onKeyup:(0,i.D2)((e=>y.handlePageSelected(t.index+1)),["enter"]),class:(0,s.C_)([n.pageLinkClass,t.selected?n.activeClass:""]),tabindex:"0"},(0,s.zw)(t.content),43,C))],64)))),256)),y.lastPageSelected()&&n.hidePrevNext?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:2,onClick:t[12]||(t[12]=e=>y.nextPage()),onKeyup:t[13]||(t[13]=(0,i.D2)((e=>y.nextPage()),["enter"])),class:(0,s.C_)([n.nextLinkClass,y.lastPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.nextText},null,42,k)),n.firstLastButton?((0,a.wg)(),(0,a.iD)("a",{key:3,onClick:t[14]||(t[14]=e=>y.selectLastPage()),onKeyup:t[15]||(t[15]=(0,i.D2)((e=>y.selectLastPage()),["enter"])),class:(0,s.C_)([n.pageLinkClass,y.lastPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.lastButtonText},null,42,f)):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("ul",{key:0,class:(0,s.C_)(n.containerClass)},[n.firstLastButton?((0,a.wg)(),(0,a.iD)("li",{key:0,class:(0,s.C_)([n.pageClass,y.firstPageSelected()?n.disabledClass:""])},[(0,a._)("a",{onClick:t[0]||(t[0]=e=>y.selectFirstPage()),onKeyup:t[1]||(t[1]=(0,i.D2)((e=>y.selectFirstPage()),["enter"])),class:(0,s.C_)(n.pageLinkClass),tabindex:y.firstPageSelected()?-1:0,innerHTML:n.firstButtonText},null,42,d)],2)):(0,a.kq)("",!0),y.firstPageSelected()&&n.hidePrevNext?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",{key:1,class:(0,s.C_)([n.prevClass,y.firstPageSelected()?n.disabledClass:""])},[(0,a._)("a",{onClick:t[2]||(t[2]=e=>y.prevPage()),onKeyup:t[3]||(t[3]=(0,i.D2)((e=>y.prevPage()),["enter"])),class:(0,s.C_)(n.prevLinkClass),tabindex:y.firstPageSelected()?-1:0,innerHTML:n.prevText},null,42,o)],2)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.pages,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.index,class:(0,s.C_)([n.pageClass,t.selected?n.activeClass:"",t.disabled?n.disabledClass:"",t.breakView?n.breakViewClass:""])},[t.breakView?((0,a.wg)(),(0,a.iD)("a",{key:0,class:(0,s.C_)([n.pageLinkClass,n.breakViewLinkClass]),tabindex:"0"},[(0,a.WI)(e.$slots,"breakViewContent",{},(()=>[(0,a.Uk)((0,s.zw)(n.breakViewText),1)]))],2)):t.disabled?((0,a.wg)(),(0,a.iD)("a",{key:1,class:(0,s.C_)(n.pageLinkClass),tabindex:"0"},(0,s.zw)(t.content),3)):((0,a.wg)(),(0,a.iD)("a",{key:2,onClick:e=>y.handlePageSelected(t.index+1),onKeyup:(0,i.D2)((e=>y.handlePageSelected(t.index+1)),["enter"]),class:(0,s.C_)(n.pageLinkClass),tabindex:"0"},(0,s.zw)(t.content),43,c))],2)))),128)),y.lastPageSelected()&&n.hidePrevNext?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",{key:2,class:(0,s.C_)([n.nextClass,y.lastPageSelected()?n.disabledClass:""])},[(0,a._)("a",{onClick:t[4]||(t[4]=e=>y.nextPage()),onKeyup:t[5]||(t[5]=(0,i.D2)((e=>y.nextPage()),["enter"])),class:(0,s.C_)(n.nextLinkClass),tabindex:y.lastPageSelected()?-1:0,innerHTML:n.nextText},null,42,u)],2)),n.firstLastButton?((0,a.wg)(),(0,a.iD)("li",{key:3,class:(0,s.C_)([n.pageClass,y.lastPageSelected()?n.disabledClass:""])},[(0,a._)("a",{onClick:t[6]||(t[6]=e=>y.selectLastPage()),onKeyup:t[7]||(t[7]=(0,i.D2)((e=>y.selectLastPage()),["enter"])),class:(0,s.C_)(n.pageLinkClass),tabindex:y.lastPageSelected()?-1:0,innerHTML:n.lastButtonText},null,42,g)],2)):(0,a.kq)("",!0)],2))}var b=l(r,[["render",y]])},6015:function(e,t,n){n.d(t,{$2:function(){return l},Jp:function(){return d},_P:function(){return o},ab:function(){return r},hW:function(){return c},sp:function(){return s},yD:function(){return i}});var a=n(4471);function s(e){return(0,a.Z)({url:"/test/list",method:"get",data:e})}function i(e){return(0,a.Z)({url:"/test/"+e+"/detail",method:"get"})}function l(e){return(0,a.Z)({url:"/test/create",method:"post",data:e})}function r(e){return(0,a.Z)({url:"/test/update",method:"put",data:e})}function d(e,t){return(0,a.Z)({url:"/test/"+e+"/nummericalQuestion",method:"get",params:t})}function o(e,t){return(0,a.Z)({url:"/test/"+e+"/exams",method:"get",params:t})}function c(e){return(0,a.Z)({url:"/test/"+e+"/report",method:"get"})}},2822:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3396),s=n(9242),i=n(7139);const l={class:"nav-question"},r={key:0,class:"overview-exam"},d=(0,a._)("span",{class:"nameUser"}," Họ và tên: Nguyễn Văn A ",-1),o=(0,a._)("span",{class:"navbar-list-question"}," Danh sách câu hỏi ",-1),c={class:"list-numerical-question"},u=["id","onClick"],g={key:0,class:"fa-solid fa-caret-left"},p={key:1,class:"fa-solid fa-caret-right"};function h(e,t,n,h,C,k){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(s.uT,{name:"slide-fade"},{default:(0,a.w5)((()=>[h.displayShrink?((0,a.wg)(),(0,a.iD)("div",r,[d,(0,a._)("div",null,[o,(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.numericalQuestion.data,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,i.C_)(h.classType[parseInt(e.type)]),id:"link_"+e.id,onClick:t=>k.moveToQuestion(e.page,e.id)},(0,i.zw)(t+1),11,u)))),128))])])])):(0,a.kq)("",!0)])),_:1}),(0,a._)("div",{class:"nav-hiden-display",onClick:t[0]||(t[0]=e=>h.displayShrink=!h.displayShrink)},[h.displayShrink?((0,a.wg)(),(0,a.iD)("i",g)):(0,a.kq)("",!0),h.displayShrink?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",p))])])}var C=n(4870),k={name:"NavbarListComponent",props:["numericalQuestion","render"],watch:{render(){this.reload=!1,console.log("OK"),this.$nextTick((()=>{this.reload=!0}))}},setup(){const e=(0,C.iH)(!0),t=(0,C.iH)(["stt-question answer-content-choice","stt-question answer-content-choice-checked","stt-question answer-content-choice-true","stt-question answer-content-choice-wrong"]),n=(0,C.iH)(!0),a=(0,C.iH)("class-nav");return{classType:t,reload:e,displayShrink:n,classNav:a}},methods:{moveToQuestion(e,t){console.log("In navbar"),console.log("Navbar page "+e),this.$emit("moveQuestion",e,"question_"+t)}},components:{Transition:s.uT}},f=n(89);const y=(0,f.Z)(k,[["render",h]]);var b=y},8812:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3396);const s={class:"loading-overlay"},i=(0,a._)("h1",null,[(0,a.Uk)("Tại sao bạn thông minh vậy nhỉ? "),(0,a._)("br"),(0,a.Uk)(" Đợi tôi nghĩ xíu nha ")],-1),l=[i];function r(e,t,n,i,r,d){return(0,a.wg)(),(0,a.iD)("div",s,l)}var d={name:"LoadingComponent",props:["isLoading"]},o=n(89);const c=(0,o.Z)(d,[["render",r]]);var u=c}}]);
//# sourceMappingURL=233.fa18a69d.js.map