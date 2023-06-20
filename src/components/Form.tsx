import { FC, useState } from "react";
import { BookProps, BooksStateTypes, EventType } from "../types/types";

const Form: FC<BooksStateTypes> = ({ handleAddBook }) => {
	const [formState, setFormState] = useState<BookProps>({
		id: "",
		title: "",
		year: "",
	});

	const { id, title, year } = formState;

	const handleChange = ({ target }: any) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleSubmit = (e: EventType) => {
		e.preventDefault();
		if (!id || !title || !year) "There is a field missing";

		const newBook = {
			id,
			title,
			year,
		};

		handleAddBook(newBook);
	};

	return (
		<>
			<h3>Formulario</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="string"
					name="id"
					value={id}
					onChange={handleChange}
					placeholder="id"
					className="form-control"
				/>
				<input
					type="string"
					name="title"
					value={title}
					onChange={handleChange}
					placeholder="title"
					className="form-control"
				/>
				<input
					type="string"
					name="year"
					value={year}
					onChange={handleChange}
					placeholder="year"
					className="form-control"
				/>
				<button type="submit" className="btn btn-outline-primary mt-2">
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
