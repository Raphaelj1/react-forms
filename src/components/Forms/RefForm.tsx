import React, { useRef } from 'react';

interface FormData {
	name: string;
	age: number;
}

function RefForm() {
	const person: FormData = {
		name: '',
		age: 0,
	};

	// useRef for uncontrolled components
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		if (nameRef.current !== null) {
			person.name = nameRef.current?.value;
		}
		if (ageRef.current !== null) {
			person.age = parseInt(ageRef.current?.value) || 0;
		}
		console.log(person);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input ref={nameRef} type="text" id="name" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input ref={ageRef} type="number" id="name" name="age" className="form-control" />
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
}

export default RefForm;
