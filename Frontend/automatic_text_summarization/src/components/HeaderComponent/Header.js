import React, { Component } from "react";
import "antd/dist/antd.min.css";
import "./headerStyle.css";
import MainBody from "../BodyComponent/BodyComponent";
import image from "../../Assets/summarizeIcon.jpg";
import { Space } from "antd";

class Header extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Header">
          <Space
            direction="horizontal"
            style={{ marginLeft: 375, justifyContent: "center" }}
          >
            <img
              src={image}
              style={{ marginRight: 15 }}
              height="140"
              width="140"
              alt="summarizationIcon"
            />
            <div>
              <p
                style={{
                  margin: "0px",
                  paddingTop: "65px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  fontSize: "45px",
                  textAlign: "center",
                }}
              >
                Lecture Video Content Summarizer{" "}
              </p>
              <p
                style={{
                  paddingTop: "10px",
                  paddingBottom: "80px",
                  margin: "0px",
                  letterSpacing: "1px",
                  fontSize: "23px",
                  textAlign: "center",
                }}
              >
                {" "}
                Copy & Paste your youtube url link below to generate summary
              </p>
            </div>
          </Space>
          <MainBody />
        </div>
      </div>
    );
  }
}

export default Header;
