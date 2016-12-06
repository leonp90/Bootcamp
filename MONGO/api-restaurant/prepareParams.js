function prepareParams(req, res, next) {

	let { fields } = req.query;

	if (fields) {

		const projection = fields.split(',').reduce( (oProj, field) => {
			oProj[field] = 1;
			return oProj;
		}, {} )

		req.projection = projection;
	}

	next()
}

module.exports = prepareParams