
export default class Item {

    constructor(text) {
        this.id = Math.floor(Math.random() * 100000000);
        this.text = text;
        this.done = false;

    }

};

