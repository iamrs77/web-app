import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({handleAddUser}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { id: Math.random(), firstName, lastName, address, city, province, postalCode };
    handleAddUser(user);
    
    setFirstName('');
    setLastName('');
    setAddress('');
    setCity('');
    setProvince('');
    setPostalCode('');
  }

  return (
    <div className="create">
      <h2>Add a New User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          type="text" 
          required 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input 
          type="text" 
          required 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Address:</label>
        <input 
          type="text" 
          required 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>City:</label>
        <input 
          type="text" 
          required 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Province:</label>
        <input 
          type="text" 
          required 
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <label>Postal Code:</label>
        <input 
          type="text" 
          required 
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        
        <button>Add User</button>
      </form>
    </div>
  );
}
 
export default Create;