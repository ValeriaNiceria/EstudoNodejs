module.exports = app => {
	const Tasks = app.models.tasks;

	app.get("/", (req, res) => {
		res.json({status: "Projeto Piloto API"})
	});

	app.get("/task", (req, res) => {
		Tasks.findAll({}, (tasks) => {
			res.json({tasks: tasks});
		});
	});
};