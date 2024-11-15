import { Schema } from 'mongoose'
import { type DocumentSchema, generateModel } from '../helpers'

export type EmailSchema = DocumentSchema<{
	from: string
	to: string
	subject: string
	content: string
}>

const schema = new Schema<EmailSchema>(
	{
		from: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
	},
)

export const email = generateModel<EmailSchema>(schema, 'Email')
