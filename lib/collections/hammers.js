Hammers = new Mongo.Collection('hammers');

Meteor.methods({
 addHammer: function(hammerImage, hammerName){
  console.log(hammerName);
  if (!hammerName){
   throw new Meteor.Error(422, 'Please name your Hammmmmmer.')
  }

  check(hammerName, String);
  check(hammerImage, String);

  return Hammers.insert({image: hammerImage, name: hammerName, createdOn: new Date()});
 }
})
