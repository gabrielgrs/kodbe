import { Schema } from 'mongoose'
import { type DocumentSchema, generateModel } from '../helpers'

export type SessionSchema = DocumentSchema<{
	email: string
	code: string
	token: string
	expiresAt: Date
}>

const schema = new Schema<SessionSchema>(
	{
		email: {
			type: String,
			required: [true, 'Email is required'],
		},
		code: {
			type: String,
			required: [true, 'Code is required'],
		},
		token: {
			type: String,
			required: [true, 'Token is required'],
		},
		expiresAt: {
			type: Date,
			expires: 15 * 60,
			default: Date.now,
		},
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	},
)

export const session = generateModel<SessionSchema>(schema, 'Session')
