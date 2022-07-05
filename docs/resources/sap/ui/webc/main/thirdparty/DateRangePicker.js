sap.ui.define(["sap/ui/webc/common/thirdparty/base/Render","sap/ui/webc/common/thirdparty/localization/dates/CalendarDate","sap/ui/webc/common/thirdparty/localization/dates/modifyDateBy","sap/ui/webc/common/thirdparty/localization/dates/getTodayUTCTimestamp","./generated/i18n/i18n-defaults","./generated/themes/DateRangePicker.css","./DatePicker"],function(e,t,i,a,s,r,n){"use strict";function l(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var u=l(t);var m=l(i);var h=l(a);const o={tag:"ui5-daterange-picker",properties:{delimiter:{type:String,defaultValue:"-"},_tempValue:{type:String}}};class c extends n{static get metadata(){return o}static get styles(){return[n.styles,r]}constructor(){super();this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,true).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||h(this._primaryCalendarType)}get _calendarSelectedDates(){if(this._tempValue){return[this._tempValue]}if(this.value&&this._checkValueValidity(this.value)){return this._splitValueByDelimiter(this.value)}return[]}get startDateValue(){return u.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return u.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get _placeholder(){return this.placeholder!==undefined?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return c.i18nBundle.getText(s.DATERANGE_DESCRIPTION)}async _onInputSubmit(t){const i=this._getInput();const a=i.getCaretPosition();await e.renderFinished();i.setCaretPosition(a)}onResponsivePopoverAfterClose(){this._tempValue="";super.onResponsivePopoverAfterClose()}isValid(e){const t=this._splitValueByDelimiter(e);return t.length<=2&&t.every(e=>super.isValid(e))}isInValidRange(e){return this._splitValueByDelimiter(e).every(e=>super.isInValidRange(e))}normalizeValue(e){const t=this._extractFirstTimestamp(e);const i=this._extractLastTimestamp(e);if(t&&i&&t>i){return this._buildValue(i,t)}return this._buildValue(t,i)}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.values;if(t.length===0){return}if(t.length===1){this._tempValue=t[0];return}const i=this._buildValue(...e.detail.dates);this._updateValueAndFireEvents(i,true,["change","value-changed"]);this.closePicker()}async _modifyDateValue(t,i){if(!this._endDateTimestamp){return super._modifyDateValue(t,i)}const a=this._getInput();let s=a.getCaretPosition();let r;if(s<=this.value.indexOf(this._effectiveDelimiter)){const e=m(u.fromTimestamp(this._startDateTimestamp*1e3),t,i,this._minDate,this._maxDate);const a=e.valueOf()/1e3;if(a>this._endDateTimestamp){s+=Math.ceil(this.value.length/2)}r=this._buildValue(a,this._endDateTimestamp)}else{const e=m(u.fromTimestamp(this._endDateTimestamp*1e3),t,i,this._minDate,this._maxDate);const a=e.valueOf()/1e3;r=this._buildValue(this._startDateTimestamp,a);if(a<this._startDateTimestamp){s-=Math.ceil(this.value.length/2)}}this._updateValueAndFireEvents(r,true,["change","value-changed"]);await e.renderFinished();a.setCaretPosition(s)}get _effectiveDelimiter(){return this.delimiter||this.constructor.getMetadata().getProperties().delimiter.defaultValue}_splitValueByDelimiter(e){const t=[];const i=e.split(this._prevDelimiter||this._effectiveDelimiter);t[0]=i.slice(0,i.length/2).join(this._effectiveDelimiter);t[1]=i.slice(i.length/2).join(this._effectiveDelimiter);return t}_extractFirstTimestamp(e){if(!e||!this._checkValueValidity(e)){return undefined}const t=this._splitValueByDelimiter(e);return this.getFormat().parse(t[0],true).getTime()/1e3}_extractLastTimestamp(e){if(!e||!this._checkValueValidity(e)){return undefined}const t=this._splitValueByDelimiter(e);if(t[1]){return this.getFormat().parse(t[1],true).getTime()/1e3}return undefined}_buildValue(e,t){this._prevDelimiter=this._effectiveDelimiter;if(e){const i=this._getStringFromTimestamp(e*1e3);if(!t){return i}const a=this._getStringFromTimestamp(t*1e3);return`${i} ${this._effectiveDelimiter} ${a}`}return""}}c.define();return c});