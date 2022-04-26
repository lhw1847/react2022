import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import ContTitle from "../layout/Title";
import MovieCont from "../includes/MovieCont";
import ContContact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";


class Movie extends React.Component {
    state = {
        isLoading: true,
        lists: [],
        searchs: [],
    }
    getMovies = async () => {
        const lists = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=disney&language=ko`);
        this.setState({lists ,isLoading: false});
        this.mainAnimation();
    }
    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.0
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.3
            });
            // gsap.to(".youtube__inner", {
            //     duration: 0.5,
            //     y: 0,
            //     opacity: 1,
            //     delay: 1.5
            // });
        },10)
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getMovies();
        }, 2000)
    }
    render(){
        const {isLoading, lists} = this.state;
        // console.log(lists);
        return (
            <>
           {isLoading ? (
               <Loading color={"light"} />
               ) : (
                    <>
                        <Header color={"light"} />
                        <Contents>
                            <ContTitle title={["youtebe", "reference", "light"]} />
                            <MovieCont lists={lists} />
                            <ContContact />
                        </Contents>
                        <Footer color={"light"} />
                    </>
               )}
            </>
        )
    }
}
export default Movie;