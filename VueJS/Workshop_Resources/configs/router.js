import {createRouter, createWebHistory} from "vue-router";
import Home from "../src/pages/Home.vue";
import About from "../src/pages/About.vue";
import Products from "../src/pages/Products/Products.vue";
import SingleProduct from "../src/pages/Products/SingleProduct.vue";
import Contact from "../src/pages/Contact.vue";
import Register from "../src/pages/Regester/Register.vue";
import Cart from "../src/pages/Cart.vue";
import Favorites from "../src/pages/Favorites.vue";

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/products', name: 'products', component: Products},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/register', name: 'register', component: Register},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/product/:id', name: 'singleProduct', component: SingleProduct},
    {path: 'favorites', name: 'favorites', component: Favorites},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;