export default {
	async fetch(request, env, ctx) {
		const html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Miss You ❤️</title>

	<style>
		body {
			margin: 0;
			padding: 0;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(135deg, #ff9a9e, #fad0c4);
			font-family: 'Segoe UI', sans-serif;
			color: #fff;
			text-align: center;
		}

		.card {
			background: rgba(255, 255, 255, 0.15);
			backdrop-filter: blur(10px);
			border-radius: 20px;
			padding: 30px;
			max-width: 400px;
			box-shadow: 0 10px 30px rgba(0,0,0,0.2);
			animation: fadeIn 1.5s ease;
		}

		h1 {
			margin-bottom: 10px;
			font-size: 2.2rem;
		}

		p {
			font-size: 1.1rem;
			line-height: 1.6;
		}

		.heart {
			font-size: 2.5rem;
			animation: beat 1s infinite;
			margin: 15px 0;
		}

		button {
			margin-top: 20px;
			padding: 10px 20px;
			border: none;
			border-radius: 25px;
			background: #ff4b5c;
			color: #fff;
			font-size: 1rem;
			cursor: pointer;
			transition: 0.3s;
		}

		button:hover {
			background: #ff2e44;
			transform: scale(1.05);
		}

		@keyframes beat {
			0%, 100% { transform: scale(1); }
			50% { transform: scale(1.2); }
		}

		@keyframes fadeIn {
			from { opacity: 0; transform: translateY(20px); }
			to { opacity: 1; transform: translateY(0); }
		}
	</style>
</head>

<body>
	<div class="card">
		<h1>Miss You 😔</h1>
		<div class="heart">❤️</div>
		<p id="message">
			Sunni, I miss you yaar ummmmmmmmm!!!<br/>
			Jaldi aana, bhool mat jana 😟<br/>
			Every second without you feels incomplete.
		</p>

		<button onclick="changeText()">Click if you miss me too 🥺</button>
	</div>

	<script>
		function changeText() {
			const msg = document.getElementById("message");
			msg.innerHTML = 
				"Chahe jitni bhi doori ho ❤️<br/>" +
				"Mera dil sirf tumhare liye hi dhadakta hai.<br/>" +
				"Come back soon, I’m waiting 😘";
		}
	</script>
</body>
</html>
		`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
};
