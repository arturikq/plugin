import * as vscode from 'vscode';
import horoscopeData from './horoscope.json';

export function activate(context: vscode.ExtensionContext) {
    console.log('Плагин "Zodiac Info" вкл');

    const signs = Object.keys(horoscopeData); 

    const disposable = vscode.commands.registerCommand('vscode-zodiac-plugin.showZodiac', async () => {
        const zodiacRu = await vscode.window.showQuickPick(signs, {
            placeHolder: "Выберите знак зодиака"
        });

        if (!zodiacRu) {
            vscode.window.showInformationMessage("Знак не выбран");
            return;
        }
        const horoscopeText = horoscopeData[zodiacRu as keyof typeof horoscopeData];
        vscode.window.showInformationMessage(`${zodiacRu}: ${horoscopeText}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Плагин "Zodiac Info" выкл');
}
