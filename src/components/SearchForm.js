import React, { Component } from "react";
import axios from "axios";
import { key, proxy } from "../config";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {} from "@material-ui/core";
import {} from "@material-ui/icons/Navigation";
import FormGroup from "@material-ui/core/FormGroup";

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
					console.log(res);

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<FormGroup row>
						<TextField
							style={{ padding: 24 }}
							id="searchKey"
							placeholder="Search Recipes"
							margin="normal"
							onChange={this.handleChange}
						/>
						<Button size="small" type="submit">
							Search
						</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default SearchForm;
