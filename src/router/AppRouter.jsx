import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { ProtectedRoutes } from './ProtectedRoutes';


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login" element={<LoginPage />} />


         <Route path="/*" element={
          <ProtectedRoutes>
            <Routes>
            <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
          </ProtectedRoutes>
        } />



        {/* <Route path="/*" element={
          <ProtectedRoutes>
            <HeroesRoutes />
          </ProtectedRoutes>
        } /> */}

      </Routes>

    </>
  )
}