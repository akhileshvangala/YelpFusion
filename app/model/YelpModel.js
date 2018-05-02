  Ext.define('YelpFusion.model.YelpModel', {
    extend: 'Ext.data.Model',

    alias: 'model.yelpmodel',

  fields: [{
                name: 'id',
                type: 'string',
                mapping: "id.attributes['im:id']"
            }, {
                name: 'name',
                type: 'string',
                mapping: "['im:name'].label"
            }, {
                name: 'image',
                type: 'string',
                mapping: "['im:image'][2].label"
            },{
                name: 'title',
                type: 'string',
                mapping: "title.label"
            }]
});