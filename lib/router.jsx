//basic routing using kadira:flow-router and kadira:react-layout package
//renders a MainLayout component and passes in a page as a property
FlowRouter.route('/', {
	action: function(){
		ReactLayout.render(MainLayout, {
			content: <HammerPage/>
		})
	}
})
