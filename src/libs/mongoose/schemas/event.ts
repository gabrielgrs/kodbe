import { Schema } from 'mongoose'
import { type DocumentSchema, generateModel } from '../helpers'

export type EventSchema = DocumentSchema<{
	message: string
	type: string
	metadata?: Record<string, unknown>
}>

const schema = new Schema<EventSchema>(
	{
		message: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		metadata: {
			type: Schema.Types.Mixed,
			default: {},
		},
	},
	{
		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
	},
)

export const event = generateModel(schema, 'Event')
