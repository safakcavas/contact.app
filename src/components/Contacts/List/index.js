import React, { useState } from "react";
// import "./styles.css";
function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
  );
  });


  return (
    <div >
      <div>
        <input
          placeholder="Filter Contact"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <ul className="ul-list">
        {filtered.map((contact, id, idx) => (
          <>
            <li key={id}>{contact.fullname}</li>
            <li key={idx}>{contact.phone_number}</li>
          </>
        ))}
      </ul>
      <p>Total:({filtered.length})</p>
    </div>
  );
}

// 2 dakika
export default List;
