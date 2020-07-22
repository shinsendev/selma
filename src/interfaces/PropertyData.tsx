import { PropertyOption } from "./PropertyOption"

export interface PropertyData {
  title: string
  type: string
  property: string
  content: any
  options: PropertyOption[]
}
