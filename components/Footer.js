export function Footer() {
    return `
        <footer class="container" style="margin-top: 4rem; padding-bottom: 2rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                <div>
                    <h3 style="margin-bottom: 1rem;">SMS Receiver</h3>
                    <p class="text-muted text-sm">Free temporary phone numbers for account verification and privacy protection.</p>
                </div>
                <div>
                    <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Product</h4>
                    <ul class="text-sm text-muted" style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <li><a href="#">Virtual Numbers</a></li>
                        <li><a href="#">Temporary SMS</a></li>
                        <li><a href="#">API Access</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Company</h4>
                    <ul class="text-sm text-muted" style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center text-sm text-muted" style="margin-top: 2rem; text-align: center;">
                &copy; 2025 SMS Receiver. All rights reserved.
            </div>
        </footer>
    `;
}
