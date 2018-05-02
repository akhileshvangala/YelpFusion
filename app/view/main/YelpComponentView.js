Ext.define('YelpFusion.view.main.YelpComponentView', {
    extend: 'Ext.view.View',

    xtype:'yelpcomponentview',

    store: 'yelpstore',

    cls: 'movies',
    itemCls: 'movie',
    overItemCls: 'over',
    selectedItemCls: 'selected',

    //itemTpl: '<img src="{image}" />',

    tpl: [
        '<tpl for=".">',
            '<div class="mom-view-cls" style="border: 1px solid #d0d0d0;">',
              '<div class="mom-name-cls" {[this.validEllipsesQtip(values.title, 25)]}>',
                  '{[this.getEllipseText(values.title, 25)]}</div>',
                '<div style="border-top: 1px solid #d0d0d0;">',
                    '<tpl>',
                        '<div>',
                            '<span class="mom-tokenNameTime" {[this.validEllipsesQtip(values.name, 20)]}>',
                            'By-&nbsp{[this.getEllipseText(values.name, 20)]}</span>',
                        '</div>',
                    '</tpl>',
                '</div>',
                '<tpl>',
                    '<div class="momDesId">',
                      '<img src="{image}" />',
                    '</div>',
                '</tpl>',
                 '<tpl>',
                    '<div style="border-top: 1px solid #d0d0d0;">',
                      '<span class="like-clk" style="padding:4px; cursor:pointer" ><img src="resources/images/like.png" style="width:15px; height:15px"/>&nbspLike</span>',
                    '</div>',
                '</tpl>',
            '</div>',
        '</tpl>', {
            getEllipseText: function(string, limit) {
                if (string && limit) {
                    return Ext.String.ellipsis(string, limit);
                }
            },
            validEllipsesQtip: function(value, limit) {
                if (value) {
                    var qtip = " data-qtip='" + value + "'";
                    return (value.length > limit) ? qtip : '';
                }
            }
        }
    ],

    itemSelector: 'span.like-clk',
    listeners:{
    	itemclick:'onYelpItemClick'
    }
});