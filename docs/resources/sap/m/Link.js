/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/InvisibleText","sap/ui/core/EnabledPropagator","sap/ui/core/LabelEnablement","sap/ui/core/library","sap/ui/Device","./LinkRenderer","sap/ui/events/KeyCodes","sap/base/Log","sap/base/security/URLListValidator"],function(e,t,a,r,i,s,o,p,n,l,u){"use strict";var d=s.TextDirection;var c=s.TextAlign;var f=s.aria.HasPopup;var h=e.EmptyIndicatorMode;var y=t.extend("sap.m.Link",{metadata:{interfaces:["sap.ui.core.IShrinkable","sap.ui.core.IFormContent","sap.ui.core.ITitleContent"],library:"sap.m",designtime:"sap/m/designtime/Link.designtime",properties:{text:{type:"string",group:"Data",defaultValue:""},enabled:{type:"boolean",group:"Behavior",defaultValue:true},target:{type:"string",group:"Behavior",defaultValue:null},rel:{type:"string",group:"Behavior",defaultValue:null},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},href:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},validateUrl:{type:"boolean",group:"Data",defaultValue:false},wrapping:{type:"boolean",group:"Appearance",defaultValue:false},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:c.Initial},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:d.Inherit},subtle:{type:"boolean",group:"Behavior",defaultValue:false},emphasized:{type:"boolean",group:"Behavior",defaultValue:false},ariaHasPopup:{type:"sap.ui.core.aria.HasPopup",group:"Accessibility",defaultValue:f.None},emptyIndicatorMode:{type:"sap.m.EmptyIndicatorMode",group:"Appearance",defaultValue:h.Off}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{allowPreventDefault:true,parameters:{ctrlKey:{type:"boolean"},metaKey:{type:"boolean"}}}},dnd:{draggable:true,droppable:false}}});r.call(y.prototype);y.prototype.onBeforeRendering=function(){};y.prototype.onkeydown=function(e){if(e.which===n.SPACE||e.which===n.SHIFT||e.which===n.ESCAPE){if(e.which===n.SPACE){if(this.getEnabled()||this.getHref()){e.setMarked();e.preventDefault();this._bPressedSpace=true}}if(this._bPressedSpace&&(e.which===n.ESCAPE||e.which===n.SHIFT)){this._bPressedEscapeOrShift=true}}else{if(this._bPressedSpace){e.preventDefault()}}};y.prototype.onkeyup=function(e){if(e.which===n.SPACE){if(!this._bPressedEscapeOrShift){this._handlePress(e);if(this.getHref()&&!e.isDefaultPrevented()){e.preventDefault();e.setMarked();var t=document.createEvent("MouseEvents");t.initEvent("click",false,true);this.getDomRef().dispatchEvent(t)}}else{this._bPressedEscapeOrShift=false}this._bPressedSpace=false}};y.prototype._handlePress=function(e){if(this.getEnabled()){e.setMarked();if(!this.firePress({ctrlKey:!!e.ctrlKey,metaKey:!!e.metaKey})||!this.getHref()){e.preventDefault()}}else{e.preventDefault()}};y.prototype.onsapenter=y.prototype._handlePress;if(o.support.touch){y.prototype.ontap=y.prototype._handlePress}else{y.prototype.onclick=y.prototype._handlePress}y.prototype.ontouchstart=function(e){if(this.getEnabled()){e.setMarked()}};y.prototype.setSubtle=function(e){this.setProperty("subtle",e);if(e&&!y.prototype._sAriaLinkSubtleId){y.prototype._sAriaLinkSubtleId=a.getStaticId("sap.m","LINK_SUBTLE")}return this};y.prototype.setEmphasized=function(e){this.setProperty("emphasized",e);if(e&&!y.prototype._sAriaLinkEmphasizedId){y.prototype._sAriaLinkEmphasizedId=a.getStaticId("sap.m","LINK_EMPHASIZED")}return this};y.prototype._isHrefValid=function(e){return this.getValidateUrl()?u.validate(e):true};y.prototype.getAccessibilityInfo=function(){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m"),t=this.getEmphasized()?e.getText("LINK_EMPHASIZED"):"",a=this.getSubtle()?e.getText("LINK_SUBTLE"):"",r=this.getText(),i=r;if(r){t&&(i+=" "+t);a&&(i+=" "+a)}return{role:"link",type:r?e.getText("ACC_CTR_TYPE_LINK"):undefined,description:i,focusable:this.getEnabled(),enabled:this.getEnabled()}};y.prototype.getFormDoNotAdjustWidth=function(){return true};y.prototype._getTabindex=function(){return this.getText()&&this.getEnabled()?"0":"-1"};y.prototype._determineSelfReferencePresence=function(){var e=this.getAriaLabelledBy(),t=e.indexOf(this.getId())!==-1,a=i.getReferencingLabels(this).length>0,r=this.getParent(),s=!!(r&&r.enhanceAccessibilityState);return!t&&(e.length>0||a||s)};return y});