
  const http = require('http');
  const url = require('url');

  const items = [
    { id: 1, name: 'Pride and Prejudice', author: 'Jane Austen', price: 300, category: 'Classic', image: 'images/ja.jpg' },
    { id: 2, name: 'Freedom from the known', author: 'Krishnamurti', price: 250, category: 'Philosophy, Spirituality/Religion', image: 'images/jk.jpg' },
    { id: 3, name: '1984', author: 'George Orwell', price: 200, category: 'Dystopian, Satire', image: 'images/go.jpg' },
    { id: 4, name: 'Sapiens', author: 'Yuval Noah Harari', price: 350, category: 'History, Social Philosophy', image: 'images/ynh.jpg' },
    { id: 5, name: 'The Comedy of Error', author: 'William Shakespeare', price: 400, category: 'Comedy', image: 'images/ws.jpg' },
  ];

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (parsedUrl.pathname === '/api' || parsedUrl.pathname === '/api/items') {
      
      const { item, price } = parsedUrl.query;

    
      let filteredItems = items;

      if (item) {
        const itemLower = item.toLowerCase();
        filteredItems = filteredItems.filter(i =>
          i.name.toLowerCase().includes(itemLower)
        );
      }
      if (price) {
        const priceNum = Number(price);
        if (!isNaN(priceNum)) {
          filteredItems = filteredItems.filter(i => i.price <= priceNum);
        }
      }

      res.writeHead(200);
      res.end(JSON.stringify(filteredItems));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Not Found' }));
    }
  });

  const PORT = 8000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
