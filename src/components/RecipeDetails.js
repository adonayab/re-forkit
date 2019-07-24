import React, { Component } from "react";
import axios from "axios";
import { key, proxy } from "../config";

class RecipeDetails extends Component {
	state = {
		recipe: {}
	};

	componentWillReceiveProps() {
		const { id } = this.props;
		if (id) {
			const source = `${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${id}`;
			axios.get(source).then(res => {
				console.log(res);
				this.setState({
					recipe: res.data.recipe
				});
			});
		}
	}

	render() {
		const recipe = this.state.recipe;

		return (
			<div>
				<h1>{recipe.title}</h1>
			</div>
		);
	}
}

export default RecipeDetails;
