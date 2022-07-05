/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/IconPool","sap/ui/base/EventProvider","sap/ui/base/ManagedObjectObserver","sap/ui/core/library","sap/m/library","sap/m/OverflowToolbarButton","sap/m/OverflowToolbarLayoutData","./SemanticContainer"],function(t,e,o,n,i,r,s,a){"use strict";var h=i.ButtonType;var u=n.aria.HasPopup;var c=a.extend("sap.f.semantic.SemanticShareMenu",{constructor:function(t,e){a.call(this,t,e);this._aShareMenuActions=[];this._aCustomShareActions=[];this._oObserver=new o(c.prototype._onShareMenuButtonChanges.bind(this));this._onShareButtonClickRef=this._onShareButtonClick.bind(this);this._setMode(c._Mode.initial)}});c._Mode={initial:"initial",menu:"menu"};c.prototype.addCustomAction=function(t){this._onControlAdded(t);this._oObserver.observe(t,{properties:["visible"]});this._callContainerAggregationMethod("insertButton",t,this._getCustomActionInsertIndex());this._aCustomShareActions.push(t);return this};c.prototype.insertCustomAction=function(t,e){if(this._aCustomShareActions.indexOf(t)<0){this._onControlAdded(t);this._oObserver.observe(t,{properties:["visible"]});this._aCustomShareActions.splice(e,0,t)}this._callContainerAggregationMethod("insertButton",t,this._getCustomActionInsertIndex(e));return this};c.prototype.getCustomActions=function(){return this._aCustomShareActions};c.prototype.indexOfCustomAction=function(t){return this._aCustomShareActions.indexOf(t)};c.prototype.removeCustomAction=function(t){var e=this._callContainerAggregationMethod("removeButton",t);this._oObserver.unobserve(t,{properties:["visible"]});this._aCustomShareActions.splice(this._aCustomShareActions.indexOf(t),1);this._onControlRemoved();return e};c.prototype.removeAllCustomActions=function(){var t=[];this._aCustomShareActions.forEach(function(e){var o=this._callContainerAggregationMethod("removeButton",e);if(o){t.push(e)}},this);this._aCustomShareActions=[];this._onControlRemoved();return t};c.prototype.destroyCustomActions=function(){this.removeAllCustomActions(true).forEach(function(t){t.destroy()});return this};c.prototype.addContent=function(t){var e=this._getControl(t);if(this._aShareMenuActions.indexOf(t)<0){this._onControlAdded(e);this._oObserver.observe(e,{properties:["visible"]});this._aShareMenuActions.push(t)}this._preProcessOverflowToolbarButton(e);this._callContainerAggregationMethod("insertButton",e,this._getSemanticActionInsertIndex(t));return this};c.prototype.removeContent=function(t){var e=this._getControl(t);this._oObserver.unobserve(e,{properties:["visible"]});this._callContainerAggregationMethod("removeButton",e);this._aShareMenuActions.splice(this._aShareMenuActions.indexOf(t),1);this._postProcessOverflowToolbarButton(t);this._onControlRemoved();return this};c.prototype.destroy=function(){if(this._oShareMenuBtn){this._oShareMenuBtn.destroy()}this._oShareMenuBtn=null;this._aShareMenuActions=null;this._aCustomShareActions=null;return a.prototype.destroy.call(this)};c.prototype.exit=function(){this._oObserver.disconnect();this._oObserver=null};c.prototype._getMode=function(){return this._mode};c.prototype._setMode=function(t){if(this._getMode()===t){return this}if(t===c._Mode.initial){if(this._getMode()){this._fireContentChanged(true)}this._mode=c._Mode.initial;return this}if(t===c._Mode.menu){this._mode=c._Mode.menu;this._fireContentChanged(false)}return this};c.prototype._fireContentChanged=function(t){e.prototype.fireEvent.call(this._getParent(),"_shareMenuContentChanged",{bEmpty:t})};c.prototype._onShareButtonClick=function(){var t=this._getContainer();t.openBy(this._oShareMenuBtn)};c.prototype._getVisibleActions=function(){var t=this._aShareMenuActions.concat(this._aCustomShareActions),e=t.map(function(t){return this._getControl(t)},this).filter(function(t){return t.getVisible()});return e};c.prototype._onShareMenuButtonChanges=function(){var t=this._getVisibleActions();this._getShareMenuButton().setVisible(t.length>1);this.fireEvent("_visibleActionsChanged",{visibleActionsCount:t.length})};c.prototype._getShareMenuButton=function(){var e=this._getContainer();if(!this._oShareMenuBtn){this._oShareMenuBtn=new r(e.getId()+"-shareButton",{ariaHasPopup:u.Menu,icon:t.getIconURI("action"),tooltip:sap.ui.getCore().getLibraryResourceBundle("sap.f").getText("SEMANTIC_CONTROL_ACTION_SHARE"),layoutData:new s({closeOverflowOnInteraction:false}),text:sap.ui.getCore().getLibraryResourceBundle("sap.f").getText("SEMANTIC_CONTROL_ACTION_SHARE"),type:h.Transparent,press:this._onShareButtonClickRef})}return this._oShareMenuBtn};c.prototype._getCustomActionInsertIndex=function(t){var e=this._aCustomShareActions.length;if(t===undefined){return this._aShareMenuActions.length+e}t=t>=e?e:t;t+=this._aShareMenuActions.length;return t};c.prototype._getSemanticActionInsertIndex=function(t){this._aShareMenuActions.sort(this._sortControlByOrder.bind(this));return this._aShareMenuActions.indexOf(t)};c.prototype._onControlAdded=function(t){if(this._isInitialMode()){this._setMode(c._Mode.menu,t)}};c.prototype._onControlRemoved=function(){var t=this._aShareMenuActions.length,e=this._aCustomShareActions.length,o=t+e===0;if(this._isMenuMode()&&o){this._setMode(c._Mode.initial)}};c.prototype._preProcessOverflowToolbarButton=function(t){if(t instanceof r){t._bInOverflow=true}};c.prototype._postProcessOverflowToolbarButton=function(t){if(t instanceof r){delete t._bInOverflow}};c.prototype._isInitialMode=function(){return this._getMode()===c._Mode.initial};c.prototype._isMenuMode=function(){return this._getMode()===c._Mode.menu};return c});