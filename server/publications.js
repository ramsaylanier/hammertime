Meteor.publish('hammerList', function(){
 return Hammers.find();
})
