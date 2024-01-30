import locales from '@/locales/projects'
import techniquesImg from '@/assets/imports/constructionTechniques'
import techniquesBImg from '@/assets/imports/constructionTechniquesB'
import parkImg from '@/assets/imports/projectPark'
import schoolImg from '@/assets/imports/projectSchool'
import urbanismImg from '@/assets/imports/urbanism'
import installationsImg from '@/assets/imports/installations'

export interface GridInfo {
  description: string
  title: string
  text: string
  slides: string[]
}

export const projectPark: GridInfo = {
  description: locales.project,
  title: locales.exhibitionAndCultureSquare,
  text: locales.individualDevelopmentOfSquare,
  slides: parkImg,
}

export const projectSchool: GridInfo = {
  description: locales.project,
  title: locales.schoolOfMedia,
  text: locales.projectDevelopedAsTeam,
  slides: schoolImg,
}

export const constructionTechniques: GridInfo = {
  description: locales.materialsAndConstructionTechniques,
  title: locales.cubeHouse,
  text: locales.developmentandPlanningofCubeHouse,
  slides: techniquesImg,
}

export const constructionTechniquesB: GridInfo = {
  description: locales.materialsAndConstructionTechniques,
  title: locales.ubsRecoverAction,
  text: locales.developmentOfBasicHealthUnit,
  slides: techniquesBImg,
}

export const urbanism: GridInfo = {
  description: locales.urbanism,
  title: locales.villaAurocan,
  text: locales.studyCarriedOutOnAnAurocanNeighborhood,
  slides: urbanismImg,
}

export const installations: GridInfo = {
  description: locales.facilitiesAndEquipment,
  title: locales.homePlanning,
  text: locales.planningResidentialEnvironments,
  slides: installationsImg,
}

export const gridInfos: GridInfo[] = [
  projectPark,
  projectSchool,
  constructionTechniques,
  constructionTechniquesB,
  urbanism,
  installations
]
