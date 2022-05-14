/**
 * Author: Federico Engler
 *
 * Model class used to represent Vue router routes. By using a proper route
 * class, the registration of the individual routes to the Vue router becomes
 * far easier to read, understand and maintain.
 */
export default class Route {
    /**
     * Create an instance of a Vue route in our application.
     * @param {string} path - The route path.
     * @param {Object} component - The view component for the route.
     * @param {Array} [children] - The optional children routes.
     */
    constructor(path, component, children) {
        this.path = path;
        this.component = component;
        this.children = children;
    }

    /**
     * Registers a redirect route.
     * @param {string} path - The path to forward to.
     * @returns this route object.
     */
    forward(path) {
        this.redirect = path;
        return this;
    }
}
