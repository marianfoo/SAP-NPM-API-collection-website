/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/uxap/ObjectPageDynamicHeaderContent","./ObjectPageDynamicHeaderTitleRenderer","sap/base/Log","sap/f/DynamicPageTitle"],function(e,t,a,n,r){"use strict";var p=r.extend("sap.uxap.ObjectPageDynamicHeaderTitle",{metadata:{interfaces:["sap.uxap.IHeaderTitle"],library:"sap.uxap"}});p.prototype.isDynamic=function(){return true};p.prototype.getCompatibleHeaderContentClass=function(){return t};p.prototype.supportsToggleHeaderOnTitleClick=function(){return true};p.prototype.supportsTitleInHeaderContent=function(){return false};p.prototype.supportsAdaptLayoutForDomElement=function(){return false};p.prototype.supportsBackgroundDesign=function(){return true};p.KNOWN_HEADING_CONTROL_CLASS_NAMES=["sap.m.Title","sap.m.Text","sap.m.FormattedText","sap.m.Label"];p.prototype.getTitleText=function(){var e=this.getHeading(),t=e&&e.getMetadata().getName();if(p.KNOWN_HEADING_CONTROL_CLASS_NAMES.indexOf(t)>-1){return e.getText()}};p.prototype.getHeaderDesign=function(){return e.ObjectPageHeaderDesign.Light};p.prototype.snap=function(e){this._toggleState(false,e);this._updateARIAState(false)};p.prototype.unSnap=function(e){this._toggleState(true,e);this._updateARIAState(true)};p.prototype._adaptObjectPageHeaderIndentifierLine=function(e,t){};return p});