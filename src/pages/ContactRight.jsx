import React, { useState } from 'react';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/73f65690-ce42-11ec-a821-6590c8b23a22';

function ContactRight({ slider }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const { name, email, message } = formData;

	const onMutate = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		const injectedData = {
			from: 'Portfolio Contact',
		};

		Object.assign(formData, injectedData);

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then(response => {
				// It's likely a spam/bot request, so bypass it to validate via captcha
				if (response.status === 422) {
					Object.keys(injectedData).forEach(key => {
						const el = document.createElement('input');
						el.type = 'hidden';
						el.name = key;
						el.value = injectedData[key];

						e.target.appendChild(el);
					});

					e.target.submit();
					throw new Error('Please finish the captcha challenge');
				}

				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => {
				console.log(`Submitted.`);
				setSubmitted(true);
				setTimeout(() => {
					setSubmitted(false);
					setFormData({
						name: '',
						email: '',
						message: '',
					});
				}, 3000);
			})
			.catch(err => console.log(err));
	};

	//---------------------------------------------------------------------------------------------------//
	return (
		<div
			className={`right-container-contact h-screen lg:h-full ${slider !== 4 ? '-z-50' : 'z-30'}`}
			style={slider === 4 ? { top: '0' } : { top: '-150vh' }}
		>
			<form
				action={FORM_ENDPOINT}
				className="flex flex-col bg-secondary h-fit w-11/12 sm:w-3/4 md:1/2 lg:w-3/4 xl:w-1/2 p-5 border-4 border-primary-content"
				onSubmit={e => onSubmit(e)}
				method="POST"
				target="_blank"
			>
				{submitted ? (
					<div className="flex flex-col bg-secondary h-fit w-full text-center gap-4">
						<p className="text-4xl pixel-font">Thanks!</p>
						<p className="text-2xl font-bold">I'll get in touch as soon as I can.</p>
					</div>
				) : (
					<>
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
							defaultValue={message}
							placeholder="Enter comment/question"
							className="input input-primary border-4 h-32"
							id="message"
							onChange={onMutate}
							required
						/>
						<button className="btn btn-accent btn-large mt-5 border-accent-focus">Submit</button>
					</>
				)}
			</form>
		</div>
	);
}

export default ContactRight;
