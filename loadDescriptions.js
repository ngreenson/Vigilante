
  // Load Single Customer
  function loadDescriptions(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'descriptions.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
  
        const description = JSON.parse(this.responseText);
          console.log(description);
          for (count=1; count < 3; count++) {
              document.getElementById(`t +count).textContent = `${description[count-1].desc}`;
          }
        }
      };
      xhr.send();
    }
  
  

  