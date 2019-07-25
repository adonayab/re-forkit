import React, { Component } from "react";
import SearchResult from "./components/SearchResult";
import SearchForm from "./components/SearchForm";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/NavBar";
import "./static/colors.css";

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
				<NavBar />
				<SearchForm searchRecipes={this.searchRecipes} />
				<SearchResult
					recipes={this.state.recipes}
					searchSingleRecipe={this.searchSingleRecipe}
				/>
			</div>
		);
	}
}

export default App;

/**
 * <Grid columns="equal">
						<Grid.Column width={8}>
							<Item.Group />
						</Grid.Column>
						<Grid.Column width={8}>
							<RecipeDetails id={this.state.recipeId} />
						</Grid.Column>
					</Grid>
 */
