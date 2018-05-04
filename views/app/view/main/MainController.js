/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('YelpFusion.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onSearchText: function(field, e, eOpts) {
        var momStore = Ext.getStore('yelpstore'),
            searchString = Ext.String.trim(field.getRawValue()),
            agendaRec, partcipntRec, add;

        if (searchString) {
            momStore.clearFilter(true);
            momStore.filter(function(record) {
                agendaRec = record.get('name');
                //partcipntRec = record.get('participants');
                    if (agendaRec.toLowerCase().search(new RegExp(searchString.toLowerCase(), 'gi')) == 0) {
                        return true;
                    } else {
                        return false;
                    }

            }, this);

        } else if (searchString.length == 0) {
            momStore.clearFilter(true);
            momStore.reload();
        }
    },
    onYelpItemClick:function(view, record, item, idx, evt, opts){
        var me = this,
            targetDom = evt.getTarget(),
            targetEl = Ext.get(targetDom);
            if (targetEl.hasCls('like-clk')) {
                 window.open("https://www.yelp.com/login", '_blank'); 
            }
    }
});
