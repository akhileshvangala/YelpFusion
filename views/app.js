/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'YelpFusion.Application',

    name: 'YelpFusion',

    requires: [
        // This will automatically load all classes in the YelpFusion namespace
        // so that application classes do not need to require each other.
        'YelpFusion.*'
    ],

    // The name of the initial view to create.
    mainView: 'YelpFusion.view.main.Main'
});
