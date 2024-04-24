
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl flex justify-center font-bold mb-8">User Profile</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="lg:flex items-center justify-center p-6">
                    <div className="mr-6">
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-44 h-44 rounded-3xl"
                            />
                        ) : (
                            <div className="w-44 h-44 rounded-3xl bg-gray-300"></div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold"> Name: {user.displayName}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">User ID: {user.uid}</p>
                        <button className='btn bg-green-500 hover:bg-green-500'><Link className='no-underline text-white' to={'/update'}>Update Your Profile</Link></button>
                        {/* Add more profile details here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
