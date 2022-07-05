/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector"],function(e){"use strict";var t=e.extend("sap.ui.test.selectors._Properties",{_generate:function(e){var r=e.getMetadata().getAllProperties();return Object.keys(r).map(function(o){if(r.hasOwnProperty(o)&&t._dataProperties.indexOf(o)>-1){return this._getPropertySelector(e,o)}}.bind(this))},_getPropertySelector:function(e,t){var r=e.getProperty(t);if(typeof r==="undefined"||r===null||r.length===0){this._oLogger.debug("Control "+e+" property "+t+" has empty value")}else{this._oLogger.debug("Control "+e+" has property "+t+" with value "+r);var o={properties:{}};if(t==="src"&&r.lastIndexOf&&r.lastIndexOf("/")>-1){r={regex:{source:r.substring(r.lastIndexOf("/")+1).replace(/[-[\]{}()*+?.,^$|#\s]/g,"\\$&")}}}o.properties[t]=r;return o}}});t._dataProperties=["text","title","subtitle","name","info","tooltip","value","valueState","valueStateText","type","number","icon","src","customIcon","iconAlt","iconTooltip","placeholder","key","description","selectedItemId","selectedKey","selectedKeys","cancelButtonText","currentLocationText","label","contentText","buttonTooltip","htmlText","header","headerText","footerText","subheader","failedText","imageDescription","count","alt","href","intro","navButtonText","editable","active","noDataText","customTextOff","customTextOn","pressed","url","fileName"];return t});