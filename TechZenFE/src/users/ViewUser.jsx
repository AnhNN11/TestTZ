import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-md border rounded p-6 mt-4 shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">
            User Details
          </h2>

          <div className=" bg-white shadow-md rounded-lg overflow-hidden">
            <div className="card-header p-4 bg-gray-100">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush mt-4">
                <li className="list-group-item p-4 border-b">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item p-4 border-b">
                  <b>UserName:</b> {user.username}
                </li>
                <li className="list-group-item p-4">
                  <b>Email:</b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link
            className="btn btn-primary my-2 inline-block mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
