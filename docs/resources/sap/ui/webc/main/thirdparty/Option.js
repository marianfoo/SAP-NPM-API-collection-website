sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element"],function(e){"use strict";function t(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var a=t(e);const n={tag:"ui5-option",managedSlots:true,properties:{selected:{type:Boolean},disabled:{type:Boolean},title:{type:String},icon:{type:String,defaultValue:null},value:{type:String},additionalText:{type:String},_focused:{type:Boolean}},slots:{default:{type:Node}},events:{}};class i extends a{static get metadata(){return n}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}}i.define();return i});