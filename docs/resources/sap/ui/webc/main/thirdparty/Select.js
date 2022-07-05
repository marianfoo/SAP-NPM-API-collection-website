sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/util/InvisibleMessage","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/FeaturesRegistry","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","sap/ui/webc/common/thirdparty/base/types/ValueState","sap/ui/webc/common/thirdparty/icons/slim-arrow-down","sap/ui/webc/common/thirdparty/icons/error","sap/ui/webc/common/thirdparty/icons/alert","sap/ui/webc/common/thirdparty/icons/sys-enter-2","sap/ui/webc/common/thirdparty/icons/information","sap/ui/webc/common/thirdparty/base/Device","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/icons/decline","./generated/i18n/i18n-defaults","./Option","./Label","./ResponsivePopover","./Popover","./List","./StandardListItem","./Icon","./Button","./generated/templates/SelectTemplate.lit","./generated/templates/SelectPopoverTemplate.lit","./generated/themes/Select.css","./generated/themes/ResponsivePopoverCommon.css","./generated/themes/ValueStateMessage.css","./generated/themes/SelectPopover.css"],function(e,t,s,i,n,o,r,a,l,d,c,h,p,u,_,f,m,g,v,I,S,x,y,P,b,T,O,w,E,R,C){"use strict";function D(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var A=D(e);var V=D(t);var N=D(i);var B=D(n);var L=D(a);const M={tag:"ui5-select",languageAware:true,managedSlots:true,slots:{default:{propertyName:"options",type:HTMLElement,invalidateOnChildChange:true},valueStateMessage:{type:HTMLElement},formSupport:{type:HTMLElement}},properties:{disabled:{type:Boolean},name:{type:String},valueState:{type:L,defaultValue:L.None},required:{type:Boolean},accessibleName:{type:String},accessibleNameRef:{type:String,defaultValue:""},_text:{type:String,noAttribute:true},_iconPressed:{type:Boolean,noAttribute:true},opened:{type:Boolean},_listWidth:{type:B,defaultValue:0,noAttribute:true},focused:{type:Boolean}},events:{change:{detail:{selectedOption:{}}}}};class W extends A{static get metadata(){return M}static get render(){return V}static get template(){return T}static get staticAreaTemplate(){return O}static get styles(){return w}static get staticAreaStyles(){return[E,R,C]}constructor(){super();this._syncedOptions=[];this._selectedIndex=-1;this._selectedIndexBeforeOpen=-1;this._escapePressed=false;this._lastSelectedOption=null;this._typedChars="";this._typingTimeoutID=-1}onBeforeRendering(){this._syncSelection();this._enableFormSupport()}onAfterRendering(){this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover);if(this._isPickerOpen){if(!this._listWidth){this._listWidth=this.responsivePopover.offsetWidth}}this._attachRealDomRefs()}_onfocusin(){this.focused=true}_onfocusout(){this.focused=false}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}async _respPopover(){const e=await this.getStaticAreaItemDomRef();return e.querySelector("[ui5-responsive-popover]")}get selectedOption(){return this._filteredItems.find(e=>e.selected)}async _toggleRespPopover(){this._iconPressed=true;this.responsivePopover=await this._respPopover();if(this.disabled){return}if(this._isPickerOpen){this.responsivePopover.close()}else{this.responsivePopover.showAt(this)}}async _attachRealDomRefs(){this.responsivePopover=await this._respPopover();this.options.forEach(e=>{e._getRealDomRef=()=>this.responsivePopover.querySelector(`*[data-ui5-stable=${e.stableDomRef}]`)})}_syncSelection(){let e=-1,t=-1;const s=this._filteredItems;const i=s.map((s,i)=>{if(s.selected||s.textContent===this.value){e=i}if(t===-1){t=i}s.selected=false;s._focused=false;return{selected:false,_focused:false,icon:s.icon,value:s.value,textContent:s.textContent,title:s.title,additionalText:s.additionalText,id:s._id,stableDomRef:s.stableDomRef}});if(e>-1&&!i[e].disabled){i[e].selected=true;i[e]._focused=true;s[e].selected=true;s[e]._focused=true;this._text=i[e].textContent;this._selectedIndex=e}else{this._text="";this._selectedIndex=-1;if(i[t]){i[t].selected=true;i[t]._focused=true;s[t].selected=true;s[t]._focused=true;this._selectedIndex=t;this._text=s[t].textContent}}this._syncedOptions=i}_enableFormSupport(){const e=o.getFeature("FormSupport");if(e){e.syncNativeHiddenInput(this,(e,t)=>{t.disabled=e.disabled;t.value=e._currentlySelectedOption?e._currentlySelectedOption.value:""})}else if(this.name){console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`)}}_onkeydown(e){const t=s.isTabNext(e)||s.isTabPrevious(e);if(t&&this.responsivePopover&&this.responsivePopover.opened){this.responsivePopover.close()}if(s.isShow(e)){e.preventDefault();this._toggleRespPopover()}else if(s.isSpace(e)){e.preventDefault()}else if(s.isEscape(e)&&this._isPickerOpen){this._escapePressed=true}else if(s.isHome(e)){this._handleHomeKey(e)}else if(s.isEnd(e)){this._handleEndKey(e)}else if(s.isEnter(e)){this._handleSelectionChange()}else if(s.isUp(e)||s.isDown(e)){this._handleArrowNavigation(e)}}_handleKeyboardNavigation(e){if(s.isEnter(e)){return}const t=e.key.toLowerCase();this._typedChars+=t;const i=/^(.)\1+$/i.test(this._typedChars)?t:this._typedChars;clearTimeout(this._typingTimeoutID);this._typingTimeoutID=setTimeout(()=>{this._typedChars="";this._typingTimeoutID=-1},1e3);this._selectTypedItem(i)}_selectTypedItem(e){const t=this._selectedIndex;const s=this._searchNextItemByText(e);if(s){const e=this._getSelectedItemIndex(s);this._changeSelectedItem(this._selectedIndex,e);if(t!==this._selectedIndex){this.itemSelectionAnnounce()}}}_searchNextItemByText(e){let t=this._filteredItems.slice(0);const s=t.splice(this._selectedIndex+1,t.length-this._selectedIndex);const i=t.splice(0,t.length-1);t=s.concat(i);return t.find(t=>t.textContent.toLowerCase().startsWith(e))}_handleHomeKey(e){e.preventDefault();this._changeSelectedItem(this._selectedIndex,0)}_handleEndKey(e){const t=this._filteredItems.length-1;e.preventDefault();this._changeSelectedItem(this._selectedIndex,t)}_onkeyup(e){if(s.isSpace(e)){if(this._isPickerOpen){this._handleSelectionChange()}else{this._toggleRespPopover()}}}_getSelectedItemIndex(e){return[].indexOf.call(e.parentElement.children,e)}_select(e){this._filteredItems[this._selectedIndex].selected=false;this._selectedIndex=e;this._filteredItems[e].selected=true}_handleItemPress(e){const t=e.detail.selectedItems[0];const s=this._getSelectedItemIndex(t);this._handleSelectionChange(s)}_itemMousedown(e){e.preventDefault()}_onclick(e){this.getFocusDomRef().focus();this._toggleRespPopover()}_handleSelectionChange(e=this._selectedIndex){this._select(e);this._toggleRespPopover()}_handleArrowNavigation(e){let t=-1;const i=this._selectedIndex;const n=s.isDown(e);e.preventDefault();if(n){t=this._getNextOptionIndex()}else{t=this._getPreviousOptionIndex()}this._changeSelectedItem(this._selectedIndex,t);if(i!==this._selectedIndex){this.itemSelectionAnnounce()}}_changeSelectedItem(e,t){const s=this._filteredItems;s[e].selected=false;s[e]._focused=false;s[t].selected=true;s[t]._focused=true;this._selectedIndex=t;if(!this._isPickerOpen){this._fireChangeEvent(s[t])}}_getNextOptionIndex(){return this._selectedIndex===this.options.length-1?this._selectedIndex:this._selectedIndex+1}_getPreviousOptionIndex(){return this._selectedIndex===0?this._selectedIndex:this._selectedIndex-1}_beforeOpen(){this._selectedIndexBeforeOpen=this._selectedIndex;this._lastSelectedOption=this._filteredItems[this._selectedIndex];this.focused=false}_afterOpen(){this.opened=true}_afterClose(){this.opened=false;this.focused=true;this._iconPressed=false;this._listWidth=0;if(this._escapePressed){this._select(this._selectedIndexBeforeOpen);this._escapePressed=false}else if(this._lastSelectedOption!==this._filteredItems[this._selectedIndex]){this._fireChangeEvent(this._filteredItems[this._selectedIndex]);this._lastSelectedOption=this._filteredItems[this._selectedIndex]}}_fireChangeEvent(e){this.fireEvent("change",{selectedOption:e});this.selectedItem=e.textContent;this.fireEvent("selected-item-changed")}get valueStateTextMappings(){return{Success:W.i18nBundle.getText(m.VALUE_STATE_SUCCESS),Information:W.i18nBundle.getText(m.VALUE_STATE_INFORMATION),Error:W.i18nBundle.getText(m.VALUE_STATE_ERROR),Warning:W.i18nBundle.getText(m.VALUE_STATE_WARNING)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==L.None}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:undefined}get isDisabled(){return this.disabled||undefined}get _headerTitleText(){return W.i18nBundle.getText(m.INPUT_SUGGESTIONS_TITLE)}get _currentSelectedItem(){return this.shadowRoot.querySelector(`#${this._filteredItems[this._selectedIndex]._id}-li`)}get _currentlySelectedOption(){return this._filteredItems[this._selectedIndex]}get tabIndex(){return this.disabled||this.responsivePopover&&this.responsivePopover.opened?"-1":"0"}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==L.None?e[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":true,"ui5-valuestatemessage--success":this.valueState===L.Success,"ui5-valuestatemessage--error":this.valueState===L.Error,"ui5-valuestatemessage--warning":this.valueState===L.Warning,"ui5-valuestatemessage--information":this.valueState===L.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){return{popoverHeader:{"max-width":`${this.offsetWidth}px`},responsivePopoverHeader:{display:this._filteredItems.length&&this._listWidth===0?"none":"inline-block",width:`${this._filteredItems.length?this._listWidth:this.offsetWidth}px`}}}get ariaLabelText(){return r.getEffectiveAriaLabelText(this)}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(true))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get hasValueStateText(){return this.hasValueState&&this.valueState!==L.Success}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this._iconPressed&&!this._isPickerOpen&&!this._isPhone}get _ariaRoleDescription(){return W.i18nBundle.getText(m.SELECT_ROLE_DESCRIPTION)}get _isPhone(){return u.isPhone()}get _filteredItems(){return this.options.filter(e=>!e.disabled)}itemSelectionAnnounce(){let e;const t=this._filteredItems.length;const s=W.i18nBundle.getText(m.LIST_ITEM_POSITION,this._selectedIndex+1,t);if(this.focused&&this._currentlySelectedOption){e=`${this._currentlySelectedOption.textContent} ${this._isPickerOpen?s:""}`;N(e,"Polite")}}async openValueStatePopover(){this.popover=await this._getPopover();if(this.popover){this.popover.showAt(this)}}closeValueStatePopover(){this.popover&&this.popover.close()}toggleValueStatePopover(e){if(e){this.openValueStatePopover()}else{this.closeValueStatePopover()}}get selectedOptionIcon(){return this.selectedOption&&this.selectedOption.icon}async _getPopover(){const e=await this.getStaticAreaItemDomRef();return e.querySelector("[ui5-popover]")}static get dependencies(){return[g,v,I,S,x,y,P,b]}static async onDefine(){W.i18nBundle=await _.getI18nBundle("@ui5/webcomponents")}}W.define();return W});