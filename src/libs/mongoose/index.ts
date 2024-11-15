import mongoose from 'mongoose'
import { event } from './schemas/event'
import { project } from './schemas/project'
import { session } from './schemas/session'
import { user } from './schemas/user'

export let databaseConnection: typeof mongoose | null = null

export const connectDatabase = async (): Promise<typeof mongoose> => {
	if (databaseConnection) return databaseConnection
	databaseConnection = await mongoose.set('strictQuery', true).connect(process.env.MONGODB_URI)
	return databaseConnection
}

connectDatabase()

export const db = { project, user, session, event }
