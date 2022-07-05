sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/delegate/ResizeHandler","sap/ui/webc/common/thirdparty/base/delegate/ItemNavigation","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/types/NavigationMode","sap/ui/webc/common/thirdparty/base/Device","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/util/getNormalizedTarget","sap/ui/webc/common/thirdparty/base/util/getActiveElement","sap/ui/webc/common/thirdparty/base/util/TabbableElements","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/util/debounce","sap/ui/webc/common/thirdparty/base/util/isElementInView","./types/TableGrowingMode","./BusyIndicator","./types/TableMode","./CheckBox","./generated/i18n/i18n-defaults","./generated/templates/TableTemplate.lit","./generated/themes/Table.css"],function(e,t,s,i,n,o,r,l,a,c,d,h,u,m,f,g,w,p,b,_,E,v){"use strict";function y(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var R=y(e);var S=y(t);var I=y(s);var T=y(i);var C=y(n);var B=y(o);var F=y(a);var H=y(c);var x=y(m);var N=y(f);const A=250;const O=20;const D={tag:"ui5-table",managedSlots:true,fastNavigation:true,slots:{default:{propertyName:"rows",type:HTMLElement,individualSlots:true,invalidateOnChildChange:true},columns:{type:HTMLElement,individualSlots:true,invalidateOnChildChange:{properties:true,slots:false}}},properties:{noDataText:{type:String},growingButtonText:{type:String},growingButtonSubtext:{type:String},hideNoData:{type:Boolean},growing:{type:g,defaultValue:g.None},busy:{type:Boolean},busyDelay:{type:C,defaultValue:1e3},stickyColumnHeader:{type:Boolean},mode:{type:p,defaultValue:p.None},accessibleName:{type:String,defaultValue:undefined},accessibleNameRef:{type:String,defaultValue:""},_hiddenColumns:{type:Object,multiple:true},_noDataDisplayed:{type:Boolean},_loadMoreActive:{type:Boolean},_columnHeader:{type:Object},_inViewport:{type:Boolean},_allRowsSelected:{type:Boolean}},events:{"row-click":{detail:{row:{type:HTMLElement}}},"popin-change":{detail:{poppedColumns:{}}},"load-more":{},"selection-change":{detail:{selectedRows:{type:Array},previouslySelectedRows:{type:Array}}}}};class L extends R{static get metadata(){return D}static get styles(){return v}static get render(){return S}static get template(){return E}static get dependencies(){return[w,b]}static async onDefine(){L.i18nBundle=await u.getI18nBundle("@ui5/webcomponents")}constructor(){super();this._columnHeader={id:`${this._id}-columnHeader`,_tabIndex:"0"};this._itemNavigation=new T(this,{navigationMode:B.Vertical,affectedPropertiesNames:["_columnHeader"],getItemsCallback:()=>[this._columnHeader,...this.rows],skipItemsSize:O});this.fnOnRowFocused=this.onRowFocused.bind(this);this._handleResize=this.popinContent.bind(this);this.fnHandleF7=this._handleF7.bind(this);this.tableEndObserved=false;this.addEventListener("ui5-selection-requested",this._handleSelect.bind(this));this.addEventListener("ui5-_forward-after",this._onForwardAfter.bind(this));this.addEventListener("ui5-_forward-before",this._onForwardBefore.bind(this));this.lastFocusedElement=null;this._forwardingFocus=false;this._prevNestedElementIndex=0}onBeforeRendering(){const e=this.getColumnPropagationSettings();const t=JSON.stringify(e);const s=this.rows.length;const i=this.selectedRows;this.rows.forEach((i,n)=>{if(i._columnsInfoString!==t){i._columnsInfo=e;i._columnsInfoString=JSON.stringify(i._columnsInfo)}i._ariaPosition=L.i18nBundle.getText(_.TABLE_ROW_POSITION,n+1,s);i._busy=this.busy;i.removeEventListener("ui5-_focused",this.fnOnRowFocused);i.addEventListener("ui5-_focused",this.fnOnRowFocused);i.removeEventListener("ui5-f7-pressed",this.fnHandleF7);i.addEventListener("ui5-f7-pressed",this.fnHandleF7);i.mode=this.mode});this.visibleColumns=this.columns.filter((e,t)=>!this._hiddenColumns[t]);this._noDataDisplayed=!this.rows.length&&!this.hideNoData;this.visibleColumnsCount=this.visibleColumns.length;this._allRowsSelected=i.length===this.rows.length;this._prevFocusedRow=this._prevFocusedRow||this.rows[0]}onAfterRendering(){if(this.growsOnScroll){this.observeTableEnd()}this.checkTableInViewport()}onEnterDOM(){if(!r.isIE()){this.growingIntersectionObserver=this.getIntersectionObserver()}I.register(this.getDomRef(),this._handleResize);this._itemNavigation.setCurrentItem(this.rows.length?this.rows[0]:this._columnHeader)}onExitDOM(){I.deregister(this.getDomRef(),this._handleResize);if(!r.isIE()){this.growingIntersectionObserver.disconnect();this.growingIntersectionObserver=null;this.tableEndObserved=false}}_onkeydown(e){if(l.isTabNext(e)||l.isTabPrevious(e)){this._handleTab(e)}if(l.isCtrlA(e)){e.preventDefault();this.isMultiSelect&&this._selectAll(e)}if(l.isUpAlt(e)||l.isDownAlt(e)){this._handleArrowAlt(e)}if((l.isUpShift(e)||l.isDownShift(e))&&this.isMultiSelect){this._handleArrowNav(e)}if(l.isHomeCtrl(e)){e.preventDefault();this._itemNavigation._handleHome(e);this._itemNavigation._applyTabIndex();this._itemNavigation._focusCurrentItem()}if(l.isEndCtrl(e)){e.preventDefault();this._itemNavigation._handleEnd(e);this._itemNavigation._applyTabIndex();this._itemNavigation._focusCurrentItem()}if((l.isHomeShift(e)||l.isEndShift(e))&&this.isMultiSelect){this._handleHomeEndSelection(e)}}_handleTab(e){const t=l.isTabNext(e);const s=F(e.target);const i=this.getFocusedElementType(e.target);if(this.columnHeaderTabbables.includes(s)){if(t&&this.columnHeaderLastElement===s){return this._focusNextElement(e)}return}if(t&&i==="columnHeader"&&!this.columnHeaderTabbables.length){return this._focusNextElement(e)}if(i==="tableRow"||!i){return}switch(i){case"tableGroupRow":return t?this._focusNextElement(e):this._focusForwardElement(e,false);case"columnHeader":return!t&&this._focusForwardElement(e,false);case"moreButton":if(t){this._focusForwardElement(e,true)}else{e.preventDefault();this.currentElement.focus()}}}_focusNextElement(e){if(!this.growsWithButton){this._focusForwardElement(e,true)}else{this.morеBtn.focus()}}_handleArrowNav(e){const t=this.currentElement.localName==="tr";if(!t){return}const s=this.selectedRows;const i=this.currentItem;const n=this.currentItemIdx;const o=n-1;const r=n+1;const a=this.rows[o];const c=this.rows[r];const d=i.selected;if(l.isUpShift(e)&&!a||l.isDownShift(e)&&!c){return}if(l.isUpShift(e)){i.selected=i.selected&&!a.selected;a.selected=i.selected||d&&!i.selected;a.focus()}if(l.isDownShift(e)){i.selected=i.selected&&!c.selected;c.selected=i.selected||d&&!i.selected;c.focus()}const h=this.selectedRows;this.fireEvent("selection-change",{selectedRows:h,previouslySelectedRows:s})}_handleHomeEndSelection(e){const t=this.currentElement.localName==="tr";if(!t){return}const s=this.rows;const i=this.selectedRows;const n=this.currentItemIdx;if(l.isHomeShift(e)){s.slice(0,n+1).forEach(e=>{e.selected=true});s[0].focus()}if(l.isEndShift(e)){s.slice(n).forEach(e=>{e.selected=true});s[s.length-1].focus()}const o=this.selectedRows;this.fireEvent("selection-change",{selectedRows:o,previouslySelectedRows:i})}_handleArrowAlt(e){const t=l.isUpAlt(e);const s=this.getFocusedElementType(e.target);if(t){switch(s){case"tableRow":case"tableGroupRow":this._prevFocusedRow=e.target;return this._onColumnHeaderClick(e);case"columnHeader":return this.morеBtn?this.morеBtn.focus():this._prevFocusedRow.focus();case"moreButton":return this._prevFocusedRow?this._prevFocusedRow.focus():this._onColumnHeaderClick(e)}}else{switch(s){case"tableRow":case"tableGroupRow":this._prevFocusedRow=e.target;return this.morеBtn?this.morеBtn.focus():this._onColumnHeaderClick(e);case"columnHeader":if(this._prevFocusedRow){this._prevFocusedRow.focus()}else if(this.morеBtn){this.morеBtn.focus()}return;case"moreButton":return this._onColumnHeaderClick(e)}}}getFocusedElementType(e){if(e===this.columnHeader){return"columnHeader"}if(e===this.morеBtn){return"moreButton"}if(this.rows.includes(e)){const t=e.hasAttribute("ui5-table-group-row");return t?"tableGroupRow":"tableRow"}}_handleF7(e){const t=e.detail.row;t._tabbables=d.getTabbableElements(t);const s=H();const i=t._tabbables[this._prevNestedElementIndex]||t._tabbables[0];const n=t._tabbables.indexOf(s);if(!t._tabbables.length){return}if(s===t.root){i.focus()}else if(n>-1){this._prevNestedElementIndex=n;t.root.focus()}}_onfocusin(e){const t=F(e.target);if(!this._isForwardElement(t)){this.lastFocusedElement=t;return}if(!this._forwardingFocus){if(this.lastFocusedElement){this.lastFocusedElement.focus()}else{this.currentElement.focus()}e.stopImmediatePropagation()}this._forwardingFocus=false}_onForwardBefore(e){this.lastFocusedElement=e.detail.target;this._focusForwardElement(e,false);e.stopImmediatePropagation()}_onForwardAfter(e){this.lastFocusedElement=e.detail.target;if(!this.growsWithButton){this._focusForwardElement(e,true)}else{this.morеBtn.focus()}}_focusForwardElement(e,t){this._forwardingFocus=true;this.shadowRoot.querySelector(`#${this._id}-${t?"after":"before"}`).focus()}_isForwardElement(e){const t=e.id;const s=this._getForwardElement(true);const i=this._getForwardElement(false);if(this._id===t||i&&i.id===t){return true}return s&&s.id===t}_getForwardElement(e){const t=e?"after":"before";if(!this[`_${t}Element`]){this[`_${t}Element`]=this.shadowRoot.querySelector(`#${this._id}-${t}`)}return this[`_${t}Element`]}onRowFocused(e){this._itemNavigation.setCurrentItem(e.target)}_onColumnHeaderFocused(e){this._itemNavigation.setCurrentItem(this._columnHeader)}_onColumnHeaderClick(e){if(!e.target){this.columnHeader.focus()}const t=F(e.target);const s=this.columnHeaderTabbables.includes(t);if(!s){this.columnHeader.focus()}}_onColumnHeaderKeydown(e){if(l.isSpace(e)){e.preventDefault();this.isMultiSelect&&this._selectAll()}}_onLoadMoreKeydown(e){if(l.isSpace(e)){e.preventDefault();this._loadMoreActive=true}if(l.isEnter(e)){this._onLoadMoreClick();this._loadMoreActive=true}}_onLoadMoreKeyup(e){if(l.isSpace(e)){this._onLoadMoreClick()}this._loadMoreActive=false}_onLoadMoreClick(){this.fireEvent("load-more")}observeTableEnd(){if(!this.tableEndObserved){this.getIntersectionObserver().observe(this.tableEndDOM);this.tableEndObserved=true}}onInteresection(e){if(e.some(e=>e.isIntersecting)){x(this.loadMore.bind(this),A)}}loadMore(){this.fireEvent("load-more")}_handleSingleSelect(e){const t=this.getRowParent(e.target);if(!t.selected){const e=this.selectedRows;this.rows.forEach(e=>{if(e.selected){e.selected=false}});t.selected=true;this.fireEvent("selection-change",{selectedRows:[t],previouslySelectedRows:e})}}_handleMultiSelect(e){const t=this.getRowParent(e.target);const s=this.selectedRows;t.selected=!t.selected;const i=this.selectedRows;if(i.length===this.rows.length){this._allRowsSelected=true}else{this._allRowsSelected=false}this.fireEvent("selection-change",{selectedRows:i,previouslySelectedRows:s})}_handleSelect(e){this[`_handle${this.mode}`](e)}_selectAll(e){const t=!this._allRowsSelected;const s=this.rows.filter(e=>e.selected);this._allRowsSelected=t;this.rows.forEach(e=>{e.selected=t});const i=t?this.rows:[];this.fireEvent("selection-change",{selectedRows:i,previouslySelectedRows:s})}getRowParent(e){const t=e.parentElement;if(e.hasAttribute("ui5-table-row")){return e}if(t&&t.hasAttribute("ui5-table-row")){return t}this.getRowParent(t)}get columnHeader(){return this.getDomRef()&&this.getDomRef().querySelector(`#${this._id}-columnHeader`)}get"morеBtn"(){return this.growsWithButton&&this.getDomRef()&&this.getDomRef().querySelector(`#${this._id}-growingButton`)}handleResize(e){this.checkTableInViewport();this.popinContent(e)}checkTableInViewport(){this._inViewport=N(this.getDomRef())}popinContent(e){const t=this.getDomRef().getBoundingClientRect();const s=t.width;const i=[];const n=[];this.columns.forEach((e,t)=>{if(s<e.minWidth&&e.minWidth!==Infinity){i[t]={index:t,popinText:e.popinText,demandPopin:e.demandPopin}}else{n.push(t)}});if(n.length){if(!this.isMultiSelect){this.columns[n[0]].first=true}this.columns[n[n.length-1]].last=true}if(this._hiddenColumns.length!==i.length){this._hiddenColumns=i;if(i.length){this.fireEvent("popin-change",{poppedColumns:this._hiddenColumns})}}}getColumnPropagationSettings(){return this.columns.map((e,t)=>({index:t,minWidth:e.minWidth,demandPopin:e.demandPopin,text:e.textContent,popinText:e.popinText,visible:!this._hiddenColumns[t]}),this)}getIntersectionObserver(){if(!this.growingIntersectionObserver){this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:document,rootMargin:"0px",threshold:1})}return this.growingIntersectionObserver}get styles(){return{busy:{position:this.busyIndPosition}}}get growsWithButton(){if(r.isIE()){return this.growing===g.Button||this.growing===g.Scroll}return this.growing===g.Button}get growsOnScroll(){return!r.isIE()&&this.growing===g.Scroll}get _growingButtonText(){return this.growingButtonText||L.i18nBundle.getText(_.LOAD_MORE_TEXT)}get ariaLabelText(){const e=L.i18nBundle.getText(_.TABLE_HEADER_ROW_TEXT);const t=this.columns.map(e=>e.textContent.trim()).join(" ");return`${e} ${t}`}get tableAriaLabelText(){return h.getEffectiveAriaLabelText(this)}get ariaLabelSelectAllText(){return L.i18nBundle.getText(_.ARIA_LABEL_SELECT_ALL_CHECKBOX)}get loadMoreAriaLabelledBy(){if(this.moreDataText){return`${this._id}-growingButton-text ${this._id}-growingButton-subtext`}return`${this._id}-growingButton-text`}get tableEndDOM(){return this.shadowRoot.querySelector(".ui5-table-end-marker")}get busyIndPosition(){if(r.isIE()){return"absolute"}return this._inViewport?"absolute":"sticky"}get isMultiSelect(){return this.mode==="MultiSelect"}get selectedRows(){return this.rows.filter(e=>e.selected)}get currentItemIdx(){return this.rows.indexOf(this.currentItem)}get currentItem(){return this.getRootNode().activeElement}get currentElement(){return this._itemNavigation._getCurrentItem()}get columnHeaderTabbables(){return d.getTabbableElements(this.columnHeader)}get columnHeaderLastElement(){return d.getLastTabbableElement(this.columnHeader)}}L.define();return L});