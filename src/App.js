import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import UploadProject from './pages/UploadProject';

function App() {
	return (
		<Router>
			<div className="mx-auto">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route
						exact
						path="/upload-project"
						element={
							<PrivateRoute>
								<UploadProject />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
