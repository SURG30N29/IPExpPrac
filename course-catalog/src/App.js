import React from 'react';
import CourseCatalog from './components/CourseCatalog.js';
import ContactForm from './components/ContactForm.js';

function App() {
  return (
    <div className="App">
      <h1>Online Course Catalog</h1>
      <CourseCatalog />
      <ContactForm />
    </div>
  );
}

export default App;
