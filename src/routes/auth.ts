import Elysia from 'elysia'
import { isAuthenticated } from '../middlewares/auth'

const openRoutes = new Elysia().get('/open', () => ({ hello: 'open world' }))

const protectedRoutes = new Elysia().use(isAuthenticated).get('/protected', ({ verifiedToken }) => {
	return { verifiedToken }
})

export const authRoutes = new Elysia().use(openRoutes).use(protectedRoutes)
