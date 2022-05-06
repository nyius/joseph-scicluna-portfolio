import React, { useState } from 'react';

function ContactRight({ slider }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		description: '',
	});

	const { name, email, description } = formData;

	const onMutate = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = () => {};

	return (
		<div
			className="right-container-contact h-fit lg:h-full justify-center items-center font-bold"
			style={slider === 4 ? { top: '0' } : { top: '-150vh' }}
		>
			<form
				action=""
				className="flex flex-col bg-secondary h-fit w-11/12 sm:w-3/4 md:1/2 lg:w-3/4 xl:w-1/2 p-5 border-4 border-primary-content"
				onSubmit={e => onSubmit(e)}
			>
				<p className="text-2xl text-center pixel-font">Contact</p>
				<label className="text-xl mt-2">Name</label>
				<input
					id="name"
					defaultValue={name}
					type="text"
					placeholder="Enter your name"
					className="input input-primary border-4"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-2">Email</label>
				<input
					id="email"
					defaultValue={email}
					type="email"
					placeholder="Enter your email"
					className="input input-primary border-4"
					onChange={onMutate}
					required
				/>
				<label className="text-xl mt-4">Comment/Question</label>
				<textarea
					type="text"
					defaultValue={description}
					placeholder="Enter comment/question"
					className="input input-primary border-4 h-32"
					id="description"
					onChange={onMutate}
					required
				/>
				<button className="btn btn-accent btn-large mt-5 border-4 border-accent-focus">Submit</button>
			</form>
		</div>
	);
}

export default ContactRight;
