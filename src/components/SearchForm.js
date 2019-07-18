import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

function SearchForm() {
	return (
		<Form>
			<Form.Group inline>
				<Form.Field>
					<Input placeholder="Recipe name" />
				</Form.Field>
				<Button type="submit">Search</Button>
			</Form.Group>
		</Form>
	);
}

// Accessing state in the redux store
const mapStateToProps = state => {
	return {};
};

export default connect()(SearchForm);
