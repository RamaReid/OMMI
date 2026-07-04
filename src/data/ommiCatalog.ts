export type OmmiLineId =
  | 'dia'
  | 'noche'
  | 'piel'
  | 'firma'
  | 'regalo'
  | 'mixto'
  | 'discovery'

export type OmmiEntryId = OmmiLineId

export type OmmiAudience = 'masculino' | 'femenino' | 'unisex'

export type OmmiLine = {
  id: OmmiEntryId
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
    bottleLeft: string
    bottleRight: string
    boxHint: string
    lineTexture: string
    bottleThreeQuarterLeft?: string
    bottleThreeQuarterRight?: string
    backgroundTexture?: string
  }
}

export type OmmiFragrance = {
  id: string
  number: string
  lineId: OmmiEntryId
  primaryEntryId: OmmiEntryId
  entryIds: OmmiEntryId[]
  audience: OmmiAudience
  slug: string
  family: string
  referenceName: string
  referenceBrand: string
  shortDescription: string
  useCases: string[]
  inspirationText: string
  elements: string[]
  intensity: 'baja' | 'media' | 'alta'
  asset: {
    decantHorizontal: string
    bottleFront?: string
  }
}

const lineAssetPath = (entryId: OmmiEntryId, fileName: string) =>
  `/ommi-assets/lines/${entryId}/${fileName}`

const buildLineAssets = (entryId: OmmiEntryId): OmmiLine['assets'] => {
  const bottleLeft = lineAssetPath(entryId, 'bottle-left.webp')
  const bottleRight = lineAssetPath(entryId, 'bottle-right.webp')
  const lineTexture = lineAssetPath(entryId, 'line-texture.webp')

  return {
    bottleFront: lineAssetPath(entryId, 'bottle-front.webp'),
    bottleBack: lineAssetPath(entryId, 'bottle-back.webp'),
    bottleLeft,
    bottleRight,
    boxHint: lineAssetPath(entryId, 'box-hint.webp'),
    lineTexture,
    bottleThreeQuarterLeft: bottleLeft,
    bottleThreeQuarterRight: bottleRight,
    backgroundTexture: lineTexture,
  }
}

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
    assets: buildLineAssets('dia'),
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
    assets: buildLineAssets('noche'),
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
    assets: buildLineAssets('piel'),
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
    assets: buildLineAssets('firma'),
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
    assets: buildLineAssets('regalo'),
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
    assets: buildLineAssets('mixto'),
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
    assets: buildLineAssets('discovery'),
  },
]

const fragrance = (
  fragranceData: Omit<OmmiFragrance, 'lineId' | 'entryIds'> & {
    entryIds?: OmmiEntryId[]
  },
): OmmiFragrance => ({
  ...fragranceData,
  lineId: fragranceData.primaryEntryId,
  entryIds: fragranceData.entryIds ?? [fragranceData.primaryEntryId],
})

