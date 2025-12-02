import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundIndustry: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center p-8 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Service not found</h2>
      <p className="mb-6">We couldn't find the service you're looking for.</p>
      <Link to="/endustry" className="px-4 py-2 bg-gray-200 rounded">Back to Industry</Link>
    </div>
  </div>
);

export default NotFoundIndustry;
