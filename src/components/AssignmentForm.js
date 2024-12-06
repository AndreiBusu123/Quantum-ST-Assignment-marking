import React, { useState } from 'react';

const AssignmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    level: 'TPO01',
    assignmentNumber: ''
  });

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Assignment Upload</h1>
      <form className="space-y-4">
        {/* Form fields */}
      </form>
    </div>
  );
};

export default AssignmentForm;