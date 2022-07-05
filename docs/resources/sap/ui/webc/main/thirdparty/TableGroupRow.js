sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","./CheckBox","./generated/templates/TableGroupRowTemplate.lit","./types/TableMode","./generated/i18n/i18n-defaults","./generated/themes/TableGroupRow.css"],function(e,t,n,i,r,s,a,o){"use strict";function u(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var l=u(e);var c=u(t);const d={tag:"ui5-table-group-row",slots:{default:{type:Node}},properties:{mode:{type:s,defaultValue:s.None},_columnsInfo:{type:Object,multiple:true},_tabIndex:{type:String,defaultValue:"-1"},_busy:{type:Boolean},_ariaPosition:{type:String,defaultValue:"",noAttribute:true}},events:{_focused:{}}};class p extends l{static get metadata(){return d}static get styles(){return o}static get render(){return c}static get template(){return r}static get dependencies(){return[i]}constructor(){super()}get colSpan(){return this._colSpan}get ariaLabelText(){return`${p.i18nBundle.getText(a.TABLE_GROUP_ROW_ARIA_LABEL)} ${this.innerText}. ${this._ariaPosition}`}visibleColCount(){let e=this._columnsInfo.reduce((e,t)=>t.visible?++e:e,0);if(this.mode===s.MultiSelect){e++}return e}onBeforeRendering(){if(!this._columnsInfo||this._columnsInfo.length===0){return}this._colSpan=this.visibleColCount()}_onfocusin(e){this.fireEvent("_focused",e)}static async onDefine(){p.i18nBundle=await n.getI18nBundle("@ui5/webcomponents")}}p.define();return p});