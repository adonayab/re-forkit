import React, { Component } from "react";
import axios from "axios";
import { key, proxy } from "../config";

class SearchResult extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		const source = `${proxy}https://www.food2fork.com/api/search?key=${key}&q=
					pasta`;
		axios.get(source).then(res => {
			console.log(res);

			this.setState({
				posts: res.data.recipes
			});
		});
	}

	render() {
		const posts = this.state.posts;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="ui comments" key={post.recipe_id}>
						<div className="comment">
							<div className="avatar">
								<img src={post.image_url} alt="IMG" />
							</div>
							<div className="content">
								<a href="/" className="author">
									{post.title}
								</a>
								<div className="metadata">
									<span className="date" />
								</div>
								<div className="text" />
								<div className="actions">
									<a href="/" className="reply">
										View
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No posts yet</div>
		);
		return (
			<div className="container home">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		);
	}
}

export default SearchResult;
