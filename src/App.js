import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

function App() {
	return (
		<Router>
			<div className="mx-auto">
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/admin" element={<Admin />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
