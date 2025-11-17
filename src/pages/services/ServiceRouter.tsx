import React from "react";
import { useParams } from "react-router-dom";

import SocialMediaMarketing from "./SocialMediaMarketing";
import GraphicsDesigning from "./GraphicsDesigning";
import VideoProduction from "./VideoProduction";
import PerformanceMarketing from "./PerformanceMarketing";
import WebsiteDevelopment from "./WebsiteDevelopment";
import EcommerceDevelopment from "./EcommerceDevelopment";
import SEOService from "./SEOService";
import NotFoundService from "./NotFoundService";
import StrategyConsulting from "./strategy-consulting";
import AEOptimization from "./AEOptimization";
import PlatformListingOptimization from "./PLO";
import MediaBuyingPlanning from "./MediaBuyingPlanning";
import EmailWhatsAppMarketing from "./EmailWhatsAppMarketing";
const ServiceRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  switch (slug) {
    case "strategy-consulting":
      return <StrategyConsulting />;
    case "social-media-marketing":
      return <SocialMediaMarketing />;
    case "graphics-designing":
      return <GraphicsDesigning />;
    case "video-production":
      return <VideoProduction />;
    case "performance-marketing":
      return <PerformanceMarketing />;
    case "website-development":
      return <WebsiteDevelopment />;
    case "ecommerce-development":
      return <EcommerceDevelopment />;
    case "search-engine-optimization":
      return <SEOService />;
    case "answer-engine-optimization":
      return <AEOptimization />;
    case "Platform-Listing-Optimization":
      return <PlatformListingOptimization />;
    case "media-buying-planning":
      return <MediaBuyingPlanning />;
    case "email-whatsapp-marketing":
      return <EmailWhatsAppMarketing />;
    default:
      return <NotFoundService />;
  }
};

export default ServiceRouter;
