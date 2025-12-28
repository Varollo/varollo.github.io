import { differenceInYears } from "date-fns";
import Window from "../../components/Window/Window";
import ProfileImgUrl from "/profile.webp";
import ProfileItem from "../../components/ProfileItem/ProfileItem";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import "./AboutPage.css";

const AboutPage = () => {
  function getAge() {
    const today = new Date();
    const birthday = new Date(1998, 12, 15);
    return differenceInYears(today, birthday);
  }

  return (
    <Window>
      <div className="profile">
        <ProfileImg imgUrl={ProfileImgUrl} />
        <ul>
          <ProfileItem title="NAME" content="Gabriel Rimoldi Carollo" />
          <ProfileItem title="AGE" content={`${getAge()} years old`} />
          <ProfileItem title="OCCUPATION" content="Game Dev | Web Dev" />
          <ProfileItem title="LOCATION" content="São Paulo, Brazil" />
        </ul>
      </div>
      <div className="bio">
        <p>
          Hi! I'm Gabriel Rimoldi Carollo. Driven by a lifelong passion for
          technology and a childhood shaped by gaming, I've dedicated my career
          to the industry that inspired me. My goal is to contribute to the next
          generation of digital experiences, helping build the same kind of
          immersive worlds that first sparked my curiosity.
        </p>
        <br />
        <p>
          My journey in game development began at age 11, when I first
          experimented with RPG Maker. What started as a childhood hobby evolved
          into a professional pursuit at 15 when I began mastering Unity. Since
          then, I have earned a degree in Digital Games from FATEC São Caetano
          and published titles on platforms like the Google Play Store.
        </p>
      </div>
    </Window>
  );
};

export default AboutPage;
