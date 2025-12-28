import "./ProfileImg.css";

interface Props {
  imgUrl: string
}

const ProfileImg = (props: Props) => {
  return (
    <div className="profileImg">
      <img src={props.imgUrl} alt="Gabriel" />
    </div>
  )
}

export default ProfileImg