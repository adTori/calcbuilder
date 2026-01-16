import { MaterialCalculation, projects } from '@/lib/materials';
import { Card } from '@/components/ui/card';

interface MaterialResultsProps {
  calculation: MaterialCalculation;
}

export function MaterialResults({ calculation }: MaterialResultsProps) {
  const project = projects.find((p) => p.id === calculation.projectType);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <span className="text-4xl">{project?.icon}</span>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">
            {project?.name} Materials
          </h3>
          <p className="text-sm text-muted-foreground">
            For {calculation.area.toFixed(2)} m² area
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        {calculation.materials.map((material, index) => (
          <Card
            key={index}
            className="p-4 bg-card border border-border hover:border-primary/30 transition-colors duration-200"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{material.name}</h4>
                {material.dimensions && (
                  <p className="text-sm text-muted-foreground">{material.dimensions}</p>
                )}
                {material.notes && (
                  <p className="text-xs text-primary/70 mt-1">{material.notes}</p>
                )}
              </div>
              <div className="text-right">
                <span className="font-display text-xl font-bold text-primary">
                  {material.quantity}
                </span>
                <span className="text-sm text-muted-foreground ml-1">{material.unit}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Estimated Total Wood Volume</span>
          <span className="font-display text-2xl font-bold text-primary">
            {calculation.totalWood} m³
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          * Estimates include standard waste factors. Actual quantities may vary based on specific design and wood grades.
        </p>
      </div>
    </div>
  );
}
