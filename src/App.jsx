import { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );

  // Once working will replace Selected div with <SelectedContact/>
}

export default App;
