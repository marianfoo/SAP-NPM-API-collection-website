sap.ui.define(["sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(e,r,i){"use strict";function t(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var a=t(r);e.registerThemePropertiesLoader("@ui5/webcomponents-theming","sap_fiori_3",()=>a);e.registerThemePropertiesLoader("@ui5/webcomponents","sap_fiori_3",()=>i);var s={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css",content:".ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-tab-indentation-level)*0.5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}"};return s});