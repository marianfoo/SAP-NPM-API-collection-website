sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/DataType"],function(e){"use strict";function t(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var a=t(e);const c={Inactive:"Inactive",Active:"Active"};class i extends a{static isValid(e){return!!c[e]}}i.generateTypeAccessors(c);return i});