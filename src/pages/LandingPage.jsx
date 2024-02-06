import React from 'react'
import { Row,Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function LandingPage() {

const navigateByUrl= useNavigate()

  return (
    <>

<Row className='mt-5 align-items-center justify-content-between w-100'>
<Col></Col>
<Col lg={5}>
<h1 style={{textAlign:'justify'}}>Welcome To<span className='text-warning'>Media player</span></h1>
<p>Lorem ipsum dolor sit amet. Ut odit eius id quisquam rerum et molestiae consectetur ea dolorem nostrum. Aut illum necessitatibus ut perferendis quisquam qui eligendi recusandae rem quam consectetur et totam accusamus et unde blanditiis.</p>
<button onClick={()=>navigateByUrl('/home')} className='btn-info'>Get started</button>
</Col>

<Col lg={5}>
<img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
</Col>
<Col>
</Col>
</Row>


<div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
  <h3>Features</h3>
  <div className='cards mb-5 mt-5 d-flex flex-wrap align-items-center justify-content-between w-100'>

      <Card className='p-3 bg-info mb-3' style={{ width: '22rem' }}>
        <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/f2/0f/0e/f20f0e1d1c073825b501e353bb474a29.gif" />
        <Card.Body>
          <Card.Title>Managing videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-3 bg-info mb-3' style={{ width: '22rem' }}>
        <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/1443878/screenshots/3853432/media/a3e287f1f0694b6053510b205817d35e.gif" />
        <Card.Body>
          <Card.Title>Managing videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-3 bg-info mb-3' style={{ width: '22rem' }}>
        <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/1443878/screenshots/3845446/ezgif-2-6c3f4bf430.gif" />
        <Card.Body>
          <Card.Title>Managing videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  </div>
<div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex flex-wrap align-items-center justify-content-between w-100">
<div className="col-lg-5">
<h3 className='mb-3 text-warning'>Simple powerful & fast</h3>
<h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play everything </span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</h6>

<h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play everything </span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</h6>

<h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play everything </span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</h6>


</div>
<div className="video col-lg-5">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/xenOE1Tma0A" title="Jailer | Official Trailer | Amazon Prime" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>



    </>
  )
}

export default LandingPage
