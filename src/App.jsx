import React from "react"
import { BlogShelf } from "./Components/BlogShelf"
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import AddBlog from './Components/AddBlog';
import SingleBlog from "./Components/SingleBlog";

const App = () => {
  return (
    <>
      <Menu />

      <Routes>
        <Route element={<BlogShelf />} path='/' />
        <Route element={<AddBlog />} path='/add-blog' />
        <Route element={<SingleBlog />} path='/blog/:id' />
      </Routes>

    </>
  )
}

export default App;