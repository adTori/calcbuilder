import { useState, useMemo } from 'react';
import { ProjectSelector } from './ProjectSelector';
import { DimensionInput } from './DimensionInput';
import { MaterialResults } from './MaterialResults';
import { calculateMaterials, ProjectType } from '@/lib/materials';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Calculator() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [showResults, setShowResults] = useState(false);

  const calculation = useMemo(() => {
    if (selectedProject && length && width) {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (l > 0 && w > 0) {
        return calculateMaterials(selectedProject, l, w);
      }
    }
    return null;
  }, [selectedProject, length, width]);

  const canCalculate = selectedProject && parseFloat(length) > 0 && parseFloat(width) > 0;

  const handleCalculate = () => {
    if (canCalculate) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedProject(null);
    setLength('');
    setWidth('');
    setShowResults(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {!showResults ? (
        <>
          <Card className="p-6 card-shadow">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              1. Select Your Project
            </h2>
            <ProjectSelector selected={selectedProject} onSelect={setSelectedProject} />
          </Card>

          <Card className="p-6 card-shadow">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              2. Enter Dimensions
            </h2>
            <DimensionInput
              length={length}
              width={width}
              onLengthChange={setLength}
              onWidthChange={setWidth}
            />
          </Card>

          <Button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className="w-full h-14 text-lg font-display font-semibold"
            size="lg"
          >
            Calculate Materials
          </Button>
        </>
      ) : (
        <>
          {calculation && <MaterialResults calculation={calculation} />}
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full h-12 font-display"
          >
            Start New Calculation
          </Button>
        </>
      )}
    </div>
  );
}
