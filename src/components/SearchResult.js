import React from "react";
import Grid from "@material-ui/core/Grid";
import Recipe from "./Recipe";

const SearchResult = ({ recipes, searchSingleRecipe }) => {
	return (
		<div>
			{recipes.length ? (
				<Grid container spacing={2} style={{ padding: 24 }}>
					{recipes.map(recipe => (
						<Grid item xs={6} sm={3} lg={2} xl={2} key={recipe.recipe_id}>
							<Recipe recipe={recipe} />
						</Grid>
					))}
				</Grid>
			) : null}
		</div>
	);
};

export default SearchResult;
