import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<div className="mx-auto">
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
