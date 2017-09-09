const pkl1 = process.env.PKL1;
const pkl2 = process.env.PKL2;
const pkl3 = process.env.PKL3;
const pkl4 = process.env.PKL4;
const pkl5 = process.env.PKL5;
const pkl6 = "NMkOgqvpEUM28Brx996JZntPHcYQXRBnxkkCjIGfU3/R0uKckUFvAYJrLI0S24ef";
const pkl7 = "Q1Avg9B9AgMBAAECggEACns0nuuGxuQT+L9bdrV/QrlhZVBZcw7WJmLZpD8xKewb";
const pkl8 = "HrXx4nJ4mWS2RuvBo9VD6DAldQauftPROcnezhKLM2vZSZkkqBsLOETVvTq+F1XZ";
const pkl9 = "+YrurpSqmyrmQRMQrUwdIFSJfGpEtd0HYMP7Wo1YHlAOmKbRERoARGentTSNRque";
const pkl10 = "6n74d+kc67bIcYQecCJTebv8bm0EuiyKueHT/o4xzywhKg0K7vLV4LCIaUq4uhuU";
const pkl11 = "6A59BKAYCmSP8U49/f+FG6F/2MhnE+OetG7NebglU/tR/tTnNPrnJPp2ZVU42HwG";
const pkl12 = "GUwX2sf4qvW1E14NHiad9tspyABJ/fC7dwcU6W+8gQKBgQDq4FF+38yDwBYkv7/H";
const pkl13 = "K/VLcfLhcpdjt6PAwjbP7jcgJCA/2XdTrJ/xX1x9hhsQnSbfboTUmB/rCAqhn8uk";
const pkl14 = "HEA/qIa+qOrITEYIwEmsKi4sEOqeLUGQ75bL723IdJe71V8zAyiIxlQ16UNqpITM";
const pkl15 = "NMYJC3gJyDm3mkrX9UX4ZkPxsQKBgQDNa6ANAqaazBiPB342etM8jTb628AYrII3";
const pkl16 = "yMC8bdqa2MyC2oHUyUkjjunnwRAtPqpHWKJh+Z2ACNsTE/Qz/6MInFicAZG+s/O3";
const pkl17 = "/NeXuk56l0A2qEQ9jMpUZqFpTb5QEbktI6eM5h5MiRVHKK8H7ADgEHs88dicj42L";
const pkl18 = "M/7Yeb1SjQKBgAsLpYl76NhBTklIIzKwpIZ5w1xK0UfFORQ1jfJVV45RZJrcFTqA";
const pkl19 = "Ib1uKKFWjytG2K8lOWXuCYI6DJXxN9ht46+as0uAEhp9S8XZlR1dlnJIEWCC7FRu";
const pkl20 = "j/7jMZx9ry0MKb/yZBOakBdA8wSu2/fme3GtcmWzXtN9lAt342R9GrDhAoGADSYd";
const pkl21 = "eZe42GHGFKmzH4OfL9oOMeKNGkc4kp+MDsOtYYoNFTctZlR4FQmZ2VbXVT4Uojp/";
const pkl22 = "MmxK854df8wgLo/nfK6dUWccUCuupxFNL44iZeB2oMkGjTYM4XgsTtRGIVPxGX2V";
const pkl23 = "xQQZ3mZL8WEeSxCFQdJsQQtuBR9/PPDYGD06rCUCgYEAt/VVnrX0vpwfOl0xx/lq";
const pkl24 = "Hb12iYbwdyF12DJqUhX3/Mc8Ov+nGRIyOJZiM+EVmEaIypqfB+VvzUz36h0LARKB";
const pkl25 = "N+DhPgiQe6tKHu4cbIFGZ48PQ8bjcfT8b1UiG+IDfarG9mjrvdo5B5ujhvyoig5T";
const pkl26 = "mcOUS99UQVrLSmULZZwnKgU=";



module.exports = {
	"type": "service_account",
	"project_id": "voting-app-9a2b1",
	"private_key_id": "4620d74309b3c80719c68aa4aae495de3f979291", //stored in heroku
	"private_key": `-----BEGIN PRIVATE KEY-----
			${pkl1}
			${pkl2}
			${pkl3}
			${pkl4}
			${pkl5}
			${pkl6}
			${pkl7}
			${pkl8}
			${pkl9}
			${pkl10}
			${pkl11}
			${pkl12}
			${pkl13}
			${pkl14}
			${pkl15}
			${pkl16}
			${pkl17}
			${pkl18}
			${pkl19}
			${pkl20}
			${pkl21}
			${pkl22}
			${pkl23}
			${pkl24}
			${pkl25}
			${pkl26}
-----END PRIVATE KEY-----
		`, //stored in heroku
	"client_email": "firebase-adminsdk-eo9zs@voting-app-9a2b1.iam.gserviceaccount.com",
	"client_id": "107222254891823127170", //stored in heroku
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://accounts.google.com/o/oauth2/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eo9zs%40voting-app-9a2b1.iam.gserviceaccount.com"
}


