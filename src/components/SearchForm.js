import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import { key, proxy } from "../config";

class SearchForm extends Component {
	state = {
		searchKey: "",
		recipes: []
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.searchKey) {
			const source = `${proxy}https://www.food2fork.com/api/search?key=${key}&q=
					${this.state.searchKey}`;
			axios
				.get(source)
				.then(res => {
					this.setState({
						...this.state,
						recipes: res.data.recipes
					});
				})
				.then(() => {
					this.props.searchRecipes(this.state.recipes);
				});
		}
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group inline>
					<Form.Field>
						<Input
							placeholder="Recipe name"
							id="searchKey"
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button type="submit">Search</Button>
				</Form.Group>
			</Form>
		);
	}
}

export default SearchForm;
