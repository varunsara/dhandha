export interface Property {
  id: string
  title: string
  description: string
  type: PropertyType
  category: PropertyCategory
  price: number
  area: number
  areaUnit: AreaUnit
  address: PropertyAddress
  amenities: string[]
  images: string[]
  documents: PropertyDocument[]
  status: PropertyStatus
  verification: PropertyVerification
  ownerId: string
  agentId?: string
  createdAt: Date
  updatedAt: Date
}

export enum PropertyType {
  LAND = 'LAND',
  PLOT = 'PLOT',
  VILLA = 'VILLA',
  APARTMENT = 'APARTMENT',
  COMMERCIAL = 'COMMERCIAL'
}

export enum PropertyCategory {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  AGRICULTURAL = 'AGRICULTURAL',
  INDUSTRIAL = 'INDUSTRIAL'
}

export enum AreaUnit {
  SQ_FT = 'SQ_FT',
  SQ_M = 'SQ_M',
  ACRE = 'ACRE',
  BIGHA = 'BIGHA',
  GUNTHA = 'GUNTHA'
}

export enum PropertyStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  SOLD = 'SOLD',
  SUSPENDED = 'SUSPENDED'
}

export interface PropertyAddress {
  street: string
  area: string
  city: string
  state: string
  pinCode: string
  country: string
  latitude: number
  longitude: number
  nearbyLandmarks: string[]
}

export interface PropertyDocument {
  id: string
  name: string
  type: DocumentType
  url: string
  isVerified: boolean
  uploadedAt: Date
}

export enum DocumentType {
  TITLE_DEED = 'TITLE_DEED',
  SALE_DEED = 'SALE_DEED',
  SURVEY_SETTLEMENT = 'SURVEY_SETTLEMENT',
  ENCUMBRANCE_CERTIFICATE = 'ENCUMBRANCE_CERTIFICATE',
  APPROVED_PLAN = 'APPROVED_PLAN',
  TAX_RECEIPT = 'TAX_RECEIPT',
  NOC = 'NOC'
}

export interface PropertyVerification {
  isVerified: boolean
  verifiedBy?: string
  verifiedAt?: Date
  legalStatus: LegalStatus
  titleVerification: boolean
  documentVerification: boolean
  locationVerification: boolean
  priceVerification: boolean
}

export enum LegalStatus {
  CLEAR = 'CLEAR',
  DISPUTED = 'DISPUTED',
  PENDING = 'PENDING',
  UNKNOWN = 'UNKNOWN'
}