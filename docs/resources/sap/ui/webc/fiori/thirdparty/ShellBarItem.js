sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,t){"use strict";function r(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var i=r(e);var n=r(t);const a={tag:"ui5-shellbar-item",properties:{icon:{type:String},text:{type:String},count:{type:String}},events:{click:{detail:{targetRef:{type:HTMLElement}}}}};class s extends i{static get metadata(){return a}static get render(){return n}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}}s.define();return s});