Ext.define('YelpFusion.view.main.YelpView', {
    extend: 'Ext.container.Container',

    alias: 'widget.yelpview',

    requires: [
        'YelpFusion.view.main.YelpComponentView',
        'YelpFusion.view.main.YelpTopDockBar'
    ],

    scroll:true,

    items: [{
        xtype: 'yelptopdockbar'
    }, {
        xtype: 'yelpcomponentview'

    }]
});