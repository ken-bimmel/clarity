// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fk = require("flesch-kincaid-calc");
const { ClarityTreeProvider } = require("./src/ClarityTreeProvider");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "clarity" is now active!');

	const clarityTreeProvider = new ClarityTreeProvider();
	vscode.window.registerTreeDataProvider("clarity", clarityTreeProvider);
	vscode.commands.registerCommand("clarity.refreshTreeView", () => clarityTreeProvider.refresh())
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
