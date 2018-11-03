import React from "react"

const Sprinkle = (props) => (
	<div className="sprinkle" style={{
		backgroundColor: getRandomElement(['red', 'green', 'blue']),
		border: `${getRandomElement([1, 2, 3])}px solid black`,
		borderRadius: getRandomElement(['50%', '0%']),
		animation: `fall ${getRandomElement([7, 8, 9, 10])}s infinite linear`,
		opacity: Math.random(),
		width: `${Math.random() * 50}px`,
		height: `${Math.random() * 50}px`,
		left: `${Math.random() * 100}vw`
	}}></div>
);

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}


export default class Sprinkles extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sprinkles: 30
		}
	}

	render() {
		const sprinkles = [];
		for (let i = 0; i < this.state.sprinkles; i++) {
			sprinkles.push(<Sprinkle key={i}></Sprinkle>);
		}

		// const sprinkles = [...Array(this.state.sprinkles).keys()].map(i => (<Sprinkle></Sprinkle>));

		return (
			<div>{sprinkles}</div>
		)
	}
}
