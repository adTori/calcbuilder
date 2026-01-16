export type ProjectType = 'shed' | 'deck' | 'fence' | 'pergola' | 'gazebo' | 'doghouse';

export interface ProjectInfo {
  id: ProjectType;
  name: string;
  description: string;
  icon: string;
}

export interface MaterialItem {
  name: string;
  quantity: number;
  unit: string;
  dimensions?: string;
  notes?: string;
}

export interface MaterialCalculation {
  projectType: ProjectType;
  area: number;
  materials: MaterialItem[];
  totalWood: number; // in cubic meters
}

export const projects: ProjectInfo[] = [
  { id: 'shed', name: 'Shed', description: 'Small storage building', icon: '🏠' },
  { id: 'deck', name: 'Deck', description: 'Outdoor wooden platform', icon: '🪵' },
  { id: 'fence', name: 'Fence', description: 'Boundary enclosure', icon: '🚧' },
  { id: 'pergola', name: 'Pergola', description: 'Garden shade structure', icon: '🏛️' },
  { id: 'gazebo', name: 'Gazebo', description: 'Outdoor pavilion', icon: '⛺' },
  { id: 'doghouse', name: 'Dog House', description: 'Pet shelter', icon: '🐕' },
];

export function calculateMaterials(
  projectType: ProjectType,
  length: number,
  width: number
): MaterialCalculation {
  const area = length * width;
  const perimeter = 2 * (length + width);
  
  let materials: MaterialItem[] = [];
  let totalWood = 0;

  switch (projectType) {
    case 'shed':
      const wallHeight = 2.4; // meters
      const wallArea = perimeter * wallHeight;
      const roofArea = area * 1.2; // 20% extra for slope
      
      materials = [
        { name: 'Floor Joists', quantity: Math.ceil(area * 3), unit: 'pcs', dimensions: '50x200mm x 3m' },
        { name: 'Floor Boards', quantity: Math.ceil(area * 1.1), unit: 'm²', dimensions: '22mm thick' },
        { name: 'Wall Studs', quantity: Math.ceil(perimeter * 2.5), unit: 'pcs', dimensions: '50x100mm x 2.4m' },
        { name: 'Wall Sheathing', quantity: Math.ceil(wallArea * 1.1), unit: 'm²', dimensions: '12mm OSB' },
        { name: 'Roof Rafters', quantity: Math.ceil(length * 2), unit: 'pcs', dimensions: '50x150mm x 3m' },
        { name: 'Roof Boards', quantity: Math.ceil(roofArea), unit: 'm²', dimensions: '22mm thick' },
        { name: 'Corner Posts', quantity: 4, unit: 'pcs', dimensions: '100x100mm x 2.4m' },
      ];
      totalWood = area * 0.8 + wallArea * 0.05 + roofArea * 0.03;
      break;

    case 'deck':
      materials = [
        { name: 'Deck Boards', quantity: Math.ceil(area * 1.15), unit: 'm²', dimensions: '28x145mm', notes: '15% waste factor' },
        { name: 'Joists', quantity: Math.ceil(area * 2.5), unit: 'pcs', dimensions: '50x200mm x 3m' },
        { name: 'Bearer Beams', quantity: Math.ceil(width * 1.5), unit: 'pcs', dimensions: '100x200mm x 3m' },
        { name: 'Posts', quantity: Math.ceil((length * width) / 4), unit: 'pcs', dimensions: '100x100mm x 600mm' },
        { name: 'Screws', quantity: Math.ceil(area * 25), unit: 'pcs', dimensions: '65mm deck screws' },
        { name: 'Joist Hangers', quantity: Math.ceil(area * 2.5), unit: 'pcs', dimensions: 'For 50x200mm' },
      ];
      totalWood = area * 0.12;
      break;

    case 'fence':
      const fenceLength = perimeter;
      const fenceHeight = 1.8;
      
      materials = [
        { name: 'Fence Posts', quantity: Math.ceil(fenceLength / 2.4) + 1, unit: 'pcs', dimensions: '100x100mm x 2.4m' },
        { name: 'Horizontal Rails', quantity: Math.ceil(fenceLength / 3) * 2, unit: 'pcs', dimensions: '50x100mm x 3m' },
        { name: 'Fence Pickets', quantity: Math.ceil(fenceLength * 7), unit: 'pcs', dimensions: '22x100mm x 1.8m' },
        { name: 'Concrete', quantity: Math.ceil(fenceLength / 2.4) * 0.03, unit: 'm³', notes: 'For post footings' },
        { name: 'Screws/Nails', quantity: Math.ceil(fenceLength * 20), unit: 'pcs', dimensions: '50mm galvanized' },
      ];
      totalWood = fenceLength * fenceHeight * 0.025;
      break;

    case 'pergola':
      materials = [
        { name: 'Corner Posts', quantity: 4, unit: 'pcs', dimensions: '150x150mm x 3m' },
        { name: 'Main Beams', quantity: 2, unit: 'pcs', dimensions: `100x200mm x ${Math.ceil(length + 0.6)}m` },
        { name: 'Cross Beams', quantity: Math.ceil(length / 0.6), unit: 'pcs', dimensions: `100x150mm x ${Math.ceil(width + 0.4)}m` },
        { name: 'Rafters', quantity: Math.ceil(length * 3), unit: 'pcs', dimensions: '50x150mm' },
        { name: 'Post Brackets', quantity: 4, unit: 'pcs', dimensions: 'Heavy duty galvanized' },
        { name: 'Bolts', quantity: 16, unit: 'pcs', dimensions: '12mm x 150mm' },
      ];
      totalWood = area * 0.08;
      break;

    case 'gazebo':
      const sides = 6; // hexagonal
      const sideLength = Math.sqrt(area / (1.5 * Math.sqrt(3)));
      
      materials = [
        { name: 'Corner Posts', quantity: sides, unit: 'pcs', dimensions: '150x150mm x 2.7m' },
        { name: 'Top Plates', quantity: sides, unit: 'pcs', dimensions: `100x150mm x ${sideLength.toFixed(2)}m` },
        { name: 'Roof Rafters', quantity: sides, unit: 'pcs', dimensions: '50x150mm x 2m' },
        { name: 'Roof Sheathing', quantity: Math.ceil(area * 1.4), unit: 'm²', dimensions: '12mm plywood' },
        { name: 'Floor Joists', quantity: Math.ceil(area * 2), unit: 'pcs', dimensions: '50x200mm' },
        { name: 'Floor Decking', quantity: Math.ceil(area * 1.1), unit: 'm²', dimensions: '28mm thick' },
        { name: 'Decorative Rails', quantity: sides * 2, unit: 'pcs', dimensions: '50x50mm x 1.2m' },
      ];
      totalWood = area * 0.25;
      break;

    case 'doghouse':
      const scaledArea = Math.max(area, 0.5);
      
      materials = [
        { name: 'Floor Panel', quantity: 1, unit: 'pc', dimensions: `${(length * 100).toFixed(0)}x${(width * 100).toFixed(0)}cm x 18mm plywood` },
        { name: 'Wall Panels', quantity: 4, unit: 'pcs', dimensions: '18mm plywood', notes: 'Cut to size' },
        { name: 'Roof Panels', quantity: 2, unit: 'pcs', dimensions: '18mm plywood', notes: 'Angled cut' },
        { name: 'Frame Timber', quantity: Math.ceil(scaledArea * 8), unit: 'm', dimensions: '40x40mm' },
        { name: 'Wood Screws', quantity: Math.ceil(scaledArea * 50), unit: 'pcs', dimensions: '40mm' },
        { name: 'Roof Shingles', quantity: Math.ceil(scaledArea * 1.5), unit: 'm²', dimensions: 'Weatherproof' },
      ];
      totalWood = scaledArea * 0.15;
      break;
  }

  return {
    projectType,
    area,
    materials,
    totalWood: Math.round(totalWood * 1000) / 1000,
  };
}
