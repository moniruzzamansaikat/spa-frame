export function startRouter(routeMap) {
    window.addEventListener('hashchange', () => route(routeMap));
    window.addEventListener('load', () => route(routeMap));
}

function route(routeMap) {
    const path = location.hash.slice(1) || '/';
    const container = document.getElementById('app');
    const handler = routeMap[path] || routeMap['/'];

    setActiveLink(path);
    handler(container);
}

function setActiveLink(path) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === `#${path}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
