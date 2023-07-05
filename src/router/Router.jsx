import { Route, Routes } from "react-router-dom"
import { Home, Test, Login, Signup } from "../pages"

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="test" element={<Test />} />
      <Route path="login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Routes>
  )
}

export default Router