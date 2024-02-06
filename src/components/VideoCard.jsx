import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);

  //make api call to http://localhost:4000/history

  const {caption,embedLink}=displayData
  let today = new Date()
  //console.log(today)
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  let videoDetails={
    caption,embedLink,timeStamp
  }
  await addToHistory(videoDetails)
}
  //delete a video

  const removeVideo = async (id)=>{
    //make api call
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
  const dragStarted = (e,id)=>{
    console.log("drag started...Card ID:"+id)
    e.dataTransfer.setData('videoID',id)
  }

  return (
    <>
    <Card className='mt-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} height="180px" variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
         {insideCategory?"": <button  onClick={()=>removeVideo(displayData?.id)}  className='btn'><i class="fa-solid fa-trash"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={'100%'} height="383" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
