import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonAction } from "../types/buttons";

const useCounter = () => {
	const [counter, setCounter] = useState<number>(0);
	const id = uuidv4();

	const increaseValue = (value = 0): void => {
		setCounter((prevState: number) => prevState + value);
	};

	const substractValue = (value = 1): void => {
		if (counter === 0) return;
		setCounter((prevState: number) => prevState - value);
	};

	const resetValue = (): void => {
		setCounter(0);
	};

	const buttons: ButtonAction[] = [
		{ label: "Increment", id: id, action: increaseValue, display: "+" },
		{ label: "Decrement", id: id, action: substractValue, display: "-" },
		{ label: "ResetValue", id: id, action: resetValue, display: "C" },
	];

	return {
		counter,
		buttons,
	};
};

export default useCounter;
