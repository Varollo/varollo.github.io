import Window from "../../components/Window/Window";
import ProfileImgUrl from "/profile.webp";
import ProfileItem from "../../components/ProfileItem/ProfileItem";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import { Link } from "react-router-dom";

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
          <ProfileItem title="Name" content="Gabriel Rimoldi Carollo" />
          <ProfileItem title="Email" content="rimoldi98@gmail.com" />
          <ProfileItem title="Phone" content="+55 (11) 97279-0409" />
          <ProfileItem title="Address" content="São Paulo, Brazil" />
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
          <p>
            Hi, I'm Gabriel! My journey in game development started early,
            evolving from a hobby into a career focused on crafting immersive
            digital experiences. A Digital Games graduate from FATEC, I have
            experience developing and publishing titles on the Google Play
            Store. I’m passionate about using Unity and Godot to build the same
            kind of impactful worlds that first inspired me as a kid.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default AboutPage;
