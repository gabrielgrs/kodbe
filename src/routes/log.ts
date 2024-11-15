import Elysia from 'elysia'

export const logRoutes = new Elysia().get('/get-all', () => {
	return { data: [] }
})
