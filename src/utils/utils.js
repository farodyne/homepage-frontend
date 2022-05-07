/**
 * Author: Federico Engler
 *
 * This class contains a collection of reusable utility methods that are used
 * throughout the application.
 */
import { AlbumImage } from '@/models';

class Utils {
    /**
     * Preloads the specified image.
     * @param {object} image - A database image object model.
     * @returns A frontend image object model.
     */
    static loadImage(image) {
        return new Promise((resolve, reject) => {
            const imageToLoad = new Image();

            // Resolve the returned promise if the image loads as expected.
            imageToLoad.onload = () => {
                resolve(new AlbumImage(image.url, image.caption));
            };

            // Reject the returned promise if the image fails to load.
            imageToLoad.onerror = () => {
                reject(new Error(`Failed to load image: ${image.url}`));
            };

            // This line triggers the actual loading.
            imageToLoad.src = image.url;
        });
    }
}

export default Utils;
