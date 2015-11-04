HammerPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		var subscription = Meteor.subscribe('hammerList');

		return {
			loading: !subscription.ready(),
			hammers: Hammers.find({}, {sort: {createdOn: -1}}).fetch()
		};
	},

	render(){
		if (this.data.loading){
			return <p>...loading</p>
		} else{
		 return (
			 <Page>
     <HammerButton />
				 <HammerList hammers={this.data.hammers}/>
				</Page>
			)
		}
	}
});
