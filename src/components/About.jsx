import React from 'react'
import { Link } from 'react-router-dom';
 
export default function About() {
 return (
   <div>
     <div className="container mt-5">
       <div className="card">
         <img src='https://mis.cmu.ac.th/cmumis/images/000000000000/images/20200319/8ccb26d0-8c19-45f8-88e4-5f52fd8f40c4.jpg' className='card-img-top' alt="..." width='250' height='250' />
         <div className="card-body">
           <h5 className="card-title">Developer information</h5>
           <p>Samita Kedkaew (610610620)</p>
           <p>This app use Google Firebase as backend.</p>
           <Link to="/">
             <h3>
               <button type="button" className="btn btn-primary">Home</button>
             </h3>
           </Link>
         </div>
 
       </div>
      
     </div>
    
   </div>
 )
}
