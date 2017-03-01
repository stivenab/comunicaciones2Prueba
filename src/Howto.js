Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
	create: function() {
		var sprite = this.add.sprite(0, 0, 'screen-howtoplay');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 0.6, false);
		this.buttonContinue = this.add.button(730, 0, 'go', this.startGame, this);
	},
	startGame: function() {
		this.game.state.start('Game');
	}
};
