import { FC, createContext, useContext, useReducer } from "react";
import { Props, BooksStateTypes, BookProps } from "../types/types";
import { initialArgs, bookReducer } from "./actions";

export const BookContext = createContext<BooksStateTypes | undefined>(
	undefined
);

const BookProvider: FC<Props> = ({ children }) => {
	const [books, dispatch] = useReducer(bookReducer, initialArgs);

	const handleAddBook = (book: BookProps) => {
		dispatch({
			type: "ADD_BOOK",
			payload: book,
		});
	};

	const handleRemoveBook = (title: string) => {
		dispatch({
			type: "REMOVE_BOOK",
			payload: title,
		});
	};

	return (
		<>
			<BookContext.Provider value={{ books, handleAddBook, handleRemoveBook }}>
				{children}
			</BookContext.Provider>
		</>
	);
};

function bookContext() {
	const context = useContext(BookContext);

	if (context === undefined || null) {
		throw new Error("bookContext must be within a Provider");
	}
	return context;
}

export { BookProvider, bookContext };
