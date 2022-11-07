import { App, Modal, Setting } from "obsidian";

export class ShiftInput extends Modal {
    Shift: number;

    onSubmit: (Shift: number) => void;

    constructor(
        app: App,
        onSubmit: (Shift: number) => void
    ) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;

        contentEl.createEl("h2", { text: "" });

        new Setting(contentEl)
        .setName("Shift")
        .addText(
            (text) => text
            .setValue(this.Shift)
            .onChange((value) => {
                this.Shift = value;
            })
        );

        new Setting(contentEl)
        .addButton(
            (btn) => btn
            .setButtonText("Caesar!")
            .setCta()
            .onClick(() => {
                this.close();
                this.onSubmit(this.Shift);
            })
        );
    }

    onClose() {
        let { contentEl } = this;
        contentEl.empty();
    }
}
