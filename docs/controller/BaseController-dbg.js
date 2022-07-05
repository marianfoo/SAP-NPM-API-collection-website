"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/ui/core/routing/History", "../model/formatter"], function (Controller, UIComponent, History, __formatter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace org.openui5.bestofui5.controller
   */


  const BaseController = Controller.extend("org.openui5.bestofui5.controller.BaseController", {
    getOwnerComponent: function _getOwnerComponent() {
      return Controller.prototype.getOwnerComponent.call(this);
    },
    getRouter: function _getRouter() {
      return UIComponent.getRouterFor(this);
    },
    getResourceBundle: function _getResourceBundle() {
      const oModel = this.getOwnerComponent().getModel("i18n");
      return oModel.getResourceBundle();
    },
    getModel: function _getModel(sName) {
      return this.getView().getModel(sName);
    },
    setModel: function _setModel(oModel, sName) {
      this.getView().setModel(oModel, sName);
      return this;
    },
    navTo: function _navTo(sName, oParameters, bReplace) {
      this.getRouter().navTo(sName, oParameters, undefined, bReplace);
    },
    onNavBack: function _onNavBack(event) {
      const sPreviousHash = History.getInstance().getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("default", {}, undefined, true);
      }
    },
    onButtonHeaderSelect: function _onButtonHeaderSelect(event, headerKey) {
      this.getView().getModel("settings").setProperty("/headerKey", headerKey);
      this.navTo(headerKey);
    }
  });
  BaseController.formatter = formatter;
  return BaseController;
});
//# sourceMappingURL=BaseController.js.map