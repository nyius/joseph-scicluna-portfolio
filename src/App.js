import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import UploadProject from './pages/UploadProject';
import CantFind from './pages/CantFind';

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
					<Route path="*" element={<CantFind />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
