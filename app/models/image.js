
var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
	userImages: [{ 
		img_id: {
			  type: String,
			  required: true
		},
		category: {
			type: String,
			required:true
		}
	}]
});

var Images = module.exports = mongoose.model('Images', imageSchema);


// get images

module.exports.getImages = function(callback, limit) {
	Images.find(callback).limit(limit);
};