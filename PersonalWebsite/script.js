class carousel {
    el = null;
    items = [];
    size = 1; // number of videos in carousel
    gap = 0;
    item = { // this is for each video
        width:0,
        gap:0,
        left:0,
    };

    constructor(el, size) {
        this.el = el;
        this.size = size;
    }

    // Can't make constructor async, so need to make an init that is async
    async init() {
        this.item.width = await this.getSize(); 
    }

    async getSize() {
        let w = this.el.clientWidth; // Take width of carousel and divide by size
        w = w / this.size;
        return w
    }
}