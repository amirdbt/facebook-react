import React from 'react'

const Card = ({firstname,lastname,id}) => {
    return (
        <div>
             <div className="card mt-2">
        <div className="card-header">
          <div style={{ display: "flex" }}>
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              width="50px"
              height="50px"
              style={{ borderRadius: "50px" }}
              className="mr-2"
            />
            <div>
    <h6 className="text-primary mt-2">{firstname} {lastname}</h6>
              <p>
                April 17 at 10:00 PM{" "}
                <svg
                  className="bi bi-people-fill ml-2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <img
          src={`https://i.picsum.photos/id/${id}/1772/1772.jpg`}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <svg
                className="bi bi-heart-fill mr-2 mt-1"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>20</p>
            </div>
            <p className="text-muted">Comment</p>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "80px",
              marginRight: "80px",
            }}
          >
            <div style={{ display: "flex" }}>
              <svg
                className="bi bi-heart mr-2 mt-1"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Like</p>
            </div>

            <div style={{ display: "flex" }}>
              <svg
                className="bi bi-chat-square mr-2 mt-1"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Comment</p>
            </div>
          </div>
          <hr />
          <div style={{display:"flex"}}>
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              width="40px"
              height="40px"
              style={{ borderRadius: "50px" }}
            />
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control ml-2"
                placeholder="Write a comment"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{borderRadius:"20px"}}
              />
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Card
