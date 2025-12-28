import "./ProfileItem.css";

interface Props {
  title: string;
  content: string;
}

const ProfileItem = (props: Props) => {
  return (
    <li className="profileItem">
      <p className="profileTitle">
        <strong>{props.title.toUpperCase()}:</strong>
      </p>
      <p className="profileContent"><i>{props.content}</i></p>
    </li>
  );
};

export default ProfileItem;
