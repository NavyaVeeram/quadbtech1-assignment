
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './fetchApi.css';

function FetchAPI() {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRecords(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {records.map((list, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ height: '100%' }}>
              {list.show.image && list.show.image.medium ? (
                <img className="card-img-top" src={list.show.image.medium} alt="Show" style={{ height:'365px',objectFit: 'cover' }} />
              ) : (
                <div style={{  backgroundColor: 'lightgray',height:'365px' }}></div>
              )}
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'fantasy' }}>{list.show.name}</h5>
                <p className="card-text" style={{ fontFamily: 'poppins' }}>{list.show.language}</p>
                <p className="card-text" style={{ fontFamily: 'poppins' }}>{list.show.genres}</p>
                <p className="card-text" style={{ fontFamily: 'poppins' }}>{list.show.status}</p>
                <p className="card-text" style={{ fontFamily: 'poppins' }}>{list.show.rating?.average}</p>
                <Link to={`/detailspage`} 
                className="btn btn-primary"
                state={{ records: list }}
                >
              view more
            </Link>

  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchAPI;
