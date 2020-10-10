sap.ui.define([

	"sap/ui/core/mvc/Controller"

], function(Controller) {

	return Controller.extend("sample1.controller.App", {

		onShowHello: function() {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			alert("Hello World");
			/* eslint-enable no-alert */
		}
	});
});