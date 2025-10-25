import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Camera className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold">ThermoFarm Monitor</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Thermal Monitoring System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
