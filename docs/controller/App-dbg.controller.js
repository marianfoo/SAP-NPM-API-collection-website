"use strict";

sap.ui.define(["./BaseController", "./QueryControl"], function (__BaseController, __QueryControl) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);

  const QueryControl = _interopRequireDefault(__QueryControl);
  /**
   * @namespace org.openui5.bestofui5.controller
   */


  const App = BaseController.extend("org.openui5.bestofui5.controller.App", {
    onInit: function _onInit() {
      this.queryControl = new QueryControl(this.getView());
    }
  });
  return App;
});
//# sourceMappingURL=App.controller.js.map