import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Appointment = () => {
  const { doctors } = useContext(AppContext);
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  // Fetch specific doctor information
  const fetchDocInfo = () => {
    const foundDoc = doctors.find((doc) => doc._id === docId);
    setDocInfo(foundDoc || null);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Handle loading or missing doctor
  if (!docInfo) {
    return <p>Loading doctor information or doctor not found.</p>;
  }

  return (
    <div>
      <h1>{docInfo.name}</h1>
      <img src={docInfo.image} alt={`${docInfo.name}'s profile`} />
      <p>{docInfo.speciality}</p>
      <p>ID: {docInfo._id}</p> {/* Display the specific _id */}
    </div>
  );
};

export default Appointment;
