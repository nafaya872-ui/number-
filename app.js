import { Router } from './modules/router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Hero } from './components/Hero.js';
import { CountryList } from './components/CountryList.js';
import { NumberList } from './components/NumberList.js';
import { MessageInbox } from './components/MessageInbox.js';

const routes = {
    '/': async () => {
        return `
            ${Header()}
            ${Hero()}
            ${CountryList()}
            ${Footer()}
        `;
    },
    '/country/:id': async (params) => {
        return `
            ${Header()}
            ${NumberList(params)}
            ${Footer()}
        `;
    },
    '/number/:id': async (params) => {
        return `
            ${Header()}
            ${MessageInbox(params)}
            ${Footer()}
        `;
    },
    '/404': async () => {
        return `
            ${Header()}
            <div class="container" style="padding: 4rem 0; text-align: center;">
                <h1>404 - Page Not Found</h1>
                <a href="/" data-link class="btn btn-primary" style="margin-top: 1rem;">Go Home</a>
            </div>
            ${Footer()}
        `;
    }
};

// Initialize Router
const router = new Router(routes);
router.loadRoute();
