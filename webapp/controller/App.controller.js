sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"

], function(Controller, MessageToast, JSONModel) {

	return Controller.extend("sample1.controller.App", {

		//onInit
		onInit : function() {
		
			//set Data model on view
			var oData = {
				recipient : {
					name  : "World"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
						
		}, //Ende onInit()
		
		//evento al presionar el boton say hello
		onShowHello: function() {
			MessageToast.show("Hello World");
		}
		
		
		
	});
});