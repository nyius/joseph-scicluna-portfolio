import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '../firebase.config';
import { getDoc, doc, where, query } from 'firebase/firestore';

function Admin() {
	const navigate = useNavigate();

	const signIn = async e => {
		e.preventDefault();

		try {
			const uid = await signInWithPopup(auth, googleProvider)
				.then(user => {
					return user;
				})
				.catch(err => err);

			const usersRef = doc(db, 'users', auth.currentUser.uid);

			const userSnap = await getDoc(usersRef);

			if (userSnap.exists()) {
				navigate('/');
			} else {
				console.log(`Hey! You're not me! Go on, Git! Scram!`);
			}

			// if (uid) navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex w-full h-screen justify-center items-center">
			<div className=" flex flex-col justify-center items-center bg-primary w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/4 h-fit p-6 sm:p10 md:p14 lg:p20 rounded-xl login-container">
				<form action="" className="flex flex-col">
					<label htmlFor="" className="text-2xl font-bold text-center">
						Are you me?! If you are, log in with Google to gain access to ALL the things
					</label>
					<button className="btn btn-lg btn-secondary mt-10" onClick={signIn}>
						<FaGoogle className="mr-4" /> Sign in
					</button>
					<div className="divider my-10"></div>
					<label htmlFor="" className="text-xl font-bold text-center">
						Didn't mean to come here?
					</label>
					<button
						className="btn btn-lg btn-accent mt-10"
						onClick={() => {
							navigate('/');
						}}
					>
						<FaGoogle className="mr-4" /> Return Home
					</button>
				</form>
			</div>
		</div>
	);
}

export default Admin;
