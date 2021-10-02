// Add your code here

function submitData(name, email){
    const userData = {
        name: `${name}`,
        email: `${email}`
      };
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
          let body = document.querySelector('body')
          let h1 = document.createElement('h1')
        h1.innerHTML = `${object.id}`;
        body.appendChild(h1);
      })
      
      .catch(function(error){
        
          let h1 = document.createElement('h1')
          document.body.innerHTML = error.message;
          console.log(error.message, 'error message')
          document.body.append(h1);
          console.log(document.body.innerHTML, 'DOC BODY')
        // let body = document.querySelector('body');
        // let p = document.createElement('p');
        // p.innerText = error.message;
        // body.innerHTML = 'Unauthorized Access';
        
    })


}
