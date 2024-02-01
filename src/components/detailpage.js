import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function sanitizeHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function DetailsPage() {
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
    <>
      <div className="container w-100">
        <div>
          {records.map((list, index) => (
            <div key={index} className="d-flex my-4">
              {list.show.image && list.show.image.medium && (
                <div className="image mr-4">
                  <img src={list.show.image.medium} alt="images" width={'100px'} height={'150px'}/>
                </div>
              )}
              <div className="content p-5">
                <p style={{ fontFamily: 'poppins' }}>
                  {sanitizeHTML(list.show.summary)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default DetailsPage