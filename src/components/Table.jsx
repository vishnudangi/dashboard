import React from 'react';
import '../styles/table.css';

const Table = (props) => {
  const getdata = () =>{
    return props.columnNames.map((item, key)=>{
      return (
          <th key={key}>{item}</th>
      )
    })
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {getdata()}
          </tr>
        </thead>
        <tbody className="table-body">
          {props.tableData}
        </tbody>
      </table>

    </div>
  );
}

export default Table;
