
import React, { useState } from 'react'
import Add from'../components/Add'
import { Link } from 'react-router-dom'
import View from'../components/View'
import  Category  from '../components/Category'

function Home() {
const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>
<div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
<div className="add-videos">
<Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
</div>
<Link to={'/watchhistory'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>watch history</Link>
</div>
<div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
  <div className="all-videos col-lg-9">
  <h3>All-videos</h3>
<View uploadVideoServerResponse={uploadVideoServerResponse}/>
  </div>
<div className="categoryn col-lg-3">
<Category/>
</div>
  </div>


    </>
  )
}

export default Home
