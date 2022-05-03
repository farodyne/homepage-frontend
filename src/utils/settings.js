/**
 * Author: Federico Engler
 *
 * This utility object acts as a convinient mechanism in which to read the settings
 * that apply in our frontend application.
 */
export default {
    contentBase: import.meta.env.VITE_API_CONTENT_BASE || 'http://www.farodyne.com/content',
    numberOfFrontpageImages: import.meta.env.VITE_API_NO_OF_FRONTPAGE_IMAGES || 5,
    frontpageImageDisolveDelay: import.meta.env.VITE_API_FRONTPAGE_IMAGE_DISOLVE_DELAY || 10000
};
