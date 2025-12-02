import React from "react";
import { useParams } from "react-router-dom";

// Import your individual industry page components
import RealEstatePage from "./RealEstatePage";
import ManufacturingPage from "./ManufacturingPage";
import InteriorDesignPage from "./InteriorDesignPage";
import HealthcarePage from "./HealthcarePage";
import EducationPage from "./EducationPage";
// Simple Not Found Component (rendered if the slug doesn't match)
const NotFoundIndustry = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white font-sans">
    <div className="text-center p-8">
      <h2 className="text-5xl font-bold mb-4 text-yellow-500">404</h2>
      <p className="text-xl mb-6">Industry Not Found</p>
      <a 
        href="/industry" 
        className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-yellow-400 transition"
      >
        View All Industries
      </a>
    </div>
  </div>
);

const IndustryRouter: React.FC = () => {
  // Retrieve the dynamic 'slug' from the URL
  const { slug } = useParams<{ slug: string }>();

  // Determine which component to render
  switch (slug) {
    case "real-estate":
      return <RealEstatePage />;
    case "manufacturing":
      return <ManufacturingPage />;
    case "interior-design":
      return <InteriorDesignPage />;
    case "healthcare":
      return <HealthcarePage />;
    case "education":
      return <EducationPage />;
    default:
      return <NotFoundIndustry />;
  }
};

export default IndustryRouter;