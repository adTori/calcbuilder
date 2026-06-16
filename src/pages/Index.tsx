import { Calculator } from '@/components/Calculator';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n';

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl">🪵</span>
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">
                  CalcBuilder
                </h1>
                <p className="text-xs text-muted-foreground">{t('app.subtitle')}</p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('app.heading.part1')} <span className="text-gradient">{t('app.heading.part2')}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('app.intro')}
          </p>
        </div>

        <Calculator />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t('app.footer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
