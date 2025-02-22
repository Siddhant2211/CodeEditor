import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Compiler from "./pages/Compiler"
import NotFound from "./pages/NotFound"
import { Toaster } from "sonner"
function App() {


  return (
    <>
    <Toaster position="bottom-right" theme="dark"/>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/compiler/:urlId?' element={<Compiler/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </ThemeProvider>
    
    
    </>
  )
}

export default App
