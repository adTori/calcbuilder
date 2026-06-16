import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/i18n';

interface DimensionInputProps {
  length: string;
  width: string;
  onLengthChange: (value: string) => void;
  onWidthChange: (value: string) => void;
}

export function DimensionInput({
  length,
  width,
  onLengthChange,
  onWidthChange,
}: DimensionInputProps) {
  const { t } = useLanguage();
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="length" className="text-sm font-medium text-foreground">
            {t('dim.length')}
          </Label>
          <div className="relative">
            <Input
              id="length"
              type="number"
              step="0.1"
              min="0.1"
              placeholder="3.0"
              value={length}
              onChange={(e) => onLengthChange(e.target.value)}
              className="pr-12 text-lg font-medium"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              m
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center pt-6">
          <span className="text-2xl font-light text-muted-foreground">×</span>
        </div>

        <div className="flex-1 space-y-2">
          <Label htmlFor="width" className="text-sm font-medium text-foreground">
            {t('dim.width')}
          </Label>
          <div className="relative">
            <Input
              id="width"
              type="number"
              step="0.1"
              min="0.1"
              placeholder="2.0"
              value={width}
              onChange={(e) => onWidthChange(e.target.value)}
              className="pr-12 text-lg font-medium"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              m
            </span>
          </div>
        </div>
      </div>

      {length && width && (
        <div className="flex items-center justify-center gap-2 p-3 bg-secondary/50 rounded-lg">
          <span className="text-sm text-muted-foreground">{t('dim.totalArea')}</span>
          <span className="font-display font-bold text-lg text-primary">
            {(parseFloat(length) * parseFloat(width)).toFixed(2)} m²
          </span>
        </div>
      )}
    </div>
  );
}
