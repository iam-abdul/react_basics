import { Link, Routes, Route } from "react-router-dom"
import ContactUS from "./ContactUs"
function App() {


  return (
    <>
      <div style={{ display: "flex", gap: "10px", backgroundColor: "palevioletred" }}>
        <Link to="/">
          home
        </Link>
        <Link to="/about">
          about
        </Link>
        <Link to={"/contact"}>
          contact us
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<div>This is home page</div>} />
        <Route path="/about" element={<div>This is about page</div>}>

        </Route>
        <Route path="/contact/:location" element={<ContactUS />} />
      </Routes>

      <div>this is footer</div>



    </>
  )
}

export default App
