const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	console.log('Congratulations, your extension "sqldeveloperminified" is now active!');

	let disposable = vscode.commands.registerCommand('sqldeveloperminified.helloWorld', function () {
		vscode.window.showInformationMessage('Hi Jae, ik werk!!!!!');
	});

	let disposable1 = vscode.commands.registerCommand('sqldeveloperminified.helloWorld', function () {

		vscode.window.showInformationMessage('Hi Jae, ik werk!!!!!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}