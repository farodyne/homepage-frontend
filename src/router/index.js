/**
 * Author: Federico Engler
 *
 * The declaration of our routes.
 */
import { createRouter, createWebHistory } from 'vue-router';
import { Route } from '@/models';
import { routes } from '@/constants';
import { album, home, section } from '@/views';
import { h } from 'vue';
import { RouterView } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // If no route is specified, default to the "home" route.
        new Route('').forward(routes.home),

        // Let the "home" component render the view for the "home" route.
        new Route(`/${routes.home}`, home),

        // For any other route that is not "home", it's either a section or
        // an album in the particular section. This rule is required to ensure
        // the correct router link in the navbar is highlighted as selected by
        // the applied active CSS class in the Vue Router.
        new Route('/:section', { render: () => h(RouterView) }, [new Route('', section), new Route(':id', album)])
    ]
});

export default router;
