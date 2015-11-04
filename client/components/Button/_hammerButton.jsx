HammerButton = new React.createClass({

 render(){
  return(
   <div className="hammer-button">
    <input type="text" className="hammer-name-field" placeholder="Name Your Hammer"/>
    <Button action={this.action} className="primary-btn">Add Hammer</Button>
   </div>
  )
 },

 action(){

  HTTP.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=mc+hammer', function(error,result){

   let hammerImage = result ? result.data.data.image_url : '/images/hammertime.gif';
   let hammerName = $('.hammer-name-field').val();
   Meteor.call('addHammer', hammerImage, hammerName, function(err, res){
    if (err){
     alert(err.reason)
    }
   });
  });
 }
})
