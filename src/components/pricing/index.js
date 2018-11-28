import React, { Component } from "react";
import YellowButton from "../ui/YellowButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Yr brunch whatever helvetica. Farm-to-table raw denim air plant sartorial fashion axe typewriter, banjo hashtag four loko iceland twee mumblecore polaroid.",
      "Tofu pork belly intelligentsia XOXO cold-pressed venmo banjo 3 wolf moon shoreditch jean shorts crucifix selfies yr. Fam DIY microdosing unicorn. ",
      "Four loko gluten-free whatever, scenester farm-to-table occupy mumblecore 3 wolf moon trust fund tattooed retro next level ramps."
    ],
    linkto: [
      "https://jasontbrown.com",
      "https://jasontbrown.com",
      "https://jasontbrown.com"
    ],
    delay: [500, 0, 500]
  };
  // Using parans instead of brackets allows you to skip the return statment and just return jsx
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <YellowButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="white"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
export default Pricing;
