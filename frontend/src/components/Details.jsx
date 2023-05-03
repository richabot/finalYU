import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../App.css"
import { CSVLink } from 'react-csv';
import { json } from 'react-router-dom';

const Details = () => {
    const [data, setData] = useState([]);
 
    const [searchQuery, setSearchQuery] = useState('');
     // Initially show all entries
  
  useEffect(() => {
    axios.get('http://localhost:8080/formdata')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
  const [entriesToShow, setEntriesToShow] = useState(data.length);
  const filteredData = data.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };



  const handleChangeEntriesToShow = (event) => {
    setEntriesToShow(parseInt(event.target.value)); // Parse value to integer
  };
  const displayedData = filteredData.slice(0, entriesToShow);

  return (
   <>
   <CSVLink data={data} filename={'my-file.csv'} target="_blank">
  Download CSV
</CSVLink>



     <label htmlFor="entries-to-show">Show:</label>
      <select id="entries-to-show" value={entriesToShow} onChange={handleChangeEntriesToShow}>
      <option value={data.length}>All</option>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
       
      </select>
     <input type="text" placeholder="Search by name" value={searchQuery} onChange={handleSearch} />
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ backgroundColor: 'green', color: 'white' }}>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Sex</th>
        <th>Mobile</th>
        <th>Emergency Contact Number</th>
        <th>Govt ID Type</th>
        <th>Govt ID</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      {(displayedData.length > 0 ? displayedData : data).map((item,index) => (
        <tr key={item._id} className={index % 2 === 0 ? 'even' : 'odd'}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.sex}</td>
          <td>{item.mobile}</td>
          <td>{item.emergencyContactNumber}</td>
          <td>{item.govtIdType}</td>
          <td>{item.govtId}</td>
          <td>{item.created}</td>
        </tr>
      ))}
    </tbody>
  </table></>
  )
}

export default Details