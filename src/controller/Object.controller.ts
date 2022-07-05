import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Object extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
	}

	public async onPatternMatched(event: Event): Promise<void> {
		const objectName = event.getParameter("arguments").name;
		const model = this.getModel("data");
		await model.dataLoaded();
		const data = model.getData();
		// find object index in data
		const objectIndex = data.packages.findIndex((object) => object.name === objectName);
		if (!objectIndex) {
			//object not found
			// return
		}
		this.getView().bindElement({
			path: `/packages/${objectIndex}`,
			model: "data",
		});

		let oModel = new JSONModel(`https://raw.githubusercontent.com/marianfoo/SAP-NPM-API-collection-data/live-data/data/docs/${objectName}.json`);
		this.getView().setModel(oModel, "content");
		const markdownObject = this.getView().byId("treeMarkdownContent");
		markdownObject.setContent("");
	}

	public onPressStandardListItemNpmLink(event: Event): void {
		const versionNpm: string = event.getSource().getBindingContext("data").getObject().version;
		const npmLink: string = event.getSource().getParent().getBindingContext("data").getObject().npmlink;
		const link = `${npmLink}/v/${versionNpm}`;
		window.open(link, "_blank");
	}

	private onTreeSelect(event: Event): void {
		const content = event.getParameter("listItem").getBindingContext("content").getObject().content;
		const markdownObject = this.getView().getParent().getParent().getParent().getParent().getParent().getParent().byId("treeMarkdownContent");
		markdownObject.setContent(content);
	}
}
