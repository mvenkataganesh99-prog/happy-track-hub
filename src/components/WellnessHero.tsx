import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Brain, TrendingUp } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

const WellnessHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${wellnessHero})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-wellness bg-clip-text text-transparent">
              Your Wellness Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track your daily mood, discover personalized wellness insights, and build healthier mental habits with our comprehensive student wellness platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-wellness-primary/20 shadow-wellness hover:shadow-lg transition-all duration-300">
              <Heart className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Daily Check-ins</h3>
              <p className="text-muted-foreground">Track your mood and emotions with simple, intuitive daily assessments</p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-wellness-secondary/20 shadow-wellness hover:shadow-lg transition-all duration-300">
              <Brain className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Insights</h3>
              <p className="text-muted-foreground">Get personalized wellness recommendations based on your patterns</p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-wellness-accent/20 shadow-wellness hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">Visualize your wellness journey with beautiful charts and trends</p>
            </Card>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-wellness text-white px-8 py-6 text-lg font-semibold rounded-full shadow-wellness hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Wellness Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WellnessHero;