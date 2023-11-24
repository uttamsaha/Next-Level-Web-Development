import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FriendDetail() {
  const { friendId } = useParams();
  const [friend, setFriend] = useState([]);
  console.log(friend);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center mt-6 text-blue-800">
          Friend Details
        </h1>
        <div className="w-72 shadow-lg rounded-sm p-8">
          <p>Name: {friend?.name}</p>
          <p>Username: {friend?.username}</p>
          <p>Email: {friend?.email}</p>
          <p>Phone: {friend?.phone}</p>
          <p>Website: {friend?.Website}</p>
          <p>Company: {friend?.company?.name}</p>
          <p>Website: {friend?.address?.city}</p>
        </div>
      </div>
    </div>
  );
}

export default FriendDetail;
