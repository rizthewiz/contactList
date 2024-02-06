import { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return <>{selectedContactId ? <div>Selected</div> : <ContactList />}</>;
}

export default App;
