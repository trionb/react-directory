import React, {useState, useEffect} from "react"; 
import "./Table.css";
import SearchInput from "../SearchInput/SearchInput"
import Header from "../Header/Header"
import API from '../utils/Api'

function Table () {
    const [results, setResults] = useState([])

  useEffect(() => {
    API.Search()
      .then(res => {
        console.log(res.data.results)
        setResults(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

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
                {results.map(empList =>(
                    <tr key={empList.login.uuid} className="infoTbl">
                        <td>
                            <img 
                            alt={empList.picture.thumbnail} 
                            src={empList.picture.thumbnail} 
                            />
                        </td>
                        <td>
                            {empList.name.first} {empList.name.last}
                        </td>
                        <td>
                            {empList.phone}
                        </td>
                        <td>
                            <a href="{empList.email}" 
                            target="_top">{empList.email}
                            </a>
                        </td>
                        <td>
                            {empList.dob.date}
                        </td>
                  </tr>
                  ))}
                  </tbody>
            </table>
        </>
    );
                
}
export default Table;