import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar'
import './App.css'
import Button from './components/Button';
import About from './components/About';

function App() {
  return (
		<Router>
			<div className="App">
				<Route exact path="/">
					<Navbar />
					<Banner /> 
					home page
				</Route>
				<Route path="/about">
					<Navbar />
          <About />
					about page
				</Route>
				<Route path="/news">
					<Navbar />
					News page
				</Route>
			</div> 
      <Button>Read Article</Button>
		</Router>
	)
}

export default App;
