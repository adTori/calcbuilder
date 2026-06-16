import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'sv';

type Dict = Record<string, string>;

const translations: Record<Language, Dict> = {
  en: {
    'app.subtitle': 'Material Calculator',
    'app.heading.part1': 'Calculate Your',
    'app.heading.part2': 'Building Materials',
    'app.intro': "Select your project type, enter dimensions in meters, and get an accurate list of materials you'll need.",
    'app.footer': 'All calculations use the metric system (meters, m², m³)',
    'lang.label': 'Language',

    'calc.step1': '1. Select Your Project',
    'calc.step2': '2. Enter Dimensions',
    'calc.calculate': 'Calculate Materials',
    'calc.reset': 'Start New Calculation',

    'dim.length': 'Length',
    'dim.width': 'Width',
    'dim.totalArea': 'Total Area:',

    'results.title': '{name} Materials',
    'results.forArea': 'For {area} m² area',
    'results.totalWood': 'Estimated Total Wood Volume',
    'results.disclaimer': '* Estimates include standard waste factors. Actual quantities may vary based on specific design and wood grades.',

    // Projects
    'project.shed.name': 'Shed',
    'project.shed.desc': 'Small storage building',
    'project.deck.name': 'Deck',
    'project.deck.desc': 'Outdoor wooden platform',
    'project.fence.name': 'Fence',
    'project.fence.desc': 'Boundary enclosure',
    'project.pergola.name': 'Pergola',
    'project.pergola.desc': 'Garden shade structure',
    'project.gazebo.name': 'Gazebo',
    'project.gazebo.desc': 'Outdoor pavilion',
    'project.doghouse.name': 'Dog House',
    'project.doghouse.desc': 'Pet shelter',

    // Materials
    'mat.Floor Joists': 'Floor Joists',
    'mat.Floor Boards': 'Floor Boards',
    'mat.Wall Studs': 'Wall Studs',
    'mat.Wall Sheathing': 'Wall Sheathing',
    'mat.Roof Rafters': 'Roof Rafters',
    'mat.Roof Boards': 'Roof Boards',
    'mat.Corner Posts': 'Corner Posts',
    'mat.Deck Boards': 'Deck Boards',
    'mat.Joists': 'Joists',
    'mat.Bearer Beams': 'Bearer Beams',
    'mat.Posts': 'Posts',
    'mat.Screws': 'Screws',
    'mat.Joist Hangers': 'Joist Hangers',
    'mat.Fence Posts': 'Fence Posts',
    'mat.Horizontal Rails': 'Horizontal Rails',
    'mat.Fence Pickets': 'Fence Pickets',
    'mat.Concrete': 'Concrete',
    'mat.Screws/Nails': 'Screws/Nails',
    'mat.Main Beams': 'Main Beams',
    'mat.Cross Beams': 'Cross Beams',
    'mat.Rafters': 'Rafters',
    'mat.Post Brackets': 'Post Brackets',
    'mat.Bolts': 'Bolts',
    'mat.Top Plates': 'Top Plates',
    'mat.Roof Sheathing': 'Roof Sheathing',
    'mat.Floor Decking': 'Floor Decking',
    'mat.Decorative Rails': 'Decorative Rails',
    'mat.Floor Panel': 'Floor Panel',
    'mat.Wall Panels': 'Wall Panels',
    'mat.Roof Panels': 'Roof Panels',
    'mat.Frame Timber': 'Frame Timber',
    'mat.Wood Screws': 'Wood Screws',
    'mat.Roof Shingles': 'Roof Shingles',

    // Notes
    'note.15waste': '15% waste factor',
    'note.postFootings': 'For post footings',
    'note.cutToSize': 'Cut to size',
    'note.angledCut': 'Angled cut',
  },
  sv: {
    'app.subtitle': 'Materialkalkylator',
    'app.heading.part1': 'Beräkna dina',
    'app.heading.part2': 'byggmaterial',
    'app.intro': 'Välj projekttyp, ange mått i meter och få en korrekt lista över material du behöver.',
    'app.footer': 'Alla beräkningar använder metriska systemet (meter, m², m³)',
    'lang.label': 'Språk',

    'calc.step1': '1. Välj ditt projekt',
    'calc.step2': '2. Ange mått',
    'calc.calculate': 'Beräkna material',
    'calc.reset': 'Starta ny beräkning',

    'dim.length': 'Längd',
    'dim.width': 'Bredd',
    'dim.totalArea': 'Total yta:',

    'results.title': 'Material för {name}',
    'results.forArea': 'För {area} m² yta',
    'results.totalWood': 'Uppskattad total träbeställning',
    'results.disclaimer': '* Uppskattningarna inkluderar standard spillfaktorer. Faktiska mängder kan variera beroende på design och träslag.',

    'project.shed.name': 'Bod',
    'project.shed.desc': 'Liten förvaringsbyggnad',
    'project.deck.name': 'Altan',
    'project.deck.desc': 'Utomhusplattform i trä',
    'project.fence.name': 'Staket',
    'project.fence.desc': 'Inhägnad',
    'project.pergola.name': 'Pergola',
    'project.pergola.desc': 'Skuggstruktur i trädgården',
    'project.gazebo.name': 'Lusthus',
    'project.gazebo.desc': 'Utomhuspaviljong',
    'project.doghouse.name': 'Hundkoja',
    'project.doghouse.desc': 'Skydd för husdjur',

    'mat.Floor Joists': 'Golvbjälkar',
    'mat.Floor Boards': 'Golvbrädor',
    'mat.Wall Studs': 'Väggreglar',
    'mat.Wall Sheathing': 'Väggbeklädnad',
    'mat.Roof Rafters': 'Takbjälkar',
    'mat.Roof Boards': 'Takbrädor',
    'mat.Corner Posts': 'Hörnstolpar',
    'mat.Deck Boards': 'Trallbrädor',
    'mat.Joists': 'Reglar',
    'mat.Bearer Beams': 'Bärbalkar',
    'mat.Posts': 'Stolpar',
    'mat.Screws': 'Skruvar',
    'mat.Joist Hangers': 'Balkskor',
    'mat.Fence Posts': 'Staketstolpar',
    'mat.Horizontal Rails': 'Horisontella reglar',
    'mat.Fence Pickets': 'Staketspjälor',
    'mat.Concrete': 'Betong',
    'mat.Screws/Nails': 'Skruv/Spik',
    'mat.Main Beams': 'Huvudbalkar',
    'mat.Cross Beams': 'Tvärbalkar',
    'mat.Rafters': 'Takbjälkar',
    'mat.Post Brackets': 'Stolpfästen',
    'mat.Bolts': 'Bultar',
    'mat.Top Plates': 'Hammarband',
    'mat.Roof Sheathing': 'Takbeklädnad',
    'mat.Floor Decking': 'Golvtrall',
    'mat.Decorative Rails': 'Dekorlister',
    'mat.Floor Panel': 'Golvpanel',
    'mat.Wall Panels': 'Väggpaneler',
    'mat.Roof Panels': 'Takpaneler',
    'mat.Frame Timber': 'Ramvirke',
    'mat.Wood Screws': 'Träskruvar',
    'mat.Roof Shingles': 'Takshingel',

    'note.15waste': '15 % spillfaktor',
    'note.postFootings': 'För stolpfundament',
    'note.cutToSize': 'Skuren efter mått',
    'note.angledCut': 'Vinkelskuren',
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (l: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Language | null;
      if (saved === 'en' || saved === 'sv') return saved;
    }
    return 'en';
  });

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    if (typeof window !== 'undefined') localStorage.setItem('lang', l);
  };

  const t = (key: string, vars?: Record<string, string | number>) => {
    let str = translations[language][key] ?? translations.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
