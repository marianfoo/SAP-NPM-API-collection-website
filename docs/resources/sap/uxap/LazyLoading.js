/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/Device","sap/ui/base/Object","./ObjectPageSubSection","./library","sap/base/Log","sap/base/util/isEmptyObject"],function(e,i,t,o,s,r,a){"use strict";var n=t.extend("sap.uxap._helpers.LazyLoading",{constructor:function(i){this._oObjectPageLayout=i;this._$html=e("html");this._iPreviousScrollTop=0;this._iScrollProgress=0;this._iPreviousScrollTimestamp=0;this._sLazyLoadingTimer=null;this._bSuppressed=false;this._oPrevSubSectionsInView={};this.setLazyLoadingParameters()},getInterface:function(){return this}});n.prototype.setLazyLoadingParameters=function(){this.LAZY_LOADING_DELAY=200;this.LAZY_LOADING_EXTRA_PAGE_SIZE=.5;this.LAZY_LOADING_EXTRA_SUBSECTION=this.LAZY_LOADING_DELAY*5;if(this._isPhone()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:1,ScrollToSection:1}}else if(this._isTablet()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:2,ScrollToSection:1}}else if(this._isTabletSize()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:2,ScrollToSection:2}}else{this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:3,ScrollToSection:3}}this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD=5};n.prototype.suppress=function(){this._bSuppressed=true};n.prototype.resume=function(){this._bSuppressed=false};n.prototype._triggerVisibleSubSectionsEvents=function(){this._oPrevSubSectionsInView={};this._oObjectPageLayout._requestAdjustLayout(true);this.doLazyLoading()};n.prototype.lazyLoadDuringScroll=function(e,i,t,o){var s,a,n=false;if(this._bSuppressed){return}if(e){if(this._sLazyLoadingTimer){clearTimeout(this._sLazyLoadingTimer)}this._sLazyLoadingTimer=null;this.doLazyLoading();return}this._iScrollProgress=i-this._iPreviousScrollTop;s=Math.round(Math.abs(this._iScrollProgress)/o*100);if(s>=this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD){n=true}this._iPreviousScrollTop=i;this._iPreviousScrollTimestamp=t||0;a=i===0?0:this.LAZY_LOADING_DELAY;if(n&&this._sLazyLoadingTimer){r.debug("ObjectPageLayout :: lazyLoading","delayed by "+a+" ms because of fast scroll");clearTimeout(this._sLazyLoadingTimer);this._sLazyLoadingTimer=null}if(!this._sLazyLoadingTimer){this._sLazyLoadingTimer=setTimeout(this.doLazyLoading.bind(this),a)}};n.prototype.doLazyLoading=function(){var i=this._oObjectPageLayout._getHeightRelatedParameters(),t=this._oObjectPageLayout.getUseIconTabBar(),o=sap.ui.getCore().byId(this._oObjectPageLayout.getSelectedSection()),s=this._oObjectPageLayout._oSectionInfo,n,_,u,c=this._iPreviousScrollTop>=i.iHeaderContentHeight,L,h=-1,l={},d={},g,S,p;if(this._bSuppressed){return}u=i.iScreenHeight-(c?i.iAnchorBarHeight:0)-(c?i.iHeaderTitleHeightStickied:0);n=i.iScrollTop;g=Date.now()-this._iPreviousScrollTimestamp;S=g<this.LAZY_LOADING_DELAY/2&&Math.abs(this._iScrollProgress)>5;if(S){if(this._iScrollProgress>=0){p=Math.round(Math.min(this._iScrollProgress*20,u/2))}else{p=-1*Math.round(Math.min(Math.abs(this._iScrollProgress)*20,u/2))}n+=p;r.debug("ObjectPageLayout :: lazyLoading","Visible page shifted from : "+p)}_=n+u;n+=16;e.each(s,e.proxy(function(e,i){if(!i.isSection&&i.sectionReference.getParent()&&i.sectionReference.getParent().getVisible()){if(t&&o&&o.indexOfSubSection(i.sectionReference)<0){return}if(i.positionTop<=_&&n<i.positionBottom-1){d[e]=e;if(!i.loaded){l[e]=e}}else if(!i.loaded&&i.positionTop>_&&i.positionTop<_+u*this.LAZY_LOADING_EXTRA_PAGE_SIZE&&(h==-1||i.positionTop<h)){h=i.positionTop;L=e}}},this));if(h!=-1&&a(l)){r.debug("ObjectPageLayout :: lazyLoading","extra section added : "+L);l[L]=L}e.each(l,e.proxy(function(e,i){r.debug("ObjectPageLayout :: lazyLoading","connecting "+i);sap.ui.getCore().byId(i).connectToModels();s[i].loaded=true},this));e.each(d,e.proxy(function(e,i){if(!this._oPrevSubSectionsInView[e]){r.debug("ObjectPageLayout :: lazyLoading","subSectionEnteredViewPort "+i);this._oObjectPageLayout.fireEvent("subSectionEnteredViewPort",{subSection:sap.ui.getCore().byId(i)})}},this));this._oPrevSubSectionsInView=d;if(S){this._sLazyLoadingTimer=setTimeout(this.doLazyLoading.bind(this),this.LAZY_LOADING_DELAY)}else{if(h){this._sLazyLoadingTimer=setTimeout(this.doLazyLoading.bind(this),this.LAZY_LOADING_EXTRA_SUBSECTION)}else{this._sLazyLoadingTimer=null}}};n.prototype.getSubsectionsToPreload=function(e,i){var t,s;if(i){t=this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.ScrollToSection;s=false}else{t=this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.FirstRendering;s=true}var r=[];e.some(function(e){if(!s&&i){s=e.getId()==i}if(s&&e instanceof o){if(e.getVisible()&&e._getInternalVisible()){r.push(e);t--}}return t<=0});return r};n.prototype.destroy=function(){if(this._sLazyLoadingTimer){clearTimeout(this._sLazyLoadingTimer)}};n.prototype._isPhone=function(){return s.Utilities.isPhoneScenario(this._oObjectPageLayout._getCurrentMediaContainerRange())};n.prototype._isTablet=function(){return i.system.tablet};n.prototype._isTabletSize=function(){return s.Utilities.isTabletScenario(this._oObjectPageLayout._getCurrentMediaContainerRange())};return n});