export const ommiFragrances: OmmiFragrance[] = [
  fragrance({
    id: 'n12-dia-citrico-verde',
    number: '12',
    primaryEntryId: 'dia',
    entryIds: ['dia', 'mixto'],
    audience: 'unisex',
    slug: 'n12-citrico-verde',
    family: 'Cítrico verde',
    referenceName: 'Neroli Portofino',
    referenceBrand: 'Tom Ford',
    shortDescription: 'Salida limpia, cítrica y translúcida.',
    useCases: ['día', 'trabajo', 'clima templado'],
    inspirationText: 'Un cítrico de bordes suaves que abre sin invadir.',
    elements: ['lima', 'té blanco', 'cedro claro'],
    intensity: 'baja',
    asset: { decantHorizontal: '/ommi-assets/decants/n12-dia-citrico-verde.webp' },
  }),
  fragrance({
    id: 'n18-dia-floral-limpio',
    number: '18',
    primaryEntryId: 'dia',
    entryIds: ['dia', 'regalo'],
    audience: 'femenino',
    slug: 'n18-floral-limpio',
    family: 'Floral limpio',
    referenceName: 'Chance Eau Tendre',
    referenceBrand: 'Chanel',
    shortDescription: 'Floral aireado con fondo pulcro.',
    useCases: ['oficina', 'salidas diurnas', 'regalo'],
    inspirationText: 'Una lectura luminosa, amable y cercana.',
    elements: ['neroli', 'jazmín suave', 'almizcle'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n18-dia-floral-limpio.webp' },
  }),
  fragrance({
    id: 'n44-noche-dulce-especiado',
    number: '44',
    primaryEntryId: 'noche',
    entryIds: ['noche', 'firma'],
    audience: 'masculino',
    slug: 'n44-dulce-especiado',
    family: 'Dulce especiado',
    referenceName: 'Ombre Leather',
    referenceBrand: 'Tom Ford',
    shortDescription: 'Ámbar oscuro con pulso especiado.',
    useCases: ['noche', 'salida', 'clima frío'],
    inspirationText: 'Construido para sentirse denso y memorable.',
    elements: ['cardamomo', 'cacao', 'ámbar'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n44-noche-dulce-especiado.webp' },
  }),
  fragrance({
    id: 'n57-noche-cuero-amaderado',
    number: '57',
    primaryEntryId: 'noche',
    entryIds: ['noche', 'mixto'],
    audience: 'masculino',
    slug: 'n57-cuero-amaderado',
    family: 'Cuero amaderado',
    referenceName: 'Tuscan Leather',
    referenceBrand: 'Tom Ford',
    shortDescription: 'Cuero seco con madera oscura.',
    useCases: ['noche', 'eventos', 'invierno'],
    inspirationText: 'Una pieza firme, con estructura y presencia.',
    elements: ['cuero', 'pachuli', 'haba tonka'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n57-noche-cuero-amaderado.webp' },
  }),
  fragrance({
    id: 'n23-piel-almizcle-cremoso',
    number: '23',
    primaryEntryId: 'piel',
    entryIds: ['piel', 'dia'],
    audience: 'unisex',
    slug: 'n23-almizcle-cremoso',
    family: 'Almizcle cremoso',
    referenceName: 'Musc Ravageur',
    referenceBrand: 'Frederic Malle',
    shortDescription: 'Piel limpia con cremosidad discreta.',
    useCases: ['uso diario', 'after shower', 'capas'],
    inspirationText: 'Está pensado para quedar pegado a la piel sin ruido.',
    elements: ['iris', 'almizcle', 'sándalo'],
    intensity: 'baja',
    asset: { decantHorizontal: '/ommi-assets/decants/n23-piel-almizcle-cremoso.webp' },
  }),
  fragrance({
    id: 'n31-piel-te-suave',
    number: '31',
    primaryEntryId: 'piel',
    audience: 'femenino',
    slug: 'n31-te-suave',
    family: 'Té suave',
    referenceName: 'Philosykos',
    referenceBrand: 'Diptyque',
    shortDescription: 'Té verde, violeta y madera blanca.',
    useCases: ['día', 'oficina', 'clima cálido'],
    inspirationText: 'Más cercano a lo íntimo que a lo proyectivo.',
    elements: ['té verde', 'violeta', 'madera blanca'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n31-piel-te-suave.webp' },
  }),
  fragrance({
    id: 'n81-firma-ambarado-luminoso',
    number: '81',
    primaryEntryId: 'firma',
    entryIds: ['firma', 'noche'],
    audience: 'unisex',
    slug: 'n81-ambarado-luminoso',
    family: 'Ambarado luminoso',
    referenceName: 'Baccarat Rouge 540',
    referenceBrand: 'Maison Francis Kurkdjian',
    shortDescription: 'Ámbar pulido con brillo limpio.',
    useCases: ['firma', 'evento', 'noche'],
    inspirationText: 'Busca una impresión reconocible, no pesada.',
    elements: ['ámbar', 'vainilla', 'resinas'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n81-firma-ambarado-luminoso.webp' },
  }),
  fragrance({
    id: 'n40-firma-aromatico-amaderado',
    number: '40',
    primaryEntryId: 'firma',
    entryIds: ['firma', 'mixto'],
    audience: 'masculino',
    slug: 'n40-aromatico-amaderado',
    family: 'Aromático amaderado',
    referenceName: 'Santal 33',
    referenceBrand: 'Le Labo',
    shortDescription: 'Aromático seco con madera pulida.',
    useCases: ['firma', 'día', 'oficina'],
    inspirationText: 'Una pieza de estructura limpia y persistente.',
    elements: ['bergamota', 'salvia', 'maderas pulidas'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n40-firma-aromatico-amaderado.webp' },
  }),
  fragrance({
    id: 'n06-regalo-frutal-suave',
    number: '06',
    primaryEntryId: 'regalo',
    audience: 'femenino',
    slug: 'n06-frutal-suave',
    family: 'Frutal suave',
    referenceName: 'Aventus for Her',
    referenceBrand: 'Creed',
    shortDescription: 'Fruta limpia con fondo amable.',
    useCases: ['regalo', 'día', 'uso casual'],
    inspirationText: 'Pensado para gustar rápido y sin fricción.',
    elements: ['pera', 'peonía', 'vainilla ligera'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n06-regalo-frutal-suave.webp' },
  }),
  fragrance({
    id: 'n72-regalo-floral-redondo',
    number: '72',
    primaryEntryId: 'regalo',
    entryIds: ['regalo', 'piel'],
    audience: 'femenino',
    slug: 'n72-floral-redondo',
    family: 'Floral redondo',
    referenceName: "J'adore",
    referenceBrand: 'Dior',
    shortDescription: 'Floral clásico con contorno suave.',
    useCases: ['regalo', 'celebración', 'evento diurno'],
    inspirationText: 'Busca ser reconocible y fácil de elegir.',
    elements: ['flores blancas', 'durazno', 'almizcle'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n72-regalo-floral-redondo.webp' },
  }),
  fragrance({
    id: 'n33-mixto-verde-mineral',
    number: '33',
    primaryEntryId: 'mixto',
    entryIds: ['mixto', 'dia'],
    audience: 'unisex',
    slug: 'n33-verde-mineral',
    family: 'Verde mineral',
    referenceName: "Terre d'Hermes",
    referenceBrand: 'Hermès',
    shortDescription: 'Verde seco con aire mineral.',
    useCases: ['día', 'trabajo', 'media estación'],
    inspirationText: 'Una lectura limpia de contraste y tensión.',
    elements: ['pimienta rosa', 'hojas verdes', 'cedro'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/n33-mixto-verde-mineral.webp' },
  }),
  fragrance({
    id: 'n68-mixto-especiado-seco',
    number: '68',
    primaryEntryId: 'mixto',
    entryIds: ['mixto', 'noche'],
    audience: 'masculino',
    slug: 'n68-especiado-seco',
    family: 'Especiado seco',
    referenceName: 'Spicebomb',
    referenceBrand: 'Viktor&Rolf',
    shortDescription: 'Especiado seco con textura moderna.',
    useCases: ['noche', 'salida', 'otoño/invierno'],
    inspirationText: 'Construido para sostener presencia sin saturar.',
    elements: ['jengibre', 'vetiver', 'madera seca'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/n68-mixto-especiado-seco.webp' },
  }),
  fragrance({
    id: 'set-discovery-inicial',
    number: '01',
    primaryEntryId: 'discovery',
    audience: 'unisex',
    slug: 'set-inicial',
    family: 'Set inicial',
    referenceName: 'Discovery Set Inicio',
    referenceBrand: 'OMMI',
    shortDescription: 'Selección de arranque.',
    useCases: ['exploración', 'comparación', 'primer contacto'],
    inspirationText: 'Agrupa una entrada corta para empezar a decidir.',
    elements: ['día', 'piel', 'firma'],
    intensity: 'media',
    asset: { decantHorizontal: '/ommi-assets/decants/set-discovery-inicial.webp' },
  }),
  fragrance({
    id: 'set-discovery-intenso',
    number: '02',
    primaryEntryId: 'discovery',
    audience: 'unisex',
    slug: 'set-intenso',
    family: 'Set intenso',
    referenceName: 'Discovery Set Intenso',
    referenceBrand: 'OMMI',
    shortDescription: 'Selección para perfiles intensos.',
    useCases: ['noche', 'comparación', 'perfil alto'],
    inspirationText: 'Busca contrastar familias más densas.',
    elements: ['noche', 'firma', 'mixto'],
    intensity: 'alta',
    asset: { decantHorizontal: '/ommi-assets/decants/set-discovery-intenso.webp' },
  }),
]

export const getEntryById = (entryId: OmmiEntryId) => {
  const entry = ommiLines.find((candidate) => candidate.id === entryId)

  if (!entry) {
    throw new Error(`Unknown OMMI entry id: ${entryId}`)
  }

  return entry
}

export const getEntryBySlug = (slug: string) =>
  ommiLines.find((entry) => entry.slug === slug)

export const getFragrancesByEntry = (entryId: OmmiEntryId) =>
  ommiFragrances.filter((fragrance) => fragrance.entryIds.includes(entryId))

export const getPrimaryFragrancesByEntry = (entryId: OmmiEntryId) =>
  ommiFragrances.filter((fragrance) => fragrance.primaryEntryId === entryId)

export const getFragrancesByAudience = (audience: OmmiAudience) =>
  ommiFragrances.filter((fragrance) => fragrance.audience === audience)

export const getFragrancesByEntryAndAudience = (
  entryId: OmmiEntryId,
  audience: OmmiAudience,
) =>
  ommiFragrances.filter(
    (fragrance) =>
      fragrance.entryIds.includes(entryId) && fragrance.audience === audience,
  )

export const getCrossListedFragrances = () =>
  ommiFragrances.filter((fragrance) => fragrance.entryIds.length > 1)

export const getLineById = getEntryById

export const getLineBySlug = getEntryBySlug

export const getFragrancesByLine = getPrimaryFragrancesByEntry

export const getFragranceBySlug = (lineSlug: string, fragranceSlug: string) => {
  const entry = getEntryBySlug(lineSlug)

  if (!entry) {
    return undefined
  }

  return ommiFragrances.find(
    (fragrance) =>
      fragrance.entryIds.includes(entry.id) && fragrance.slug === fragranceSlug,
  )
}

export const getLineRoute = (line: OmmiLine) =>
  line.id === 'discovery' ? '/sets/discovery' : `/perfumes/${line.slug}`
