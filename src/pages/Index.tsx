import { Calculator } from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl">🪵</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">
                CalcBuilder
              </h1>
              <p className="text-xs text-muted-foreground">Material Calculator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Calculate Your <span className="text-gradient">Building Materials</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Select your project type, enter dimensions in meters, and get an accurate list of materials you'll need.
          </p>
        </div>

        <Calculator />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground">
            All calculations use the metric system (meters, m², m³)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
