const API_BASE = (localStorage.getItem('API_BASE') || 'http://localhost:8000') + '/api/users';

const registerForm = document.getElementById('registerForm');
const registerMsg = document.getElementById('registerMsg');
const usersList = document.getElementById('usersList');
const refreshBtn = document.getElementById('refreshBtn');

async function registerUser(e) {
  e.preventDefault();
  registerMsg.textContent = '';
  const fd = new FormData(registerForm);
  try {
    const res = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      body: fd
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Registration failed');
    registerMsg.className = 'text-sm mt-2 text-green-700';
    registerMsg.textContent = 'Registered! Check your email for confirmation.';
    registerForm.reset();
    await loadUsers();
  } catch (err) {
    registerMsg.className = 'text-sm mt-2 text-red-700';
    registerMsg.textContent = err.message;
  }
}

async function loadUsers() {
  usersList.innerHTML = '<p class="text-gray-500 text-sm">Loading...</p>';
  try {
    const res = await fetch(API_BASE);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to load users');
    renderUsers(data.users || []);
  } catch (err) {
    usersList.innerHTML = `<p class="text-red-600 text-sm">${err.message}</p>`;
  }
}

function renderUsers(users) {
  if (!users.length) {
    usersList.innerHTML = '<p class="text-gray-500 text-sm">No users yet.</p>';
    return;
  }
  usersList.innerHTML = '';
  users.forEach(u => {
    const card = document.createElement('div');
    card.className = 'border border-gray-700 rounded-xl p-4 bg-gray-800 shadow-md flex flex-col gap-2';
    card.innerHTML = `
      <div class="flex flex-col items-center gap-2 relative">
        <img src="${u.profile_pic_url || 'https://placehold.co/80x80?text=No+Img'}" class="w-20 h-20 object-cover rounded-lg border border-gray-700 bg-gray-900 mb-2" />
        <h3 class="font-bold text-lg text-white text-center">${u.name || '(no name)'}</h3>
        <div class="text-sm text-gray-300 text-center"><span class="font-semibold">Email:</span> ${u.email || '-'}</div>
        <div class="text-sm text-gray-300 text-center"><span class="font-semibold">Reputation:</span> ${u.reputation_score ?? 0}</div>
        <span class="absolute top-2 right-3 text-xs text-gray-400">#${u.user_id}</span>
      </div>
      <details class="mt-2">
        <summary class="text-sm text-blue-400 cursor-pointer">Edit</summary>
        <form class="mt-2 space-y-2" data-user-id="${u.user_id}">
          <input type="text" name="name" placeholder="Name" value="${u.name || ''}" class="w-full border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded px-2 py-1 text-sm" />
          <input type="email" name="email" placeholder="Email" value="${u.email || ''}" class="w-full border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded px-2 py-1 text-sm" />
          <input type="number" name="reputation_score" placeholder="Reputation" value="${u.reputation_score ?? 0}" class="w-full border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded px-2 py-1 text-sm" />
          <div>
            <label class="text-sm">New Profile Picture</label>
            <input type="file" name="profilePic" accept="image/*" class="w-full text-sm" />
          </div>
          <div class="flex gap-2">
            <button class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded px-3 py-1 update-btn" type="submit">Save</button>
            <button class="bg-red-600 hover:bg-red-700 text-white text-sm rounded px-3 py-1 delete-btn" data-id="${u.user_id}" type="button">Delete</button>
          </div>
          <p class="text-xs text-gray-500">You can also test with Postman/Thunder Client.</p>
        </form>
      </details>
    `;

    const form = card.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = form.getAttribute('data-user-id');
      const fd = new FormData(form);
      try {
        const res = await fetch(`${API_BASE}/${id}`, { method: 'PUT', body: fd });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Update failed');
        await loadUsers();
      } catch (err) {
        alert(err.message);
      }
    });

    const delBtn = card.querySelector('.delete-btn');
    delBtn.addEventListener('click', async () => {
      if (!confirm('Delete this user?')) return;
      try {
        const res = await fetch(`${API_BASE}/${u.user_id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Delete failed');
        await loadUsers();
      } catch (err) {
        alert(err.message);
      }
    });

    usersList.appendChild(card);
  });
}

registerForm.addEventListener('submit', registerUser);
refreshBtn.addEventListener('click', loadUsers);
loadUsers();