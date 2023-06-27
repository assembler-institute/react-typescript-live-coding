import { Header } from "./ui/views/components/Header/Header";
import { useForm } from "react-hook-form";

let renderedCount = 0;
export const App = () => {
	renderedCount++;
	const { register, handleSubmit, formState: { errors, dirtyFields, touchedFields, isSubmitted }, reset, watch } = useForm(
		{
			defaultValues: {
				username: "",
				password: "",
				age: ""
			}
		}
	);

	console.log("dirtyFields: ", dirtyFields);
	console.log("touchedFields: ", touchedFields);
	console.log("isSubmitted: ", isSubmitted);
	const onSubmit = data => {
		console.log(data);
		reset();
	}

	const usernameWatch = watch("username");


	return (
		<>
			<Header renderedCount={renderedCount} />
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("username", {
						required: true, minLength: {
							value: 4,
							message: "Minimun length is 4",
						},
						maxLength: {
							value: 6,
							message: "Maximum length is 6"
						}
					})}
				/>
				<p>{usernameWatch}</p>
				{errors.username && <p>{errors?.username?.message}</p>}

				<input
					{...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}

				/>
				<input
					{...register("age", { valueAsNumber: true })}

				/>
				<button type="submit" disabled={false}
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default App;
