const bookList = document.getElementById('book-list');

fetch('http://localhost:3000/api/books')
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch books');
    return res.json();
  })
  .then(data => {
    if (!Array.isArray(data)) {
      bookList.innerHTML = '<p class="text-red-600">No books found or server error.</p>';
      return;
    }
    data.forEach(book => {
      const div = document.createElement('div');
      div.className = 'bg-white p-4 rounded shadow hover:shadow-lg transition-shadow';
      div.innerHTML = `
        <img src="${book.image || 'https://via.placeholder.com/150'}" 
             alt="${book.name}" 
             class="w-full h-64 object-cover rounded mb-4">
        <h3 class="font-bold text-lg text-blue-800">${book.name}</h3>
        <p class="text-gray-600 mb-2">${book.description}</p>
        <p class="text-blue-600 font-semibold text-lg">₹${book.price}</p>
        <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
        </button>
      `;
      bookList.appendChild(div);
    });
  })
  .catch(err => {
    bookList.innerHTML = '<p class="text-red-600">Failed to load books.</p>';
    console.error(err);
  });
