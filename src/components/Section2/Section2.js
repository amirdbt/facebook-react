import React, { useState } from "react";
import CardList from "./CardList";
import MOCK_DATA from "../MOCK_DATA (1).json";

const Section2 = () => {
  const [users, setUsers] = useState([MOCK_DATA]);
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h6 className="text-muted">Create Post</h6>
        </div>
        <div className="card-body">
          <div style={{ display: "flex" }}>
            <img
              className="mr-3"
              src={"/images/tony.jpg"}
              width="50px"
              height="50px"
              style={{ borderRadius: "50px" }}
            />
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                cols="50"
              >
                What's on your mind, Tony?
              </textarea>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="btn btn-light">
              <svg
                className="bi bi-image-fill mr-2"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Photo/Video
            </button>
            <button className="btn btn-light">
              <svg
                className="bi bi-person-check-fill mr-2"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm9.854-2.854a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Tag Friends
            </button>
            <button className="btn btn-light">
              <svg
                className="bi bi-eye-fill mr-2"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                  clip-rule="evenodd"
                />
              </svg>
              Feeling/Activity
            </button>

            <button className="btn btn-light">
              <svg
                className="bi bi-three-dots"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <CardList users={users[0]} />
    </div>
  );
};

export default Section2;
