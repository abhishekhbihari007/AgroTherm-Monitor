import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Bug, Thermometer, Wind, Leaf, Beaker, Activity, Eye, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Parameters = () => {

  const parameters = [
    {
      icon: Droplets,
      title: "Plant Water Stress & Transpiration Rates",
      description: "Monitor leaf/canopy temperature (Tc) and calculate Crop Water Stress Index (CWSI) for early water deficit detection",
      currentValue: "CWSI: 0.45 | Tc-Ta: 2.8°C",
      status: "warning",
      details: "Leaf temperature increases when plants close stomata due to water stress. CWSI normalizes data for environmental variations.",
      technicalDetails: "• Leaf/Canopy Temperature (Tc) monitoring\n• Leaf-to-Air Temperature Difference (Tc-Ta)\n• CWSI calculation for quantitative water stress measurement\n• Early detection before visible wilting symptoms"
    },
    {
      icon: Bug,
      title: "Disease & Pest Detection",
      description: "Identify localized temperature anomalies indicating fungal infections, viral diseases, or pest infestations",
      currentValue: "No anomalies detected",
      status: "healthy",
      details: "Thermal imaging detects presymptomatic temperature changes in affected plant tissues before visible symptoms appear.",
      technicalDetails: "• Localized temperature anomaly detection\n• Presymptomatic disease identification\n• Viral infection thermal signature analysis\n• Pest infestation metabolic impact monitoring"
    },
    {
      icon: Thermometer,
      title: "Heat Stress Monitoring",
      description: "Direct measurement of elevated leaf/canopy temperatures indicating heat-induced stress conditions",
      currentValue: "Canopy: 31.2°C | Ambient: 25.0°C",
      status: "healthy",
      details: "High leaf temperatures indicate heat stress, enabling adjustments in environmental control systems.",
      technicalDetails: "• Direct canopy temperature measurement\n• Heat stress threshold monitoring (>32°C)\n• Environmental control system integration\n• Ventilation and cooling optimization"
    },
    {
      icon: Wind,
      title: "Stomatal Conductance Assessment",
      description: "Infer stomatal aperture and gas exchange efficiency through leaf temperature analysis",
      currentValue: "0.78 mol/m²/s | Transpiration: 1.95 mm/h",
      status: "healthy",
      details: "Changes in leaf temperature directly correlate with stomatal aperture, indicating gas exchange and water use efficiency.",
      technicalDetails: "• Stomatal aperture inference from temperature\n• Gas exchange efficiency monitoring\n• Water use efficiency assessment\n• CO₂ uptake optimization"
    },
    {
      icon: Leaf,
      title: "Environmental Microclimate Analysis",
      description: "Identify temperature gradients and microclimate variations across multilayer farming system",
      currentValue: "Layer 1-4: Δ4.3°C | Humidity: 68%",
      status: "healthy",
      details: "Thermal imaging reveals ventilation, humidity, and light distribution variations across different layers.",
      technicalDetails: "• Layer-to-layer temperature gradient analysis\n• Ventilation pattern identification\n• Humidity distribution mapping\n• Light intensity correlation"
    },
    {
      icon: Beaker,
      title: "Nutrient Deficiency Detection",
      description: "Detect thermal patterns associated with nitrogen and mineral deficiencies affecting plant metabolism",
      currentValue: "Normal metabolic profile",
      status: "healthy",
      details: "Severe nutrient deficiencies impact plant metabolism and water relations, leading to detectable temperature changes.",
      technicalDetails: "• Metabolic activity thermal signature analysis\n• Nitrogen deficiency impact on transpiration\n• Mineral deficiency secondary indicators\n• Plant metabolism correlation"
    },
    {
      icon: Activity,
      title: "24/7 Continuous Monitoring",
      description: "Round-the-clock thermal imaging capability without illumination requirements",
      currentValue: "Active monitoring",
      status: "healthy",
      details: "Thermal cameras operate continuously day and night, providing uninterrupted data collection and early warning systems.",
      technicalDetails: "• Non-illumination dependent operation\n• Continuous data collection (30-second intervals)\n• Night-time monitoring capability\n• Uninterrupted stress detection"
    },
    {
      icon: Eye,
      title: "Spatial Heterogeneity Analysis",
      description: "Reveal temperature variations across entire canopy and within individual leaves",
      currentValue: "Multi-scale analysis active",
      status: "healthy",
      details: "Thermal imaging captures localized stress areas that might be missed by other monitoring methods.",
      technicalDetails: "• Canopy-wide temperature mapping\n• Individual leaf thermal analysis\n• Localized stress area identification\n• Spatial resolution optimization"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Monitored Parameters</h1>
            <p className="text-muted-foreground">
              Comprehensive thermal imaging analysis for plant health assessment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parameters.map((param, index) => (
              <Card key={index} className="card-hover border-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary shrink-0">
                      <param.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge className={
                      param.status === 'healthy' ? 'status-healthy' :
                      param.status === 'warning' ? 'status-warning' : 'status-critical'
                    }>
                      {param.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{param.title}</CardTitle>
                  <CardDescription>{param.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Current Reading:</span>
                      <span className="font-semibold text-primary">{param.currentValue}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{param.details}</p>
                    <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <h4 className="text-sm font-semibold text-primary mb-2">Technical Implementation:</h4>
                      <div className="text-xs text-muted-foreground whitespace-pre-line">
                        {param.technicalDetails}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Thermal Monitoring Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Our thermal imaging system leverages infrared radiation detection to provide non-invasive, 
                  real-time monitoring of plant physiological status in multilayer farming environments. 
                  The system detects temperature variations that manifest before visible symptoms appear, 
                  enabling early intervention and optimized resource utilization.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Camera Type:</strong> Uncooled thermal cameras (VOx detectors)</li>
                      <li>• <strong>Sensitivity:</strong> 0.2°C temperature difference detection</li>
                      <li>• <strong>Resolution:</strong> 640×480 pixels per layer</li>
                      <li>• <strong>Lenses:</strong> Germanium (Ge) lenses for IR transmission</li>
                      <li>• <strong>Wavelength:</strong> 8-14 μm infrared spectrum</li>
                      <li>• <strong>Calibration:</strong> Automatic temperature calibration</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Measurement Frequency</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Thermal Imaging:</strong> Every 30 seconds</li>
                      <li>• <strong>CWSI Calculations:</strong> Every 5 minutes</li>
                      <li>• <strong>Environmental Data:</strong> Continuous logging</li>
                      <li>• <strong>Alert Generation:</strong> Immediate threshold breach</li>
                      <li>• <strong>Data Storage:</strong> 24/7 continuous recording</li>
                      <li>• <strong>Analysis:</strong> Real-time AI processing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Key Advantages of Thermal Monitoring</h4>
                  <div className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
                    <div>• <strong>Non-invasive:</strong> No physical contact with plants</div>
                    <div>• <strong>Early Detection:</strong> Pre-symptomatic stress identification</div>
                    <div>• <strong>24/7 Operation:</strong> No illumination requirements</div>
                    <div>• <strong>Spatial Resolution:</strong> Canopy-wide and leaf-level analysis</div>
                    <div>• <strong>Quantitative Data:</strong> Precise temperature measurements</div>
                    <div>• <strong>Environmental Integration:</strong> Microclimate analysis</div>
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

export default Parameters;
