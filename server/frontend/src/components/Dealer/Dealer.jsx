import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Dealer() {
  const { id } = useParams();
  const [dealer, setDealer] = useState(null);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`/api/dealerships/${id}/`).then(r => setDealer(r.data)).catch(()=>{});
    axios.get(`/api/reviews/?dealer_id=${id}`).then(r => setReviews(r.data)).catch(()=>{});
  }, [id]);
  return (
    <div style={{maxWidth:900, margin:'20px auto'}}>
      {dealer ? (
        <>
          <h2>{dealer.name}</h2>
          <p>{dealer.address} — {dealer.city}, {dealer.state}</p>
          <h3>Reviews</h3>
          {reviews.length ? reviews.map(rv => (
            <div key={rv.id} style={{border:'1px solid #eee',padding:10,marginBottom:8}}>
              <p><strong>{rv.user || 'Anonymous'}</strong> — {rv.sentiment}</p>
              <p>{rv.review_text}</p>
            </div>
          )) : <p>No reviews yet.</p>}
        </>
      ) : <p>Loading...</p>}
    </div>
  );
}
