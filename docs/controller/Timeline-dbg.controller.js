"use strict";

sap.ui.define(["./BaseController"], function (__BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */


  const Timeline = BaseController.extend("org.openui5.bestofui5.controller.Timeline", {
    onInit: function _onInit() {
      this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
    },
    onNameClick: function _onNameClick(event) {
      this.navTo("RouteObjectView", {
        name: event.getSource().getBindingContext("versions").getObject().name
      });
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "timeline");
    }
  });
  return Timeline;
});
//# sourceMappingURL=Timeline.controller.js.map