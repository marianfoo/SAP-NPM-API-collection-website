/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UniversalDate","../CalendarType","sap/base/Log","./_Calendars"],function(t,e,a,r){"use strict";var o=t.extend("sap.ui.core.date.Islamic",{constructor:function(){var t=arguments;if(t.length>1){t=m(t)}this.oDate=this.createDate(Date,t);this.sCalendarType=e.Islamic}});o.UTC=function(){var t=m(arguments);return Date.UTC.apply(Date,t)};o.now=function(){return Date.now()};var n=1400,i=1721425.5,s=1948439.5,u=-425215872e5,f=864e5;var h=null;var l=["A","B"];function c(t){var e=t.year,a=t.month,r=t.day,o,n,u,f,h,l,c;l=0;if(a+1>2){l=I(e)?-1:-2}c=i-1+365*(e-1)+Math.floor((e-1)/4)+-Math.floor((e-1)/100)+Math.floor((e-1)/400)+Math.floor((367*(a+1)-362)/12+l+r);c=Math.floor(c)+.5;h=c-s;f=Math.floor(h/29.530588853);if(f<0){o=Math.floor(f/12)+1;n=f%12;if(n<0){n+=12}u=h-M(o,n)+1}else{f++;while(d(f)>h){f--}o=Math.floor(f/12)+1;n=f%12;u=h-d(12*(o-1)+n)+1}return{day:u,month:n,year:o}}function y(t){var e=t.year,a=t.month,r=t.day,o=e<1?M(e,a):d(12*(e-1)+a),n=r+o+s-1,u=Math.floor(n-.5)+.5,f=u-i,h=Math.floor(f/146097),l=C(f,146097),c=Math.floor(l/36524),y=C(l,36524),m=Math.floor(y/1461),g=C(y,1461),p=Math.floor(g/365),v=h*400+c*100+m*4+p,T,D,_,U,F,Y,w,b;if(!(c==4||p==4)){v++}_=i+365*(v-1)+Math.floor((v-1)/4)-Math.floor((v-1)/100)+Math.floor((v-1)/400);U=u-_;F=i-1+365*(v-1)+Math.floor((v-1)/4)-Math.floor((v-1)/100)+Math.floor((v-1)/400)+Math.floor(739/12+(I(v)?-1:-2)+1);w=0;if(u<F){w=0}else{w=I(v)?1:2}T=Math.floor(((U+w)*12+373)/367);Y=i-1+365*(v-1)+Math.floor((v-1)/4)-Math.floor((v-1)/100)+Math.floor((v-1)/400);b=0;if(T>2){b=I(v)?-1:-2}Y+=Math.floor((367*T-362)/12+b+1);D=u-Y+1;return{day:D,month:T-1,year:v}}function m(t){var e=Array.prototype.slice.call(t),a,r;a={year:t[0],month:t[1],day:t[2]!==undefined?t[2]:1};r=y(a);e[0]=r.year;e[1]=r.month;e[2]=r.day;return e}function g(){var t,e;h={};t=sap.ui.getCore().getConfiguration().getFormatSettings().getLegacyDateFormat();t=v(t)?t:"A";e=sap.ui.getCore().getConfiguration().getFormatSettings().getLegacyDateCalendarCustomizing();e=e||[];if(!e.length){a.warning("No calendar customizations.");return}e.forEach(function(e){if(e.dateFormat===t){var a=p(e.gregDate);var r=new Date(Date.UTC(a.year,a.month-1,a.day));var o=r.getTime();var n=(o-u)/f;a=p(e.islamicMonthStart);var i=(a.year-1)*12+a.month-1;h[i]=n}});a.info("Working with date format: ["+t+"] and customization: "+JSON.stringify(e))}function p(t){return{year:parseInt(t.substr(0,4)),month:parseInt(t.substr(4,2)),day:parseInt(t.substr(6,2))}}function d(t){if(!h){g()}var e=h[t];if(!e){var a=Math.floor(t/12)+1;var r=t%12;e=M(a,r)}return e}function M(t,e){return Math.ceil(29.5*e)+(t-1)*354+Math.floor((3+11*t)/30)}function C(t,e){return t-e*Math.floor(t/e)}function I(t){return!(t%400)||!(t%4)&&!!(t%100)}function v(t){return l.indexOf(t)!==-1}o.prototype._getIslamic=function(){return c({day:this.oDate.getDate(),month:this.oDate.getMonth(),year:this.oDate.getFullYear()})};o.prototype._setIslamic=function(t){var e=y(t);return this.oDate.setFullYear(e.year,e.month,e.day)};o.prototype._getUTCIslamic=function(){return c({day:this.oDate.getUTCDate(),month:this.oDate.getUTCMonth(),year:this.oDate.getUTCFullYear()})};o.prototype._setUTCIslamic=function(t){var e=y(t);return this.oDate.setUTCFullYear(e.year,e.month,e.day)};o.prototype.getDate=function(t){return this._getIslamic().day};o.prototype.getMonth=function(){return this._getIslamic().month};o.prototype.getYear=function(){return this._getIslamic().year-n};o.prototype.getFullYear=function(){return this._getIslamic().year};o.prototype.setDate=function(t){var e=this._getIslamic();e.day=t;return this._setIslamic(e)};o.prototype.setMonth=function(t,e){var a=this._getIslamic();a.month=t;if(e!==undefined){a.day=e}return this._setIslamic(a)};o.prototype.setYear=function(t){var e=this._getIslamic();e.year=t+n;return this._setIslamic(e)};o.prototype.setFullYear=function(t,e,a){var r=this._getIslamic();r.year=t;if(e!==undefined){r.month=e}if(a!==undefined){r.day=a}return this._setIslamic(r)};o.prototype.getUTCDate=function(t){return this._getUTCIslamic().day};o.prototype.getUTCMonth=function(){return this._getUTCIslamic().month};o.prototype.getUTCFullYear=function(){return this._getUTCIslamic().year};o.prototype.setUTCDate=function(t){var e=this._getUTCIslamic();e.day=t;return this._setUTCIslamic(e)};o.prototype.setUTCMonth=function(t,e){var a=this._getUTCIslamic();a.month=t;if(e!==undefined){a.day=e}return this._setUTCIslamic(a)};o.prototype.setUTCFullYear=function(t,e,a){var r=this._getUTCIslamic();r.year=t;if(e!==undefined){r.month=e}if(a!==undefined){r.day=a}return this._setUTCIslamic(r)};r.set(e.Islamic,o);return o});