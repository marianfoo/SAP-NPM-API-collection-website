sap.ui.define(function(){"use strict";class t{static isValid(t){}static attributeToProperty(t){return t}static propertyToAttribute(t){return`${t}`}static valuesAreEqual(t,e){return t===e}static generateTypeAccessors(t){Object.keys(t).forEach(e=>{Object.defineProperty(this,e,{get(){return t[e]}})})}}return t});