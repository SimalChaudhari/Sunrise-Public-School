import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import AosProvider from '../components/AosProvider'
import Layout from '../components/layout/layout'
import ClassesPage from '../pages/classes'
import ContactPage from '../pages/contact'
import HomePage from '../pages/home'
import StandardsPage from '../pages/standards'
import StudentRegistrationPage from '../pages/student-registration'
import SubjectsPage from '../pages/subjects'
import TeachersPage from '../pages/teachers'
import TeacherDetailPage from '../pages/teacher-detail'

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <AosProvider /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/dashboard" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teachers/:teacherId" element={<TeacherDetailPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/standards" element={<StandardsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/student-registration" element={<StudentRegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
