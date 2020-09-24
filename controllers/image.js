const Clarifai = require('Clarifai');

const app = new Clarifai.App({
 apiKey: '5abc0675487048098fc4a3975de745c6'
});

const handleApiCall = (req, res) => {
	app.models
		.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
		.then(dta => {
			res.json(data);
		})
		.catch(err => res.status(400).json('Unable to work API'))
}

const handleImage = (req, res, db) => {
	const { id } = req.body;
		db('users').where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			res.json(entries[0]);
		})
		.catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
	handleImage,
	handleApiCall
}