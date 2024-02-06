import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState([]);

  const handleHistory = async () => {
    try {
      const { data } = await getAllHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect(() => {
    handleHistory();
  }, []);

  const handleDeleteHistory = async (id) => {
    try {
      await deleteHistory(id);
      handleHistory();
    } catch (error) {
      console.error('Error deleting history:', error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch history</h3>
        <Link to="/home" style={{ textDecoration: 'none', fontSize: '20px', color: 'info' }}>
          <i className="fa-solid fa-circle-arrow-left"></i> Back to home
        </Link>
      </div>

      <table className="table mt-5 mb-5 container border">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>
                  <a href={item.embedLink} target="_blank" rel="noopener noreferrer">
                    {item.embedLink}
                  </a>
                </td>
                <td>{item.timestamp}</td>
                <td>
                  <button className="btn" onClick={() => handleDeleteHistory(item.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <p className="fw-bolder text-danger fs-5">Nothing to display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
