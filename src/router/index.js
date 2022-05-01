/**
 * Author: Federico Engler
 *
 * The declaration of our routes.
 */
import { createRouter, createWebHistory } from 'vue-router';
import { Route } from '@/models';
import { fantasy, home, misc, trips } from '@/views';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        new Route('').forward('home'),
        new Route('home', home),
        new Route('trips', trips),
        new Route('fantasy', fantasy),
        new Route('misc', misc)
    ]
});

export default router;
