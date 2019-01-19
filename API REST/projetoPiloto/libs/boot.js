module.exports = app => {
	app.listen(app.get("port"), () => {
		console.log(`Projeto Piloto API = porta ${app.get("port")}`);
	});
}