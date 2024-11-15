import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { routes } from './routes'

const app = new Elysia()
	.use(
		swagger({
			documentation: {
				info: {
					title: 'Swagger',
					description: 'Description',
					version: '0.0.1',
				},
			},
		}),
	)
	.onError(({ code, set, error }) => {
		set.status = Number(code)
		return {
			code,
			message: (error as { response?: string }).response || 'Internal Server Error',
		}
	})
	.group('/api', (app) => app.use(routes))
	.listen(3000)

if (app.server) {
	const { hostname, port } = app.server
	// biome-ignore lint/suspicious/noConsoleLog:
	console.log(`🦊 Elysia is running at ${hostname}:${port}`)
}

export type AppType = typeof app
