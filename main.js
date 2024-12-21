async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=406b190de36142299ad5c1d6c9f30667";
    const responce = await fetch(url, { method: "GET" });
    const body = await responce.json();
    return body.articles;
}

async function displayNews() {
    const businessNews = await getNews();
    const cardsContatiner = document.querySelector(".news-cards-container")

    for (let news of businessNews) {
        const newsCard = document.createElement("div");
        newsCard.className = "news-cards";
        newsCard.innerHTML = `
            <div>
            <img src="${news.urlToImage ? news.urlToImage : "./resources/images/news_image_placeholder.jpg" }" alt="news card image placeholder">
            <h3 class="news-card-title">${news.title}</h3>
            <p class="news-card-discription">${news.description}</p>
            <a href="${news.url}">Read more ....</a>
        </div> 
        `
        cardsContatiner.appendChild(newsCard);
    }
}

document.addEventListener('DOMContentLoaded', displayNews)