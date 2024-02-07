import React from "react";
import { useState, useEffect } from "react";
import SelectedContact from "./SelectedContact";

export default function ContactRow({ contact, setSelectedContactId }) {
  // const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
