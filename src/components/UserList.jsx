export default function UserList(props) {
  const { users } = props;

  return (
    <>
      {users.map((user, index) => (
        <div className="user-item">{user.fullName}</div>
      ))}
    </>
  );
}
