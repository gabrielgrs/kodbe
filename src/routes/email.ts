import Elysia from 'elysia'
import { isAuthenticated } from '../middlewares/auth'

export const emailRoutes = new Elysia().use(isAuthenticated).get('/send-email', async ({ body }) => {
	return {
		body,
	}
})
