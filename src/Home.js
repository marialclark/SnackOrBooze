import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * Home:
 *
 * Renders welcome message and shows counts of 
 * snacks and drinks.
 * 
 * Props:
 *  - snacks: array of snack objects
 *  - drinks: array of drink objects
 */
function Home({snacks, drinks}) {
  return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">
							Welcome to Silicon Valley's premier dive cafe!
						</h3>
					</CardTitle>
					<p>
						We have {snacks.length} snack{snacks.length !== 1 && 's'} and{' '}
						{drinks.length} drink{drinks.length !== 1 && 's'} available.
					</p>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
