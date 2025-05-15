export default async function renderContacts(container) {
  container.innerHTML = '<h2 style="font-family: sans-serif; color: #555;">Loading contacts...</h2>';

  try {
    // Simulate fetching fake data from a placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const contactList = users.map(user => `
      <li style="padding: 10px; border-bottom: 1px solid #eee;">
        <strong>${user.name}</strong><br/>
        <small style="color: #777;">${user.email}</small>
      </li>
    `).join('');

    container.innerHTML = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #ccc; padding-bottom: 10px;">Contacts</h2>
        <ul style="list-style: none; padding: 0;">
          ${contactList}
        </ul>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p style="color:red; font-family: sans-serif;">Failed to load contacts.</p>`;
    console.error('Error loading contacts:', error);
  }
}