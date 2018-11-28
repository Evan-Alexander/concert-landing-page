import React, { Component } from "react";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import YellowButton from "../ui/YellowButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    const { discountStart } = this.state;

    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before Jan. 31st</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                possimus ea, totam doloremque nostrum animi veniam suscipit
                voluptates dignissimos illo.
              </p>
              <YellowButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link="https://jasontbrown.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Discount;
