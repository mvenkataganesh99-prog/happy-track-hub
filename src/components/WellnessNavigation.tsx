import { Button } from "@/components/ui/button";
import { Heart, BarChart3, Lightbulb, User } from "lucide-react";

interface WellnessNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: "hero", label: "Home", icon: Heart },
  { id: "checkin", label: "Check-in", icon: Heart },
  { id: "trends", label: "Trends", icon: BarChart3 },
  { id: "recommendations", label: "Wellness Tips", icon: Lightbulb },
];

const WellnessNavigation = ({ activeSection, onSectionChange }: WellnessNavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-wellness rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-wellness bg-clip-text text-transparent">
              WellnessHub
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center gap-2 px-4 ${
                  activeSection === item.id 
                    ? "bg-gradient-wellness text-white shadow-wellness" 
                    : "hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Profile */}
          <Button variant="ghost" size="sm" className="p-2">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default WellnessNavigation;