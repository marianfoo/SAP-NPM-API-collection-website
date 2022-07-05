sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => suffix ? litRender.html`<nav class="ui5-breadcrumbs-root" aria-label="${litRender.ifDefined(context._accessibleNameText)}"><ol @focusin="${context._onfocusin}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${context._isOverflowEmpty}"><${litRender.scopeTag("ui5-link", tags, suffix)} @click="${context._openRespPopover}" accessible-role="button" aria-label="${litRender.ifDefined(context._dropdownArrowAccessibleNameText)}" aria-haspopup="${litRender.ifDefined(context._ariaHasPopup)}"><${litRender.scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" title="${litRender.ifDefined(context._dropdownArrowAccessibleNameText)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}></${litRender.scopeTag("ui5-link", tags, suffix)}></li>${ litRender.repeat(context._linksData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }${ context._endsWithCurrentLocationLabel ? block2(context, tags, suffix) : undefined }</ol></nav>` : litRender.html`<nav class="ui5-breadcrumbs-root" aria-label="${litRender.ifDefined(context._accessibleNameText)}"><ol @focusin="${context._onfocusin}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${context._isOverflowEmpty}"><ui5-link @click="${context._openRespPopover}" accessible-role="button" aria-label="${litRender.ifDefined(context._dropdownArrowAccessibleNameText)}" aria-haspopup="${litRender.ifDefined(context._ariaHasPopup)}"><ui5-icon name="slim-arrow-down" title="${litRender.ifDefined(context._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${ litRender.repeat(context._linksData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }${ context._endsWithCurrentLocationLabel ? block2(context, tags, suffix) : undefined }</ol></nav>`;
	const block1 = (item, index, context, tags, suffix) => suffix ? litRender.html`<li class="ui5-breadcrumbs-link-wrapper" id="${litRender.ifDefined(item._id)}-link-wrapper"><${litRender.scopeTag("ui5-link", tags, suffix)} @click="${context._onLinkPress}" href="${litRender.ifDefined(item.href)}" target="${litRender.ifDefined(item.target)}" id="${litRender.ifDefined(item._id)}-link" accessible-name="${litRender.ifDefined(item._accessibleNameText)}" data-ui5-stable="${litRender.ifDefined(item.stableDomRef)}">${litRender.ifDefined(item.innerText)}</${litRender.scopeTag("ui5-link", tags, suffix)}></li>` : litRender.html`<li class="ui5-breadcrumbs-link-wrapper" id="${litRender.ifDefined(item._id)}-link-wrapper"><ui5-link @click="${context._onLinkPress}" href="${litRender.ifDefined(item.href)}" target="${litRender.ifDefined(item.target)}" id="${litRender.ifDefined(item._id)}-link" accessible-name="${litRender.ifDefined(item._accessibleNameText)}" data-ui5-stable="${litRender.ifDefined(item.stableDomRef)}">${litRender.ifDefined(item.innerText)}</ui5-link></li>`;
	const block2 = (context, tags, suffix) => suffix ? litRender.html`<li class="ui5-breadcrumbs-current-location" @click="${context._onLabelPress}"><span aria-label="${litRender.ifDefined(context._currentLocationAccName)}" role="link" id="${litRender.ifDefined(context._id)}-labelWrapper"><${litRender.scopeTag("ui5-label", tags, suffix)} aria-current="page">${litRender.ifDefined(context._currentLocationText)}</${litRender.scopeTag("ui5-label", tags, suffix)}></span></li>` : litRender.html`<li class="ui5-breadcrumbs-current-location" @click="${context._onLabelPress}"><span aria-label="${litRender.ifDefined(context._currentLocationAccName)}" role="link" id="${litRender.ifDefined(context._id)}-labelWrapper"><ui5-label aria-current="page">${litRender.ifDefined(context._currentLocationText)}</ui5-label></span></li>`;

	return block0;

});