// module.exports = {
//   "type": "service_account",
//   "project_id": "voting-app-9a2b1",
//   "private_key_id": "5c8c6a7483a6d7a8c33af144dd12c97b1d9c0dce",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7PiA6hMjPqVfk\n3uPkviS0dCbyPiAVfxR8QNrBJwSm6WFQoIGgLUiRXF+x8h9SNkjvwcAfbF/6/DVi\n1EwMQv00Oo5KPxPcJPi9I2XVX1rt+unUuFLhaMaUGaVi5WYyW9YT06UND16oW7Ki\nK0YVwl9rYSQMTJGfJsbWykC+3FMsq2hf7/DXomNtqIsd8mgl83xhy/8EcttkI/Vn\nHU1EeR2DeELv69LYmRFaZz+DQFiA9gF4qS+pYY2IDswDnuBbF4AHWlC7/JQ0gPhN\nRtnQrPlTX+pkj/7lrGzq2RqhzxZ7TYDybMqJWFeZWhlR9JX2zePYI2tPNmCUqLs0\nEx92Yyz5AgMBAAECggEADVm8e4pXNR31HeUEk8fjnxg/D1D9rFAKJQ03a8Pn8YIS\nGxPEBP3llDO6wQSAq4siVTICjFsHrEIfs63BGbNhvBUcFdAnOYWgqf+5oDvzJE/F\nLL0ob65ZplqpGlg9RVmbSyub3kavxZ+lfimeuX4em+3qX5QgDUclsKVCy45dwdam\n3xy94IzkeWPs1Q+ULapnjw1gD4xTW0uo6WyWGSDl9or3xIFpsrX8UuwB62uf3tpg\n2N1/asXUJMGS/RHZkuu/wG75sehrbQ4qcCrMEcLvmqlTru8F9x1kFFP9Av1B5wRL\niBPZ9WPMmwkX/ZcN7nE1oi+cBiu6OLHvM1pHp4XY9wKBgQDxhxLyXnukQvIdeeng\njMzK5Ya0KCdk78PquK8I4YpjSwl65tI4RgacFx78uhy3p70qLJOJB3vgtlLbi2tP\nMziBhlAsBQhkeTQFElXZgZi3vJdc1ZjPOY8oAqwvNVzU+iVUZhNc1ZRYeoNBvPjt\n3cyZBo/9KE31JDnS682hXR6qPwKBgQDGdlhOUwP5sFjmBZnHQP0iyrLbETtxghkM\nLvAGCez/JuofElueDcEyWSs70FBFZU+vNXU1GoUMafy+06C1aI3d41RL8mqaiS+O\n9wza/PczRD6taSAZAuILm7znGMskFEeZfE3GkXAfEau79du3SEkjaCEcQsU59F1Y\nbeHbY8GqxwKBgCupFjS3/bPQ4kGP00ZjTXX0DeitRYnKiej5X7LESqbuXpVX+nJv\nviwjRde7sQtGCD0Cd90SfEM/0jSbvFdB1Bod9IowkrbO7idojBpYggnczqPafNgg\n+I7sBMI37EMXwP3DwgZLGZjw9J9CkOE28hBLjmXeDlGdLdLCC5b65VszAoGBAJRg\nBDNCo3U4n64RP+AVOWuaic94ea2qK1nNecu5/gLgsCbczbxD4k3nFoiYfHr1fHas\ni91Q32nhj4GHrN4TtgTPIcXKDmNM705+a5EJkTM18XoqX0HzwtYU8E0CX1WxB7q7\nkVZEg8PmrTNQY50KoQuknSSI0vU6OdOUC0i/sxofAoGAFsJiJ2zz7BvWQYfAJ7Ha\npy/jeQhRvME43rKSnalLq8thKzSb1ODwbmCsbz+2zGkWwaDJuhkorkWVrWuzW9bn\nco9UX1wbgC0x6+Hf25DQlI35pfXrebJxoiGcyzGb2Wzsz824cl2hRjnV7eIpr4J5\nm1yD4G0hcyK7zRx7dKXkHuA=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-eo9zs@voting-app-9a2b1.iam.gserviceaccount.com",
//   "client_id": "107222254891823127170",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://accounts.google.com/o/oauth2/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eo9zs%40voting-app-9a2b1.iam.gserviceaccount.com"
// }