import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Card,
	CardBody,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
} from 'reactstrap';
import slugify from 'slugify';
import SnackOrBoozeApi from './Api';
import './NewItemForm.css';

/**
 * NewItemForm:
 * - Allows user to add a new snack or drink.
 * - On submit, POSTs to the chosen category and redirects.
 * - Displays an error message if the submission fails.
 */
function NewItemForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		type: 'snacks',
		name: '',
		description: '',
		recipe: '',
		serve: '',
	});
	const [error, setError] = useState(null);

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((f) => ({ ...f, [name]: value }));
	}

	async function handleSubmit(evt) {
		evt.preventDefault();
		try {
			// Generate a slug for the new item's id
			const id = slugify(formData.name, { lower: true });
			const newItem = {
				id,
				name: formData.name,
				description: formData.description,
				recipe: formData.recipe,
				serve: formData.serve,
			};
			// Log the new item for debugging purposes
			console.log('Submitting new item:', newItem);
			await SnackOrBoozeApi.addItem(formData.type, newItem);
			setError(null);
			navigate(`/${formData.type}`);
		} catch (err) {
			console.error('Error creating item:', err);
			setError('Error creating item. Please try again.');
		}
	}

	return (
		<section className="col-md-6">
			<Card className="mt-4">
				<CardBody>
					<h3 className="text-center">Add a New Item</h3>
					{error && <p className="NewItemForm-error">{error}</p>}
					<Form onSubmit={handleSubmit}>
						<FormGroup>
							<Label htmlFor="type">Category</Label>
							<Input
								type="select"
								name="type"
								id="type"
								value={formData.type}
								onChange={handleChange}
								autoComplete="off"
							>
								<option value="snacks">Snack</option>
								<option value="drinks">Drink</option>
							</Input>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								name="name"
								placeholder="Item name"
								value={formData.name}
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="description">Description</Label>
							<Input
								id="description"
								name="description"
								placeholder="Description"
								value={formData.description}
								onChange={handleChange}
								autoComplete="off"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="recipe">Recipe</Label>
							<Input
								id="recipe"
								name="recipe"
								placeholder="Recipe instructions"
								value={formData.recipe}
								onChange={handleChange}
								autoComplete="off"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="serve">Serve</Label>
							<Input
								id="serve"
								name="serve"
								placeholder="Serving instructions"
								value={formData.serve}
								onChange={handleChange}
								autoComplete="off"
							/>
						</FormGroup>

						<Button color="primary">Add Item</Button>
					</Form>
				</CardBody>
			</Card>
		</section>
	);
}

export default NewItemForm;
