sap.ui.define(["sap/ui/webc/common/thirdparty/base/Device","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/ValueState","sap/ui/webc/common/thirdparty/base/FeaturesRegistry","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/icons/accept","./Icon","./Label","./types/WrappingType","./generated/i18n/i18n-defaults","./generated/templates/CheckBoxTemplate.lit","./generated/themes/CheckBox.css"],function(e,t,i,a,n,r,s,u,o,d,c,l,h,p,g){"use strict";function m(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var f=m(t);var b=m(i);var y=m(n);let v=false;let S=null;const T={tag:"ui5-checkbox",languageAware:true,properties:{accessibleNameRef:{type:String,defaultValue:""},accessibleName:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},required:{type:Boolean},indeterminate:{type:Boolean},checked:{type:Boolean},text:{type:String},valueState:{type:y,defaultValue:y.None},wrappingType:{type:l,defaultValue:l.None},name:{type:String},active:{type:Boolean}},events:{change:{}},slots:{formSupport:{type:HTMLElement}}};class k extends f{static get metadata(){return T}static get render(){return b}static get template(){return p}static get styles(){return g}constructor(){super();this._deactivate=()=>{if(S){S.active=false}};if(!v){document.addEventListener("mouseup",this._deactivate);v=true}}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=r.getFeature("FormSupport");if(e){e.syncNativeHiddenInput(this,(e,t)=>{t.disabled=e.disabled||!e.checked;t.value=e.checked?"on":""})}else if(this.name){console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`)}}_onclick(){this.toggle()}_onmousedown(){if(this.readonly||this.disabled){return}this.active=true;S=this}_onmouseup(){this.active=false}_onfocusout(){this.active=false}_onkeydown(e){if(u.isSpace(e)){e.preventDefault();this.active=true}if(u.isEnter(e)){this.toggle();this.active=true}}_onkeyup(e){if(u.isSpace(e)){this.toggle()}this.active=false}toggle(){if(this.canToggle()){if(this.indeterminate){this.indeterminate=false;this.checked=true}else{this.checked=!this.checked}this.fireEvent("change");this.fireEvent("value-changed")}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:k.i18nBundle.getText(h.VALUE_STATE_ERROR),Warning:k.i18nBundle.getText(h.VALUE_STATE_WARNING),Success:k.i18nBundle.getText(h.VALUE_STATE_SUCCESS)}}get ariaLabelText(){return s.getEffectiveAriaLabelText(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&e.isDesktop()}}}get ariaReadonly(){return this.readonly?"true":undefined}get ariaDisabled(){return this.disabled?"true":undefined}get ariaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText){return this.text?`${this._id}-label`:undefined}return undefined}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:undefined}get hasValueState(){return this.valueState!==y.None}get valueStateText(){return this.valueStateTextMappings()[this.valueState]}get tabIndex(){const e=this.getAttribute("tabindex");return this.disabled?undefined:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static get dependencies(){return[c,d]}static async onDefine(){k.i18nBundle=await a.getI18nBundle("@ui5/webcomponents")}}k.define();return k});