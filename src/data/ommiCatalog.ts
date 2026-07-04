export type OmmiLineId =
  | 'dia'
  | 'noche'
  | 'piel'
  | 'firma'
  | 'regalo'
  | 'mixto'
  | 'discovery'

export type OmmiLine = {
  id: OmmiLineId
  name: string
  slug: string
  shortDescriptor: string
  olfactoryElements: string[]
  characterWords: string[]
  palette: {
    base: string
    primary: string
    secondary: string
    accent: string
    shadow: string
  }
  labelShape:
    | 'arc'
    | 'diagonal'
    | 'capsule'
    | 'seal'
    | 'ribbon'
    | 'split'
    | 'grid'
  assets: {
    bottleFront: string
    bottleBack: string
    bottleThreeQuarterLeft?: string
    bottleThreeQuarterRight?: string
    boxHint: string
    backgroundTexture?: string
  }
}

export type OmmiFragrance = {
  id: string
  number: string
  lineId: OmmiLineId
  slug: string
  family: string
  elements: string[]
  intensity: 'baja' | 'media' | 'alta'
  asset: {
    decantHorizontal: string
    bottleFront?: string
  }
}

const lineAssetPath = (lineId: OmmiLineId, fileName: string) =>
  `/ommi-assets/lines/${lineId}/${fileName}`

