import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import AddArticleForm from './AddArticleForm';
import '../css/miniblog.css';

class Articles extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader tagline="Fresh articles in minutes" />
        <main className="site__content">
          <AddArticleForm />
        </main>
        <SiteFooter />
      </div>
    );
  }
}

export default Articles;
