sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i){"use strict";const e=(e,s,c)=>i.html`<div class="${i.classMap(e.classes.root)}">${e._isBusy?a(e,s,c):undefined}<slot></slot>${e._isBusy?t(e):undefined}</div>`;const a=(e,a,t)=>i.html`<div class="ui5-busy-indicator-busy-area" title="${i.ifDefined(e.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${i.ifDefined(e.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${e.text?s(e,a,t):undefined}</div>`;const s=(e,a,s)=>s?i.html`<${i.scopeTag("ui5-label",a,s)} id="${i.ifDefined(e._id)}-label" class="ui5-busy-indicator-text">${i.ifDefined(e.text)}</${i.scopeTag("ui5-label",a,s)}>`:i.html`<ui5-label id="${i.ifDefined(e._id)}-label" class="ui5-busy-indicator-text">${i.ifDefined(e.text)}</ui5-label>`;const t=(e,a,s)=>i.html`<span data-ui5-focus-redirect tabindex="0" @focusin="${e._redirectFocus}"></span>`;return e});