import { FC } from "react";
import { bookContext } from "../context/BookProvider";
import Form from "./Form";

const BooksList = () => {
	const { books, handleAddBook, handleRemoveBook } = bookContext();

	return (
		<>
			<h2 className="d-flex justify-content-lg-center">
				Harry Potter Books 🧙‍♀️🪄
			</h2>
			<div className="row">
				<div className="col-7">
					<h5>List of Books</h5>
					<ul className="list-group">
						{books &&
							books?.map(({ id, title, year }) => (
								<li
									key={id}
									className="list-group-item d-flex justify-content-between"
								>
									<span className="align-center">{title}</span>
									<span className="align-center">{year}</span>
									<button
										className="btn btn-danger"
										onClick={() => handleRemoveBook(title)}
									>
										Delete
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className="col-3">
					<h5>Add my last book</h5>
					{/* eslint-disable-next-line */}
					<Form handleAddBook={handleAddBook} />
				</div>
			</div>
		</>
	);
};

export default BooksList;
