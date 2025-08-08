export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: string[]
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface SearchFilters {
  location?: string
  minPrice?: number
  maxPrice?: number
  propertyType?: string[]
  minArea?: number
  maxArea?: number
  areaUnit?: string
  amenities?: string[]
}

export interface LocationCoordinates {
  latitude: number
  longitude: number
}

export interface FileUpload {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}