sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","./types/TitleLevel","./types/WrappingType","./generated/templates/TitleTemplate.lit","./generated/themes/Title.css"],function(e,t,r,a,n,i){"use strict";function l(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var s=l(e);var u=l(t);const d={tag:"ui5-title",properties:{wrappingType:{type:a,defaultValue:a.None},level:{type:r,defaultValue:r.H2}},slots:{default:{type:Node}}};class h extends s{static get metadata(){return d}static get render(){return u}static get template(){return n}static get styles(){return i}get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}}h.define();return h});