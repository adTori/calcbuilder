import { MaterialCalculation, projects } from '@/lib/materials';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

interface MaterialResultsProps {
  calculation: MaterialCalculation;
}

const NOTE_KEYS: Record<string, string> = {
  '15% waste factor': 'note.15waste',
  'For post footings': 'note.postFootings',
  'Cut to size': 'note.cutToSize',
  'Angled cut': 'note.angledCut',
};

export function MaterialResults({ calculation }: MaterialResultsProps) {
  const { t } = useLanguage();
  const project = projects.find((p) => p.id === calculation.projectType);
  const projectName = project ? t(`project.${project.id}.name`) : '';

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <span className="text-4xl">{project?.icon}</span>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">
            {t('results.title', { name: projectName })}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t('results.forArea', { area: calculation.area.toFixed(2) })}
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        {calculation.materials.map((material, index) => {
          const name = t(`mat.${material.name}`);
          const noteKey = material.notes ? NOTE_KEYS[material.notes] : undefined;
          const note = noteKey ? t(noteKey) : material.notes;
          return (
            <Card
              key={index}
              className="p-4 bg-card border border-border hover:border-primary/30 transition-colors duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{name}</h4>
                  {material.dimensions && (
                    <p className="text-sm text-muted-foreground">{material.dimensions}</p>
                  )}
                  {note && (
                    <p className="text-xs text-primary/70 mt-1">{note}</p>
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
          );
        })}
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">{t('results.totalWood')}</span>
          <span className="font-display text-2xl font-bold text-primary">
            {calculation.totalWood} m³
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {t('results.disclaimer')}
        </p>
      </div>
    </div>
  );
}
