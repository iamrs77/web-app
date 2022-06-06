import { useState } from "react";
import Create from "./Create";
import UserList from "./UserList";

const Home = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Rohit', lastName: 'Sharma', address: 'Ripple Street', city: 'Brampton', province: 'Ontario', postalCode: 'L6YABC'},
    { id: 2, firstName: 'Sameer', lastName: 'Pathania', address: 'Elliott Street', city: 'Brampton', province: 'Ontario', postalCode: 'L6YABC'},
    { id: 3, firstName: 'Sahil', lastName: 'Pathania', address: 'Queen Street', city: 'Brampton', province: 'Ontario', postalCode: 'L6YABC'},
  ])

  const handleDelete = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  const handleAddUser = (data) => {
    const newUsers = [...users, data]
    setUsers(newUsers);
  }

  return (
    <div className="home">
      <UserList users={users} handleDelete={handleDelete}/>
      <Create handleAddUser={handleAddUser}/>
    </div>
  );
}
 
export default Home;
