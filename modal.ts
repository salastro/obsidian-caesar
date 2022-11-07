export class shiftInput extends Modal {
    shift: number;
    onSubmit: (shift: number) => void;

    constructor(app: App, onSubmit: (shift: number) => void) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;

        new Setting(contentEl)
        .setName("Shift")
        .addText((text) =>
                 text.onChange((value) => {
                     this.shift = value
                 }));

                 new Setting(contentEl)
                 .addButton((btn) =>
                            btn
                            .setButtonText("Submit")
                            .setCta()
                            .onClick(() => {
                                this.close();
                                this.onSubmit(this.shift);
                            }));
    }

    onClose() {
        let { contentEl } = this;
        contentEl.empty();
    }
}

