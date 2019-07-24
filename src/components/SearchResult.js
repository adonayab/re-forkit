import React from "react";
import { Feed, Button } from "semantic-ui-react";

const SearchResult = ({ recipes, searchSingleRecipe }) => {
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
								<Button
									onClick={() => {
										searchSingleRecipe(recipe.recipe_id);
									}}
								>
									View
								</Button>
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
};

export default SearchResult;
