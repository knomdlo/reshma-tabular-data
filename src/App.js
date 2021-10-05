import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <p>Using the users data in users.js, can you build the below</p>
      <ol>
        <li>Render the data in a tabular format showing all the fields</li>
        <li>
          Add dropdowns to filter data by gender & status. The values in
          dropdowns should be a unique set of all values available in the data.
        </li>
        <li>
          Include a checkbox to show/hide status. Note: If show status is
          unchecked the filter for it should also be removed
        </li>
      </ol>
      <div>
        <div>Eg design for ref:</div>
        Gender:{' '}
        <select>
          <option value="all" selected>
            all
          </option>
          <option value="female">female</option>
          <option value="unknown">unknown</option>
        </select>{' '}
        Status:{' '}
        <select>
          <option value="all" selected>
            all
          </option>
          <option value="frozen">frozen</option>
          <option value="active">active</option>
        </select>{' '}
        Capitalize name: <input type="checkbox"></input>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>STATUS</th>
          </tr>
          <tr>
            <td>124</td>
            <td>Mary</td>
            <td>mary@gmail.com</td>
            <td>female</td>
            <td>frozen</td>
          </tr>
          <tr>
            <td>123</td>
            <td>john</td>
            <td>jon@gmail.com</td>
            <td>unkown</td>
            <td>active</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
