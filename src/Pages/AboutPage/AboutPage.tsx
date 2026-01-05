import Window from "../../components/Window/Window";
import ProfileImgUrl from "/profile.webp";
import ProfileItem from "../../components/ProfileItem/ProfileItem";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import { Link } from "react-router-dom";

import { aboutPageData } from "./aboutPageData";

import WebIcon from "/web-icon.svg";
import GithubLogo from "/github-mark-white.svg";
import LinkedinLogo from "/linkedin-svgrepo-com.svg";
import BlueSkyLogo from "/Bluesky_Logo.svg";

import "./AboutPage.css";

const AboutPage = () => {
  return (
    <Window title="ABOUT ME">
      <div className="profileTop">
        <ProfileImg imgUrl={ProfileImgUrl} />
        <ul className="profileBox profileInfo">
          {aboutPageData.info.map((info, i) => {
            const [[key, value]] = Object.entries(info);
            return <ProfileItem key={`${key}_${i}`} title={key} content={value} />;
          })}
        </ul>
      </div>

      <div className="profileBottom">
        <div className="profileBox profileSocials">
          <ul>
            <Link to="https://varollo.github.io">
              <ProfileItem
                title={<img src={WebIcon} alt="" />}
                content="varollo.github.io"
              />
            </Link>

            <Link to="https://github.com/varollo">
              <ProfileItem
                title={<img src={GithubLogo} alt="" />}
                content="github.com/varollo"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/gabriel-carollo-3699181a0/">
              <ProfileItem
                title={<img src={LinkedinLogo} alt="" />}
                content="in/gabriel-carollo"
              />
            </Link>

            <Link to="https://bsky.app/profile/varollo.bsky.social">
              <ProfileItem
                title={<img src={BlueSkyLogo} alt="" />}
                content="varollo.bsky.social"
              />
            </Link>
          </ul>
        </div>
        <div className="profileBox profileBio">
          <h1>Who am I?</h1>
          <p>{aboutPageData.bio}</p>
        </div>
      </div>
    </Window>
  );
};

export default AboutPage;
