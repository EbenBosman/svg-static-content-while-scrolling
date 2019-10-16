import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import SomeText from "./components/SomeText";

const rootElement = document.getElementById("root");

const canvasHeight = 4000;
const canvasWidth = 4000;

const viewBox = [1, -1 * canvasHeight, canvasWidth, canvasHeight];

window.addEventListener("scroll", function(evt) {
  document
    .getElementById("sticky-rect")
    .setAttribute("y", screenYtoSVGUnits(window.scrollY) + 10);
});

// Converts a screen Y position to SVG units which have a viewBox transform
const screenYtoSVGUnits = val => {
  const svg = document.getElementById("graph-svg");
  let pt = svg.createSVGPoint();
  pt.x = 0;
  pt.y = val;
  pt = pt.matrixTransform(svg.getCTM().inverse());
  return pt.y;
};

const generateSomeText = () => {
  let someText = [];
  for (var n = 0; n < 100; n++) {
    someText = [
      ...someText,
      <SomeText
        key={`st${n}`}
        x={500}
        y={100 + n * 100}
        canvasHeight={canvasHeight}
      >Some Text {n}</SomeText>
    ];
  }
  return someText;
};

const jsx = (
  <div className="page-container">
    <div className="graph-container-wrapper">
      <div className="graph-container">
        <div
          style={{
            height: "100%",
            position: "relative",
            backgroundColor: "#ddd"
          }}
        >
          <div
            className="canvas-scrollbar"
            style={{
              height: "100%",
              overflow: "auto",
              backgroundColor: "#ddd"
            }}
          >
            <div
              className="canvas-scrollbar"
              style={{
                height: "100%",
                overflow: "auto"
              }}
            >
              <svg
                id="graph-svg"
                width={canvasWidth}
                height={canvasHeight}
                preserveAspectRatio="xMinYMin meet"
                viewBox={viewBox}
                style={{ backgroundColor: "white" }}
              >
                {generateSomeText()}
                <rect
                  id="sticky-rect"
                  x={0}
                  y={-canvasHeight + 10}
                  width="100%"
                  height={30}
                  stroke="back"
                  fill="red"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(jsx, rootElement);
