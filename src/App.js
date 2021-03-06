import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Learn from "./components/learn/Learn";
import Clients from "./components/clients/Clients";
import Story from "./components/story/Story";
import Abstract from "./components/abstract/Abstract";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<Products />
			<Learn />
			<Clients />
			<Story />
			<Abstract />
			<Footer />
		</div>
	);
}

export default App;
