import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { caesarCipher, caesarDecipher } from './caesar';
import { ShiftInput } from './modal';

export default class Caesar extends Plugin {
    async onload() {

        // Obsidian command to cipher.
        this.addCommand({
            id: 'caesar-cipher-selected-text',
            name: 'Cipher selected text',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                const selectedText: string = editor.getSelection();
                console.log(selectedText);
                new ShiftInput(this.app, (Shift) => {
                    const caesarShift: number = parseInt(Shift);
                    const cipheredText: string = caesarCipher(selectedText, caesarShift);
                    console.log(cipheredText);
                    editor.replaceSelection(cipheredText);
                    new Notice('Ciphered!');
                }).open();
            }
        });

        // Obsidian command to decipher.
        this.addCommand({
            id: 'caesar-decipher-selected-text',
            name: 'Decipher selected text',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                const selectedText: string = editor.getSelection();
                console.log(selectedText);
                new ShiftInput(this.app, (Shift) => {
                    const caesarShift: number = parseInt(Shift);
                    const decipheredText: string = caesarDecipher(selectedText, caesarShift);
                    console.log(decipheredText);
                    editor.replaceSelection(decipheredText);
                    new Notice('Deciphered!');
                }).open();
            }
        });

        // If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
        // Using this function will automatically remove the event listener when this plugin is disabled.
        this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
            console.log('click', evt);
        });

        // When registering intervals, this function will automatically clear the interval when the plugin is disabled.
        this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));

    }

    onunload() {

    }
}
