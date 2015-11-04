List = new React.createClass({

 render(){
  return (
   <ul className={"list " + this.props.className}>
    {this.props.children}
   </ul>
  )
 }

})
