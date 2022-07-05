/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/library","sap/ui/core/Control","./TileContentRenderer"],function(t,e,r,i){"use strict";var a=t.Priority;var o=t.LoadState;var n=r.extend("sap.m.TileContent",{metadata:{library:"sap.m",properties:{footer:{type:"string",group:"Appearance",defaultValue:null},footerColor:{type:"sap.m.ValueColor",group:"Appearance",defaultValue:"Neutral"},size:{type:"sap.m.Size",group:"Appearance",defaultValue:"Auto",deprecated:true},unit:{type:"string",group:"Data",defaultValue:null},disabled:{type:"boolean",group:"Behavior",defaultValue:false},frameType:{type:"sap.m.FrameType",group:"Appearance",defaultValue:"Auto"},priority:{type:"sap.m.Priority",group:"Misc",defaultValue:a.None},priorityText:{type:"string",group:"Misc",defaultValue:null},state:{type:"sap.m.LoadState",group:"Misc",defaultValue:o.Loaded}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false,bindable:"bindable"}}}});n.prototype.init=function(){this._bRenderFooter=true;this._bRenderContent=true;this._bStateSetManually=false};n.prototype.onBeforeRendering=function(){var t=this.mProperties.hasOwnProperty("state");if(t&&!this._bStateSetManually){if(this.getParent()&&this.getParent().isA("sap.m.GenericTile")){if(this.getParent().getState()===o.Failed){this.setProperty("state",o.Loaded,true)}else if(this.getParent().getState()===o.Disabled){this.setProperty("state",o.Loaded,true);this.setProperty("disabled",this.getState()===o.Disabled,true)}}}else{if(this.getParent()&&this.getParent().isA("sap.m.GenericTile")){if(this.getParent().getState()===o.Failed){this.setProperty("state",o.Loaded,true)}else if(this.getParent().getState()===o.Disabled){this.setProperty("state",o.Loaded,true);this.setProperty("disabled",this.getState()===o.Disabled,true)}else{this.setProperty("state",this.getParent().getState(),true)}}this._bStateSetManually=true}if(this.getContent()&&this._oDelegate){if(this.getDisabled()){this.getContent().addDelegate(this._oDelegate)}else{this.getContent().removeDelegate(this._oDelegate)}}};n.prototype.onAfterRendering=function(){var t=this.getContent();if(t){var e=this.$();var r=e.find("*");var i=e.attr("title")||"";var a=t.getTooltip_AsString()||"";if(i===a){i=""}var o="";r.toArray().forEach(function(t){if(t.title){o=o.concat(t.title+" ")}});if(o.trim()!==0){a=a+" "+o}if(a&&a.trim().length!==0){if(this._getFooterText().trim()!==0){a=a+"\n"+this._getFooterText()}i.trim().length!==0?e.attr("title",i+"\n"+a):e.attr("title",a)}r.removeAttr("title").off("mouseenter")}};n.prototype._getContentType=function(){if(this.getContent()){var t=this.getContent().getMetadata().getName();if(t==="sap.m.NewsContent"||t==="sap.suite.ui.commons.NewsContent"){return"News"}}};n.prototype._getFooterText=function(){var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");var e=this.getFooter();var r=this.getUnit();if(r){if(e){if(sap.ui.getCore().getConfiguration().getRTL()){return t.getText("TILECONTENT_FOOTER_TEXT",[e,r])}else{return t.getText("TILECONTENT_FOOTER_TEXT",[r,e])}}else{return r}}else{return e}};n.prototype.getAltText=function(){var t="";var e=true;var r=this.getContent();if(r){if(r.getAltText){t+=r.getAltText();e=false}else if(r.getTooltip_AsString()){t+=r.getTooltip_AsString();e=false}}if(this.getUnit()){t+=(e?"":"\n")+this.getUnit();e=false}if(this.getFooter()){t+=(e?"":"\n")+this.getFooter()}return t};n.prototype.getTooltip_AsString=function(){var t=this.getTooltip();var e="";if(typeof t==="string"||t instanceof String){return t}e=this.getAltText();return e?e:""};n.prototype.setRenderFooter=function(t){this._bRenderFooter=t;return this};n.prototype.setRenderContent=function(t){this._bRenderContent=t;return this};return n});