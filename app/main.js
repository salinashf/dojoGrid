define([
	'require',
	'dojo/ready',
	'dijit/registry',
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_OnDijitClickMixin",
	"dijit/layout/StackContainer",
	"dijit/layout/ContentPane",
	"dojo/_base/declare",
	"dojo/dom",
	"dojo/domReady!",
	"dijit/layout/BorderContainer",
	"dojo/parser",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/json",
	"dojo/store/Memory",
	"dijit/tree/ObjectStoreModel",
	"dijit/Tree",
	"dojo/io-query"
], function (require, ready, registry , _WidgetBase, _TemplatedMixin, _OnDijitClickMixin,  StackContainer ,ContentPane,  declare, dom ) {
	var app = {};
	app.data = {
		identified: 'id',
		items: [
			{
				id:            1,
				first_name:    'salias',
				last_name:     'Walker',
				email_address: 'salinashf@gmail.com',
				age:           18
			},
			{
				id:            1,
				first_name:    'rrrr',
				last_name:     'Daniels',
				email_address: 'jack@daniels.com',
				age:           3
			},
			{
				id:            1,
				first_name:    'Moonshine',
				last_name:     '9999',
				email_address: 'get@wasted.com',
				age:           0
			},
		]
	};

	ready(function () {
		console.log('loaded!');
		app.showGrid('gridPlaceholder', app.data);
	});

	app.showGrid = function (placeholderId, data) {
		require(['dojox/grid/EnhancedGrid', 'dojo/data/ItemFileWriteStore'], function (Grid, Store) {
			var store = new Store({
				data: data
			});

			var grid = new Grid({
				id: 'myGrid',
				store: store,
				structure: [[
					{
						name:  'First name',
						field: 'first_name',
						width: '200px'
					},
					{
						name:  'Last name',
						field: 'last_name',
						width: '200px'
					},
					{
						name:  'Emailaa',
						field: 'email_address',
						width: '350px'
					},
					{
						name:  'Age',
						field: 'age',
						width: '80px'
					},
				]]
			});
			grid.placeAt(placeholderId);
			grid.startup();
		});
	};
	return app;
});
