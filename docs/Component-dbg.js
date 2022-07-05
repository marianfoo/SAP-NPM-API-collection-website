"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "./model/models", "sap/ui/model/json/JSONModel", "sap/ui/core/IconPool", "sap/ui/core/ComponentSupport", "sap/ui/core/date/Gregorian", "sap/ui/model/type/Date"], function (UIComponent, sap_ui_Device, __models, JSONModel, IconPool, sap_ui_core_ComponentSupport, sap_ui_core_date_Gregorian, sap_ui_model_type_Date) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const support = sap_ui_Device["support"];

  const models = _interopRequireDefault(__models);

  // TEST

  /**
   * @namespace org.openui5.bestofui5
   */
  const Component = UIComponent.extend("org.openui5.bestofui5.Component", {
    metadata: {
      manifest: "json",
      // marker to identify async content creation
      // makes async: true for rootView obsolete!
      interfaces: ["sap.ui.core.IAsyncContentCreation"]
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this); // create the views based on the url/hash

      this.getRouter().initialize();
      IconPool.registerFont({
        collectionName: "font-awesome-icons",
        fontFamily: "fa-brands",
        fontURI: "font-awesome",
        lazy: true
      });
      const settingsModel = new JSONModel({
        filter: "all",
        tokens: [],
        search: "",
        selectedTab: "hotPackagesView",
        selectKey: "downloads365",
        headerKey: "hotPackages",
        tagFilter: "tag"
      });
      this.setModel(settingsModel, "settings"); // set the device model

      this.setModel(models.createDeviceModel(), "device");
    },
    onAfterRendering: function _onAfterRendering() {
      document.body.classList.remove("splash");
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }

      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=Component.js.map