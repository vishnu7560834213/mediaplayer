import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category()  {
  const [categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory=async ()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success("category added")
        //hide modal
        handleClose()
        //reset state
        setCategoryName('')
      }else{
        toast.error("something went wrong")
      }
    }else{
      toast.warning("Provide category name")
    }
  }
  const getCategories = async()=>{
    const{data}=await getAllCategory()
    setAllCategories(data);
  }
  console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{
    await deleteCategory(id)
    getCategories()
  }
  const dragOver =(e)=>{
    console.log("video drag over category");
    e.preventDefault()
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video card ID:",videoId)
  }

  const videoDrop = async(e,categoryId)=>{
    console.log("video drop inside category Id:"+categoryId)
    const videoId = e.dataTransfer.getData("videoId")
    //get video details
    const {data}=await getAVideo(videoId)
    console.log(data);
    //get category  details
    const selectedCategory = allCategories?.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    //make api call to update category
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }
  return (
    <>
    <div className="d-grid ms-3">
      <button className='btn btn-info' onClick={handleShow}>Add to category </button>
    </div>
   {
    allCategories?allCategories?.map(item=>(
    <div className='mt-5 mb-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)} >

      <div className='d-flex justify-content-between align-items-center'>
       <h6>{item?.categoryName}</h6>
       <button className='btn' onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash"></i></button>
      </div>
       <Row>
        {
          item?.allVideos && item?.allVideos.map(
            card=>(
              <Col sm={12}>
                <VideoCard displayData={card} insideCategory={true}/>
              </Col>
            )
          )
        }
       </Row>
    </div>
    )):<p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>Enter video Name</Form.Label>
          <Form.Control type="text" placeholder="Enter video Name" onChange={(e)=>setCategoryName(e.target.value)} />
          </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  )
}

export default Category
