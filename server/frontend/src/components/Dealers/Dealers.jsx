import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dealers() {
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    axios.get('/api/dealerships/').then(r => setDealers(r.data)).catch(()=>{});
  }, []);
  return (
    <div style={{maxWidth:1000, margin:'20px auto'}}>
      <h2>Dealerships</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
        {dealers.map(d => (
          <div key={d.id} style={{border:'1px solid #ddd',padding:12,borderRadius:6}}>
            <h3>{d.name}</h3>
            <p>{d.city}, {d.state}</p>
            <Link to={`/dealer/${d.id}`}>View details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
