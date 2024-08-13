import { Link, NavLink } from "react-router-dom";

// import { PropTypes } from 'prop-types';
const Users = ({users}) => {

    const {id, name, email, phone} = users

    return (
        <div className="border-4 border-orange-500 p-5 m-2">
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <NavLink to={`/user/${id}`}>
                <button className="px-5 py-2 bg-emerald-400 hover:bg-emerald-600 mt-3 rounded-lg">
                    Details
                </button>
            </NavLink>
        </div>
    );

};




export default Users;