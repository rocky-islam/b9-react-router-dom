import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData();
    console.log(userDetails);
    const {id, name , email, phone} = userDetails;
    return (
        <div>
            <h1>Its user details here</h1>
            <p>id:{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;