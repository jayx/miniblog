import React from 'react';
import '../css/site-content.css';

const SiteContent = (props) => {
  return (
    <main className="site__content">
      <p>{props.article}</p>
    </main>
  )
}

export default SiteContent;
