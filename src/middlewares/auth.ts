import jwt from '@elysiajs/jwt'
import Elysia, { t } from 'elysia'
import schemas from '../libs/mongoose'

export const isAuthenticated = new Elysia()
	.use(
		jwt({
			name: 'jwt',
			secret: process.env.JWT_SECRET,
			schema: t.Object({
				projectId: t.String(),
				userId: t.String(),
			}),
		}),
	)
	.derive({ as: 'global' }, async ({ error, jwt, headers: { authorization = '' } }) => {
		const [, token] = authorization.split('Bearer ')
		const verifiedToken = await jwt.verify(token)

		if (!verifiedToken) return error('Unauthorized', 'Unauthorized access')

		return {
			verifiedToken,
		}
	})

export const getProjectData = new Elysia().use(isAuthenticated).derive({ as: 'global' }, async ({ verifiedToken }) => {
	const project = await schemas.project.findOne({ _id: verifiedToken.projectId })
	return { project }
})
