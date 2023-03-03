/*import React from "react";
import {nanoid} from 'nanoid'
import data from "./mock-data.json"

const Ranking = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
      rank: '',
      ingame: '',
      Time: ''
  })

  const HandleAddFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addFormData};//add form data
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newRanking = {
          id: nanoid(),
          Rank: addFormData.rank,
          Ingame: addFormData.ingame,
          Time: addFormData.time,

      }

      const newContact = [...contacts, newContact ];
      setContacts(newContact);
  }
return(
  <div className="app-container">
      <table>
          <thead>
              <tr>
                  <th>Rank</th>
                  <th>Ingame</th>
                  <th>Time</th>
              </tr>
          </thead>
          <tbody>
              {contacts.map((contact) => (
              <tr>
              <td>contact.rank</td>
              <td>contact.ingame</td>
              <td>contact.time</td>
              </tr>
              ))}
          </tbody>
      </table>
      <h2>Add information</h2>
      <form onSubmit={handleAddFormSubmit}>
          <input type="text" Name="rank" required = "required" placeholder="Enter the rank..." onChange={HandleAddFormChange} />
          <input type="text" Name="ingame" required = "required" placeholder="Enter the name..." onChange={HandleAddFormChange}/>
          <input type="text" Name="time" required = "required" placeholder="Enter the time..." onChange={HandleAddFormChange} />
          <button type="submit">Add</button>
      </form>
  </div>
)}
/*const Ranking = () => {
  return (
    <div>
      <h1>Ranking page</h1>
      <main class = "table">
        <section class = "table-header">
          <h1>Ranking page</h1>
        </section>
        <section class = "table-body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Time</th>
                <th>Ranking</th>
              </tr>
            </thead>
          </table>
        </section>
      </main>
    </div>
  );
};*/

//export default Ranking;
