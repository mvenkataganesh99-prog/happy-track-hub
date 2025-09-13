import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Calendar, BarChart3 } from "lucide-react";

// Sample data - in a real app, this would come from your database
const moodData = [
  { date: "Mon", mood: 4, day: "Monday" },
  { date: "Tue", mood: 3, day: "Tuesday" },
  { date: "Wed", mood: 5, day: "Wednesday" },
  { date: "Thu", mood: 2, day: "Thursday" },
  { date: "Fri", mood: 4, day: "Friday" },
  { date: "Sat", mood: 5, day: "Saturday" },
  { date: "Sun", mood: 4, day: "Sunday" },
];

const weeklyStats = [
  { metric: "Average Mood", value: "4.1", change: "+0.3", positive: true },
  { metric: "Best Day", value: "Wed & Sat", change: "5.0", positive: true },
  { metric: "Check-ins", value: "7/7", change: "100%", positive: true },
  { metric: "Streak", value: "12 days", change: "+2", positive: true },
];

const MoodTrends = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const moodLabels = ["", "Very Low", "Low", "Okay", "Good", "Great"];
      return (
        <div className="bg-card p-3 rounded-lg shadow-lg border">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-wellness-primary">
            {`Mood: ${moodLabels[payload[0].value]} (${payload[0].value}/5)`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-wellness bg-clip-text text-transparent">
          Your Wellness Journey
        </h2>
        <p className="text-xl text-muted-foreground">
          Track your progress and discover patterns in your mental wellbeing
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeklyStats.map((stat, index) => (
          <Card key={index} className="p-4 hover:shadow-wellness transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.metric}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <Badge 
                variant={stat.positive ? "default" : "destructive"}
                className={stat.positive ? "bg-wellness-secondary/10 text-wellness-secondary" : ""}
              >
                {stat.change}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-wellness-primary" />
            <h3 className="text-xl font-semibold">Weekly Mood Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[1, 5]} stroke="hsl(var(--muted-foreground))" />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--wellness-primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-primary))", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "hsl(var(--wellness-primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Bar Chart */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-wellness-secondary" />
            <h3 className="text-xl font-semibold">Daily Mood Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[1, 5]} stroke="hsl(var(--muted-foreground))" />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="mood" 
                fill="hsl(var(--wellness-secondary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Insights */}
      <Card className="p-6 bg-gradient-hero">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-wellness-primary/10 rounded-lg">
            <Calendar className="w-6 h-6 text-wellness-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Weekly Insights</h3>
            <p className="text-muted-foreground mb-4">
              Your mood has been relatively stable this week with Wednesday and Saturday being your best days. 
              Consider what activities or circumstances contributed to these positive days.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-wellness-primary/10 text-wellness-primary">Consistent Check-ins</Badge>
              <Badge className="bg-wellness-secondary/10 text-wellness-secondary">Positive Trend</Badge>
              <Badge className="bg-wellness-focus/10 text-wellness-focus">12-day Streak</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MoodTrends;