import React from 'react';
import SiteHeader from './SiteHeader';
import SiteContent from './SiteContent';
import SiteFooter from './SiteFooter';
import '../css/miniblog.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader tagline="Fresh articles in minutes" />
        <SiteContent article="Home page content here" />
        <SiteFooter />
      </div>
    );
  }
}

export default App;
