import { BookProps } from "../types/types";

export const initialArgs: BookProps[] = [
  {
		id: "1",
		title: "La piedra filosofal 💎",
		year: "1997",
	},
	{
		id: "2",
		title: "La cámara secreta 🤫",
		year: "1998",
	},
	{
		id: "3",
		title: "El prisionero de azkaban 👻",
		year: "1999",
	},
	{
		id: "4",
		title: "El cáliz de fuego 🔥",
		year: "2000",
	},
	{
		id: "5",
		title: "La orden del fénix 🦅🔥",
		year: "2003",
	},
	{
		id: "6",
		title: "El misterio del príncipe 🤴",
		year: "2005",
	},
	{
		id: "7",
		title: "Las reliquias de la muerte ☠️",
		year: "2007",
	},
]

type BookActionType =
	| { type: "ADD_BOOK"; payload: BookProps }
	| { type: "REMOVE_BOOK"; payload: string }

export const bookReducer = (state: typeof initialArgs, action: BookActionType) => {
	switch(action.type) {
		case 'ADD_BOOK':
			return [ ...state, action.payload ]
		case 'REMOVE_BOOK':
			return state.filter((book) => book.title !== action.payload)
		default:
			return state;
	}
}