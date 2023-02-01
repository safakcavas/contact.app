import React, { useState } from "react";

const values={ fullname: "", phone_number: "" }
function Form({ addContact, contacts }) {
  const [form, SetForm] = useState(values);

  const onChangeInput = (e) => {
    SetForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);

    SetForm({ fullname: "", phone_number: "" });
    console.log(form);
  };
  

  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <div>
          <input
            name="fullname"
            placeholder="fullname"
            minLength={3}
            onChange={onChangeInput}
            value={form.fullname}
          />
          <div></div>
          <input
            name="phone_number"
            type="number"
            maxLength={11}
            placeholder="phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>

        <div>
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
