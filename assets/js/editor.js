(function() {
	tinymce.PluginManager.add('FS_tc_button', function( editor, url ) {
		editor.addButton( 'FS_tc_button', {
			title: 'Foundation Shortcodes',
			type: 'menubutton',
			icon: 'icon dashicons-tagcloud',
			menu: [

				// Row
				{
					text: 'Row',
					value: '[row][/row]',
					onclick: function() {
						editor.insertContent(this.value());
					}
				},

				// Columns
				{
					text: 'Columns',
					value: 'Text from menu item II',
					onclick: function() {
						// editor.insertContent(this.value());
					},
					menu: [

						// Small Column
						{
							text: 'Small',
							onclick: function() {
								editor.windowManager.open( {
									title: 'Column Span',
									body: [{
										type: 'listbox',
										name: 'span',
										label: 'Span',
										'values': [
											{text: '1', value: '1'},
											{text: '2', value: '2'},
											{text: '3', value: '3'},
											{text: '4', value: '4'},
											{text: '5', value: '5'},
											{text: '6', value: '6'},
											{text: '7', value: '7'},
											{text: '8', value: '8'},
											{text: '9', value: '9'},
											{text: '10', value: '10'},
											{text: '11', value: '11'},
											{text: '12', value: '12'}
										]
									},],
									onsubmit: function( e ) {
										editor.insertContent( '[column small="' + e.data.span + '"][/column]');
									}
								});
							}
						},

						// Medium Column
						{
							text: 'Medium',
							onclick: function() {
								editor.windowManager.open( {
									title: 'Column Span',
									body: [{
										type: 'listbox',
										name: 'span',
										label: 'Span',
										'values': [
											{text: '1', value: '1'},
											{text: '2', value: '2'},
											{text: '3', value: '3'},
											{text: '4', value: '4'},
											{text: '5', value: '5'},
											{text: '6', value: '6'},
											{text: '7', value: '7'},
											{text: '8', value: '8'},
											{text: '9', value: '9'},
											{text: '10', value: '10'},
											{text: '11', value: '11'},
											{text: '12', value: '12'}
										]
									},],
									onsubmit: function( e ) {
										editor.insertContent( '[column medium="' + e.data.span + '"][/column]');
									}
								});
							}
						},

						// Large Column
						{
							text: 'Large',
							onclick: function() {
								editor.windowManager.open( {
									title: 'Column Span',
									body: [{
										type: 'listbox',
										name: 'span',
										label: 'Span',
										'values': [
											{text: '1', value: '1'},
											{text: '2', value: '2'},
											{text: '3', value: '3'},
											{text: '4', value: '4'},
											{text: '5', value: '5'},
											{text: '6', value: '6'},
											{text: '7', value: '7'},
											{text: '8', value: '8'},
											{text: '9', value: '9'},
											{text: '10', value: '10'},
											{text: '11', value: '11'},
											{text: '12', value: '12'}
										]
									},],
									onsubmit: function( e ) {
										editor.insertContent( '[column large="' + e.data.span + '"][/column]');
									}
								});
							}
						},
					]
				},

				// Button
				{
					text: 'Button',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Button Options',
							body: [{
								type: 'textbox',
								name: 'text',
								label: 'Text'
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
								editor.insertContent( '[button style="' + e.data.style + '" size="' + e.data.size + '" type="' + e.data.type + '" link="' + e.data.link + '"]' + e.data.text + '[/button]');
							}
						});
					}
				},

				// Label
				{
					text: 'Label',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Label Options',
							body: [{
								type: 'textbox',
								name: 'text',
								label: 'Text'
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
								name: 'type',
								label: 'Type',
								'values': [
									{text: '', value: ''},
									{text: 'Radius', value: 'radius'},
									{text: 'Round', value: 'round'}
								]
							}],
							onsubmit: function( e ) {
								editor.insertContent( '[label style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/label]');
							}
						});
					}
				},

				// Tooltip
				{
					text: 'Tooltip',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Tooltip Options',
							body: [{
								type: 'textbox',
								name: 'text',
								label: 'Text'
							},
							{
								type: 'textbox',
								name: 'tip',
								label: 'Tip'
							},
							{
								type: 'listbox',
								name: 'position',
								label: 'Position',
								'values': [
									{text: '', value: ''},
									{text: 'Top', value: 'tip-top'},
									{text: 'Bottom', value: 'tip-bottom'},
									{text: 'Left', value: 'tip-left'},
									{text: 'Right', value: 'tip-right'}
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
								editor.insertContent( '[tooltip tip="' + e.data.tip + '" position="' + e.data.position + '" type="' + e.data.type + '"]' + e.data.text + '[/tooltip]');
							}
						});
					}
				},

				// Panel
				{
					text: 'Panel',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Panel Options',
							body: [{
								type: 'textbox',
								name: 'text',
								label: 'Text'
							},
							{
								type: 'listbox',
								name: 'style',
								label: 'Style',
								'values': [
									{text: '', value: ''},
									{text: 'Radius', value: 'radius'}
								]
							},
							{
								type: 'listbox',
								name: 'type',
								label: 'Type',
								'values': [
									{text: '', value: ''},
									{text: 'Callout', value: 'callout'}
								]
							}],
							onsubmit: function( e ) {
								editor.insertContent( '[panel style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/panel]');
							}
						});
					}
				},

				// Alert
				{
					text: 'Alert',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Alert Options',
							body: [{
								type: 'textbox',
								name: 'text',
								label: 'Text'
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
								name: 'type',
								label: 'Type',
								'values': [
									{text: '', value: ''},
									{text: 'Radius', value: 'radius'},
									{text: 'Round', value: 'round'}
								]
							}],
							onsubmit: function( e ) {
								editor.insertContent( '[alert style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/alert]');
							}
						});
					}
				},

				// Flex Video
				{
					text: 'Flex Video',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Flex Video Options',
							body: [{
								type: 'textbox',
								name: 'embed',
								label: 'Embed'
							},
							{
								type: 'listbox',
								name: 'size',
								label: 'Size',
								'values': [
									{text: '', value: ''},
									{text: 'Widescreen', value: 'widescreen'}
								]
							},
							{
								type: 'listbox',
								name: 'type',
								label: 'Type',
								'values': [
									{text: '', value: ''},
									{text: 'Vimeo', value: 'vimeo'}
								]
							}],
							onsubmit: function( e ) {
								editor.insertContent( '[flex-video size="' + e.data.size + '" type="' + e.data.type + '"]' + e.data.embed + '[/flex-video]');
							}
						});
					}
				},
		   ]
		});
	});
})();