import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import CustomControlXML from "./CustomControlXML";
import XMLComposite from "sap/ui/core/XMLComposite";

/**
 * @namespace org.openui5.bestofui5.control
 */

export default class PackageListItemContent extends XMLComposite {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings) {
		super(id, settings);
	}

	static readonly metadata = {
		properties: {
			name: { type: "string" },
			description: { type: "string" },
			githublink: { type: "string" },
			npmlink: { type: "string" },
			type: { type: "string" },
			tags: { type: "array" },
			stars: { type: "string" },
			forks: { type: "string" },
			downloads14: { type: "string" },
			downloads30: { type: "string" },
			downloads365: { type: "string" },
			downloadsMonthlyGrowth: { type: "string" },
			createdAt: { type: "Date" },
			updatedAt: { type: "Date" },
			addedToBoUI5: { type: "Date" },
			rank: { type: "int" },
			rankTooltip: { type: "string" },
			rankIndicator: { type: "sap.m.DeviationIndicator" },
			showRank: { type: "boolean", defaultValue: false },
			rankColor: { type: "sap.m.ValueColor" }, // this is a computed property
			typeImage: { type: "string" }, // this is a computed property
		},
	};

	// static renderer = {
	// 	apiVersion: 2,
	// 	render: function (rm: RenderManager, control: PackageListItemContent): void {
	// 		rm.openStart("div", control);
	// 		rm.openEnd();
	// 		rm.text("test");
	// 		rm.close("div");
	// 	}
	// };
}

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