export const ommiLines: OmmiLine[] = [
  {
    id: 'dia',
    name: 'Día',
    slug: 'dia',
    shortDescriptor: 'Limpio, luminoso, activo',
    olfactoryElements: ['cítricos', 'té blanco', 'almizcle limpio'],
    characterWords: ['claro', 'ágil', 'fresco'],
    palette: {
      base: '#f7f1df',
      primary: '#f5c34b',
      secondary: '#7ac7b5',
      accent: '#ef7b45',
      shadow: '#53431e',
    },
    labelShape: 'arc',
    assets: {
      bottleFront: lineAssetPath('dia', 'bottle-front.webp'),
      bottleBack: lineAssetPath('dia', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('dia', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('dia', 'bottle-right.webp'),
      boxHint: lineAssetPath('dia', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('dia', 'line-texture.webp'),
    },
  },
  {
    id: 'noche',
    name: 'Noche',
    slug: 'noche',
    shortDescriptor: 'Denso, especiado, magnético',
    olfactoryElements: ['ámbar', 'cacao', 'maderas oscuras'],
    characterWords: ['intenso', 'seductor', 'profundo'],
    palette: {
      base: '#191216',
      primary: '#9b5c71',
      secondary: '#d28a43',
      accent: '#e7c07a',
      shadow: '#070507',
    },
    labelShape: 'diagonal',
    assets: {
      bottleFront: lineAssetPath('noche', 'bottle-front.webp'),
      bottleBack: lineAssetPath('noche', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('noche', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('noche', 'bottle-right.webp'),
      boxHint: lineAssetPath('noche', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('noche', 'line-texture.webp'),
    },
  },
  {
    id: 'piel',
    name: 'Piel',
    slug: 'piel',
    shortDescriptor: 'Íntimo, suave, cercano',
    olfactoryElements: ['almizcle', 'iris', 'madera cremosa'],
    characterWords: ['sutil', 'táctil', 'sereno'],
    palette: {
      base: '#efe3da',
      primary: '#c88f7a',
      secondary: '#d9b7a3',
      accent: '#7d6b63',
      shadow: '#3a2c28',
    },
    labelShape: 'capsule',
    assets: {
      bottleFront: lineAssetPath('piel', 'bottle-front.webp'),
      bottleBack: lineAssetPath('piel', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('piel', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('piel', 'bottle-right.webp'),
      boxHint: lineAssetPath('piel', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('piel', 'line-texture.webp'),
    },
  },
  {
    id: 'firma',
    name: 'Firma',
    slug: 'firma',
    shortDescriptor: 'Memorable, elegante, propio',
    olfactoryElements: ['resinas', 'bergamota', 'maderas pulidas'],
    characterWords: ['distintivo', 'preciso', 'persistente'],
    palette: {
      base: '#101716',
      primary: '#6bc5a7',
      secondary: '#d8c27a',
      accent: '#f2f0df',
      shadow: '#06100e',
    },
    labelShape: 'seal',
    assets: {
      bottleFront: lineAssetPath('firma', 'bottle-front.webp'),
      bottleBack: lineAssetPath('firma', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('firma', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('firma', 'bottle-right.webp'),
      boxHint: lineAssetPath('firma', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('firma', 'line-texture.webp'),
    },
  },
  {
    id: 'regalo',
    name: 'Regalo',
    slug: 'regalo',
    shortDescriptor: 'Seguro, amable, celebrable',
    olfactoryElements: ['frutas suaves', 'flores blancas', 'vainilla ligera'],
    characterWords: ['generoso', 'redondo', 'accesible'],
    palette: {
      base: '#f5edf3',
      primary: '#d66c96',
      secondary: '#87b7d8',
      accent: '#f2b84b',
      shadow: '#4f2a3a',
    },
    labelShape: 'ribbon',
    assets: {
      bottleFront: lineAssetPath('regalo', 'bottle-front.webp'),
      bottleBack: lineAssetPath('regalo', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('regalo', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('regalo', 'bottle-right.webp'),
      boxHint: lineAssetPath('regalo', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('regalo', 'line-texture.webp'),
    },
  },
  {
    id: 'mixto',
    name: 'Mixto',
    slug: 'mixto',
    shortDescriptor: 'Flexible, compartido, cambiante',
    olfactoryElements: ['pimienta rosa', 'cedro', 'cítrico verde'],
    characterWords: ['versátil', 'moderno', 'nítido'],
    palette: {
      base: '#18201d',
      primary: '#7aa873',
      secondary: '#8aa6c9',
      accent: '#f0d06d',
      shadow: '#07100b',
    },
    labelShape: 'split',
    assets: {
      bottleFront: lineAssetPath('mixto', 'bottle-front.webp'),
      bottleBack: lineAssetPath('mixto', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('mixto', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('mixto', 'bottle-right.webp'),
      boxHint: lineAssetPath('mixto', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('mixto', 'line-texture.webp'),
    },
  },
  {
    id: 'discovery',
    name: 'Discovery',
    slug: 'discovery',
    shortDescriptor: 'Explorar antes de elegir',
    olfactoryElements: ['muestras', 'contrastes', 'familias'],
    characterWords: ['curioso', 'comparativo', 'guiado'],
    palette: {
      base: '#111318',
      primary: '#7e91d6',
      secondary: '#d8a761',
      accent: '#e8e5d7',
      shadow: '#05060a',
    },
    labelShape: 'grid',
    assets: {
      bottleFront: lineAssetPath('discovery', 'bottle-front.webp'),
      bottleBack: lineAssetPath('discovery', 'bottle-back.webp'),
      bottleThreeQuarterLeft: lineAssetPath('discovery', 'bottle-left.webp'),
      bottleThreeQuarterRight: lineAssetPath('discovery', 'bottle-right.webp'),
      boxHint: lineAssetPath('discovery', 'box-hint.webp'),
      backgroundTexture: lineAssetPath('discovery', 'line-texture.webp'),
    },
  },
]

export const ommiFragrances: OmmiFragrance[] = [
  {
    id: 'n12-dia-citrico-verde',
    number: '12',
    lineId: 'dia',
    slug: 'n12-citrico-verde',
    family: 'Cítrico verde',
    elements: ['lima', 'té blanco', 'cedro claro'],
    intensity: 'baja',
    asset: { decantHorizontal: '/ommi-assets/decants/n12-dia-citrico-verde.webp' },
  },
  {
    id: 'n18-dia-floral-limpio',
    number: '18',
    lineId: 'dia',
    slug: 'n18-floral-limpio',
    family: 'Floral limpio',
    elements: ['neroli', 'jazmín suave', 'almizcle'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n18-dia-floral-limpio.webp' },
  },
  {
    id: 'n44-noche-dulce-especiado',
    number: '44',
    lineId: 'noche',
    slug: 'n44-dulce-especiado',
    family: 'Dulce especiado',
    elements: ['cardamomo', 'cacao', 'ámbar'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n44-noche-dulce-especiado.webp' },
  },
  {
    id: 'n57-noche-cuero-amaderado',
    number: '57',
    lineId: 'noche',
    slug: 'n57-cuero-amaderado',
    family: 'Cuero amaderado',
    elements: ['cuero', 'pachuli', 'haba tonka'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n57-noche-cuero-amaderado.webp' },
  },
  {
    id: 'n23-piel-almizcle-cremoso',
    number: '23',
    lineId: 'piel',
    slug: 'n23-almizcle-cremoso',
    family: 'Almizcle cremoso',
    elements: ['iris', 'almizcle', 'sándalo'],
    intensity: 'baja',
    asset: { decantHorizontal: '/ommi-assets/decants/n23-piel-almizcle-cremoso.webp' },
  },
  {
    id: 'n31-piel-te-suave',
    number: '31',
    lineId: 'piel',
    slug: 'n31-te-suave',
    family: 'Té suave',
    elements: ['té verde', 'violeta', 'madera blanca'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n31-piel-te-suave.webp' },
  },
  {
    id: 'n81-firma-ambarado-luminoso',
    number: '81',
    lineId: 'firma',
    slug: 'n81-ambarado-luminoso',
    family: 'Ambarado luminoso',
    elements: ['ámbar', 'vainilla', 'resinas'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n81-firma-ambarado-luminoso.webp' },
  },
  {
    id: 'n40-firma-aromatico-amaderado',
    number: '40',
    lineId: 'firma',
    slug: 'n40-aromatico-amaderado',
    family: 'Aromático amaderado',
    elements: ['bergamota', 'salvia', 'maderas pulidas'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n40-firma-aromatico-amaderado.webp' },
  },
  {
    id: 'n06-regalo-frutal-suave',
    number: '06',
    lineId: 'regalo',
    slug: 'n06-frutal-suave',
    family: 'Frutal suave',
    elements: ['pera', 'peonía', 'vainilla ligera'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n06-regalo-frutal-suave.webp' },
  },
  {
    id: 'n72-regalo-floral-redondo',
    number: '72',
    lineId: 'regalo',
    slug: 'n72-floral-redondo',
    family: 'Floral redondo',
    elements: ['flores blancas', 'durazno', 'almizcle'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n72-regalo-floral-redondo.webp' },
  },
  {
    id: 'n33-mixto-verde-mineral',
    number: '33',
    lineId: 'mixto',
    slug: 'n33-verde-mineral',
    family: 'Verde mineral',
    elements: ['pimienta rosa', 'hojas verdes', 'cedro'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n33-mixto-verde-mineral.webp' },
  },
  {
    id: 'n68-mixto-especiado-seco',
    number: '68',
    lineId: 'mixto',
    slug: 'n68-especiado-seco',
    family: 'Especiado seco',
    elements: ['jengibre', 'vetiver', 'madera seca'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n68-mixto-especiado-seco.webp' },
  },
  {
    id: 'set-discovery-inicial',
    number: '01',
    lineId: 'discovery',
    slug: 'set-inicial',
    family: 'Set inicial',
    elements: ['día', 'piel', 'firma'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/set-discovery-inicial.webp' },
  },
  {
    id: 'set-discovery-intenso',
    number: '02',
    lineId: 'discovery',
    slug: 'set-intenso',
    family: 'Set intenso',
    elements: ['noche', 'firma', 'mixto'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/set-discovery-intenso.webp' },
  },
]

export const getLineById = (lineId: OmmiLineId) => {
  const line = ommiLines.find((candidate) => candidate.id === lineId)

  if (!line) {
    throw new Error(`Unknown OMMI line id: ${lineId}`)
  }

  return line
}

export const getLineBySlug = (slug: string) =>
  ommiLines.find((line) => line.slug === slug)

export const getFragrancesByLine = (lineId: OmmiLineId) =>
  ommiFragrances.filter((fragrance) => fragrance.lineId === lineId)

export const getFragranceBySlug = (lineSlug: string, fragranceSlug: string) => {
  const line = getLineBySlug(lineSlug)

  if (!line) {
    return undefined
  }

  return ommiFragrances.find(
    (fragrance) =>
      fragrance.lineId === line.id && fragrance.slug === fragranceSlug,
  )
}

export const getLineRoute = (line: OmmiLine) =>
  line.id === 'discovery' ? '/sets/discovery' : `/perfumes/${line.slug}`
