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
			return (
				<div className="loading">
					<img src="/images/hammertime.gif"/>
				</div>
			)
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
