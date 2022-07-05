"use strict";

sap.ui.define(["./App.controller", "sap/ui/model/Sorter"], function (__AppController, Sorter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const AppController = _interopRequireDefault(__AppController);

  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const AllPackages = AppController.extend("org.openui5.bestofui5.controller.AllPackages", {
    onInit: function _onInit() {
      AppController.prototype.onInit.call(this);
      this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
      const search = this.getView().getModel("settings").getProperty("/search");
      const token = this.getView().getModel("settings").getProperty("/tokens");
      this.queryControl.applySearchFilter();
    },
    onAfterRendering: function _onAfterRendering() {
      const binding = this.getView().byId("listAllPackages").getBinding("items");
      const oSorter = new Sorter({
        path: "downloads365",
        descending: true
      });
      binding.sort(oSorter);
    },
    onPress: function _onPress(event) {
      // get object name from oevent
      const objectName = event.getSource().getBindingContext("data").getObject().name; //route to object view

      this.navTo("RouteObjectView", {
        name: objectName
      });
    },
    onSortSelectChange: function _onSortSelectChange(event) {
      const selectKeySort = event.getParameter("selectedItem").getKey();
      const selectKeySortArray = selectKeySort.split(":");
      const selectKey = selectKeySortArray[0];
      this.getView().getModel("settings").setProperty("/selectKey", selectKey);
      const selectDescending = selectKeySortArray[1] === "true";
      const binding = this.getView().byId("listAllPackages").getBinding("items");
      const oSorter = new Sorter({
        path: selectKey,
        descending: selectDescending
      });
      binding.sort(oSorter);
    },
    liveSearch: function _liveSearch(event) {
      const value = event.getParameter("value").trim();
      this.getView().getModel("settings").setProperty("/search", value);

      if (this.getRouter().getHashChanger().getHash() != "packages") {
        this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
        this.navTo("allPackages");
      } else {
        this.onPatternMatched();
      }
    },
    onUpdateToken: function _onUpdateToken(event) {
      this.queryControl.onUpdateToken(event);

      if (this.getRouter().getHashChanger().getHash() != "packages") {
        this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
        this.navTo("allPackages");
      } else {
        this.onPatternMatched();
      }
    }
  });
  return AllPackages;
});
//# sourceMappingURL=AllPackages.controller.js.map