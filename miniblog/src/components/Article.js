import React from 'react';
import SiteHeader from './SiteHeader';
import SiteContent from './SiteContent';
import SiteFooter from './SiteFooter';
import '../css/miniblog.css';

class Article extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader tagline="Fresh articles in minutes" />
        <SiteContent article="This is an article" />
        <SiteFooter />
      </div>
    );
  }
}

export default Article;
