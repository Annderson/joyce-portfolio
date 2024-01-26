import locales from '@/locales/projects'
import techniques from '@/assets/imports/constructionTechniques'
import techniquesB from '@/assets/imports/constructionTechniquesB'
import park from '@/assets/imports/projectPark'
import school from '@/assets/imports/projectSchool'

interface GridInfo {
  description: string
  title: string
  text: string
  slides: string[]
}

export const projectPark: GridInfo = {
  description: locales.project,
  title: locales.exhibitionAndCultureSquare,
  text: locales.individualDevelopmentOfSquare,
  slides: park,
}

export const projectSchool: GridInfo = {
  description: locales.project,
  title: locales.schoolOfMedia,
  text: locales.projectDevelopedAsTeam,
  slides: school,
}

export const constructionTechniques: GridInfo = {
  description: locales.materialsAndConstructionTechniques,
  title: locales.cubeHouse,
  text: locales.developmentandPlanningofCubeHouse,
  slides: techniques,
}

export const constructionTechniquesB: GridInfo = {
  description: locales.materialsAndConstructionTechniques,
  title: locales.ubsRecoverAction,
  text: locales.developmentandPlanningofCubeHouse,
  slides: techniquesB,
}

export const gridInfos: GridInfo[] = [
  projectPark,
  projectSchool,
  constructionTechniques,
  constructionTechniquesB,
]
