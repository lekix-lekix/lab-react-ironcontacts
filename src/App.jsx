import "./App.css";
import { useState } from "react";
import contactsDB from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 6));

  const pickRandomActor = () => {
    const restOfActors = contactsDB.filter(
      (actor) => !contacts.includes(actor)
    );
    const randomActor = Math.floor(Math.random() * restOfActors.length);
    const newActorsList = [...contacts];
    newActorsList.push(restOfActors[randomActor]);
    setContacts(newActorsList);
  };

  const sortByName = () => {
    const orderedByName = [...contacts];
    orderedByName.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(orderedByName);
  };

  const sortByPopularity = () => {
    const sortedByPop = [...contacts];
    sortedByPop.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedByPop);
  };

  const deleteActor = (id) => {
    console.log(id);
    const contactWithoutActor = contacts.filter((actor) => actor.id !== id);
    setContacts(contactWithoutActor);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => pickRandomActor()}>Add a random contact</button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <table>
        <thead>
          <tr class="titles">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <>
                <tr>
                  <td className="actor-td">
                    <img src={`${contact.pictureUrl}`} alt="profile-pic" />
                  </td>
                  <td>{`${contact.name}`}</td>
                  <td>{`${contact.popularity}`}</td>
                  <td>
                    {contact.wonOscar ? <i class="fa fa-trophy"></i> : <i></i>}
                  </td>
                  <td>
                    {contact.wonEmmy ? <i class="fa fa-trophy"></i> : <i></i>}
                  </td>
                  <td>
                    <button onClick={() => deleteActor(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
