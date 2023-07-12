import React, { useState } from "react";

let renderedCount = 0;

const useForm = (initialState: {}) => {
	renderedCount++;

	const [formState, setFormState] = useState({ initialState });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formState", formState);
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	return {
		formState,
		handleSubmit,
		handleChange,
		renderedCount,
	};
};

export default useForm;
