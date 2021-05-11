export default function UserInfo(data) {
  return (
    <div className="userBody">
      <div className="userPic"></div>
      <div className="iName">{
          data["name"]
      }</div>
    </div>
  );
}
