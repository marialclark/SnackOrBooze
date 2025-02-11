import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	ListGroup,
	ListGroupItem,
} from 'reactstrap';

/**
 * Menu:
 *
 * Renders a list of items (snacks or drinks).
 *
 * Props:
 *  - items: array of item objects
 *  - title: string ("Snacks" or "Drinks")
 */
function Menu({ items, title }) {
	if (!items) return <p>No {title.toLowerCase()} found.</p>;

	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="fw-bold fs-3 text-center">
						{title}
					</CardTitle>
					<CardText>
						Choose from our selection of {title.toLowerCase()} below:
					</CardText>
					<ListGroup>
						{items.map((item) => (
							<Link
								to={`/${title.toLowerCase()}/${item.id}`}
								key={item.id}
							>
								<ListGroupItem>{item.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
		</section>
	);
}

export default Menu;
