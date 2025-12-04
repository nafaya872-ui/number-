export const countries = [
    { id: 'us', name: 'United States', code: '+1', flag: '🇺🇸' },
    { id: 'uk', name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { id: 'ca', name: 'Canada', code: '+1', flag: '🇨🇦' },
    { id: 'fr', name: 'France', code: '+33', flag: '🇫🇷' },
    { id: 'de', name: 'Germany', code: '+49', flag: '🇩🇪' },
    { id: 'se', name: 'Sweden', code: '+46', flag: '🇸🇪' },
    { id: 'nl', name: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { id: 'au', name: 'Australia', code: '+61', flag: '🇦🇺' },
];

export const numbers = [
    { id: '1', countryId: 'us', number: '+1 (555) 010-9981', status: 'active', lastMessage: '2 mins ago' },
    { id: '2', countryId: 'us', number: '+1 (555) 012-3456', status: 'active', lastMessage: '5 mins ago' },
    { id: '3', countryId: 'uk', number: '+44 7700 900077', status: 'active', lastMessage: '1 min ago' },
    { id: '4', countryId: 'uk', number: '+44 7700 900123', status: 'active', lastMessage: '10 mins ago' },
    { id: '5', countryId: 'ca', number: '+1 (416) 555-0198', status: 'active', lastMessage: 'Just now' },
    { id: '6', countryId: 'fr', number: '+33 6 12 34 56 78', status: 'active', lastMessage: '1 hour ago' },
];

const senders = ['Google', 'Facebook', 'WhatsApp', 'Telegram', 'Amazon', 'Uber', 'Netflix', 'Instagram'];
const messages = [
    'Your verification code is 123456.',
    'Your Uber code: 9876. Reply STOP to unsubscribe.',
    'G-554433 is your Google verification code.',
    'Facebook: 778899 is your reset code.',
    'Your Amazon OTP is 112233. Do not share it with anyone.',
    'Telegram code: 44556. You can also tap on this link to log in: t.me/login/12345',
];

export function getMessages(numberId) {
    // Generate deterministic but "random-looking" messages for the demo
    const numMessages = 10;
    const result = [];
    for (let i = 0; i < numMessages; i++) {
        const sender = senders[i % senders.length];
        const text = messages[i % messages.length];
        const timeOffset = i * 5; // minutes
        result.push({
            id: `${numberId}-${i}`,
            sender,
            text,
            time: `${timeOffset} min ago`
        });
    }
    return result;
}

export function getCountry(id) {
    return countries.find(c => c.id === id);
}

export function getNumber(id) {
    return numbers.find(n => n.id === id);
}

export function getNumbersByCountry(countryId) {
    return numbers.filter(n => n.countryId === countryId);
}
