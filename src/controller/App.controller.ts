import Event from "sap/ui/base/Event";
import BaseController from "./BaseController";
import QueryControl from "./QueryControl";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class App extends BaseController {
	protected queryControl: QueryControl;

	public onInit(): void {
		this.queryControl = new QueryControl(this.getView());
	}
}
