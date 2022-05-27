import React from "react";

const UserRow = ({ user, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-xs">Make Admin</button>
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
