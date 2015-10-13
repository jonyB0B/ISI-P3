describe('punishPlayer', function () {
    it('should rest 5 points to the player score with the given id', function () {
      var playerId = 1;
      spyOn(Players, 'update');

      PlayersService.punishPlayer(playerId);
      expect(Players.update.calls.argsFor(0)).toEqual([playerId, {$inc: {score: -5}}]);
    });
  });
describe('addPlayer', function () {
    it('should add a player given name and score', function () {
      var name = "pepe";
      spyOn(Players, 'insert');

      PlayersService.addPlayer(name);
      expect(Players.insert.calls.argsFor(0)).toEqual([{name: name, score: 0}]);
    });
  });
describe('removePlayer', function () {
    it('should remove a player given name', function () {
      var name = "Grace Hopper";
      spyOn(Players, 'remove');

      PlayersService.removePlayer(name);
      expect(Players.remove.calls.argsFor(0)).toEqual([name]);
    });
  });