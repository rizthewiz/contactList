import React from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchContact();
  }, []);

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
