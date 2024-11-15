import Elysia from 'elysia'
import { authRoutes } from './auth'
import { healthCheckRoutes } from './health-check'
import { logRoutes } from './log'

export const routes = new Elysia()
	.group('/auth', (app) => app.use(authRoutes))
	// .group("/email", (app) => app.use(emailRoutes))
	.group('/logs', (app) => app.use(logRoutes))
	.group('/health-check', (app) => app.use(healthCheckRoutes))
