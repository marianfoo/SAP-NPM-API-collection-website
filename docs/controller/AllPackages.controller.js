"use strict";sap.ui.define(["./App.controller","sap/ui/model/Sorter"],function(e,t){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=n(e);const o=s.extend("org.openui5.bestofui5.controller.AllPackages",{onInit:function e(){s.prototype.onInit.call(this);this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched,this)},onPatternMatched:function e(t){this.getView().getModel("settings").setProperty("/headerKey","allPackages");const n=this.getView().getModel("settings").getProperty("/search");const s=this.getView().getModel("settings").getProperty("/tokens");this.queryControl.applySearchFilter()},onAfterRendering:function e(){const n=this.getView().byId("listAllPackages").getBinding("items");const s=new t({path:"downloads365",descending:true});n.sort(s)},onPress:function e(t){const n=t.getSource().getBindingContext("data").getObject().name;this.navTo("RouteObjectView",{name:n})},onSortSelectChange:function e(n){const s=n.getParameter("selectedItem").getKey();const o=s.split(":");const a=o[0];this.getView().getModel("settings").setProperty("/selectKey",a);const i=o[1]==="true";const r=this.getView().byId("listAllPackages").getBinding("items");const g=new t({path:a,descending:i});r.sort(g)},liveSearch:function e(t){const n=t.getParameter("value").trim();this.getView().getModel("settings").setProperty("/search",n);if(this.getRouter().getHashChanger().getHash()!="packages"){this.getView().getModel("settings").setProperty("/headerKey","allPackages");this.navTo("allPackages")}else{this.onPatternMatched()}},onUpdateToken:function e(t){this.queryControl.onUpdateToken(t);if(this.getRouter().getHashChanger().getHash()!="packages"){this.getView().getModel("settings").setProperty("/headerKey","allPackages");this.navTo("allPackages")}else{this.onPatternMatched()}}});return o});