import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flashcards from "./pages/flashcards";
import Matching from "./pages/matching";
import Home from "./pages/home";
import { Navbar } from "./components/navbar";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element ={<Navbar/>}>
						<Route index element={<Home entries={entries} setEntries={setEntries}/>}/>
						<Route path="Flashcards" element={<Flashcards entries={entries} setEntries={setEntries}/>} />
						<Route path="Matching" element={<Matching entries={entries}/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
  );
}

export default App;
