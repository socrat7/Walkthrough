sap.ui.define([

	"sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
	
	"use strict";

	new ComponentContainer({
		
		name: "sample1",
		settings : {
			
			id : "sample1"
		},
		
		async: true	
		
	}).placeAt("content");
	
});
