/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./Link","./Text","sap/ui/core/Control","sap/ui/core/IconPool","sap/ui/core/InvisibleText","sap/ui/core/library","sap/ui/Device","sap/ui/base/ManagedObject","./ObjectIdentifierRenderer","sap/ui/events/KeyCodes"],function(t,e,i,o,n,r,s,a,p,l,c){"use strict";var g=s.TextDirection;var u=t.EmptyIndicatorMode;var d=o.extend("sap.m.ObjectIdentifier",{metadata:{library:"sap.m",designtime:"sap/m/designtime/ObjectIdentifier.designtime",properties:{title:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null},badgeNotes:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},badgePeople:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},badgeAttachments:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},visible:{type:"boolean",group:"Appearance",defaultValue:true},titleActive:{type:"boolean",group:"Misc",defaultValue:false},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:g.Inherit},emptyIndicatorMode:{type:"sap.m.EmptyIndicatorMode",group:"Appearance",defaultValue:u.Off}},aggregations:{_titleControl:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_textControl:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{titlePress:{parameters:{domRef:{type:"object"}}}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},dnd:{draggable:true,droppable:false}}});d.prototype.init=function(){var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");if(sap.ui.getCore().getConfiguration().getAccessibility()){d.OI_ARIA_ROLE=t.getText("OI_ARIA_ROLE")}};d.prototype.exit=function(){if(this._attachmentsIcon){this._attachmentsIcon.destroy();this._attachmentsIcon=null}if(this._peopleIcon){this._peopleIcon.destroy();this._peopleIcon=null}if(this._notesIcon){this._notesIcon.destroy();this._notesIcon=null}};d.prototype._getAttachmentsIcon=function(){if(!this._attachmentsIcon){this._attachmentsIcon=this._getIcon(n.getIconURI("attachment"),this.getId()+"-attachments")}return this._attachmentsIcon};d.prototype._getPeopleIcon=function(){if(!this._peopleIcon){this._peopleIcon=this._getIcon(n.getIconURI("group"),this.getId()+"-people")}return this._peopleIcon};d.prototype._getNotesIcon=function(){if(!this._notesIcon){this._notesIcon=this._getIcon(n.getIconURI("notes"),this.getId()+"-notes")}return this._notesIcon};d.prototype._getIcon=function(t,e){var i=a.system.phone?"1em":"1em";var o;o=this._icon||n.createControlByURI({src:t,id:e+"-icon",size:i,useIconTooltip:false},sap.m.Image);o.setSrc(t);return o};d.prototype._getTitleControl=function(){var t=this.getAggregation("_titleControl"),o=this.getId(),n=p.escapeSettingsValue(this.getProperty("title"));if(!t){if(this.getProperty("titleActive")){t=new e({id:o+"-link",text:n,ariaLabelledBy:r.getStaticId("sap.m","OI_ARIA_ROLE")});t.addAssociation("ariaLabelledBy",o+"-text",true)}else{t=new i({id:o+"-txt",text:n})}this.setAggregation("_titleControl",t,true)}return t};d.prototype._getTextControl=function(){var t=this.getAggregation("_textControl");if(!t){t=new i({text:p.escapeSettingsValue(this.getProperty("text"))});this.setAggregation("_textControl",t,true)}t.setTextDirection(this.getTextDirection());return t};d.prototype.setTitle=function(t){if(t){this._getTitleControl().setProperty("text",t)}return this.setProperty("title",t)};d.prototype.setText=function(t){if(t){this._getTextControl().setProperty("text",t)}return this.setProperty("text",t)};d.prototype.setTitleActive=function(t){var e=this.getTitleActive();this.setProperty("titleActive",t);if(e!=t){this.destroyAggregation("_titleControl");this._getTitleControl()}return this};d.prototype._handlePress=function(t){var e=t.target;if(this.getTitleActive()&&this.$("title")[0].firstChild==e){this.fireTitlePress({domRef:e});t.setMarked()}};d.prototype.onsapenter=function(t){d.prototype._handlePress.apply(this,arguments)};d.prototype.onkeyup=function(t){if(t&&t.which===c.SPACE){d.prototype._handlePress.apply(this,arguments)}};d.prototype.ontap=function(t){d.prototype._handlePress.apply(this,arguments)};d.prototype.addAssociation=function(t,i,n){var r=this.getAggregation("_titleControl");if(t==="ariaLabelledBy"){if(this.getTitleActive()&&r instanceof e){r.addAssociation("ariaLabelledBy",i,true)}}return o.prototype.addAssociation.apply(this,arguments)};d.prototype.removeAssociation=function(t,i,n){var r=this.getAggregation("_titleControl");if(t==="ariaLabelledBy"){if(this.getTitleActive()&&r instanceof e){r.removeAssociation("ariaLabelledBy",i,true)}}return o.prototype.removeAssociation.apply(this,arguments)};d.prototype.getAccessibilityInfo=function(){var t=this.getAggregation("_titleControl")?this.getAggregation("_titleControl").getAccessibilityInfo():{type:"",description:""},e=(d.OI_ARIA_ROLE+" "+(t.type||"")).trim();if(this.getTitle()||this.getText()){t.type=e}t.description=t.description+" "+this.getText();return t};d.prototype._hasTopRow=function(){return this.getTitle()||this.getBadgeNotes()||this.getBadgePeople()||this.getBadgeAttachments()};return d});