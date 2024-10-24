import React, { useEffect, useState } from 'react';
import './ArticleList.css'; // Import CSS for ArticleList

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="article-list">
      <h2>Insightful Articles</h2>
      <div className="card-container">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
