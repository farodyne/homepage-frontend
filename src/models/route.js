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
     * @param {string} name - The name of the route.
     * @param {Object} component - The view component for the route.
     * @param {Object} props - The props object for the component.
     */
    constructor(name, component, props) {
        this.name = name;
        this.path = `/${name}`;
        this.component = component;
        this.props = props;
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
