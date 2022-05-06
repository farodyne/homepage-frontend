/**
 * Author: Federico Engler
 *
 * The declaration of our routes.
 */
import { createRouter, createWebHistory } from 'vue-router';
import { Route } from '@/models';
import { routes } from '@/constants';
import { album, home, section } from '@/views';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        new Route('').forward(routes.home),
        new Route(`${routes.home}`, home),
        new Route(`${routes.trips}`, section, { type: routes.trips }),
        new Route(`${routes.fantasy}`, section, { type: routes.fantasy }),
        new Route(`${routes.misc}`, section, { type: routes.misc }),
        new Route(`${routes.album}/:id`, album)
    ]
});

export default router;
