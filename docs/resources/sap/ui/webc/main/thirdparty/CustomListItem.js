sap.ui.define(["sap/ui/webc/common/thirdparty/base/Keys","./ListItem","./generated/templates/CustomListItemTemplate.lit","./generated/themes/CustomListItem.css"],function(e,t,s,i){"use strict";const r={tag:"ui5-li-custom",slots:{default:{type:Node}},properties:{accessibleName:{type:String}}};class u extends t{static get metadata(){return r}static get template(){return s}static get styles(){return[t.styles,i]}_onkeydown(t){const s=e.isTabNext(t)||e.isTabPrevious(t);if(!s&&!this.focused){return}super._onkeydown(t)}_onkeyup(t){const s=e.isTabNext(t)||e.isTabPrevious(t);if(!s&&!this.focused){return}super._onkeyup(t)}get classes(){const e=super.classes;e.main["ui5-custom-li-root"]=true;return e}}u.define();return u});