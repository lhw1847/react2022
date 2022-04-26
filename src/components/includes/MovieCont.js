import React from 'react';
import MovieList from "../includes/MovieList";

function MovieCont(props) {
    console.log(props)
  return (
    <section className="movie__cont">
        <div className="container">
            <div className="movie__inner">
                {/* <movieSearch /> */}
                <MovieList lists={props.lists}/>
            </div>
        </div>
    </section>
  )
}

export default MovieCont;