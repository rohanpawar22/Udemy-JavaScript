
const movie = { 
    title: 'Singham',
    releaseYear: 2018,
    rating: 4.8,
    director: 'Rohit Shetty'
  };
  
  showProperties(movie);
  
  function showProperties(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
  }