const vscode = require("vscode");
const fk = require("flesch-kincaid-calc");

function getActiveWindowFleschKincaidGradeLevel() {
    const text = vscode.window.activeTextEditor.document.getText();
    return `Flesch-Kincaid Grade Level: ${fk.getGradeLevel(text)}`;
}

function getActiveWindowFleschKincaidReadingEase() {
    const text = vscode.window.activeTextEditor.document.getText();
    return `Flesch-Kincaid Reading Ease: ${fk.getReadingEase(text)}`;
}

exports.getActiveWindowFleschKincaidGradeLevel = getActiveWindowFleschKincaidGradeLevel;
exports.getActiveWindowFleschKincaidReadingEase = getActiveWindowFleschKincaidReadingEase;