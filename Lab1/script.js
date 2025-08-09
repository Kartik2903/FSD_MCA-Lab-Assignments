// Geolocation Function
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          document.getElementById('locationResult').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
        }, (error) => {
          document.getElementById('locationResult').innerText = "Error: " + error.message;
        });
      } else {
        document.getElementById('locationResult').innerText = "Geolocation is not supported by this browser.";
      }
    }

    // LocalStorage Feedback Function
    function saveFeedback(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
      const feedback = { name, comment };

      let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
      feedbacks.push(feedback);
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';

      renderFeedback();
    }

    function renderFeedback() {
      const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
      const list = document.getElementById('feedbackList');
      list.innerHTML = '';
      feedbacks.forEach(fb => {
        const li = document.createElement('li');
        li.innerText = `${fb.name}: ${fb.comment}`;
        list.appendChild(li);
      });
    }

    window.onload = renderFeedback;