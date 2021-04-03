/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ns/project2/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});