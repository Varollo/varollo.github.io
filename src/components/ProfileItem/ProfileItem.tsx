import type { ReactNode } from "react";
import "./ProfileItem.css";

interface Props {
  title: ReactNode;
  content: string;
}

const ProfileItem = (props: Props) => {
  return (
    <li className="profileItem">
      <p className="profileTitle">{props.title}</p>
      <p className="profileContent">{props.content}</p>
    </li>
  );
};

export default ProfileItem;
