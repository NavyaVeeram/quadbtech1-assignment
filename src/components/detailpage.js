import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

function sanitizeHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function DetailsPage() {
  let { state } = useLocation();
  const [records] = useState([state.records]);
  return (
    <>
      <div className="container w-100">
        <div>
          {records && records?.map((list, index) => (
             <div className="container bg-light p-3 d-flex">
              <div className="image">
             {list.show.image && list.show.image.medium ? (
               <img src={list.show.image.medium} alt="Show" style={{ height:'200px',width:'100px',objectFit: 'cover' }} />
             ) : (
               <div style={{  backgroundColor: 'lightgray',height:'200px',width:'100px'}}></div>
             )}
             </div>
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