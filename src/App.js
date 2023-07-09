import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "./features/LanguageSupport/i18n"
import Navbar from "./features/Navbar/navbar.tsx"
import Home from "./pages/HomePage/home.tsx"
import Blog from "./pages/BlogPage/blog.tsx"
import Post from "./pages/PostPage/post.tsx"
import { useTranslation } from "react-i18next"

function App() {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    document.documentElement.setAttribute("dir", i18n.dir())
  }, [i18n])

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="/Post/:id" element={<Post />} />
        </Routes>
      </I18nextProvider>
    </div>
  )
}

export default App
