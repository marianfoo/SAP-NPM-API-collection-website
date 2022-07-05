sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const o=(o,t,s)=>s?e.html`<${e.scopeTag("ui5-responsive-popover",t,s)} horizontal-align="Center" placement-type="Bottom" aria-label="${e.ifDefined(o.actionSheetStepsText)}" class="${e.classMap(o.classes.popover)}" @ui5-after-close=${e.ifDefined(o._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${e.repeat(o._groupedTabs,(e,o)=>e._id||o,(e,n)=>i(e,n,o,t,s))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><${e.scopeTag("ui5-button",t,s)} design="Transparent" @click="${o._closeRespPopover}">Cancel</${e.scopeTag("ui5-button",t,s)}></div></${e.scopeTag("ui5-responsive-popover",t,s)}>`:e.html`<ui5-responsive-popover horizontal-align="Center" placement-type="Bottom" aria-label="${e.ifDefined(o.actionSheetStepsText)}" class="${e.classMap(o.classes.popover)}" @ui5-after-close=${e.ifDefined(o._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${e.repeat(o._groupedTabs,(e,o)=>e._id||o,(e,n)=>i(e,n,o,t,s))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${o._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`;const i=(o,i,t,s,n)=>n?e.html`<li><${e.scopeTag("ui5-button",s,n)} icon="${e.ifDefined(o.icon)}" ?disabled="${o.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${e.ifDefined(o.accInfo.ariaPosinset)}" @click="${t._onOverflowStepButtonClick}">${e.ifDefined(o.titleText)}</${e.scopeTag("ui5-button",s,n)}></li>`:e.html`<li><ui5-button icon="${e.ifDefined(o.icon)}" ?disabled="${o.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${e.ifDefined(o.accInfo.ariaPosinset)}" @click="${t._onOverflowStepButtonClick}">${e.ifDefined(o.titleText)}</ui5-button></li>`;return o});