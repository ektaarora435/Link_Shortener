document.getElementById('shorten-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;
    try {
      const response = await axios.post('/shorten', { originalUrl });
      const { shortUrl } = response.data;
      const shortenedUrlsDiv = document.getElementById('shortenedUrls');
      const p = document.createElement('p');
      p.textContent = `Shortened URL: ${window.location.href}${shortUrl}`;
      shortenedUrlsDiv.appendChild(p);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  });
  