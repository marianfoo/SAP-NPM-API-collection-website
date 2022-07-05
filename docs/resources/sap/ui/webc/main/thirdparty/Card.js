sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","./generated/templates/CardTemplate.lit","./Icon","./generated/i18n/i18n-defaults","./generated/themes/Card.css"],function(e,t,n,a,r,i,s,c){"use strict";function u(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var d=u(e);var l=u(t);const o={tag:"ui5-card",languageAware:true,managedSlots:true,slots:{default:{propertyName:"content",type:HTMLElement},header:{type:HTMLElement}},properties:{accessibleName:{type:String},accessibleNameRef:{type:String}},events:{}};class g extends d{static get metadata(){return o}static get render(){return l}static get template(){return r}static get styles(){return c}get classes(){return{"ui5-card-root":true,"ui5-card--nocontent":!this.content.length}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=a.getEffectiveAriaLabelText(this),t=e?` ${e}`:"";return g.i18nBundle.getText(s.ARIA_ROLEDESCRIPTION_CARD)+t}get _ariaCardContentLabel(){return g.i18nBundle.getText(s.ARIA_LABEL_CARD_CONTENT)}static get dependencies(){return[i]}static async onDefine(){g.i18nBundle=await n.getI18nBundle("@ui5/webcomponents")}}g.define();return g});