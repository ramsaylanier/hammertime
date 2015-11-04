Page = React.createClass({

	componentDidMount(){
			//aniamte page on load
			let item = $(this.getDOMNode(this.refs.page));
			TweenMax.fromTo(page, .5, {
				opacity: 0
			}, {
				opacity: 1,
				ease: Power4.easeOut
			} )
	},

	render(){
		let styles = {
			backgroundImage: "url('" + this.props.backgroundImage + "')",
		}

		let children = this.props.children;
		return(
			<div ref="page" className={"page " + this.props.className} style={styles}>
				{children}
			</div>
		)
	}

});
