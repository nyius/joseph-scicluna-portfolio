import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { db, auth, storage } from '../firebase.config';
import { setDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

function UploadProject() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		technology: [],
		link: '',
		image: {},
	});

	const { name, description, technology, link, image } = formData;

	const onSubmit = async e => {
		e.preventDefault();

		setLoading(true);

		const storeImage = async img => {
			console.log(img);
			return new Promise((resolve, reject) => {
				const fileName = `${auth.currentUser.uid}-${img.name}`;

				const storageRef = ref(storage, fileName);
				const uploadTask = uploadBytesResumable(storageRef, img);

				uploadTask.on(
					'state_changed',
					snapshot => {
						switch (snapshot.state) {
							case 'paused':
								console.log(`Upload paused`);
								break;
							case 'running':
								console.log(`Uploading`);
								break;
						}
					},
					error => {
						switch (error.code) {
							case 'storage/unauthorized':
								console.log(error);
								reject(error);
								break;
							case 'storage/canceled':
								console.log(error);
								reject(error);
								break;
							case 'storage/unknown':
								console.log(error);
								reject(error);
								break;
						}
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
							resolve(downloadURL);
						});
					}
				);
			});
		};

		const imageURL = await Promise.all([...image].map(img => storeImage(img)));

		const formDataCopy = {
			...formData,
			image: imageURL,
			timestamp: serverTimestamp(),
		};

		console.log(formDataCopy);

		await addDoc(collection(db, 'projects'), formDataCopy);
		setLoading(false);

		navigate('/');
	};

	const onMutate = e => {
		let bool = null;

		if (e.target.value === 'true') {
			bool = true;
		}
		if (e.target.value === 'false') {
			bool = false;
		}

		if (e.target.files) {
			setFormData(prevState => ({
				...prevState,
				image: e.target.files,
			}));
		}

		if (!e.target.files) {
			if (e.target.id === `technology`) {
				setFormData(prevState => {
					return {
						...prevState,
						technology: e.target.value.split(` `),
					};
				});
			} else {
				setFormData(prevState => ({
					...prevState,
					[e.target.id]: e.target.value,
				}));
			}
		}
	};

	return (
		<div
			className="flex items-center justify-center mx-auto h-screen w-full items-center bg-primary"
			style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/elastoplast.png")' }}
		>
			<form
				action=""
				className="flex flex-col bg-secondary h-fit w-1/4 p-5 border-4 border-primary-content"
				onSubmit={e => onSubmit(e)}
			>
				<label className="text-xl mt-2">Project Name</label>
				<input
					id="name"
					defaultValue={name}
					type="text"
					placeholder="Enter project name"
					className="input input-primary border-4"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-4">Project description</label>
				<textarea
					type="text"
					defaultValue={description}
					placeholder="Enter project description"
					className="input input-primary border-4 h-32"
					id="description"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-2">Tech used (separated by spaces)</label>
				<input
					id="technology"
					type="text"
					defaultValue={technology}
					placeholder="Enter tech used"
					className="input input-primary border-4"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-2">Project Link</label>
				<input
					id="link"
					type="text"
					defaultValue={link}
					placeholder="Enter link to project"
					className="input input-primary border-4"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-4">Project Image</label>
				<input
					className=""
					type="file"
					id="image"
					max="1"
					accept=".jpg,.png,.jpeg"
					required
					onChange={onMutate}
				/>
				<button className="btn btn-accent btn-large mt-5">Submit</button>
			</form>
		</div>
	);
}

export default UploadProject;
