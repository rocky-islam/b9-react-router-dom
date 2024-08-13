import { useLoaderData } from "react-router-dom";
import Users from "./Users";

const User = () => {
    const user= useLoaderData();
    // console.log(user);
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold">This is user page {user.length}</h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    user.map(users => <Users key={users.id} users={users}></Users>)
                }
            </div>
        </div>
    );
};

export default User;