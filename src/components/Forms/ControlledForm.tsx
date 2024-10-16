import React, { useState } from 'react';

interface FormData {
	name: string;
	age: number | '';
}

function ControlledForm() {
	// useState for controlled components
	const [person, setPerson] = useState<FormData>({
		name: '',
		age: '',
	});

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		// setPerson(() => ({ ...person, name: event.target?.value}));

		console.log(person);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="form-control"
					value={person.name}
					onChange={(e) => setPerson({ ...person, name: e.target.value })}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					type="number"
					id="name"
					name="age"
					className="form-control"
					value={person.age}
					onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
}

export default ControlledForm;
