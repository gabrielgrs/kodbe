import { type Model, type ObjectId, type Schema, model, models } from 'mongoose'

export function generateModel<T>(schema: Schema, name: string) {
	const currentModel = models?.[name] as Model<T>
	return currentModel || model<T>(name, schema)
}

export type DocumentSchema<T> = T & {
	_id: ObjectId
	createdAt: Date
	updatedAt: Date
}
