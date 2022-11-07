import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { caesarCipher, caesarDecipher } from './caesar';
// import { SettingTab } from './settings';
// import { shiftInput } from './modal';

interface CaesarSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: CaesarSettings = {
	mySetting: 'default'
}

export default class Caesar extends Plugin {
	settings: CaesarSettings;

	async onload() {
		await this.loadSettings();

        // Obsidian command to cipher.
		this.addCommand({
			id: 'caesar-cipher-selected-text',
			name: 'Cipher selected text',
			editorCallback: (editor: Editor, view: MarkdownView) => {
                // new shiftInput(this.app, (shift) => {
                //     new Notice(`Shift: ${shift}`);
                // }).open();
                const selectedText = editor.getSelection();
                const cipheredText = caesarCipher(selectedText, 14);
                console.log(selectedText);
                console.log(cipheredText);
				editor.replaceSelection(cipheredText);
                new Notice('Ciphered!');
			}
		});

        // Obsidian command to decipher.
        this.addCommand({
            id: 'caesar-decipher-selected-text',
            name: 'Decipher selected text',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                const selectedText = editor.getSelection();
                const decipheredText = caesarDecipher(selectedText, 14);
                console.log(selectedText);
                console.log(decipheredText);
				editor.replaceSelection(decipheredText);
                new Notice('Deciphered!');
            }
        });

		// // This adds a settings tab so the user can configure various aspects of the plugin
		// this.addSettingTab(new CaesarSettingTab(this.app, this));

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

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
