// Blog.js
import React from 'react';
import Card from './Card';
import data from './data';
import './Blog.css'; // Import the CSS file

const Blog = () => {
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    const rowCards = data.slice(i, i + 3);
    rows.push(
      <div className="card-row" key={i}>
        {rowCards.map((val, index) => (
          <Card key={index} imgsrc={val.imgscr} dname={val.dname} link={val.links} />
        ))}
        
      </div>
    );
  }

  return <>{rows}</>;
};

export default Blog;



