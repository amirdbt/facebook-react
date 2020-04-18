import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <svg
            className="bi bi-gift-fill mr-2"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 1a1.5 1.5 0 00-1.5 1.5c0 .098.033.16.12.227.103.081.272.15.49.2A3.44 3.44 0 009.96 3h.015L10 2.999l.025.002h.014A2.569 2.569 0 0010.293 3c.17-.006.387-.026.598-.073.217-.048.386-.118.49-.199.086-.066.119-.13.119-.227A1.5 1.5 0 0010 1zm0 3h-.006a3.535 3.535 0 01-.326 0 4.435 4.435 0 01-.777-.097c-.283-.063-.614-.175-.885-.385A1.255 1.255 0 017.5 2.5a2.5 2.5 0 015 0c0 .454-.217.793-.506 1.017-.27.21-.602.322-.885.385a4.434 4.434 0 01-1.104.099H10z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M6 1a1.5 1.5 0 00-1.5 1.5c0 .098.033.16.12.227.103.081.272.15.49.2A3.44 3.44 0 005.96 3h.015L6 2.999l.025.002h.014l.053.001a3.869 3.869 0 00.799-.076c.217-.048.386-.118.49-.199.086-.066.119-.13.119-.227A1.5 1.5 0 006 1zm0 3h-.006a3.535 3.535 0 01-.326 0 4.435 4.435 0 01-.777-.097c-.283-.063-.614-.175-.885-.385A1.255 1.255 0 013.5 2.5a2.5 2.5 0 015 0c0 .454-.217.793-.506 1.017-.27.21-.602.322-.885.385a4.435 4.435 0 01-1.103.099H6zm9 10.5V7H8.5v9h5a1.5 1.5 0 001.5-1.5zM7.5 16h-5A1.5 1.5 0 011 14.5V7h6.5v9z"
              clip-rule="evenodd"
            />
            <path d="M0 4a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H1a1 1 0 01-1-1V4z" />
          </svg>
          John Doe <span className="text-muted">and</span> 2 Others
        </div>
      </div>

      <div class="card mt-3" style={{ height: "18rem" }}>
        <div className="card-header">
          <button className="btn btn-light btn-sm">Create ad</button>
        </div>
        <div class="card-body">
          <img
            src="https://scontent.fabv4-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/51938837_6115522012070_6735314700805865472_n.png.jpg?_nc_cat=1&_nc_sid=67cdda&_nc_ohc=qLmhXkhDad8AX8QHBBA&_nc_ht=scontent.fabv4-1.fna&oh=4309d5a079ec5b3939b166eb7acae26f&oe=5EBF01C2"
            width="120px"
          />
          <p className="text-primary text-sm">The Web Developer Bootcamp | Udemy</p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="text-muted">English (US).</p>
            <p className="text-primary">Hausa</p>
            <p className="text-primary">Igbo</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="text-primary">Yoruba</p>
            <p className="text-primary">Fulani</p>
            <p className="text-primary">Arabic</p>
            <p className="text-primary">French</p>
          </div>
          <svg
            className="bi bi-plus-square"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <p className="text-muted">
        Privacy . Terms . Advertising . Ad Choices . Cookies . More{" "}
        <svg
          className="bi bi-chevron-compact-down mt-2"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
            clip-rule="evenodd"
          />
        </svg>
      </p>
      <p>Facebook &copy; 2020</p>
    </div>
  );
};

export default Section3;
