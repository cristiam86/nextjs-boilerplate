import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import BeerDetail from '../../components/BeerDetail';

const Detail = ({ beer }) => {
  return (
    <div>
      <Link href="/"><a>Back to home</a></Link>
      <BeerDetail beer={beer} />
    </div>
  );
}

Detail.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
  const beer = await res.json();
  return { beer: beer[0] };
}

export default Detail;
