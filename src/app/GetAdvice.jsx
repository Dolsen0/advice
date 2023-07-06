import React, { useState, useEffect } from 'react';

function GetAdvice() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => {
        setAdvice(json.slip.advice);
        setId(json.slip.id);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div class="container">
      {advice ? (
        <div>
            <div class="advice-id">Advice #{id}</div>
          <h2 class="advice">{advice}</h2>
        </div>
      ) : (
        <p>Loading advice...</p>
      )}
    </div>
  );
}
export default GetAdvice;