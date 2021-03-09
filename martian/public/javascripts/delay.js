const delay = (data, ms) => new Promise((resolve) => setTimeout(()=> resolve(data), ms));

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then((json)=> delay(json,1000))
  .then( json => { 
    console.log(json)
    return json;
  })
  .then( (json)=> delay(json,2000))
  .then( (result) => console.log(result.title))