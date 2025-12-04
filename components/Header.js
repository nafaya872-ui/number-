export function Header() {
    return `
        <header class="card" style="border-radius: 0; border-left: 0; border-right: 0; border-top: 0; position: sticky; top: 0; z-index: 100;">
            <div class="container flex items-center justify-between" style="height: 4rem;">
                <a href="/" data-link class="flex items-center gap-2">
                    <div style="width: 32px; height: 32px; background: var(--primary-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">S</div>
                    <span style="font-weight: 700; font-size: 1.25rem;">SMS Receiver</span>
                </a>
                <nav class="flex gap-4">
                    <a href="/" data-link class="text-sm font-medium">Home</a>
                    <a href="#" class="text-sm font-medium text-muted">Blog</a>
                    <a href="#" class="text-sm font-medium text-muted">API</a>
                    <a href="#" class="text-sm font-medium text-muted">FAQ</a>
                </nav>
            </div>
        </header>
    `;
}
