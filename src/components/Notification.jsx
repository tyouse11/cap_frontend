import React, { useState, useEffect } from 'react';

export default function Notification({ message }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => setShow(false), 9000);
    }
  }, [message]);

  return (
    <div className={`notification ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
}