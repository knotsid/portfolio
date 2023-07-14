import { useState, useRef } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import CustomCursor from "./components/Cursor/CustomCursor";
import { useCustomCursor } from "./components/Cursor/useCustomCursor";
import Projects from "./components/projects/Projects";

function App() {
	const innerCursorRef = useRef(null);
	const outerCursorRef = useRef(null);

	useCustomCursor(innerCursorRef, outerCursorRef);

	return (
		<>
			<Header />
			<CustomCursor
				innerCursorRef={innerCursorRef}
				outerCursorRef={outerCursorRef}
			/>
			<main className="main">
				<Home />
				<About />
				<Projects 
				title='card title'
				imageUrl='https://picsum.photos/seed/picsum/300/200'
				body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, fugit.'
				/>
				<Skills />
				{/* <Services /> */}
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
