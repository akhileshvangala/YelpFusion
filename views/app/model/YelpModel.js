  Ext.define('YelpFusion.model.YelpModel', {
    extend: 'Ext.data.Model',

    alias: 'model.yelpmodel',

  fields: [{
                name: 'id',
                type: 'string',
                mapping: "id"
            }, {
                name: 'name',
                type: 'string',
                mapping: "name"
            }, {
                name: 'image',
                type: 'string',
                mapping: "image_url"
            },{
                name: 'title',
                type: 'string',
                mapping: "['categories'].title"
            }]
});