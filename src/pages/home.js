import { TermItem } from "../components/termitem";

export default function Home({entries, setEntries}) {
  //form for adding new entries
  //list will have place to delete entries
  function addTerm(e) {
    e.preventDefault();
    const term = e.target.term.value;
    const definition = e.target.definition.value;
    if(entries.length !== 20){
      const newEntry = {"term": term, "definition": definition};
      setEntries([newEntry, ...entries]);
    }
    else{
      alert("You have reached the maximum number of entries (20).");
    }
    e.target.term.value = "";
    e.target.definition.value = "";
  }
  return (
    <div className="basecontainer">
      <div className="addForm">
        <form className="formbox" onSubmit={addTerm}>
          <input type="text" maxLength={100} name="term" placeholder="Term" required/>
          <input type="text" maxLength={300} name="definition" placeholder="Definition" required/>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="termList">
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <TermItem term={entry.term} definition={entry.definition}/>
              <button onClick={()=> {
                const newEntries = entries.filter((item, i) => i !== index);
                setEntries(newEntries);
              }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
