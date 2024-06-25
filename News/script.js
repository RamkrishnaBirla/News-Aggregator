document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetchNews(query);
});

function fetchNews(query) {
    const apiKey = 'd5faa8d34f4c44f1b945ee19894cf765';
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            alert('Error fetching news. Please try again later.');
        });
}

function displayNews(articles) {
    const newsResults = document.getElementById('news-results');
    newsResults.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const link = document.createElement('a');
        link.href = article.url;
        link.target = '_blank';
        link.textContent = 'Read more';

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(link);

        newsResults.appendChild(newsItem);
    });
}

