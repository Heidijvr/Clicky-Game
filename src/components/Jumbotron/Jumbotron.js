import React from "react";
import "./Jumbotron.css";

// const header = props => (
//     <div classname="header">
//         <div className="title">{props.children}</div>
//         <div> className="scores">
//             Score: {props.score} Highscore: {props.highsore}
//         </div>        
//     </div>
// );

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Game!</h1>
		<h2>Click on an image to earn points, but don't click on any more than once!</h2>
	</header>
);
export default Jumbotron;

