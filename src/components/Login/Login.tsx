import { useState, startTransition, FC, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
	name: string;
	email: string;
}

const Login: FC = () => {
	const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
	const [isSubmitting, setSubmitting] = useState(false);

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		startTransition(() => {
			setSubmitting(true);

			// Simulating an asynchronous form submission
			setTimeout(() => {
				console.log(formData);

				setFormData({ name: "", email: "" });
				setSubmitting(false);
			}, 2000);
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : <Link to="/dashboard">Submit</Link>}
				</button>
			</form>
		</div>
	);
};

export default Login;
