import { createBrowserRouter } from 'react-router-dom'
import { anauthRoutes } from 'modules/unauthenticated/routes'
import { authRoutes } from 'modules/authenticated/routes'

export const router = createBrowserRouter([...anauthRoutes, ...authRoutes])
