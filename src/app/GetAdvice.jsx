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
    <div>
      <h1>The More You Know</h1>
      {advice ? (
        <div class="flex">
            <div>{id}</div>
          <h2>{advice}</h2>
        </div>
      ) : (
        <p>Loading advice...</p>
      )}
    </div>
  );
}
export default GetAdvice;