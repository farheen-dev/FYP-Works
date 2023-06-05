import React, { Component } from "react";
import "antd/dist/antd.min.css";
import "./bodyStyle.css";
import { Card, Input, Space, Spin } from "antd";
import { Navigate } from "react-router-dom";
import axios from "axios";

const { Search } = Input;

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      generatedSummary: null,
      videoURL: null,
      isSpinning: false,
      errorStatus: null,
      errorNotice: "",
    };
  }

  // POST api which send the video url and provide generated abstract summary from the data science model
  fetchData(value) {
    if (value) {
      let valueURL = this.matchYoutubeUrl(value);
      if (valueURL) {
        axios
          .get("https://cors.deno.dev/https://great-fox-26.deno.dev/")
          .then((res) => {
            this.setState({
              isSpinning: true,
            });
            axios
              .post(res.data.serverUrl + "/summarizer/", { video_url: value })
              .then((response) => {
                if (response.data.summary) {
                  this.setState({
                    videoURL: value,
                    generatedSummary: response.data.summary,
                    navigate: true,
                    isSpinning: false,
                  });
                } else {
                  this.setState({
                    errorStatus: "error",
                    errorNotice: response.data.error,
                    isSpinning: false,
                  });
                }
              });
          });
      } else {
        this.setState({
          errorStatus: "error",
          errorNotice: "Invalide youtube link entered",
        });
      }
    } else {
      this.setState({
        errorStatus: "error",
        errorNotice: "Please enter a youtube link",
      });
    }
  }

  matchYoutubeUrl(url) {
    let p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {this.state.navigate && (
          <Navigate
            to={"/results"}
            replace={true}
            state={{
              youtubeVideoURL: this.state.videoURL,
              generatedSummary: this.state.generatedSummary,
            }}
          />
        )}
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Spin
            size="large"
            spinning={this.state.isSpinning}
            tip="Proceeding.."
            style={{ fontSize: 16, fontWeight: "bold", background: "white" }}
          >
            <Card
              style={{
                padding: 35,
                minHeight: 250,
                background: "white",
                border: 50,
                borderRadius: 5,
                width: 1000,
                boxShadow: "2.5px 2.5px 2.5px #888888",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  margin: "0",
                  paddingBottom: 15,
                }}
              >
                {" "}
                Youtube Video Link{" "}
              </p>
              <Search
                placeholder="Enter the Video Link"
                allowClear
                enterButton="Proceed"
                size="large"
                status={this.state.errorStatus}
                onSearch={(event) => this.fetchData(event)}
              />
              <p style={{ color: "red", paddingTop: 5, fontSize: 16 }}>
                {this.state.errorNotice}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "#4c4c53",
                  margin: "0",
                  paddingTop: 15,
                }}
              >
                {" "}
                Add a Link (e.g:- https://www.youtube.com/watch?v=v-hHQktQZw0){" "}
              </p>
            </Card>
          </Spin>
        </Space>
      </div>
    );
  }
}

export default MainBody;
