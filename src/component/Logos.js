import React from "react";
import Gap from "./Gap";
import "./logos.css";
import Modal from "./Modal";

const insta =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png";
const twiter =
  "https://i.pinimg.com/originals/26/cb/a4/26cba4a440f340e70e99ba87ca76d416.png";
const facebook =
  "data:image/png;base64,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";
const linkedin =
  "https://w7.pngwing.com/pngs/60/378/png-transparent-social-media-linkedin-computer-icons-logo-facebook-shelf-drum-blue-text-rectangle-thumbnail.png";

const Logos = ({ data }) => {
  const [tag, settag] = React.useState("");

 
  
  return (
    <div className="company-tags">
      <figure>
        <a
          href={data.instagram}
          onClick={(e) => settag(() => e.currentTarget.href)}
          target="_blank"
        >
          <div className="pic-container">
            <img src={insta} alt="instagram" />
          </div>
        </a>
        <a
          href={data.linkedin_}
          onClick={(e) => settag(() => e.currentTarget.href)}
          target="_blank"
        >
          <div className="pic-container">
            <img src={linkedin} alt="instagram" />
          </div>
        </a>
        <a
          href={data.twiter_}
          onClick={(e) => settag(() => e.currentTarget.href)}
          target="_blank"
        >
          <div className="pic-container">
            <img src={twiter} alt="instagram" />
          </div>
        </a>
        <a
          href={data.facebook_}
          onClick={(e) => settag(() => e.currentTarget.href)}
          target="_blank"
        >
          <div className="pic-container">
            <img src={facebook} alt="instagram" />
          </div>
        </a>
      </figure>
    </div>
  );
};

export default Logos;
