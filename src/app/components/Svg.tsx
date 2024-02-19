import React, { useState } from "react";

const Svg = ({ svg }: { svg: string }) => {
  const [geb] = useState("ged");
  const [hiset] = useState("hiset");
  const [sophia] = useState("sophia");
  const [line] = useState("line");
  const [study] = useState("study");
  return (
    <div>
      {geb === svg && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              fill="#e4feec"
              className="fill-bg-light"
              cx="20"
              cy="20"
              r="20"
            ></circle>
            <path
              fill="#86efac"
              className="fill-main"
              d="M28.686 14.008l-9 9.085-3.6-3.6-1.2 1.2 4.8 4.8L29.97 15.208z"
            ></path>
            <path
              d="M25.086 16.208l-1.2-1.2-5.4 5.4 1.2 1.2 5.4-5.4zM11 20.693l4.8 4.8 1.2-1.2-4.8-4.8-1.2 1.2z"
              fill="#076b00"
              className="fill-secondary"
              fillRule="nonzero"
            ></path>
          </g>
        </svg>
      )}
      {hiset === svg && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              fill="#e4feec"
              className="fill-bg-light"
              cx="20"
              cy="20"
              r="20"
            ></circle>
            <g transform="translate(13 15)">
              <rect
                fill="#86efac"
                className="fill-main"
                y="1"
                width="8.556"
                height="8.556"
                rx="4.278"
              ></rect>
              <rect
                className="fill-bg-light"
                fill="#e4feec"
                x="5.04"
                width="10.56"
                height="10.56"
                rx="5.28"
              ></rect>
              <rect
                className="fill-secondary"
                fill="#076b00"
                x="6.4"
                y="1"
                width="8.556"
                height="8.556"
                rx="4.278"
              ></rect>
            </g>
          </g>
        </svg>
      )}

      {study === svg && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              fill="#e4feec"
              className="fill-bg-light"
              cx="20"
              cy="20"
              r="20"
            ></circle>
            <g fillRule="nonzero">
              <path
                d="M19.607 19.275h.025a3.14 3.14 0 0 0 3.137-3.138A3.14 3.14 0 0 0 19.632 13 6.64 6.64 0 0 0 13 19.632a6.639 6.639 0 0 0 3.643 5.919 3.832 3.832 0 0 1-.862-2.425 3.855 3.855 0 0 1 3.826-3.85z"
                fill="#86efac"
                className="fill-main"
              ></path>
              <path
                d="M23.357 14.45c.539.662.862 1.506.862 2.424a3.855 3.855 0 0 1-3.85 3.851 3.14 3.14 0 0 0-3.138 3.138A3.14 3.14 0 0 0 20.368 27h.003A6.64 6.64 0 0 0 27 20.368a6.639 6.639 0 0 0-3.643-5.918z"
                fill="#076b00"
                className="fill-secondary"
              ></path>
            </g>
          </g>
        </svg>
      )}

      {sophia === svg && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              className="fill-bg-light"
              fill="#e4feec"
              cx="20"
              cy="20"
              r="20"
            ></circle>
            <path
              className="fill-secondary"
              fill="#076b00"
              d="M16 16h2v10h-2zM19 18h2v8h-2z"
            ></path>
            <path
              className="fill-main"
              fill="#86efac"
              d="M22 15h2v11h-2z"
            ></path>
          </g>
        </svg>
      )}

      {line === svg && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              fill="#e4feec"
              className="fill-bg-light"
              cx="20"
              cy="20"
              r="20"
            ></circle>
            <path
              fill="#076b00"
              className="fill-main"
              d="M13 15l6 1.92v9.6l-6-1.92z"
            ></path>
            <path
              fill="#86efac"
              className="fill-secondary"
              d="M26 15l-6 1.92v9.6l6-1.92z"
            ></path>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Svg;
