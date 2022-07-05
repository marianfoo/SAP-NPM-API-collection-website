sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "duplicate";
	const pathData = "M0 32Q0 19 9 9.5T32 0h256q13 0 22.5 9.5T320 32v32h-32V32H32v352h96v32H32q-14 0-23-9t-9-23V32zm192 161v-65q0-13 9-22.5t23-9.5h256q13 0 22.5 9.5T512 128v352q0 14-9.5 23t-22.5 9H224q-14 0-23-9t-9-23v-64h32v64h256V128H224v65h-32zm-47 95h191l-75-68q-5-6-5-12t5-11 11-5 11 5l92 83q9 10 9 23t-9 23l-92 86q-5 5-11 5-3 0-11-5-5-6-5-12t5-11l75-69H145q-16 0-16-16t16-16z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
