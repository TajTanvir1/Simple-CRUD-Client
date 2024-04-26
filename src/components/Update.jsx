import { Link, useLoaderData } from "react-router-dom";

const Update = () => {

   const loadedUser = useLoaderData()

   return (
      <div>
         <h3>Update info of : {loadedUser.name}</h3>
         <Link to='/users'>Users</Link>
      </div>
   );
};

export default Update;