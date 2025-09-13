import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import WellnessHero from "@/components/WellnessHero";
import WellnessNavigation from "@/components/WellnessNavigation";
import MoodCheckIn from "@/components/MoodCheckIn";
import MoodTrends from "@/components/MoodTrends";
import WellnessRecommendations from "@/components/WellnessRecommendations";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "hero":
        return <WellnessHero />;
      case "checkin":
        return (
          <div className="min-h-screen bg-gradient-calm py-16">
            <div className="container mx-auto px-4">
              <MoodCheckIn />
            </div>
          </div>
        );
      case "trends":
        return (
          <div className="min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
              <MoodTrends />
            </div>
          </div>
        );
      case "recommendations":
        return (
          <div className="min-h-screen bg-gradient-calm py-16">
            <div className="container mx-auto px-4">
              <WellnessRecommendations />
            </div>
          </div>
        );
      default:
        return <WellnessHero />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      {renderActiveSection()}
      <Toaster />
    </div>
  );
};

export default Index;
