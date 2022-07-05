/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/IntervalTrigger","sap/ui/core/format/DateFormat","sap/ui/core/date/UniversalDate","sap/m/Text"],function(t,e,a,i,s){"use strict";var r=6e4;var n=t.extend("sap.f.cards.BaseHeader",{metadata:{library:"sap.f",abstract:true,properties:{dataTimestamp:{type:"string",defaultValue:""},dataTimestampUpdating:{type:"boolean",defaultValue:false,visibility:"hidden"},focusable:{type:"boolean",defaultValue:true,visibility:"hidden"}},aggregations:{_dataTimestamp:{type:"sap.m.Text",multiple:false,visibility:"hidden"},toolbar:{type:"sap.ui.core.Control",multiple:false},_error:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}}});n.prototype.exit=function(){this._removeTimestampListener()};n.prototype.onBeforeRendering=function(){var t=this.getToolbar();if(t){t.addStyleClass("sapFCardHeaderToolbar")}};n.prototype.setDataTimestamp=function(t){var e=this.getDataTimestamp();if(e&&!t){this.destroyAggregation("_dataTimestamp");this._removeTimestampListener()}this.setProperty("dataTimestamp",t);if(t){this._updateDataTimestamp();this._addTimestampListener()}return this};n.prototype.setDataTimestampUpdating=function(t){var e=this._createDataTimestamp();this.setProperty("dataTimestampUpdating",t);if(t){e.setText("updating...");e.addStyleClass("sapFCardDataTimestampUpdating");this._removeTimestampListener()}else{e.removeStyleClass("sapFCardDataTimestampUpdating")}return this};n.prototype._createDataTimestamp=function(){var t=this.getAggregation("_dataTimestamp");if(!t){t=new s({wrapping:false,textAlign:"End"});t.addStyleClass("sapFCardDataTimestamp");this.setAggregation("_dataTimestamp",t)}return t};n.prototype._updateDataTimestamp=function(){var t=this._createDataTimestamp(),e=this.getDataTimestamp(),s,r,n;if(!e){t.setText("");return}s=a.getDateTimeInstance({relative:true});r=new i(e);n=s.format(r);if(r.getTime()+59e3>(new Date).getTime()){n="now"}t.setText(n);t.removeStyleClass("sapFCardDataTimestampUpdating")};n.prototype._addTimestampListener=function(){n.getTimestampIntervalTrigger().addListener(this._updateDataTimestamp,this);this._bHasTimestampListener=true};n.prototype._removeTimestampListener=function(){if(!this._bHasTimestampListener){return}n.getTimestampIntervalTrigger().removeListener(this._updateDataTimestamp,this);this._bHasTimestampListener=false};n.getTimestampIntervalTrigger=function(){if(!n._oTimestampIntervalTrigger){n._oTimestampIntervalTrigger=new e(r)}return n._oTimestampIntervalTrigger};n.prototype.getAriaRole=function(){return this.hasListeners("press")?"button":"heading"};n.prototype.getAriaHeadingLevel=function(){return this.hasListeners("press")?undefined:"3"};n.prototype.getAriaRoleDescription=function(){return this.hasListeners("press")?this._oRb.getText("ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER"):this._oRb.getText("ARIA_ROLEDESCRIPTION_CARD_HEADER")};n.prototype._isInsideGridContainer=function(){var t=this.getParent();if(!t){return false}t=t.getParent();if(!t){return false}return t.isA("sap.f.GridContainer")};return n});