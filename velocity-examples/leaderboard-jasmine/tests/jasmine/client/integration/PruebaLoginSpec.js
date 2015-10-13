describe("Pruebas con login y logout", function(){
	
	beforeEach(function(done){
		Meteor.loginWithPassword("pepe@gmail.com", "mipassword", function(err){
			Tracker.afterFlush(done);
		});
	});

	afterEach(function(done){
		Meteor.logout(function() {
			Tracker.afterFlush(done);
		});
	});

	it("después de login muestra input para añadir players", function(){
		console.log("entra pepe");
	});
});
