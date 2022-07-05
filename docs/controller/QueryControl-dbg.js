"use strict";

sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function (Filter, FilterOperator) {
  class QueryControl {
    // create constructor
    constructor(view) {
      this.view = view;
    }

    liveSearch(event) {
      const value = event.getParameter("value").trim();
      this.view.getModel("settings").setProperty("/search", value);
      this.applySearchFilter();
    }

    applySearchFilter() {
      let value = this.view.getModel("settings").getProperty("/search");
      const valueTypes = this.view.getModel("settings").getProperty("/tokens");

      if (!value) {
        value = "";
      }

      const list = this.view.byId("listAllPackages");
      const listBinding = list.getBinding("items");
      const nameFilter = new Filter({
        path: "name",
        operator: FilterOperator.Contains,
        value1: value
      });
      const descFilter = new Filter({
        path: "description",
        operator: FilterOperator.Contains,
        value1: value
      });
      const tagsFilter = new Filter("tags", function (array) {
        for (const valueType of valueTypes) {
          if (array.includes(valueType.key) && valueType.type === "tag") {
            return true;
          }
        }
      }.bind(this));
      const typeFilters = [];

      for (let i = 0; i < valueTypes.length; i++) {
        const typeFilter = new Filter({
          path: "type",
          operator: FilterOperator.Contains,
          value1: valueTypes[i].key
        });
        typeFilters.push(typeFilter);
      }

      const typeFilter = new Filter({
        filters: typeFilters,
        and: true
      });
      const typesTagsFilter = new Filter({
        filters: [tagsFilter, typeFilter],
        and: false
      });
      const searchFilter = new Filter({
        filters: [nameFilter, descFilter],
        and: false
      });

      if (valueTypes.length > 0) {
        listBinding.filter(new Filter({
          filters: [searchFilter, typesTagsFilter],
          and: true
        }));
      } else {
        listBinding.filter(searchFilter);
      }
    }

    onUpdateToken(event) {
      const model = this.view.getModel("settings");
      let tokenArray = model.getProperty("/tokens");
      const addOrRemove = event.getParameter("type");

      if (addOrRemove === "added") {
        const keyArray = event.getParameter("addedTokens")[0].getProperty("key").split(";");
        const tokenObject = {
          key: keyArray[0],
          type: keyArray[1]
        };
        tokenArray.push(tokenObject);
      } else if (addOrRemove === "removed") {
        const keyArray = event.getParameter("removedTokens")[0].getProperty("key").split(";");
        const tokenObject = {
          key: keyArray[0],
          type: keyArray[1]
        }; // filter token object array with key and type values

        tokenArray = tokenArray.filter(function (obj) {
          return obj.key !== tokenObject.key && obj.type !== tokenObject.type;
        });
      }

      this.view.getModel("settings").setProperty("/tokens", tokenArray); // this.applySearchFilter(value, tokenArray);
    }

  }

  return QueryControl;
});
//# sourceMappingURL=QueryControl.js.map