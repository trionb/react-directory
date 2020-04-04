import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import SearchForm from "./components/SearchForm/Search";
import Table from "./components/Table/Table";
import API from './utils/Api'



function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    API.search()
      .then(res => {
        console.log(res.data.results)
        setResults(res.data.results)

      })
      .catch(err => console.log(err))
  }, [])
  console.log(results)

  return (
    <div>
      <Header>Friends List</Header>
      <h1>hello{results.name}</h1>

      <SearchForm />
      {results.length > 0
        ? <Table
          first={results && results[0].name.first}
          last={results && results[0].name.last}
          image={results && results[0].picture.thumbnail}
          phone={results[0].phone}
          email={results[0].email}
          dob={results[0].dob.date}
        />
        : <div> </div>
       }
      
    </div>
  );
}

export default App;
