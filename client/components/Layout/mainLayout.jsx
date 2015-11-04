MainLayout = React.createClass({
	render(){

		return (
			<div className="application">

				<Header className="app-header">
					<div className="title-container">
						<p className="title"></p>
					</div>
				</Header>

				<main>
					{this.props.content}
				</main>
			</div>
		)
	}
});
