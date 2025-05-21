export const authServices = {
    login: async (username: string, password: string) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        if (username && password.length >= 3) {
            const token = Date.now().toString()
            localStorage.setItem('auth-token', token)
            return token
        }
        throw new Error('Invalid credentials');
    }

}