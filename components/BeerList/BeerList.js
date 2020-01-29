import React from 'react';
import Link from 'next/link';

const BeerList = ({ beers }) => (
  <div>
    {beers.map((beer) => (
      <div key={beer.id} style={{ marginBottom: '50px' }}>
        <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '150px' }}/>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <Link href={`/detail/${beer.id}`}><a>View more</a></Link>
      </div>
    ))}
  </div>
);

export default BeerList;
