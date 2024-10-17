// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Button from './component/button/Button';
// import SearchInput from './component/searchinput/Searchinput';
// import Card from './component/card/Card'
// import LearnState from './component/state/LearnState';
// import Export from './component/assignment/exportCreate/Export'
// import Web from './component/assignment/webpage/Web';

import './App.css';








// import { studentTeam } from './data';

// const FilterByName = studentTeam.filter(team => team.name.startsWith('A'));
// const FilteredData = studentTeam.filter(team => team.id < 8);
// let IsSigned=false

// const RendringElement=()=>{
// 	if(IsSigned){
// 		return(
// 			<h1>Wlecome to the page</h1>
// 		)
// 	}
// 	else{
// 		// <h2 className="form-title">Login</h2>
// 	<form>
// 	  <div className="form-group">
// 		<label htmlFor="username">Username</label>
// 		<input type="text" id="username" name="username" required />
// 	  </div>
// 	  <div className="form-group">
// 		<label htmlFor="email">Email</label>
// 		<input type="email" id="email" name="email" required />
// 	  </div>
// 	  <div className="form-group">
// 		<label htmlFor="password">Password</label>
// 		<input type="password" id="password" name="password" required />
// 	  </div>
// 	  <button type="submit" className="btn">Login</button>
// 	  <button type="button" className="btn google-btn">
// 		<img src="google-icon.png" alt="Google icon" /> Login with Google
// 	  </button>
// 	</form>
// 	}
// }
// console.log(RendringElement)

function App() {
// const items={
//   name:"about"
// }

  return (
	<div>

	{/* <Card
  name="John"
  role="Student"
  desc="i love coding"
  img="/logo192.png"
  />



<SearchInput/>

<LearnState/>
<Export/>
<Export/>

<Button
title="Login"
styling={{flexDirection:"row-reverse", backgroundColor:"teal", color:"white"}}
icon={<FaArrowRight/>}
/>

<Button
title="Register"
styling={{flexDirection:"row-reverse", backgroundColor:"red", color:"white"}}
icon={<FaArrowLeft/>}
/> */}

    <Web/>

  </div>
  );
}

export default App;