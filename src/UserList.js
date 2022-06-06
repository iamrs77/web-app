import { Link } from 'react-router-dom';

const UserList = ({ users, handleDelete }) => {
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {users.map(user => (
        <div className="user-preview" key={user.id} >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h2>{ user.firstName + " " + user.lastName }</h2>
              <button onClick={() => handleDelete(user.id)} className="del-button">Del</button>
            </div>
            <p style={{marginTop: '10px'}}>Address: {user.address + " " + user.city + " " + user.province + ", " + user.postalCode}</p>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;