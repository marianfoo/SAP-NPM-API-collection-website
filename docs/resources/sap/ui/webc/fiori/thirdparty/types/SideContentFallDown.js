sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/DataType"],function(e){"use strict";function t(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var i=t(e);const n={BelowXL:"BelowXL",BelowL:"BelowL",BelowM:"BelowM",OnMinimumWidth:"OnMinimumWidth"};class s extends i{static isValid(e){return!!n[e]}}s.generateTypeAccessors(n);return s});