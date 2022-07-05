sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/ValueState","sap/ui/webc/common/thirdparty/base/Device","./ListItem","./Icon","sap/ui/webc/common/thirdparty/icons/navigation-right-arrow","sap/ui/webc/common/thirdparty/icons/navigation-down-arrow","./generated/i18n/i18n-defaults","./generated/templates/TreeListItemTemplate.lit","./generated/themes/TreeListItem.css"],function(e,t,i,n,s,a,o,r,l,u,g,d){"use strict";function p(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var h=p(e);var c=p(n);const m={tag:"ui5-li-tree",languageAware:true,properties:{level:{type:h,defaultValue:1},icon:{type:String},showToggleButton:{type:Boolean},expanded:{type:Boolean},indeterminate:{type:Boolean},additionalText:{type:String},additionalTextState:{type:c,defaultValue:c.None},_toggleButtonEnd:{type:Boolean},_minimal:{type:Boolean},_setsize:{type:h,defaultValue:1,noAttribute:true},_posinset:{type:h,defaultValue:1,noAttribute:true}},slots:{default:{type:Node}},events:{toggle:{detail:{item:{type:HTMLElement}}},"step-in":{detail:{item:{type:HTMLElement}}},"step-out":{detail:{item:{type:HTMLElement}}}}};class f extends a{static get template(){return g}static get styles(){return[a.styles,d]}static get metadata(){return m}static get dependencies(){return[...a.dependencies,o]}onBeforeRendering(){this.actionable=false}get classes(){const e=super.classes;e.main["ui5-li-root-tree"]=true;return e}get styles(){return{preContent:{"padding-left":s.isIE()?`${this.effectiveLevel}rem`:`calc(var(--_ui5-tree-indent-step) * ${this.effectiveLevel})`}}}get effectiveLevel(){return this.level-1}get hasParent(){return this.level>1}get _toggleIconName(){return this.expanded?"navigation-down-arrow":"navigation-right-arrow"}get _showToggleButtonBeginning(){return this.showToggleButton&&!this._minimal&&!this._toggleButtonEnd}get _showToggleButtonEnd(){return this.showToggleButton&&!this._minimal&&this._toggleButtonEnd}get _showTitle(){return this.textContent.length&&!this._minimal}get _accInfo(){return{role:"treeitem",ariaExpanded:this.showToggleButton?this.expanded:undefined,ariaLevel:this.level,posinset:this._posinset,setsize:this._setsize,ariaSelectedText:this.ariaSelectedText,listItemAriaLabel:f.i18nBundle.getText(u.TREE_ITEM_ARIA_LABEL)}}_toggleClick(e){e.stopPropagation();this.fireEvent("toggle",{item:this})}_onkeydown(e){super._onkeydown(e);if(this.showToggleButton&&t.isRight(e)){if(!this.expanded){this.fireEvent("toggle",{item:this})}else{this.fireEvent("step-in",{item:this})}}if(t.isLeft(e)){if(this.expanded){this.fireEvent("toggle",{item:this})}else if(this.hasParent){this.fireEvent("step-out",{item:this})}}}get iconAccessibleName(){return this.expanded?f.i18nBundle.getText(u.TREE_ITEM_COLLAPSE_NODE):f.i18nBundle.getText(u.TREE_ITEM_EXPAND_NODE)}static async onDefine(){[f.i18nBundle]=await Promise.all([i.getI18nBundle("@ui5/webcomponents"),super.onDefine()])}}f.define();return f});