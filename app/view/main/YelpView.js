Ext.define('YelpFusion.view.main.YelpView', {
    extend: 'Ext.container.Container',

    alias: 'widget.yelpview',

    requires: [
        'YelpFusion.view.main.YelpComponentView',
        'YelpFusion.view.main.YelpTopDockBar',

      //  'DDO.view.mom.MomNodeViewModel',
       // 'DDO.view.mom.MomViewController',

    ],

    scroll:true,

    /*controller: 'momviewcontroller',
    viewModel: {
        type: 'momnodeviewmodel'
    },*/

    items: [{
        xtype: 'yelptopdockbar'
    }, {
        xtype: 'yelpcomponentview'

    }]
});