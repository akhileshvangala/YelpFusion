/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('YelpFusion.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'YelpFusion.view.main.MainController',
        'YelpFusion.view.main.MainModel',
        'YelpFusion.view.main.YelpView'
    ],

    controller: 'main',
    viewModel: 'main',
    autoScroll:true,

    items: [{
        xtype:'yelpview',
        scroll:true,
    }]
});
