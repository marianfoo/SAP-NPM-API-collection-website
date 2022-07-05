"use strict";

sap.ui.define(["sap/ui/core/XMLComposite"], function (XMLComposite) {
  /**
   * @namespace org.openui5.bestofui5.control
   */
  const PackageListItemContent = XMLComposite.extend("org.openui5.bestofui5.control.PackageListItemContent", {
    metadata: {
      properties: {
        name: {
          type: "string"
        },
        description: {
          type: "string"
        },
        githublink: {
          type: "string"
        },
        npmlink: {
          type: "string"
        },
        type: {
          type: "string"
        },
        tags: {
          type: "array"
        },
        stars: {
          type: "string"
        },
        forks: {
          type: "string"
        },
        downloads14: {
          type: "string"
        },
        downloads30: {
          type: "string"
        },
        downloads365: {
          type: "string"
        },
        downloadsMonthlyGrowth: {
          type: "string"
        },
        createdAt: {
          type: "Date"
        },
        updatedAt: {
          type: "Date"
        },
        addedToBoUI5: {
          type: "Date"
        },
        rank: {
          type: "int"
        },
        rankTooltip: {
          type: "string"
        },
        rankIndicator: {
          type: "sap.m.DeviationIndicator"
        },
        showRank: {
          type: "boolean",
          defaultValue: false
        },
        rankColor: {
          type: "sap.m.ValueColor"
        },
        // this is a computed property
        typeImage: {
          type: "string"
        } // this is a computed property

      }
    },
    constructor: function _constructor(id, settings) {
      XMLComposite.prototype.constructor.call(this, id, settings);
    }
  });

  PackageListItemContent.prototype.getFragmentName = function (type) {
    return "org.openui5.bestofui5.control.PackageListItemContent";
  };

  PackageListItemContent.prototype.onIconPress = function (event, link) {
    console.log("onIconPress");
  };

  PackageListItemContent.prototype.setRankIndicator = function (indicator) {
    this.setProperty("rankIndicator", indicator, true);

    if (indicator === sap.m.DeviationIndicator.Up) {
      this.setProperty("rankColor", sap.m.ValueColor.Good);
      return;
    }

    if (indicator === sap.m.DeviationIndicator.Down) {
      this.setProperty("rankColor", sap.m.ValueColor.Error);
      return;
    }

    this.setProperty("rankColor", sap.m.ValueColor.Neutral);
  };

  return PackageListItemContent;
});
//# sourceMappingURL=PackageListItemContent.js.map