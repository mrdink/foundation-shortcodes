(function() {
    tinymce.PluginManager.add('FS_tc_button', function( editor, url ) {
        editor.addButton( 'FS_tc_button', {
            title: 'Foundation Shortcodes',
            type: 'menubutton',
            icon: 'icon dashicons-tagcloud',
            menu: [
                {
                    text: 'Button',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Button Creation',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Title'
                            },
                            {
                                type: 'textbox',
                                name: 'link',
                                label: 'Link'
                            },
                            {
                                type: 'listbox',
                                name: 'style',
                                label: 'Style',
                                'values': [
                                    {text: '', value: ''},
                                    {text: 'Secondary', value: 'secondary'},
                                    {text: 'Success', value: 'success'},
                                    {text: 'Alert', value: 'alert'}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'size',
                                label: 'Size',
                                'values': [
                                    {text: '', value: ''},
                                    {text: 'Tiny', value: 'tiny'},
                                    {text: 'Small', value: 'small'},
                                    {text: 'Large', value: 'large'},
                                    {text: 'Expand', value: 'expand'}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'type',
                                label: 'Type',
                                'values': [
                                    {text: '', value: ''},
                                    {text: 'Radius', value: 'radius'},
                                    {text: 'Round', value: 'round'}
                                ]
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '[button style="' + e.data.style + '" size="' + e.data.size + '" type="' + e.data.type + '" link="' + e.data.link + '"]' + e.data.title + '[/button]');
                            }
                        });
                    }
                }
           ]
        });
    });
})();