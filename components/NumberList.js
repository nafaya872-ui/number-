import { getNumbersByCountry, getCountry } from '../modules/store.js';

export function NumberList({ id }) {
    const country = getCountry(id);
    if (!country) return '<div class="container">Country not found</div>';

    const numbers = getNumbersByCountry(id);

    const numberItems = numbers.map(num => `
        <a href="/number/${num.id}" data-link class="card animate-fade-in" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; text-decoration: none; color: inherit;">
            <div class="flex items-center gap-4">
                <div style="width: 48px; height: 48px; background: #eff6ff; color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                    <div style="font-weight: 600; font-size: 1.125rem;">${num.number}</div>
                    <div class="text-sm text-muted">Last message: ${num.lastMessage}</div>
                </div>
            </div>
            <div class="btn btn-primary" style="padding: 0.5rem 1.5rem;">Open</div>
        </a>
    `).join('');

    return `
        <div class="container" style="padding-top: 2rem;">
            <div style="margin-bottom: 2rem;">
                <a href="/" data-link class="text-sm text-muted" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                    ← Back to Countries
                </a>
                <h1>${country.flag} ${country.name} Phone Numbers</h1>
            </div>
            <div class="grid" style="gap: 1rem;">
                ${numberItems.length ? numberItems : '<p>No numbers available for this country.</p>'}
            </div>
        </div>
    `;
}
