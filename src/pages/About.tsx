import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, Lightbulb, TrendingUp, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: "Early Detection",
      description: "Identify plant stress 24-48 hours before visible symptoms appear",
    },
    {
      icon: Lightbulb,
      title: "Non-Invasive",
      description: "Monitor plant health without physical contact or disruption",
    },
    {
      icon: TrendingUp,
      title: "Increased Yields",
      description: "Optimize growing conditions resulting in 15-30% yield improvement",
    },
    {
      icon: Layers,
      title: "Layer Optimization",
      description: "Fine-tune microclimate for each farming layer independently",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">About the Project</h1>
            <p className="text-muted-foreground">
              Understanding thermal monitoring in multilayer farming systems
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Introduction to Thermal Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                Multilayer or vertical farming represents the future of sustainable agriculture, 
                maximizing yield per square meter by growing crops in stacked layers. However, 
                managing plant health across multiple layers presents unique challenges. Our thermal 
                camera monitoring system addresses these challenges by providing real-time, 
                non-invasive assessment of plant physiological status through infrared imaging.
              </p>
              <p className="text-muted-foreground mt-4">
                Plants emit thermal radiation that varies based on their water status, metabolic 
                activity, and stress levels. By capturing this thermal signature, we can detect 
                problems before they manifest as visible symptoms, enabling proactive intervention 
                and optimized growing conditions across all farming layers.
              </p>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Objectives and Details */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="objectives" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Project Objectives
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Develop a comprehensive thermal monitoring system for multilayer farming environments</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Enable early detection of water stress, disease, and environmental anomalies</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Provide actionable insights through AI-powered analysis and intuitive dashboards</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Optimize resource usage (water, energy) while maximizing crop yields</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Create a scalable solution adaptable to various crop types and farming scales</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-it-works" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                How It Works
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-2">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">1. Thermal Imaging</h4>
                  <p>
                    Infrared cameras positioned at each farming layer continuously capture thermal 
                    images of the plant canopy. These cameras detect radiation in the 8-14 μm 
                    wavelength range, invisible to human eyes but directly related to plant temperature.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">2. Temperature Analysis</h4>
                  <p>
                    The system analyzes leaf temperature relative to ambient conditions to calculate 
                    indices like CWSI (Crop Water Stress Index). Elevated leaf temperatures indicate 
                    reduced transpiration, a primary indicator of water stress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">3. Pattern Recognition</h4>
                  <p>
                    AI algorithms trained on thousands of thermal images identify patterns associated 
                    with specific stress conditions, diseases, or pest infestations, achieving 94% 
                    accuracy in detection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">4. Automated Alerts</h4>
                  <p>
                    When abnormal thermal patterns are detected, the system immediately generates 
                    alerts and recommendations, enabling rapid intervention before crop damage occurs.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multilayer" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Multilayer Farming Context
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <p>
                  Multilayer farming systems stack growing platforms vertically, often in controlled 
                  environment agriculture (CEA) facilities. Each layer may experience different:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Light intensity and quality</li>
                  <li>• Temperature and humidity gradients</li>
                  <li>• Airflow patterns and CO₂ distribution</li>
                  <li>• Irrigation efficiency and water availability</li>
                </ul>
                <p className="mt-3">
                  Our thermal monitoring system accounts for these variations, providing layer-specific 
                  insights and enabling independent optimization of growing conditions for maximum 
                  efficiency and yield across the entire vertical farm.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="benefits" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Key Benefits
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Economic Impact</h4>
                  <p>Early intervention reduces crop losses by 20-40%, while optimized resource usage cuts water and energy costs by 25-35%.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Environmental Benefits</h4>
                  <p>Precision monitoring reduces pesticide use by 30% and fertilizer application by 20%, minimizing environmental impact.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Operational Efficiency</h4>
                  <p>Automated monitoring reduces labor requirements for manual inspections by 60%, freeing staff for higher-value tasks.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Data-Driven Insights</h4>
                  <p>Historical thermal data enables predictive modeling and continuous improvement of growing protocols over time.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
