import React from 'react';
import fetch from 'isomorphic-unfetch';

import BeerList from '../components/BeerList';

const Index = ({ beers }) => {
  return (
    <div>
      <h1>BeerList</h1>
      <BeerList beers={beers} />
    </div>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json();
  return { beers };
}
 
export default Index;