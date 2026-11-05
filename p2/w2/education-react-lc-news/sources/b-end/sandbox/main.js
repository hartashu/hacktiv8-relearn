const axios = require("axios");
// import axios from "axios";

// BACKEND GW DARI SINI:
// - https://jsonplaceholder.typicode.com/albums

// IIFE
(async () => {
	// try {
	// 	const { data } = await axios.post("http://localhost:3000/users/register", {
	// 		username: "korban",
	// 		password: "123456",
	// 	});
	// 	console.log(data);
	// } catch (err) {
	// 	console.log(err);
	// }

	try {
		const { data } = await axios.get("http://localhost:3000/smartphones", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTc0NTM4ODczNCwiZXhwIjoxNzQ1MzkyMzM0fQ.GsRMp0nUzCy5Zp8tTmRJpp8fRp763PFzNdwAHM2c6OQ",
			},
		});

		console.log(data);
	} catch (err) {
		console.log(err);
	}
})();
