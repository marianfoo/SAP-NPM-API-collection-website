sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const i=(i,t,a)=>e.html`<li part="native-li" tabindex="${e.ifDefined(i.tabIndex)}" class="${e.classMap(i.classes.main)}" @focusin="${i._onfocusin}" @focusout="${i._onfocusout}" @keyup="${i._onkeyup}" @keydown="${i._onkeydown}" @mouseup="${i._onmouseup}" @mousedown="${i._onmousedown}" @touchstart="${i._ontouchstart}" @touchend="${i._ontouchend}" @click="${i._onclick}" role="${e.ifDefined(i._accInfo.role)}" aria-expanded="${e.ifDefined(i._accInfo.ariaExpanded)}" title="${e.ifDefined(i.title)}" aria-level="${e.ifDefined(i._accInfo.ariaLevel)}" aria-haspopup="${e.ifDefined(i._accInfo.ariaHaspopup)}" aria-posinset="${e.ifDefined(i._accInfo.posinset)}" aria-setsize="${e.ifDefined(i._accInfo.setsize)}" aria-describedby="${e.ifDefined(i._id)}-invisibleText-describedby" aria-labelledby="${e.ifDefined(i._id)}-invisibleText ${e.ifDefined(i._id)}-content" aria-disabled="${e.ifDefined(i.ariaDisabled)}">${i.placeSelectionElementBefore?n(i,t,a):undefined}<div id="${e.ifDefined(i._id)}-content" class="ui5-li-content"><div class="ui5-uci-thumbnail"><slot name="thumbnail"></slot></div><div class="ui5-uci-content-and-edit-container"><div class="ui5-uci-content-and-progress"><div class="ui5-uci-content">${i._editing?o(i,t,a):c(i,t,a)}<div class="ui5-uci-description"><slot></slot></div></div>${i._showProgressIndicator?u(i,t,a):undefined}</div><div class="ui5-uci-edit-buttons">${i._editing?f(i,t,a):$(i,t,a)}</div></div></div>${i.typeDetail?m(i,t,a):undefined}${i.placeSelectionElementAfter?_(i,t,a):undefined}<span id="${e.ifDefined(i._id)}-invisibleText" class="ui5-hidden-text">${e.ifDefined(i._accInfo.listItemAriaLabel)}${e.ifDefined(i.accessibleName)}</span><span id="${e.ifDefined(i._id)}-invisibleText-describedby" class="ui5-hidden-text">${e.ifDefined(i._accInfo.ariaSelectedText)}</span></li>`;const n=(i,n,o)=>e.html`${i.modeSingleSelect?t(i,n,o):undefined}${i.modeMultiSelect?a(i,n,o):undefined}${i.renderDeleteButton?l(i,n,o):undefined}`;const t=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-radio-button",n,t)} ?disabled="${i.isInactive}" accessible-name="${e.ifDefined(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${e.ifDefined(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></${e.scopeTag("ui5-radio-button",n,t)}>`:e.html`<ui5-radio-button ?disabled="${i.isInactive}" accessible-name="${e.ifDefined(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${e.ifDefined(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></ui5-radio-button>`;const a=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-checkbox",n,t)} ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${e.ifDefined(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" aria-label="${e.ifDefined(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></${e.scopeTag("ui5-checkbox",n,t)}>`:e.html`<ui5-checkbox ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${e.ifDefined(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" aria-label="${e.ifDefined(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></ui5-checkbox>`;const l=(i,n,t)=>t?e.html`<div class="ui5-li-deletebtn"><${e.scopeTag("ui5-button",n,t)} tabindex="-1" data-sap-no-tab-ref id="${e.ifDefined(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${e.ifDefined(i.deleteText)}"></${e.scopeTag("ui5-button",n,t)}></div>`:e.html`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${e.ifDefined(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${e.ifDefined(i.deleteText)}"></ui5-button></div>`;const o=(i,n,t)=>t?e.html`<div class="ui5-uci-edit-container"><${e.scopeTag("ui5-input",n,t)} id="ui5-uci-edit-input" data-sap-focus-ref @focusin="${i._onInputFocusin}" @keydown="${i._onInputKeyDown}"></${e.scopeTag("ui5-input",n,t)}><span class="ui5-uci-file-extension">${e.ifDefined(i._fileExtension)}</span></div>`:e.html`<div class="ui5-uci-edit-container"><ui5-input id="ui5-uci-edit-input" data-sap-focus-ref @focusin="${i._onInputFocusin}" @keydown="${i._onInputKeyDown}"></ui5-input><span class="ui5-uci-file-extension">${e.ifDefined(i._fileExtension)}</span></div>`;const c=(i,n,t)=>e.html`${i.fileNameClickable?d(i,n,t):s(i)}`;const d=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-link",n,t)} class="ui5-uci-file-name" @click="${i._onFileNameClick}">${e.ifDefined(i.fileName)}</${e.scopeTag("ui5-link",n,t)}>`:e.html`<ui5-link class="ui5-uci-file-name" @click="${i._onFileNameClick}">${e.ifDefined(i.fileName)}</ui5-link>`;const s=(i,n,t)=>e.html`<span class="ui5-uci-file-name">${e.ifDefined(i.fileName)}</span>`;const u=(i,n,t)=>t?e.html`<div class="ui5-uci-progress-box"><${e.scopeTag("ui5-progress-indicator",n,t)} class="ui5-uci-progress-indicator" hide-value value="${e.ifDefined(i.progress)}" value-state="${e.ifDefined(i.valueStateName)}"></${e.scopeTag("ui5-progress-indicator",n,t)}><div class="ui5-uci-progress-labels"><${e.scopeTag("ui5-label",n,t)} show-colon>${e.ifDefined(i._progressText)}</${e.scopeTag("ui5-label",n,t)}><${e.scopeTag("ui5-label",n,t)}>${e.ifDefined(i.progress)}%</${e.scopeTag("ui5-label",n,t)}></div></div>`:e.html`<div class="ui5-uci-progress-box"><ui5-progress-indicator class="ui5-uci-progress-indicator" hide-value value="${e.ifDefined(i.progress)}" value-state="${e.ifDefined(i.valueStateName)}"></ui5-progress-indicator><div class="ui5-uci-progress-labels"><ui5-label show-colon>${e.ifDefined(i._progressText)}</ui5-label><ui5-label>${e.ifDefined(i.progress)}%</ui5-label></div></div>`;const f=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-button",n,t)} design="Transparent" class="ui5-uci-edit-rename-btn" @click="${i._onRename}" @keyup="${i._onRenameKeyup}">${e.ifDefined(i._renameBtnText)}</${e.scopeTag("ui5-button",n,t)}><${e.scopeTag("ui5-button",n,t)} design="Transparent" id="ui5-uci-edit-cancel" @click="${i._onRenameCancel}" @keyup="${i._onRenameCancelKeyup}">${e.ifDefined(i._cancelRenameBtnText)}</${e.scopeTag("ui5-button",n,t)}>`:e.html`<ui5-button design="Transparent" class="ui5-uci-edit-rename-btn" @click="${i._onRename}" @keyup="${i._onRenameKeyup}">${e.ifDefined(i._renameBtnText)}</ui5-button><ui5-button design="Transparent" id="ui5-uci-edit-cancel" @click="${i._onRenameCancel}" @keyup="${i._onRenameCancelKeyup}">${e.ifDefined(i._cancelRenameBtnText)}</ui5-button>`;const $=(i,n,t)=>e.html`${i._showRetry?r(i,n,t):undefined}${i._showTerminate?p(i,n,t):undefined}${i.showEditButton?b(i,n,t):undefined}`;const r=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-button",n,t)} icon="refresh" design="Transparent" tooltip="${e.ifDefined(i._retryButtonTooltip)}" @click="${i._onRetry}" @keyup="${i._onRetryKeyup}"></${e.scopeTag("ui5-button",n,t)}>`:e.html`<ui5-button icon="refresh" design="Transparent" tooltip="${e.ifDefined(i._retryButtonTooltip)}" @click="${i._onRetry}" @keyup="${i._onRetryKeyup}"></ui5-button>`;const p=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-button",n,t)} icon="stop" design="Transparent" tooltip="${e.ifDefined(i._terminateButtonTooltip)}" @click="${i._onTerminate}" @keyup="${i._onTerminateKeyup}"></${e.scopeTag("ui5-button",n,t)}>`:e.html`<ui5-button icon="stop" design="Transparent" tooltip="${e.ifDefined(i._terminateButtonTooltip)}" @click="${i._onTerminate}" @keyup="${i._onTerminateKeyup}"></ui5-button>`;const b=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-button",n,t)} id="${e.ifDefined(i._id)}-editing-button" design="Transparent" tooltip="${e.ifDefined(i._editButtonTooltip)}" icon="edit" @click="${i.onDetailClick}" @keyup="${i._onDetailKeyup}" class="ui5-li-detailbtn ui5-uci-edit"></${e.scopeTag("ui5-button",n,t)}>`:e.html`<ui5-button id="${e.ifDefined(i._id)}-editing-button" design="Transparent" tooltip="${e.ifDefined(i._editButtonTooltip)}" icon="edit" @click="${i.onDetailClick}" @keyup="${i._onDetailKeyup}" class="ui5-li-detailbtn ui5-uci-edit"></ui5-button>`;const m=(i,n,t)=>t?e.html`<div class="ui5-li-detailbtn"><${e.scopeTag("ui5-button",n,t)} design="Transparent" icon="edit" @click="${i.onDetailClick}"></${e.scopeTag("ui5-button",n,t)}></div>`:e.html`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${i.onDetailClick}"></ui5-button></div>`;const _=(i,n,t)=>e.html`${i.modeSingleSelect?D(i,n,t):undefined}${i.modeMultiSelect?g(i,n,t):undefined}${i.renderDeleteButton?T(i,n,t):undefined}`;const D=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-radio-button",n,t)} ?disabled="${i.isInactive}" accessible-name="${e.ifDefined(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${e.ifDefined(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></${e.scopeTag("ui5-radio-button",n,t)}>`:e.html`<ui5-radio-button ?disabled="${i.isInactive}" accessible-name="${e.ifDefined(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${e.ifDefined(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></ui5-radio-button>`;const g=(i,n,t)=>t?e.html`<${e.scopeTag("ui5-checkbox",n,t)} ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${e.ifDefined(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" aria-label="${e.ifDefined(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></${e.scopeTag("ui5-checkbox",n,t)}>`:e.html`<ui5-checkbox ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${e.ifDefined(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" aria-label="${e.ifDefined(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></ui5-checkbox>`;const T=(i,n,t)=>t?e.html`<div class="ui5-li-deletebtn"><${e.scopeTag("ui5-button",n,t)} tabindex="-1" data-sap-no-tab-ref id="${e.ifDefined(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${e.ifDefined(i.deleteText)}"></${e.scopeTag("ui5-button",n,t)}></div>`:e.html`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${e.ifDefined(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${e.ifDefined(i.deleteText)}"></ui5-button></div>`;return i});