import React, { Component } from "react";
import SearchResult from "./components/SearchResult";
import SearchForm from "./components/SearchForm";
import "./static/colors.css";
import { Container, Grid, Divider } from "semantic-ui-react";

class App extends Component {
	state = {
		recipes: []
	};

	searchRecipes = recipes => {
		this.setState({
			recipes
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
								<SearchResult recipes={this.state.recipes} />
							</Grid.Column>
							<Grid.Column width={8}>
								<h5 className="center">Second</h5>
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
