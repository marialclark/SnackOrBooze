import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

/**
 * Item:
 *
 * Renders details for a snack or drink & redirects if not found.
 *
 * Props:
 *  - items: array of item objects (snacks or drinks)
 *  - cantFind: route to redirect if item isn't found
 */
function Item({ items, cantFind }) {
	const { id } = useParams();
	const item = items.find((item) => item.id === id);

	if (!item)
		return (
			<Navigate
				to={cantFind}
				replace
			/>
		);

	return (
		<section>
			<Card>
				<CardBody>
					<CardTitle className="fw-bold fs-3 text-center">
						{item.name}
					</CardTitle>
					<CardText className="font-italic">{item.description}</CardText>
					<p>
						<b>Recipe:</b> {item.recipe}
					</p>
					<p>
						<b>Serve:</b> {item.serve}
					</p>
				</CardBody>
			</Card>
		</section>
	);
}

export default Item;
