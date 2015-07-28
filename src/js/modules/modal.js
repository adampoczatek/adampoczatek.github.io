export class Modal {
    constructor (modal, modalClose, triggers) {
        this.MODAL_VISIBLE = "modal--visible";
        this.PAGE_MODAL_VISIBLE = "modal--active";
        this.modal = modal;
        this.modalClose = modalClose;
        this.triggers = triggers;
        this.page = document.body;

        this.init();
    }

    open () {
        this.modal.classList.add(this.MODAL_VISIBLE);
        this.page.classList.add(this.PAGE_MODAL_VISIBLE);
    }

    close () {
        this.modal.classList.remove(this.MODAL_VISIBLE);
        this.page.classList.remove(this.PAGE_MODAL_VISIBLE);
    }

    init () {
        var self = this;

        this.modalClose.addEventListener("click", function (e) {
            e.preventDefault();

            self.close();
        }, false);

        [].forEach.call(this.triggers, (trigger) => {
            trigger.addEventListener("click", function (e) {
                e.preventDefault();

                self.open();
            });
        });
    }
} 