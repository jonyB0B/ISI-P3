describe('PlayersService', function () {
  'use strict';

  describe('punishPlayer', function () {
    it('should rest 5 points to the player score with the given id', function () {
      var playerId = 1;
      spyOn(Players, 'update');

      PlayersService.punishPlayer(playerId);
      expect(Players.update.calls.argsFor(0)).toEqual([playerId, {$inc: {score: -5}}]);
    });
  });
});