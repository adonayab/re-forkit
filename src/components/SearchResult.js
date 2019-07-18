import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

class SearchResult extends Component {
	render() {
		const { recipes } = this.props;
		const recipeList = recipes.length ? (
			recipes.map(recipe => {
				return (
					<Feed key={recipe.recipe_id}>
						<Feed.Event>
							<Feed.Label>
								<img src={recipe.image_url} alt="IMG" />
							</Feed.Label>
							<Feed.Content>
								<Feed.Summary>
									<Feed.User>{recipe.title}</Feed.User>
								</Feed.Summary>
								<Feed.Meta>
									<Feed.Like>View</Feed.Like>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>
					</Feed>
				);
			})
		) : (
			<div className="center">No recipes yet</div>
		);
		return (
			<div className="container home">
				<h4 className="center">Home</h4>
				{recipeList}
			</div>
		);
	}
}

export default SearchResult;
