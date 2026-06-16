import { useLanguage, Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'sv', label: 'SV', flag: '🇸🇪' },
  ];

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t('lang.label')}>
      {options.map((opt) => (
        <Button
          key={opt.code}
          type="button"
          size="sm"
          variant={language === opt.code ? 'default' : 'outline'}
          onClick={() => setLanguage(opt.code)}
          className="h-8 px-2 text-xs font-semibold"
          aria-pressed={language === opt.code}
        >
          <span className="mr-1">{opt.flag}</span>
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
