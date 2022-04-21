import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
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
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.5
            });
        },10)
    }
    getPorts = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://lhw1847.github.io/web_class_react/portfolio/react2022/src/assets/json/reference.json");
        // console.log(refer);
        this.setState({refers: refer, isLoading: false})

        this.mainAnimation();
    }
    componentDidMount() {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getPorts();
        }, 2000)
    }
    render(){
        const {isLoading, refers} = this.state;
        console.log(refers)
        return (
            <>
           {isLoading ? (
               <Loading color="light" />
               ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["reference","book", "light"]}/>
                            <ReferCont color="light" refers={refers}/>
                            <Contact />
                        </Contents>
                        <Footer color="light" />
                    </>
               )}
            </>
        )
    }
}
export default Reference;