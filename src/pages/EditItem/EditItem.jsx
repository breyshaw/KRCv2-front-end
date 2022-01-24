import { useLocation } from "react-router-dom";
import React, { useState } from 'react';

const EditItem = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    title: location.state.title,
    imageUrl: location.state.imageUrl,
    type: location.state.type,
    price: location.state.price,
    info: location.state.info,
  })
  return ( 
    <>
    <h1>Edit Item</h1>
    </>
  );
}

export default EditItem;