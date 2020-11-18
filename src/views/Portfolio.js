import React, {useState, useEffect} from "react";
import axios from 'axios';

function Portfolio() {
  const [userlist, setuserlist] = useState([])

  useEffect(() => {
    console.log('use Effect!')
    findusers()
  },[]);

  async function findusers (){
    const users = await axios.get('https://randomuser.me/api/?results=100');
    console.log(users.data.results);
    setuserlist(users.data.results);
  }

  return (
    <div>
      <h1>We are in the portfolio component</h1>
      <p>This is where the random users will be:</p>
      {/* {JSON.stringify(userlist)} */}
      {userlist.map(user => 
        <li>{user.name.first}</li>
      )}
    </div>
  );
}

export default Portfolio;