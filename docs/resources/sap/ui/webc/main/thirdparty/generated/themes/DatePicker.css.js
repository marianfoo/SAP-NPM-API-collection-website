sap.ui.define(["sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(r,e,o){"use strict";function i(r){return r&&typeof r==="object"&&"default"in r?r["default"]:r}var t=i(e);r.registerThemePropertiesLoader("@ui5/webcomponents-theming","sap_fiori_3",()=>t);r.registerThemePropertiesLoader("@ui5/webcomponents","sap_fiori_3",()=>o);var n={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-left:var(--_ui5_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5_input_icon_pressed_bg);box-shadow:var(--_ui5_input_icon_box_shadow);border-left:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon][dir=rtl][pressed]{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5_input_icon_box_shadow);border-left:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon][dir=rtl]:active{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5_input_icon_hover_bg);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon]:hover{border-left:var(--_ui5_select_hover_icon_left_border);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon][dir=rtl]:hover{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]{border-left:none;margin-right:0;border-right:var(--_ui5_input_icon_border)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-datepicker_border_radius)}:host([value-state=Error]){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-datepicker-hover-background)}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-datepicker-hover-background)}[slot=icon]{border-top-right-radius:var(--_ui5-datepicker_icon_border_radius);border-bottom-right-radius:var(--_ui5-datepicker_icon_border_radius)}"};return n});