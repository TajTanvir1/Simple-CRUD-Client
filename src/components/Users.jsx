import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

const users = useLoaderData();
console.log(users);

   return (
      <div>
         <h1> Users: {users.length} </h1>
         <div>
            {
               users.map(user => <p key={user._id}>{user.name}, {user.email}</p>)
            }
         </div>
         <Link to='/'>Home</Link>
      </div>
   );
};

export default Users;