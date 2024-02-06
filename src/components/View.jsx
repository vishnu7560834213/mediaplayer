import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Row, Col } from 'react-bootstrap';
import { getAllVideo } from '../services/allAPI';

function View(uploadVideoServerResponse) {
  const [allVideos, setAllVideos] = useState([]);
const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideos = async () => {
    try {
      const { data } = await getAllVideo();
      console.log(data); // Make sure the data is coming correctly from the API
      setAllVideos(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    getAllUploadedVideos()
setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse,deleteVideoStatus]);

  return (
    <>
      <Row>
        {allVideos.length > 0 ? (
          allVideos.map((video) => (
            <Col key={video.id} sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video}  setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          ))
        ) : (
          <p className='fw-bolder text-danger fs-5'>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
