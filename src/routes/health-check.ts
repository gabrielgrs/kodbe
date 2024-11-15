import os from 'node:os'
import Elysia from 'elysia'

export const healthCheckRoutes = new Elysia()
	.get('/', () => ({ status: 'ok' }))
	.get('/info', () => {
		const cpuUsage = process.cpuUsage()
		const totalMemory = os.totalmem()
		const freeMemory = os.freemem()

		return {
			cpuUsage,
			totalMemory,
			freeMemory,
		}
	})
