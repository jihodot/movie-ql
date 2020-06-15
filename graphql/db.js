let movies = [
    {
      id: 0,
      name: "Nicolas",
      score:3
    },
    {
      id: 1,
      name: "Jisu",
      score:3
    },
    {
      id: 2,
      name: "Star Wars",
      score:4
    },
    {
      id: 3,
      name: "Daal",
      score:8
    },
    {
      id: 4,
      name: "JD",
      score:6
    },
    {
      id: 5,
      name: "Logan",
      score:4
    },
    {
      id: 6,
      name: "The GodFather",
      score:3
    }
  ];
  
  export const getMovies = ()=>movies;

  export const getById = id => {
    const filteredPeople = movies.filter(movie => movie.id === id);
    return filteredPeople[0];
  };

  export const deleteMovie = id =>{
      const cleanedMovies = movies.filter(movie=>movie.id !== id);
      if(movies.length > cleanedMovies.length){
          movies = cleanedMovies;
          return true;
      }
      else{return false;}

  };

  export const addMovie = (name, score)=>{
      const newMovie = {
          id: `${movies.length+1}`,
          name, score
      };
      movies.push(newMovie);
      return newMovie;
  }