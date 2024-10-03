import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import CandidateLogin from './CandidateLogin';
import VoterLogin from './VoterLogin';

const LoginPage = () => (
  <Routes>
    <Route path="/admin" element={<AdminLogin />} />
    <Route path="/candidate" element={<CandidateLogin />} />
    <Route path="/voter" element={<VoterLogin />} />
  </Routes>
);

export default LoginPage;
