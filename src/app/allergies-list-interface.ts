import { AllergieInterface } from "./allergie-interface";

export interface AllergiesListInterface {
  categoryName: string,
  modifierDroits: boolean,
  elements: AllergieInterface[]
}
