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
          type: 'jsonp',
           url: 'https://itunes.apple.com/us/rss/topmovies/limit=18/json',
          reader: {
                    type: 'json',
                    rootProperty: 'feed.entry'
         }
    }
});
