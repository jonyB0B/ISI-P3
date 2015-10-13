Meteor.call('clearDB', function(){
	Meteor.call('loadFixtures');
	Meteor.call('generateRandomPlayers');
});
