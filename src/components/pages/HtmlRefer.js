import React from "react";
import axios from "axios";
import ReferCont from "../includes/ReferCont";

class HtmlRefer extends React.Component {
  state = {
    htmlRefer: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://parkjongho1.github.io/react2022/src/assets/json/reference.json"
    );

    this.setState({ htmlRefer });
  };

  componentDidMount() {
    this.getRefer();
  }

  render() {
    const { htmlRefer } = this.state;

    return (
      <>
        {htmlRefer.map((refer) => (
          <ReferCont
            key={refer.id}
            id={refer.id}
            title={refer.title}
            desc={refer.desc}
            use={refer.use}
            desc2={refer.desc2}
            element={refer.element}
            tag={refer.tag}
            version={refer.version}
            view={refer.view}
            image={refer.image}
            link={refer.link}
            Definition={refer.Definition}
            Accessibility={refer.Accessibility}
            mdn={refer.mdn}
            w3c={refer.w3c}
          />
        ))}
      </>
    );
  }
}

export default HtmlRefer;
