sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"

], function(Controller, MessageToast, JSONModel, ResourceModel) {

	return Controller.extend("sample1.controller.App", {

		//onInit
		onInit: function() {

			//set Data model on view
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			//set i18n model on view
			//var i18nModel = new ResourceModel({
			//	bundleName: "sample1.i18n.i18n"
			//});
			//this.getView().setModel(i18nModel, "i18n");

		}, //Ende onInit()

		//evento al presionar el boton say hello
		onShowHello: function() {
			//read msg from i18n model
			//var oBundle = this.getView().getModel("i18n").getResouceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			//var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show("Hallo " + sRecipient);
		}

	});
});