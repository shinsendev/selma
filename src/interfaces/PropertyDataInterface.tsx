import { PropertyOptionInterface } from "./PropertyOptionInterface"

export interface PropertyDataInterface {
  title: string
  type: string
  property: string
  uuid: string
  model: string
  content: any
  options: PropertyOptionInterface
}
