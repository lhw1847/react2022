import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import HtmlRefer from "./HtmlRefer";
import CssRefer from "./CssRefer";
import { gsap } from "gsap";
// import { element } from "prop-types";

const obj = {
  0: <HtmlRefer />,
  1: <CssRefer />,
};

class Reference extends React.Component {
  state = {
    isLoading: true,
    isActive: false,
    activeId: 0,
  };

  clickHandler = (id) => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive, activeId: id });
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", {
        duration: 0.8,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".cont__title strong", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.0,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "power4.out",
      });
      gsap.to(".refer__inner", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.6,
        ease: "power3.out",
      });
    }, 10);
  };

  getRefers = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      this.getRefers();
    }, 2000);
  }

  render() {
    const { isLoading, refers } = this.state;
    console.log(refers);
    return (
      <>
        {isLoading ? (
          <Loading color="black" />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["Reference", "Book"]} />
              <section className="refer__cont">
                <div className="container">
                  <div className="refer__inner">
                    <ul className="tabs">
                      <li
                        className={this.state.isActive ? "active" : ""}
                        onClick={() => this.clickHandler(0)}
                      >
                        HTML
                      </li>
                      <li
                        className={this.state.isActive ? "" : "active"}
                        onClick={() => this.clickHandler(1)}
                      >
                        CSS
                      </li>
                    </ul>
                    <ul className="refer__list">{obj[this.state.activeId]}</ul>
                  </div>
                </div>
              </section>
              <Contact />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}
export default Reference;
