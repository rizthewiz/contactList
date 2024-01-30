import React from "react";

export default function ContactRow({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}
