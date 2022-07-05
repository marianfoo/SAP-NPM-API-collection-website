/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Element","sap/ui/layout/form/Form"],function(e,t,n){"use strict";function r(e){return e.getFormElements().every(function(e){return e.getVisible()===false})}function i(e){if(e&&!(e instanceof n)){return i(e.getParent())}return e}function o(e){var t=i(e);if(t&&t.getLayout()&&t.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/FormContainer.icon.svg"}},isVisible:function(e){return e.isVisible()},actions:{remove:function(e){if(o(e)){return{changeType:"hideControl"}}else{return null}},rename:function(t){if(o(t)){return{changeType:"renameGroup",domRef:function(t){if(!t.getRenderedDomRef()){var n=t.getTitle()||t.getToolbar();return n.getDomRef()}return e(t.getRenderedDomRef()).find(".sapUiFormTitle")[0]},isEnabled:function(e){return!(e.getToolbar()||!e.getTitle())}}}else{return null}}},aggregations:{formElements:{childNames:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"},domRef:function(n){var i=n.getRenderedDomRef();var o=n.getTitle()||n.getToolbar();if(i){return i}if(n.getFormElements().length===0||r(n)){if(o instanceof t){return o.getDomRef()}if(typeof o==="string"){return e(i).find(".sapUiFormTitle").get(0)}}return undefined},actions:{move:function(e){if(o(e)){return{changeType:"moveControls"}}else{return null}},add:{delegate:function(e){if(o(e)){return{changeType:"addFormField",changeOnRelevantContainer:true,supportsDefaultDelegate:true}}}}}},toolbar:{domRef:function(e){var t=e.getToolbar();if(t){return t.getDomRef()}}}},name:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"}}});