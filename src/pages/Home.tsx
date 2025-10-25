import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Eye, AlertTriangle, Activity, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: "Non-Invasive Monitoring",
      description: "Continuous observation without disturbing plant growth",
    },
    {
      icon: AlertTriangle,
      title: "Early Stress Detection",
      description: "Identify water stress and diseases before visible symptoms",
    },
    {
      icon: Camera,
      title: "24/7 Observation",
      description: "Round-the-clock thermal imaging for comprehensive monitoring",
    },
    {
      icon: Activity,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms for precise health assessment",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-primary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-white/10 p-2">
                <img 
                  src="/logo.png" 
                  alt="AgroTherm Monitor Logo" 
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Thermal Camera Monitoring for Multilayer Farming
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Advanced thermal imaging technology to monitor plant health, detect stress, 
              and optimize crop yields in vertical farming environments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  View Live Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/reports">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                  View Reports
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground text-lg">
              Our innovative thermal monitoring system leverages cutting-edge infrared technology 
              to provide real-time insights into plant health across multiple farming layers. 
              By detecting temperature variations invisible to the human eye, we enable early 
              intervention for water stress, diseases, and environmental anomalies.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Real-Time Monitoring Dashboard</h2>
              <p className="text-muted-foreground">
                Access comprehensive thermal data and analytics at a glance
              </p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700">
                  {/* Simulated Thermal Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-400/20 to-yellow-300/10"></div>
                  
                  {/* Temperature Overlay */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono">
                    Live Feed: 28.9°C
                  </div>
                  
                  {/* Plant Zones Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-2/3 h-2/3">
                      <div className="bg-green-500/20 border-2 border-green-400 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-xs font-bold">Layer 1</div>
                          <div className="text-xs">Healthy</div>
                        </div>
                      </div>
                      <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-xs font-bold">Layer 2</div>
                          <div className="text-xs">Warning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold">LIVE</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <Link to="/dashboard">
                <Button size="lg">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
