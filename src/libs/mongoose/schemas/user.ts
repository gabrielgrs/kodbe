import { Schema, type Types } from 'mongoose'
import { type DocumentSchema, generateModel } from '../helpers'

const status = ['EMAIL_VERIFICATION', 'ONBOARDING', 'FINISHED'] as const
export type Status = (typeof status)[number]

const roles = ['ADMIN', 'MEMBER'] as const
export type Role = (typeof roles)[number]

export type Project = {
	project: Types.ObjectId
	role: Role
	password?: string
	status: Status
	blocked: boolean
}

export type UserSchema = DocumentSchema<{
	name: string
	email: string
	projects: Project[]
}>

const schema = new Schema<UserSchema>(
	{
		name: String,
		email: String,
		projects: [
			{
				project: {
					type: Schema.Types.ObjectId,
					ref: 'Project',
					required: true,
				},
				role: { type: String, enum: roles },
				password: { type: String, required: false, select: false },
				status: { type: String, enum: status },
				blocked: { type: Boolean, default: false },
			},
		],
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	},
)

export const user = generateModel<UserSchema>(schema, 'User')
