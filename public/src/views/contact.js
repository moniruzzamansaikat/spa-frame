export default async function renderContacts(container) {
  // Inject CSS styles specific to this view
  const styleId = 'contacts-view-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .contacts-container {
        font-family: sans-serif;
        max-width: 600px;
        margin: 0 auto;
      }
      .contacts-title {
        color: #2c3e50;
        border-bottom: 2px solid #ccc;
        padding-bottom: 10px;
      }
      .contacts-list {
        list-style: none;
        padding: 0;
      }
      .contacts-item {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
      .contacts-email {
        color: #777;
      }
      .contacts-error {
        color: red;
        font-family: sans-serif;
      }
    `;
    document.head.appendChild(style);
  }

  container.innerHTML = '<h2 class="contacts-title">Loading contacts...</h2>';

  try {
    // Simulate fetching fake data from a placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const contactList = users.map(user => `
      <li class="contacts-item">
        <strong>${user.name}</strong><br/>
        <small class="contacts-email">${user.email}</small>
      </li>
    `).join('');

    container.innerHTML = `
      <div class="contacts-container">
        <h2 class="contacts-title">Contacts</h2>
        <ul class="contacts-list">
          ${contactList}
        </ul>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p class="contacts-error">Failed to load contacts.</p>`;
    console.error('Error loading contacts:', error);
  }
}
