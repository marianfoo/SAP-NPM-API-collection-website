import AppController from "./App.controller";
import Sorter from "sap/ui/model/Sorter";
import Event from "sap/ui/base/Event";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class AllPackages extends AppController {
	public onInit(): void {
		super.onInit();
		this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event: Event): void {
		this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
		const search = this.getView().getModel("settings").getProperty("/search");
		const token = this.getView().getModel("settings").getProperty("/tokens");
		this.queryControl.applySearchFilter();
	}

	public onAfterRendering(): void {
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: "downloads365",
			descending: true,
		});
		binding.sort(oSorter);
	}

	public onPress(event: Event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", {
			name: objectName,
		});
	}

	public onSortSelectChange(event: Event): void {
		const selectKeySort: string = event.getParameter("selectedItem").getKey();
		const selectKeySortArray = selectKeySort.split(":");
		const selectKey = selectKeySortArray[0];
		this.getView().getModel("settings").setProperty("/selectKey", selectKey);
		const selectDescending = selectKeySortArray[1] === "true";
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: selectKey,
			descending: selectDescending,
		});
		binding.sort(oSorter);
	}

	public liveSearch(event: Event): void {
		const value = event.getParameter("value").trim();
		this.getView().getModel("settings").setProperty("/search", value);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.onPatternMatched();
		}
	}

	public onUpdateToken(event: Event): void {
		this.queryControl.onUpdateToken(event);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.onPatternMatched();
		}
	}
}
