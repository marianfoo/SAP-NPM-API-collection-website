sap.ui.define(["sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(e,t,o){"use strict";function r(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var n=r(t);e.registerThemePropertiesLoader("@ui5/webcomponents-theming","sap_fiori_3",()=>n);e.registerThemePropertiesLoader("@ui5/webcomponents","sap_fiori_3",()=>o);var s={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css",content:":host(:not([hidden])){display:inline-block}:host([disabled]){pointer-events:none}:host([design=Default][pressed]),:host([design=Emphasized][pressed]),:host([design=Transparent][pressed]),:host([pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design=Default][pressed]:hover),:host([design=Default][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Emphasized][pressed]:hover),:host([design=Emphasized][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Transparent][pressed]:hover),:host([design=Transparent][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor);box-shadow:var(--sapContent_Interaction_Shadow)}:host([active][focused]),:host([design=Default][active][focused]),:host([design=Emphasized][active][focused]),:host([design=Transparent][active][focused]){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor);box-shadow:var(--sapContent_Interaction_Shadow)}:host([design=Default][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design=Emphasized][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design=Transparent][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design=Negative][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design=Negative][active][focused]){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design=Negative][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Negative][pressed][active]:hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor);box-shadow:var(--sapContent_Negative_Shadow)}:host([design=Negative][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design=Positive][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Positive][active][focused]){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Positive][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Positive][pressed][active]:hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor);box-shadow:var(--sapContent_Positive_Shadow)}:host([design=Positive][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Attention][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design=Attention][active][focused]){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design=Attention][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Attention][pressed][active]:hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor);box-shadow:var(--sapContent_Critical_Shadow)}:host([design=Attention][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}"};return s});