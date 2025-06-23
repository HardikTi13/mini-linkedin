import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const apiKey = 'pub_4acf9d3e927f4040a3759e6f1ad4fddc'; // 🔑 Replace with your real API key
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${apiKey}&q=technology&language=en`
      );
      setArticles(response.data.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleRefresh=()=>{
    window.location.reload()
  }

  if (loading) return <p>Loading news...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>📰 Latest Tech News</h2>
      {articles.length === 0 ? (
        <p>No news found.</p>
      ) : (
        articles.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <hr />
          </div>
        ))
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default NewsApp;
