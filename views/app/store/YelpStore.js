Ext.define('YelpFusion.store.YelpStore', {
    extend: 'Ext.data.Store',

    alias: 'store.yelpstore',

    storeId:'yelpstore',

   requires: [
       'YelpFusion.model.YelpModel'
    ],
    model: 'YelpFusion.model.YelpModel',

    autoLoad:true,

    proxy: {
          type: 'ajax',
           url: '/yelpfusionbusiness',
          reader: {
              type: 'json',
              rootProperty: 'data.jsonBody.businesses'
         }
    }
});
