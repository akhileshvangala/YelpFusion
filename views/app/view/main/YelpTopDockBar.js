Ext.define('YelpFusion.view.main.YelpTopDockBar', {
	extend: 'Ext.container.Container',

	alias: 'widget.yelptopdockbar',

	layout: {
		type: 'hbox',
		align: 'center'
	},

	cls: 'notes-toolbar-cls',

	margin: '0 20 0 10',

	defaults: {
		margin: 5
	},

	items: [{
		 xtype:'image',
		 src:'resources/images/yelpfusion.png',
		 width:95,
		 height:40,
		 alt:'src'
	},{
		xtype: 'textfield',
		reference: 'titleRef',
		emptyText: 'Search for name',
		cls: 'ddo-todo-detail-search-text',
		name: 'title',
		height: 30,
		width: 470,
		margin: 15,
		enableKeyEvents: true,
		listeners: {
			keyup: 'onSearchText'
		}
	}, {
		xtype: 'button',
		cls: 'notes-create-btn-cls',
		width: 70,
		height: 30,
		text: 'Home'
	}]
});