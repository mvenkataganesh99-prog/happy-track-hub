import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Music, 
  Coffee, 
  Moon, 
  Sunrise, 
  Users, 
  TreePine,
  Dumbbell 
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Mindful Morning Routine",
    description: "Start your day with 10 minutes of meditation and gratitude journaling.",
    icon: Sunrise,
    category: "Mindfulness",
    duration: "10 min",
    color: "bg-wellness-primary/10 text-wellness-primary",
  },
  {
    id: 2,
    title: "Study Break Activities",
    description: "Take short breaks every 45 minutes with stretching or deep breathing.",
    icon: Book,
    category: "Productivity",
    duration: "5 min",
    color: "bg-wellness-secondary/10 text-wellness-secondary",
  },
  {
    id: 3,
    title: "Social Connection",
    description: "Reach out to a friend or family member for a meaningful conversation.",
    icon: Users,
    category: "Social",
    duration: "15 min",
    color: "bg-wellness-accent/10 text-wellness-accent",
  },
  {
    id: 4,
    title: "Nature Walk",
    description: "Spend time outdoors to reduce stress and improve your mood naturally.",
    icon: TreePine,
    category: "Exercise",
    duration: "20 min",
    color: "bg-wellness-focus/10 text-wellness-focus",
  },
  {
    id: 5,
    title: "Relaxing Music",
    description: "Listen to calming instrumental music while studying or winding down.",
    icon: Music,
    category: "Relaxation",
    duration: "30 min",
    color: "bg-wellness-primary/10 text-wellness-primary",
  },
  {
    id: 6,
    title: "Evening Wind-down",
    description: "Create a bedtime routine with herbal tea and gentle stretching.",
    icon: Moon,
    category: "Sleep",
    duration: "25 min",
    color: "bg-wellness-secondary/10 text-wellness-secondary",
  },
];

const WellnessRecommendations = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-wellness bg-clip-text text-transparent">
          Personalized Wellness Recommendations
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Based on your mood patterns and preferences, here are some activities to boost your wellbeing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <Card 
            key={rec.id}
            className="p-6 hover:shadow-wellness transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg ${rec.color}`}>
                <rec.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{rec.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {rec.duration}
                  </Badge>
                </div>
                <Badge variant="outline" className="mb-3">
                  {rec.category}
                </Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {rec.description}
            </p>
            
            <Button 
              variant="outline" 
              className="w-full border-wellness-primary/20 hover:bg-wellness-primary/5 hover:border-wellness-primary/40 transition-all duration-300"
            >
              Try This Activity
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WellnessRecommendations;