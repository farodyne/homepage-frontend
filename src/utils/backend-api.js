/**
 * Author: Federico Engler
 *
 * This utility class acts more or less like a facade class used strictly to
 * abstract away Axios low-level details from the code that needs to perform
 * calls to our backend API. As such, it keeps our code cleaner and easier to
 * maintain.
 */
import axios from 'axios';

class BackendApi {
    /**
     * Creates an instance of the backend API class.
     * @param {Object} settings - An environment settings object.
     */
    constructor(settings) {
        this.baseUrl = settings.backendBase;
    }

    /**
     * Method to fetch the frontpage carousel images from backend.
     * @returns An array of frontpage carousel images.
     */
    async getFrontpageImages() {
        const { data } = await axios.get(`${this.baseUrl}/albums/carousel-images`);
        return data;
    }

    /**
     * Method to fetch all the albums belonging to a particular category/section.
     * @param {string} type - The tye of albums to fetch.
     * @returns An array of photo albums.
     */
    async getSection(type) {
        const { data } = await axios.get(`${this.baseUrl}/sections/${type}`);
        return data;
    }

    /**
     * Method to fetch the images in the specified album.
     * @param {string} id - The album identifier.
     * @returns The specified photo album.
     */
    async getAlbum(id) {
        const { data } = await axios.get(`${this.baseUrl}/albums/${id}`);
        return data;
    }

    /**
     * Method to fetch the newest, latest albums.
     * @returns An array with the latest albumbs.
     */
    async getNews(count) {
        const { data } = await axios.get(`${this.baseUrl}/news/${count}`);
        return data;
    }
}

export default BackendApi;
