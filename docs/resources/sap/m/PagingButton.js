/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Button","sap/ui/core/Control","sap/ui/core/IconPool","./PagingButtonRenderer","sap/base/Log"],function(t,e,o,i,n){"use strict";var s=e.extend("sap.m.PagingButton",{metadata:{library:"sap.m",properties:{count:{type:"int",group:"Data",defaultValue:1},position:{type:"int",group:"Data",defaultValue:1},nextButtonTooltip:{type:"string",group:"Appearance",defaultValue:""},previousButtonTooltip:{type:"string",group:"Appearance",defaultValue:""}},aggregations:{previousButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"},nextButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},events:{positionChange:{parameters:{newPosition:{type:"int"},oldPosition:{type:"int"}}}}}});var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");s.prototype.init=function(){this._attachPressEvents()};s.prototype.onBeforeRendering=function(){this._enforceValidPosition(this.getPosition());this._updateButtonState()};s.prototype._getNextButton=function(){if(!this.getAggregation("nextButton")){this.setAggregation("nextButton",new t({tooltip:this.getNextButtonTooltip()||r.getText("PAGINGBUTTON_NEXT"),icon:o.getIconURI("slim-arrow-down"),enabled:false,id:this.getId()+"-nextButton"}))}return this.getAggregation("nextButton")};s.prototype._getPreviousButton=function(){if(!this.getAggregation("previousButton")){this.setAggregation("previousButton",new t({tooltip:this.getPreviousButtonTooltip()||r.getText("PAGINGBUTTON_PREVIOUS"),icon:o.getIconURI("slim-arrow-up"),enabled:false,id:this.getId()+"-previousButton"}))}return this.getAggregation("previousButton")};s.prototype._attachPressEvents=function(){this._getPreviousButton().attachPress(this._handlePositionChange.bind(this,false));this._getNextButton().attachPress(this._handlePositionChange.bind(this,true))};s.prototype._handlePositionChange=function(t){var e=this.getPosition(),o=t?e+1:e-1;this.setPosition(o);this.firePositionChange({newPosition:o,oldPosition:e});this._updateButtonState();return this};s.prototype._updateButtonState=function(){var t=this.getCount(),e=this.getPosition();this._getPreviousButton().setEnabled(e>1);this._getNextButton().setEnabled(e<t);return this};s.prototype.setPosition=function(t){return this._validateProperty("position",t)};s.prototype.setCount=function(t){return this._validateProperty("count",t)};s.prototype.setPreviousButtonTooltip=function(t){this._getPreviousButton().setTooltip(t);return this.setProperty("previousButtonTooltip",t,true)};s.prototype.setNextButtonTooltip=function(t){this._getNextButton().setTooltip(t);return this.setProperty("nextButtonTooltip",t,true)};s.prototype._validateProperty=function(t,e){if(e<1){n.warning("Property '"+t+"' must be greater or equal to 1",this);return this}return this.setProperty(t,e)};s.prototype._enforceValidPosition=function(t){var e=this.getCount();if(t>e){n.warning("Property position must be less or equal to the total count");this.setPosition(e)}return this};return s});