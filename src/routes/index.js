import { createBrowserRouter } from 'react-router-dom'
import { anauthRoutes }  from 'modules/authenticated/routes'

export const router = createBrowserRouter([...anauthRoutes])
