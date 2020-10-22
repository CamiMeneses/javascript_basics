import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
    background: 'lightseagreen',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

const PhoneBookForm = ({ addEntryToPhoneBook }) => {
  const initialStateValues = {
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  };

  const {form: {inputs, container, submitBtn}} = style;

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  };

  const handleSubmit = e => {
    addEntryToPhoneBook(prevArray => [...prevArray, values]);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={container}>
      <label>First name:</label>
      <br />
      <input
        style={inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        pattern="[A-Za-z]+"
        onChange={handleInputChange}
        value={values.userFirstname}
        required
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        style={inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        pattern="[A-Za-z]+"
        onChange={handleInputChange}
        value={values.userLastname}
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        pattern="[0-9]+"
        onChange={handleInputChange}
        value={values.userPhone}
        required
      />
      <br/>
      <input
        style={submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
};

const InformationTable = ({values}) => {
  const {table, tableCell} = style;
  return (
    <table style={table} className='informationTable'>
      <thead>
        <tr>
          <th style={tableCell}>First name</th>
          <th style={tableCell}>Last name</th>
          <th style={tableCell}>Phone</th>
        </tr>
        {
          values
            .sort((a, b) => a.userLastname.localeCompare(b.userLastname))
            .map(value =>
              <tr>
                <td>{value.userFirstname}</td>
                <td>{value.userLastname}</td>
                <td>{value.userPhone}</td>
              </tr>
            )
        }
      </thead>
      <div></div>
    </table>
  );
};

const Application = () => {
  const [values, setValues] = useState([]);

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={setValues}/>
      <InformationTable values={values} />
    </section>
  );
};

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
