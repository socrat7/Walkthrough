sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	/* eslint-disable no-alert */
	alert("UI5 is ready");
	/* eslint-enable no-alert */
	
	
	new Text({
		text: "Hello World"
	}).placeAt("content");
	
});
