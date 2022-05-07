/**
 * Author: Federico Engler
 *
 * Our model for representing an album image.
 */
class AlbumImage {
    constructor(url, caption) {
        this.url = url;
        this.caption = caption;
        this.visible = false;
        this.selected = false;
    }

    show() {
        this.visible = true;
        this.selected = true;
    }

    hide() {
        this.visible = false;
        this.selected = false;
    }
}

export default AlbumImage;
