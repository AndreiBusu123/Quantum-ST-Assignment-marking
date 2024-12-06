import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AssignmentMarking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    level: 'TPO01',
    assignmentNumber: ''
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Sydney Trains Assignment Marking</h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="block font-medium">First Name:</label>
              <input type="text" name="firstName" className="w-full border rounded p-2" required />
            </div>
            <div className="space-y-2">
              <label className="block font-medium">Last Name:</label>
              <input type="text" name="lastName" className="w-full border rounded p-2" required />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentMarking;