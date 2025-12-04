import { CONFIG } from '../config.js';

export class Router {
    constructor(routes) {
        this.routes = routes;
        this.root = document.getElementById('app');
        window.addEventListener('popstate', () => this.loadRoute());
    }

    navigateTo(path) {
        // Ensure path starts with /
        if (!path.startsWith('/')) {
            path = '/' + path;
        }

        // Prepend BASE_PATH if it's not just '/'
        const fullPath = CONFIG.BASE_PATH === '/' ? path : `${CONFIG.BASE_PATH}${path}`;

        // Avoid double slashes if BASE_PATH ends with / and path starts with /
        const normalizedPath = fullPath.replace('//', '/');

        window.history.pushState({}, '', normalizedPath);
        this.loadRoute();
    }

    async loadRoute() {
        let path = window.location.pathname;

        // Remove BASE_PATH from the path to match routes
        if (CONFIG.BASE_PATH !== '/' && path.startsWith(CONFIG.BASE_PATH)) {
            path = path.substring(CONFIG.BASE_PATH.length);
            // Ensure path starts with / after removal
            if (!path.startsWith('/')) {
                path = '/' + path;
            }
        }

        // Simple regex matching for routes
        // / -> Home
        // /country/:id -> Country
        // /number/:id -> Number

        let match = null;
        let params = {};

        // Handle root
        if (path === '/' || path === '/index.html') {
            match = this.routes['/'];
        } else {
            // Check dynamic routes
            for (const routePath in this.routes) {
                if (routePath === '/') continue;

                // Convert route path to regex
                // e.g. /country/:id -> /country/([^/]+)
                const regexPath = routePath.replace(/:[^\s/]+/g, '([^/]+)');
                const regex = new RegExp(`^${regexPath}$`);
                const found = path.match(regex);

                if (found) {
                    match = this.routes[routePath];
                    // Extract params
                    const paramNames = (routePath.match(/:[^\s/]+/g) || []).map(p => p.substring(1));
                    paramNames.forEach((name, index) => {
                        params[name] = found[index + 1];
                    });
                    break;
                }
            }
        }

        if (!match) {
            match = this.routes['/404'] || (() => '<h1>404 Not Found</h1>');
        }

        this.root.innerHTML = await match(params);

        // Re-attach event listeners for links
        document.querySelectorAll('a[data-link]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                this.navigateTo(link.getAttribute('href'));
            });
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }
}
