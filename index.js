var app = require('app');
var Menu = require('menu');
var MenuItem = require('menu-item');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 480,
		height: 360,
		'min-width': 480,
		'min-height': 280,
		frame: true
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	var template = [{
		label: '&File',
		submenu: [{
			label: '&Open',
			accelerator: 'Ctrl+O',
		}, {
			label: '&Close',
			accelerator: 'Ctrl+W',
			click: function() {
				mainWindow.close();
			}
		}, ]
	}, {
		label: '&View',
		submenu: [{
			label: '&Reload',
			accelerator: 'Ctrl+R',
			click: function() {
				mainWindow.restart();
			}
		}, {
			label: 'Toggle &Full Screen',
			accelerator: 'F11',
			click: function() {
				mainWindow.setFullScreen(!mainWindow.isFullScreen());
			}
		}, {
			label: 'Toggle &Developer Tools',
			accelerator: 'Alt+Ctrl+I',
			click: function() {
				mainWindow.toggleDevTools();
			}
		}, ]
	}, {
		label: 'Help',
		submenu: [{
			label: 'Learn More',
			click: function() {
				require('shell').openExternal('http://electron.atom.io')
			}
		}, {
			label: 'Documentation',
			click: function() {
				require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme')
			}
		}, {
			label: 'Community Discussions',
			click: function() {
				require('shell').openExternal('https://discuss.atom.io/c/electron')
			}
		}, {
			label: 'Search Issues',
			click: function() {
				require('shell').openExternal('https://github.com/atom/electron/issues')
			}
		}]
	}];
	menu = Menu.buildFromTemplate(template);
	mainWindow.setMenu(menu);
});