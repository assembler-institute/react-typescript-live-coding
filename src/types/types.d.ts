import { FormEvent, ReacNode } from "react";

export type Props = {
  children: ReactNode;
}

export type BookProps = {
  id: string
  title: string
  year: string
}

export type BooksStateTypes = {
  books: BookProps[]
  handleAddBook: (book: BookProps) => void
  handleRemoveBook: (title: string) => void
}

export type EventType = FormEvent<HTMLFormElement>

export type BookActionType = {
  type: string
  payload: BookProps
}