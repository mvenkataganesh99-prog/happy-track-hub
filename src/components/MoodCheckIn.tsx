import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "text-wellness-secondary" },
  { emoji: "🙂", label: "Good", value: 4, color: "text-wellness-primary" },
  { emoji: "😐", label: "Okay", value: 3, color: "text-wellness-focus" },
  { emoji: "😟", label: "Low", value: 2, color: "text-wellness-accent" },
  { emoji: "😢", label: "Very Low", value: 1, color: "text-destructive" },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (selectedMood === null) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today to continue.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to a database
    const moodData = {
      mood: selectedMood,
      notes,
      date: new Date().toISOString(),
    };
    
    console.log("Saving mood check-in:", moodData);
    
    toast({
      title: "Mood recorded!",
      description: "Your daily check-in has been saved successfully.",
    });

    // Reset form
    setSelectedMood(null);
    setNotes("");
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto shadow-card">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-wellness bg-clip-text text-transparent">
          How are you feeling today?
        </h2>
        <p className="text-muted-foreground">
          Take a moment to check in with yourself. Your feelings are valid and important.
        </p>
      </div>

      {/* Mood Selection */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelectedMood(mood.value)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
              selectedMood === mood.value
                ? "bg-gradient-hero scale-110 shadow-wellness"
                : "hover:bg-muted hover:scale-105"
            }`}
          >
            <span className="text-4xl mb-2">{mood.emoji}</span>
            <span className={`text-sm font-medium ${mood.color}`}>
              {mood.label}
            </span>
          </button>
        ))}
      </div>

      {/* Notes Section */}
      <div className="mb-6">
        <label htmlFor="mood-notes" className="block text-sm font-medium mb-2">
          How was your day? (Optional)
        </label>
        <Textarea
          id="mood-notes"
          placeholder="Share what's on your mind, any challenges you faced, or positive moments from your day..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full bg-gradient-wellness text-white py-3 text-lg font-semibold rounded-lg shadow-wellness hover:shadow-lg transition-all duration-300"
      >
        Record My Mood
      </Button>
    </Card>
  );
};

export default MoodCheckIn;