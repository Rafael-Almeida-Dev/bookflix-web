import { LoginScreen, RegisterScreen } from '../screens'
export const anauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/signup',
    element: <RegisterScreen />
  }
]
