import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
	name: string;
	age: number;
}

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register('name', { required: true, minLength: 3 })}
					type="text"
					id="name"
					className="form-control"
				/>
				{errors.name?.type === 'required' && (
					<p className="text-danger">Name is required</p>
				)}
				{errors.name?.type === 'minLength' && (
					<p className="text-danger">Name must be at least 3 characters</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input {...register('age')} type="number" id="age" className="form-control" />
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
}

export default Form;
