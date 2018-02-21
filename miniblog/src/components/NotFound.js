import React from 'react';
import SiteHeader from './SiteHeader';
import SiteContent from './SiteContent';
import SiteFooter from './SiteFooter';
import '../css/miniblog.css';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader tagline="Fresh articles in minutes" />
        <SiteContent article="Sorry - I couldn't find that" />
        <SiteFooter />
      </div>
    );
  }
}

export default NotFound;
