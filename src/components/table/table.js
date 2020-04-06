import React from "react"; 
import "./Table.css";
import SearchInput from "../SearchInput/SearchInput"
import Header from "../Header/Header"

function Table (prop) {

  //Handling input in search bar 
//   handleInputChange = event => {

//     if (event.target.name === "search") {
//       const searchTerm = event.target.value.toLowerCase();
//       this.setState({
//         search: searchTerm
//       })
//     }
//   }
    return (
        <>
            <Header />
            <SearchInput />
            <table>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                    <tr className="infoTbl">
                        <td>
                            <img alt={prop.picture} src={prop.image} />
                        </td>
                        <td>
                            {prop.first} {prop.last}
                        </td>
                        <td>
                            {prop.phone}
                        </td>
                        <td>
                            <a href="{prop.email}" target="_top">{prop.email}</a>
                        </td>
                        <td>
                            {prop.dob}
                        </td>
                  </tr>
                </tbody>
            </table>
        </>
    );
   
}
export default Table;