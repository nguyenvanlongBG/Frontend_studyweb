"use strict";(self["webpackChunkstudyweb"]=self["webpackChunkstudyweb"]||[]).push([[368],{6368:function(e,t,i){i(7658),i(541);var s=i(3396),l=i(9242),n=i(7139);function o(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function a(e){return(...t)=>!e(...t)}function r(e,t){void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false");const i=e.toString().toLowerCase();return-1!==i.indexOf(t.trim())}function h(e,t,i,s){return t?e.filter((e=>r(s(e,i),t))).sort(((e,t)=>s(e,i).length-s(t,i).length)):e}function u(e){return e.filter((e=>!e.$isLabel))}function p(e,t){return i=>i.reduce(((i,s)=>s[e]&&s[e].length?(i.push({$groupLabel:s[t],$isLabel:!0}),i.concat(s[e])):i),[])}function c(e,t,i,s,l){return n=>n.map((n=>{if(!n[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const o=h(n[i],e,t,l);return o.length?{[s]:n[s],[i]:o}:[]}))}const d=(...e)=>t=>e.reduce(((e,t)=>t(e)),t);var g={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return o(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||0===this.modelValue?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):h(i,t,this.label,this.customLabel):this.groupValues?p(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(a(this.isSelected)):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map((e=>e[this.trackBy])):this.internalValue},optionKeys(){const e=this.groupValues?this.flatAndStrip(this.options):this.options;return e.map((e=>this.customLabel(e,this.label).toString().toLowerCase()))},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat(e,t,i){return d(c(t,i,this.groupValues,this.groupLabel,this.customLabel),p(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return d(p(this.groupValues,this.groupLabel),u)(e)},updateSearch(e){this.search=e},isExistingOption(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(o(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return o(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect)this.selectGroup(e);else if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isDisabled||e.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{const i=this.isSelected(e);if(i)return void("Tab"!==t&&this.removeElement(e));this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find((t=>t[this.groupLabel]===e.$groupLabel));if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const e=this.internalValue.filter((e=>-1===t[this.groupValues].indexOf(e)));this.$emit("update:modelValue",e)}else{let e=t[this.groupValues].filter((e=>!(this.isOptionDisabled(e)||this.isSelected(e))));this.max&&e.splice(this.max-this.internalValue.length),this.$emit("select",e,this.id),this.$emit("update:modelValue",this.internalValue.concat(e))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every((e=>this.isSelected(e)||this.isOptionDisabled(e)))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled)return;if(e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();const i="object"===typeof e?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const e=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("update:modelValue",e)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick((()=>this.$refs.search&&this.$refs.search.focus()))):this.preventAutofocus||"undefined"!==typeof this.$el&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?"undefined"!==typeof this.$refs.search&&this.$refs.search.blur():"undefined"!==typeof this.$el&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if("undefined"===typeof window)return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom,i=t>this.maxHeight;i||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},m={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const i=this.options.find((e=>e[this.groupLabel]===t.$groupLabel));return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},b={name:"vue-multiselect",mixins:[g,m],props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}};const f={ref:"tags",class:"multiselect__tags"},y={class:"multiselect__tags-wrap"},v={class:"multiselect__spinner"},w={key:0},V={class:"multiselect__option"},L={class:"multiselect__option"},O=(0,s.Uk)("No elements found. Consider changing the search query."),S={class:"multiselect__option"},$=(0,s.Uk)("List is empty.");function x(e,t,i,o,a,r){return(0,s.wg)(),(0,s.j4)("div",{tabindex:e.searchable?-1:i.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":i.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:t[14]||(t[14]=t=>e.activate()),onBlur:t[15]||(t[15]=t=>!e.searchable&&e.deactivate()),onKeydown:[t[16]||(t[16]=(0,l.D2)((0,l.iM)((t=>e.pointerForward()),["self","prevent"]),["down"])),t[17]||(t[17]=(0,l.D2)((0,l.iM)((t=>e.pointerBackward()),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=(0,l.D2)((0,l.iM)((t=>e.addPointerElement(t)),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=(0,l.D2)((t=>e.deactivate()),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[(0,s.WI)(e.$slots,"caret",{toggle:e.toggle},(()=>[(0,s.Wm)("div",{onMousedown:t[1]||(t[1]=(0,l.iM)((t=>e.toggle()),["prevent","stop"])),class:"multiselect__select"},null,32)])),(0,s.WI)(e.$slots,"clear",{search:e.search}),(0,s.Wm)("div",f,[(0,s.WI)(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:r.visibleValues,isOpen:e.isOpen},(()=>[(0,s.wy)((0,s.Wm)("div",y,[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(r.visibleValues,((t,i)=>(0,s.WI)(e.$slots,"tag",{option:t,search:e.search,remove:e.removeElement},(()=>[((0,s.wg)(),(0,s.j4)("span",{class:"multiselect__tag",key:i},[(0,s.Wm)("span",{textContent:(0,n.zw)(e.getOptionLabel(t))},null,8,["textContent"]),(0,s.Wm)("i",{tabindex:"1",onKeypress:(0,l.D2)((0,l.iM)((i=>e.removeElement(t)),["prevent"]),["enter"]),onMousedown:(0,l.iM)((i=>e.removeElement(t)),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])))),256))],512),[[l.F8,r.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>i.limit?(0,s.WI)(e.$slots,"limit",{key:0},(()=>[(0,s.Wm)("strong",{class:"multiselect__strong",textContent:(0,n.zw)(i.limitText(e.internalValue.length-i.limit))},null,8,["textContent"])])):(0,s.kq)("v-if",!0)])),(0,s.Wm)(l.uT,{name:"multiselect__loading"},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"loading",{},(()=>[(0,s.wy)((0,s.Wm)("div",v,null,512),[[l.F8,i.loading]])]))])),_:3}),e.searchable?((0,s.wg)(),(0,s.j4)("input",{key:0,ref:"search",name:i.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:r.inputStyle,value:e.search,disabled:i.disabled,tabindex:i.tabindex,onInput:t[2]||(t[2]=t=>e.updateSearch(t.target.value)),onFocus:t[3]||(t[3]=(0,l.iM)((t=>e.activate()),["prevent"])),onBlur:t[4]||(t[4]=(0,l.iM)((t=>e.deactivate()),["prevent"])),onKeyup:t[5]||(t[5]=(0,l.D2)((t=>e.deactivate()),["esc"])),onKeydown:[t[6]||(t[6]=(0,l.D2)((0,l.iM)((t=>e.pointerForward()),["prevent"]),["down"])),t[7]||(t[7]=(0,l.D2)((0,l.iM)((t=>e.pointerBackward()),["prevent"]),["up"])),t[9]||(t[9]=(0,l.D2)((0,l.iM)((t=>e.removeLastElement()),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=(0,l.D2)((0,l.iM)((t=>e.addPointerElement(t)),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):(0,s.kq)("v-if",!0),r.isSingleLabelVisible?((0,s.wg)(),(0,s.j4)("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=(0,l.iM)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,s.WI)(e.$slots,"singleLabel",{option:r.singleValue},(()=>[(0,s.Uk)((0,n.zw)(e.currentOptionLabel),1)]))],32)):(0,s.kq)("v-if",!0),r.isPlaceholderVisible?((0,s.wg)(),(0,s.j4)("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=(0,l.iM)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,s.WI)(e.$slots,"placeholder",{},(()=>[(0,s.Uk)((0,n.zw)(e.placeholder),1)]))],32)):(0,s.kq)("v-if",!0)],512),(0,s.Wm)(l.uT,{name:"multiselect"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...t)=>e.activate&&e.activate(...t)),tabindex:"-1",onMousedown:t[13]||(t[13]=(0,l.iM)((()=>{}),["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[(0,s.Wm)("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+e.id},[(0,s.WI)(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?((0,s.wg)(),(0,s.j4)("li",w,[(0,s.Wm)("span",V,[(0,s.WI)(e.$slots,"maxElements",{},(()=>[(0,s.Uk)("Maximum of "+(0,n.zw)(e.max)+" options selected. First remove a selected option to select another.",1)]))])])):(0,s.kq)("v-if",!0),!e.max||e.internalValue.length<e.max?((0,s.wg)(!0),(0,s.j4)(s.HY,{key:1},(0,s.Ko)(e.filteredOptions,((t,i)=>((0,s.wg)(),(0,s.j4)("li",{class:"multiselect__element",key:i,id:e.id+"-"+i,role:t&&(t.$isLabel||t.$isDisabled)?null:"option"},[t&&(t.$isLabel||t.$isDisabled)?(0,s.kq)("v-if",!0):((0,s.wg)(),(0,s.j4)("span",{key:0,class:[e.optionHighlight(i,t),"multiselect__option"],onClick:(0,l.iM)((i=>e.select(t)),["stop"]),onMouseenter:(0,l.iM)((t=>e.pointerSet(i)),["self"]),"data-select":t&&t.isTag?e.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[(0,s.WI)(e.$slots,"option",{option:t,search:e.search,index:i},(()=>[(0,s.Wm)("span",null,(0,n.zw)(e.getOptionLabel(t)),1)]))],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),t&&(t.$isLabel||t.$isDisabled)?((0,s.wg)(),(0,s.j4)("span",{key:1,"data-select":e.groupSelect&&r.selectGroupLabelText,"data-deselect":e.groupSelect&&r.deselectGroupLabelText,class:[e.groupHighlight(i,t),"multiselect__option"],onMouseenter:(0,l.iM)((t=>e.groupSelect&&e.pointerSet(i)),["self"]),onMousedown:(0,l.iM)((i=>e.selectGroup(t)),["prevent"])},[(0,s.WI)(e.$slots,"option",{option:t,search:e.search,index:i},(()=>[(0,s.Wm)("span",null,(0,n.zw)(e.getOptionLabel(t)),1)]))],42,["data-select","data-deselect","onMouseenter","onMousedown"])):(0,s.kq)("v-if",!0)],8,["id","role"])))),128)):(0,s.kq)("v-if",!0),(0,s.wy)((0,s.Wm)("li",null,[(0,s.Wm)("span",L,[(0,s.WI)(e.$slots,"noResult",{search:e.search},(()=>[O]))])],512),[[l.F8,i.showNoResults&&0===e.filteredOptions.length&&e.search&&!i.loading]]),(0,s.wy)((0,s.Wm)("li",null,[(0,s.Wm)("span",S,[(0,s.WI)(e.$slots,"noOptions",{},(()=>[$]))])],512),[[l.F8,i.showNoOptions&&(0===e.options.length||!0===r.hasOptionGroup&&0===e.filteredOptions.length)&&!e.search&&!i.loading]]),(0,s.WI)(e.$slots,"afterList")],12,["id"])],36),[[l.F8,e.isOpen]])])),_:3})],42,["tabindex","aria-owns"])}b.render=x,t["ZP"]=b}}]);
//# sourceMappingURL=368.08423086.js.map