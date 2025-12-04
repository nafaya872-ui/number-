import { getNumber, getMessages, getCountry } from '../modules/store.js';

export function MessageInbox({ id }) {
    const number = getNumber(id);
    if (!number) return '<div class="container">Number not found</div>';

    const country = getCountry(number.countryId);
    const messages = getMessages(id);

    const messageItems = messages.map(msg => `
        <div class="card animate-fade-in" style="padding: 1.5rem;">
            <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
                <div style="font-weight: 600; color: var(--primary-color);">${msg.sender}</div>
                <div class="text-sm text-muted">${msg.time}</div>
            </div>
            <div style="font-size: 1.125rem; background: var(--background-color); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                ${msg.text}
            </div>
        </div>
    `).join('');

    return `
        <div class="container" style="padding-top: 2rem;">
            <div style="margin-bottom: 2rem;">
                <a href="/country/${country.id}" data-link class="text-sm text-muted" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                    ← Back to ${country.name}
                </a>
                <div class="card" style="padding: 2rem; text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${country.flag}</div>
                    <h1 style="margin-bottom: 0.5rem;">${number.number}</h1>
                    <p class="text-muted" style="margin-bottom: 1.5rem;">Use this number to receive SMS verification codes.</p>
                    <button onclick="navigator.clipboard.writeText('${number.number}').then(() => alert('Copied!'))" class="btn btn-primary">
                        Copy Number
                    </button>
                </div>
            </div>

            <h2 style="margin-bottom: 1.5rem;">Inbox</h2>
            <div class="grid" style="gap: 1rem;">
                ${messageItems}
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <p class="text-sm text-muted">Messages update automatically every 30 seconds.</p>
            </div>
        </div>
    `;
}
