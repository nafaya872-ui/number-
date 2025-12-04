import { countries } from '../modules/store.js';

export function CountryList() {
    const countryItems = countries.map(country => `
        <a href="/country/${country.id}" data-link class="card animate-fade-in" style="display: flex; align-items: center; padding: 1rem; gap: 1rem; text-decoration: none; color: inherit;">
            <span style="font-size: 2rem;">${country.flag}</span>
            <div>
                <div style="font-weight: 600;">${country.name}</div>
                <div class="text-sm text-muted">${country.code}</div>
            </div>
        </a>
    `).join('');

    return `
        <section id="countries" class="container" style="margin-bottom: 4rem;">
            <h2 style="margin-bottom: 1.5rem;">Available Countries</h2>
            <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">
                ${countryItems}
            </div>
        </section>
    `;
}
