import { PropertyOption } from "./PropertyOption"

export interface PropertyData {
  title: string
  type: string
  property: string
  uuid: string
  model: string
  content: any
  options: PropertyOption
}
