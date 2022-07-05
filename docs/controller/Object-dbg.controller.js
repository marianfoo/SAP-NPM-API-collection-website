"use strict";

sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (__BaseController, JSONModel) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);

  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Object = BaseController.extend("org.openui5.bestofui5.controller.Object", {
    onInit: function _onInit() {
      this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: async function _onPatternMatched(event) {
      const objectName = event.getParameter("arguments").name;
      const model = this.getModel("data");
      await model.dataLoaded();
      const data = model.getData(); // find object index in data

      const objectIndex = data.packages.findIndex(object => object.name === objectName);

      if (!objectIndex) {//object not found
        // return
      }

      this.getView().bindElement({
        path: `/packages/${objectIndex}`,
        model: "data"
      });
      let oModel = new JSONModel(`https://raw.githubusercontent.com/marianfoo/SAP-NPM-API-collection-data/live-data/data/docs/${objectName}.json`);
      this.getView().setModel(oModel, "content");
      const markdownObject = this.getView().byId("treeMarkdownContent");
      markdownObject.setContent("");
    },
    onPressStandardListItemNpmLink: function _onPressStandardListItemNpmLink(event) {
      const versionNpm = event.getSource().getBindingContext("data").getObject().version;
      const npmLink = event.getSource().getParent().getBindingContext("data").getObject().npmlink;
      const link = `${npmLink}/v/${versionNpm}`;
      window.open(link, "_blank");
    },
    onTreeSelect: function _onTreeSelect(event) {
      const content = event.getParameter("listItem").getBindingContext("content").getObject().content;
      const markdownObject = this.getView().getParent().getParent().getParent().getParent().getParent().getParent().byId("treeMarkdownContent");
      markdownObject.setContent(content);
    }
  });
  return Object;
});
//# sourceMappingURL=Object.controller.js.map