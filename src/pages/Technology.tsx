import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Camera, Database, Brain, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Technology = () => {
  const components = [
    {
      icon: Camera,
      title: "Thermal Cameras",
      description: "High-resolution infrared sensors capturing thermal variations across the electromagnetic spectrum (8-14 μm wavelength range).",
      specs: ["Resolution: 640×480 pixels", "Temperature Range: -20°C to 150°C", "Accuracy: ±2°C or ±2%"],
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Real-time processing pipeline handling continuous thermal image streams and environmental sensor data.",
      specs: ["Processing: 30 fps", "Storage: Time-series database", "API: RESTful integration"],
    },
    {
      icon: Brain,
      title: "AI Algorithms",
      description: "Machine learning models trained on thermal patterns to identify stress indicators and predict plant health outcomes.",
      specs: ["Model: CNN-based classification", "Accuracy: 94% detection rate", "Latency: <500ms inference"],
    },
    {
      icon: Settings,
      title: "Integration Setup",
      description: "Modular system architecture allowing seamless integration with existing farm management software and IoT devices.",
      specs: ["Protocols: MQTT, HTTP", "Compatibility: Industry standard", "Scalability: Multi-site deployment"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Technology Stack</h1>
            <p className="text-muted-foreground">
              Advanced thermal imaging and AI-powered analysis infrastructure
            </p>
          </div>

          {/* Technology Components */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {components.map((component, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary shrink-0">
                      <component.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle>{component.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {component.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Camera Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle>Thermal Camera Comparison</CardTitle>
              <CardDescription>Uncooled vs Cooled Sensor Technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Uncooled Cameras</TableHead>
                    <TableHead>Cooled Cameras</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sensitivity</TableCell>
                    <TableCell>0.05°C - 0.1°C</TableCell>
                    <TableCell>0.01°C - 0.02°C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Response Time</TableCell>
                    <TableCell>Fast (~10ms)</TableCell>
                    <TableCell>Very Fast (~5ms)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cost</TableCell>
                    <TableCell>Lower ($3k-$10k)</TableCell>
                    <TableCell>Higher ($15k-$50k+)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Maintenance</TableCell>
                    <TableCell>Minimal</TableCell>
                    <TableCell>Requires cooling maintenance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Best For</TableCell>
                    <TableCell>Indoor farming, continuous monitoring</TableCell>
                    <TableCell>Research, high-precision applications</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Our Choice</TableCell>
                    <TableCell className="text-secondary font-semibold">✓ Selected</TableCell>
                    <TableCell className="text-muted-foreground">—</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* System Workflow */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>System Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Image Acquisition</h4>
                    <p className="text-sm text-muted-foreground">
                      Thermal cameras capture infrared radiation emitted by plants across all farming layers every 30 seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Raw thermal data is processed to extract temperature distributions, identify hotspots, and calculate indices like CWSI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Machine learning models analyze thermal patterns to detect stress, disease, and anomalies with high accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Alert Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      System generates real-time alerts and recommendations when thresholds are exceeded or concerning patterns emerge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dashboard Visualization</h4>
                    <p className="text-sm text-muted-foreground">
                      All data and insights are presented through intuitive dashboards, enabling informed decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;
