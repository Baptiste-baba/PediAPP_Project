// App.js
import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Assurez-vous que le chemin est correct
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}