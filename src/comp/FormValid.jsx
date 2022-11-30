import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addItem, createItem } from '../redux/slices/itemSlice';

function FormValid(props) {
	const { register, formState: { errors, isValid }, handleSubmit, reset, } = useForm({
		mode: "all"
	});

	const dispatch = useDispatch();
	const onSubmit = (data) => {
		dispatch(createItem(data));
		reset();
	}
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					First Name :
					<input
						placeholder="First Name"
						{...register('firstName', {
							required: "Field is required!",
							minLength: {
								value: 3,
								message: 'Minimum 3 characters'
							},
						})} />
				</label>
				<div style={{ height: '25px' }}>
					{errors?.firstName &&
						<p>{errors?.firstName?.message || 'Error!'}</p>}
				</div>
				<label>
					Last Name :
					<input
						placeholder="Last Name"
						{...register('lastName', {
							required: "Field is required!",
							minLength: {
								value: 4,
								message: 'Minimum 4 characters'
							},
						})} />
				</label>
				<div style={{ height: '25px' }}>
					{errors?.lastName &&
						<p>{errors?.lastName?.message || 'Error!'}</p>}
				</div>
				<label>
					Email :
					<input type="text" placeholder="Email"
						{...register("email", {
							required: "Enter a valid address!",
							pattern: /^\S+@\S+$/i
						})} />
				</label>
				<div style={{ height: '25px' }}>
					{errors?.email &&
						<p>{errors?.email?.message || 'Enter a valid address!'}</p>}
				</div>
				<label>
					Age :
					<input type="number" placeholder="Age"
						{...register("age", { min: 2, maxLength: 3 })} />
				</label>
				<div style={{ height: '25px' }}>
					{errors?.age &&
						<p>{errors?.age?.message || 'Enter a valid age!'}</p>}
				</div>
				<label>
					Yes
					<input
						{...register("developer", {
							required: true
						})} type="radio" value="Yes" />
				</label>
				<label>
					No
					<input
						{...register("developer", {
							required: true
						})} type="radio" value="No" />
				</label>
				<div style={{ height: '25px' }}>
					{errors?.developer &&
						<p>{errors?.developer?.message || 'Error!'}</p>}
				</div>
				<input type='submit' disabled={!isValid} />
			</form>
		</div>
	);
}

export default FormValid;