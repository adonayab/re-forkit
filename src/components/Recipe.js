import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const shortenTitle = (title, limit = 17) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(" ").reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);
		return `${newTitle.join(" ")} ...`;
	}
	return title;
};

const Recipe = ({ recipe }) => {
	return (
		<div>
			{recipe ? (
				<Card>
					<CardMedia
						style={{ height: 0, paddingTop: "56.25%" }}
						image={recipe.image_url}
						title={recipe.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="subtitle1">
							{shortenTitle(recipe.title)}
						</Typography>
						<Typography component="p">Directions</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							Ingredients
						</Button>
					</CardActions>
				</Card>
			) : null}
		</div>
	);
};

export default Recipe;

/** 
<Card key={recipe.recipe_id}>
  <Image src={recipe.image_url} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{recipe.title}</Card.Header>
    <Card.Meta>
      <span className="date">Publisher | {recipe.publisher}</span>
    </Card.Meta>
    <Card.Description>
      <span>
        <a href={recipe.source_url}>directions</a>
      </span>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <Button
      size="mini"
      onClick={() => {
        searchSingleRecipe(recipe.recipe_id);
      }}
    >
      Ingredients
    </Button>
  </Card.Content>
</Card>

*/
