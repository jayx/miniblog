import React from 'react';
import '../css/site-header.css';

const SiteHeader = (props) => {
  return (
    <header className="site__header">
      <h1 className="heading--1 header__title"><a href="/">miniblog :)</a></h1>
      <h2 className="heading--6 header__subtitle tagline">{props.tagline}</h2>
    </header>
  )
}

export default SiteHeader;
