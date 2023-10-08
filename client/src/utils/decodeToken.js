
const validateToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
        try {
            // Split the token to get the payload
            const payload = token.split(".")[1]

            // Decode the payload from Base64
            let decrypt = window.atob(payload)
            decrypt = JSON.parse(decrypt)

            // Get the current time in seconds
            const currentTime = Math.round(Date.now() / 1000);
            const expTime = decrypt.exp

            // Check if the token has expired
            if (currentTime > expTime) {
                return { loggedin: 0, username: "" }
            }

            // Token is valid
            return { loggedin: 1, username: decrypt?.username }

        } catch {
            // Error decoding or parsing the payload
            return { loggedin: 0, username: "" }
        }
    } else {
        // Token not found
        return { loggedin: 0, username: "" }
    }
}

export default validateToken
