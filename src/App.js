import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./GetImages"
import SearchBar from "./SearchBar"


export default function App(props) {

  return (
    <>
      <BrowserRouter>
      <SearchBar/>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
  }
