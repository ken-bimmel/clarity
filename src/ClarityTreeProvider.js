const vscode = require("vscode");
const tlg = require("./TreeLabelGenerators")

const DISPLAY_TREE = [
    {
        label: () => "Readability",
        state: vscode.TreeItemCollapsibleState.Collapsed,
        children: [
            {
                label: tlg.getActiveWindowFleschKincaidGradeLevel,
                state: vscode.TreeItemCollapsibleState.None,
            },
            {
                label: tlg.getActiveWindowFleschKincaidReadingEase,
                state: vscode.TreeItemCollapsibleState.None,
            }
        ]
    }
]

class ClarityTreeProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }

    getTreeItem(element) {
        return element;
    }

    getChildren(element = undefined) {
        if (element) {
            const children = [];
            for (let child of element.children) {
                children.push(
                    new ClarityTreeItem(
                        child.label,
                        child.children,
                        child.state
                    )
                )
            }
            return children;
        } else {
            const parents = [];
            for (let parent of DISPLAY_TREE) {
                parents.push(
                    new ClarityTreeItem(
                        parent.label,
                        parent.children,
                        parent.state
                    )
                )
            }
            return parents;
        }
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }
}

class ClarityTreeItem extends vscode.TreeItem {
    constructor(labelGenerator, children, collapsibleState) {
        super(labelGenerator(), collapsibleState);
        this.children = children;
    }
}

exports.ClarityTreeProvider = ClarityTreeProvider;