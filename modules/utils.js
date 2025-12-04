export function formatDate(dateString) {
    // Simple pass-through for now as our mock data has pre-formatted strings
    return dateString;
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
