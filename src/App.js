import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Learn from "./components/learn/Learn";
import Clients from "./components/clients/Clients";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<Products />
			<Learn />
			<Clients />
		</div>
	);
}

export default App;
