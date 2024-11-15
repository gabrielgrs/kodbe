import { Schema } from 'mongoose'
import { type DocumentSchema, generateModel } from '../helpers'

export type ProjectSchema = DocumentSchema<{
	name: string
	apiKeys: string[]
	createdAt: Date
	updatedAt: Date
}>

const schema = new Schema<ProjectSchema>(
	{
		name: {
			type: String,
			required: true,
		},
		apiKeys: [String],
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	},
)

export const project = generateModel<ProjectSchema>(schema, 'Project')
