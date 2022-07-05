sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/ValueState","./ListItem","./Icon","./Avatar","./generated/templates/StandardListItemTemplate.lit"],function(e,t,n,i,a){"use strict";function s(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=s(e);const o={tag:"ui5-li",properties:{description:{type:String},icon:{type:String},iconEnd:{type:Boolean},image:{type:String},additionalText:{type:String},additionalTextState:{type:r,defaultValue:r.None},accessibleName:{type:String},hasTitle:{type:Boolean}},slots:{default:{type:Node}}};class d extends t{static get template(){return a}static get metadata(){return o}onBeforeRendering(...e){super.onBeforeRendering(...e);this.hasTitle=!!this.textContent}get displayImage(){return!!this.image}get displayIconBegin(){return this.icon&&!this.iconEnd}get displayIconEnd(){return this.icon&&this.iconEnd}static get dependencies(){return[...t.dependencies,n,i]}}d.define();return d});