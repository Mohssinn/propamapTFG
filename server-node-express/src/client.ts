import axios from 'axios';


// Make a request for a user with a given ID
axios.get('http://localhost:3000/hello')
  .then(function (response) {
    // handle success
    console.log(response.data);
  });

axios.post('http://localhost:3000/add', {n1: 6, n2: 4})
    .then(function (response) {
        console.log(`result: ${response.data}`)
        })
        .catch(function (error) {
        console.log(error)
        })