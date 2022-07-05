"use strict";sap.ui.define(["sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t){class s{constructor(e){this.view=e}liveSearch(e){const t=e.getParameter("value").trim();this.view.getModel("settings").setProperty("/search",t);this.applySearchFilter()}applySearchFilter(){let s=this.view.getModel("settings").getProperty("/search");const n=this.view.getModel("settings").getProperty("/tokens");if(!s){s=""}const r=this.view.byId("listAllPackages");const o=r.getBinding("items");const i=new e({path:"name",operator:t.Contains,value1:s});const a=new e({path:"description",operator:t.Contains,value1:s});const l=new e("tags",function(e){for(const t of n){if(e.includes(t.key)&&t.type==="tag"){return true}}}.bind(this));const c=[];for(let s=0;s<n.length;s++){const r=new e({path:"type",operator:t.Contains,value1:n[s].key});c.push(r)}const p=new e({filters:c,and:true});const d=new e({filters:[l,p],and:false});const g=new e({filters:[i,a],and:false});if(n.length>0){o.filter(new e({filters:[g,d],and:true}))}else{o.filter(g)}}onUpdateToken(e){const t=this.view.getModel("settings");let s=t.getProperty("/tokens");const n=e.getParameter("type");if(n==="added"){const t=e.getParameter("addedTokens")[0].getProperty("key").split(";");const n={key:t[0],type:t[1]};s.push(n)}else if(n==="removed"){const t=e.getParameter("removedTokens")[0].getProperty("key").split(";");const n={key:t[0],type:t[1]};s=s.filter(function(e){return e.key!==n.key&&e.type!==n.type})}this.view.getModel("settings").setProperty("/tokens",s)}}return s});