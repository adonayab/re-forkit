import React, { Component } from "react";
import SearchResult from "./components/SearchResult";
import SearchForm from "./components/SearchForm";
import RecipeDetails from "./components/RecipeDetails";
import "./static/colors.css";
import { Container, Grid, Divider } from "semantic-ui-react";

class App extends Component {
	state = {
		recipeId: "",
		recipes: []
	};

	searchRecipes = recipes => {
		this.setState({
			recipes
		});
	};

	searchSingleRecipe = recipeId => {
		this.setState({
			recipeId
		});
	};

	render() {
		return (
			<div className="App">
				<Container>
					<Divider hidden />
					<SearchForm searchRecipes={this.searchRecipes} />
					<Grid columns="equal">
						<Grid.Row>
							<Grid.Column>
								<SearchResult
									recipes={this.state.recipes}
									searchSingleRecipe={this.searchSingleRecipe}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<h5 className="center">Second</h5>
								<RecipeDetails id={this.state.recipeId} />
							</Grid.Column>
							<Grid.Column>
								<h5>Third</h5>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
