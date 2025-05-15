import renderHome from './views/home.js';
import renderContacts from './views/contact.js';
import renderDeals from './views/deals.js';

export const routes = {
    '/': renderHome,
    '/contacts': renderContacts,
    '/deals': renderDeals,
};
