import React from "react";
import { useLocation } from "react-router-dom";
import { Space } from "antd";
import ReactPlayer from "react-player";
import "./resultStyle.css";
import { Layout } from "antd";

const { Content } = Layout;

function Result() {
  const { state } = useLocation();

  return (
    <div className="resultBody">
      <Space
        direction="horizontal"
        style={{
          margin: 50,
          backgroundColor: "#4262d8",
          height: 740,
          width: 1600,
          borderRadius: 15,
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
              textAlign: "center",
              letterSpacing: "0.5px",
              marginLeft: 50,
            }}
          >
            Uploaded Video
          </p>
          {/* Educational Youtube Video */}
          <ReactPlayer
            url={state.youtubeVideoURL}
            config={{
              youtube: { playerVars: { origin: "https://www.youtube.com" } },
            }}
            controls={true}
            height="65vh"
            className="react-player"
            style={{ marginLeft: 50, borderRadius: "5px!important" }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
              textAlign: "center",
              letterSpacing: "0.5px",
              marginLeft: 50,
              marginTop: 30,
            }}
          >
            Generated Summary
          </p>
          <div
            style={{
              backgroundColor: "#f0f2f5",
              height: "65vh",
              width: "97%",
              boxShadow: "0.5px 0.5px 0.5px #888888",
              margin: 30,
              borderRadius: 10,
            }}
          >
            <Content
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingTop: 20,
                paddingLeft: 30,
                letterSpacing: "0.5px",
              }}
            >
              <p className="word">{state.generatedSummary}</p>
            </Content>
          </div>
        </div>
      </Space>
    </div>
  );
}

export default Result;
