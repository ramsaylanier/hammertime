HammerList = new React.createClass({

  render(){

    // this is passed in from HammerPage - we only get data from top level components and let it flow down.
    let hammers = this.props.hammers;

    //loop through each object in hammers and render the HammerItem component
    return (
      <List className="hammer-list">
        {hammers.map( hammer => {
          return(
            <HammerItem key={hammer._id} hammer={hammer} />
          )
        })}
      </List>
    )
  }
})


HammerItem = new React.createClass({
  componentDidMount(){
    //lets animate these when the get rendered!
    let count = Session.get('itemCount') || 0;
    Session.set('itemCount', count + 1);

    let item = $(React.findDOMNode(this.refs.item));
    let delay = (count % 6) / 20;

    TweenMax.fromTo(item, 1, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      ease: Power4.easeInOut,
      delay: delay
    })
  },

  render(){
    let style = {
      backgroundImage: "url('" + this.props.hammer.image + "')"
    }

    return(
      <li ref="item" style={style} className="hammer-item">
        <h2 className="hammer-name">{this.props.hammer.name}</h2>
      </li>
    )
  }
})
