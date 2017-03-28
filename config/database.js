module.exports = {
	database : process.env.DATABASEURL || "mongodb://localhost/mean-app",
	secret : 'yoursecret',
	port: 3000
};