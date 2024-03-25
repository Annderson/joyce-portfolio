import corelDraw from '@/assets/img/corelDraw.png'
import lumion from '@/assets/img/lumion.png'
import autocad from '@/assets/img/autocad.png'
import sketchup from '@/assets/img/sketchup.png'
import illustrator from '@/assets/img/illustrator.webp'
import photoshop from '@/assets/img/photoshop.png'
import revit from '@/assets/img/revit.png'
import google from '@/assets/img/google.png'
import canva from '@/assets/img/canva.png'
import vray from '@/assets/img/vray.png'
import arcgis from '@/assets/img/arcgis.png'

export interface SkillType {
  name: string
  src?: string
  level: number
}

export const knowledgeList: SkillType[] = [
  {
    name: 'Corel Draw',
    src: corelDraw,
    level: 5,
  },
  {
    name: 'Canva',
    src: canva,
    level: 5,
  },
  {
    name: 'Lumion',
    src: lumion,
    level: 4,
  },
  {
    name: 'Google Earth',
    src: google,
    level: 4,
  },
  {
    name: 'Autocad',
    src: autocad,
    level: 3.5,
  },
  {
    name: 'SketchUp',
    src: sketchup,
    level: 3.5,
  },
  {
    name: 'Illustrator',
    src: illustrator,
    level: 3.5,
  },
  {
    name: 'Photoshop',
    src: photoshop,
    level: 3,
  },
  {
    name: 'Arcgis',
    src: arcgis,
    level: 2,
  },
  {
    name: 'Vray',
    src: vray,
    level: 2,
  },
  {
    name: 'Autodesk Revit',
    src: revit,
    level: 1.5,
  }
]

export const languagesList: SkillType[] = [
  {
    name: 'Inglês',
    level: 4.5
  },
  {
    name: 'Espanhol',
    level: 1.5
  }
]