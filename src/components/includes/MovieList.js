import React from 'react'

function MovietubeItem(props){
    console.log(props.video)

    const rendering = () => {
      const result = [];
      for (let i = 0; i < props.video.length; i++) {
        result.push(
        <li key={props.video.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.video[i].poster_path}`} alt={props.video[i].title} />
            <p className="title">{props.video[i].title}</p>
        </li>
        
        );
      }
      return result;
    };
  
    return rendering();
}

function MovieList(props) {
    console.log(props.lists.data.results[0].poster_path)
  return (
            <div className="movie__list">
        <ul>
            <MovietubeItem video={props.lists.data.results} />
        </ul>
    </div>
  )
}

export default MovieList;