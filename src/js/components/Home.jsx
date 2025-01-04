import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, colorset ] = useState ("green");
	return (
		<div>
			<div className="bg-dark mx-auto m-0 p-0" style={{width:"10px", height:"180px"}}>
				z
			</div>
			<div className="bg-dark mx-auto p-3 rounded-4 "style={{width:"230px", height:"auto"}}>.
				<div className={"bg-danger m-2 mx-auto rounded-circle "+(color=="red"? "brillo":" ")}
				onClick={() => colorset("red")}
				style={{width:"180px", height:"180px"}}>.</div>
				<div className={"bg-warning m-2 mx-auto rounded-circle "+(color=="yellow"? "brillo":" ")} 
				onClick={() => colorset("yellow")}
				style={{width:"180px", height:"180px"}}>.</div>
				<div className={"bg-success m-2 mx-auto rounded-circle "+(color=="green"? "brillo":" ")} 
				onClick={() => colorset("green")}
				style={{width:"180px", height:"180px"}}>.</div>
			</div>			
		</div>
	);
};

export default Home;