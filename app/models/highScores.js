var mongoose = require('mongoose');

var highScoresSchema = new mongoose.Schema({
	name: {
		  type: String,
		  required: true
	},
	score: {
		type: Number,
		required:true
	}
});

var HighScores = module.exports = mongoose.model('highScores', highScoresSchema);

// get highScoress
module.exports.getHighScores = function(callback, limit) {
	HighScores.find(callback).limit(limit);
};

// add high Score
module.exports.addHighScore = function(hScore, callback) {
	HighScores.create(hScore, callback);
};
