sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i){"use strict";const e=(e,t,n)=>i.html`<div class="ui5-timeline-root" @focusin=${e._onfocusin} @keydown=${e._onkeydown}><div class="ui5-timeline-scroll-container"><ul class="ui5-timeline-list" aria-live="polite" aria-label="${i.ifDefined(e.ariaLabel)}">${i.repeat(e.items,(i,e)=>i._id||e,(i,e)=>l(i))}</ul></div></div>`;const l=(e,l,t,n,s)=>i.html`<li class="ui5-timeline-list-item"><slot name="${i.ifDefined(e._individualSlot)}"></slot></li>`;return e});