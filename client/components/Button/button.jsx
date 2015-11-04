Button = new React.createClass({
 render(){
  return (
   <button onClick={this.props.action} className={"btn " + this.props.className}>
    {this.props.children}
   </button>
  )
 }
})
