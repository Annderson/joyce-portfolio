import corelDraw from '@/assets/img/corelDraw.png'
import lumion from '@/assets/img/lumion.png'
import autocad from '@/assets/img/autocad.png'
import sketchup from '@/assets/img/sketchup.png'
import illustrator from '@/assets/img/illustrator.webp'
import photoshop from '@/assets/img/photoshop.png'
import revit from '@/assets/img/revit.png'


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
    name: 'Lumion',
    src: lumion,
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
    name: 'Autodesk Revit',
    src: revit,
    level: 1.5,
  }
]

export const languagesList: SkillType[] = [
  {
    name: 'Postuguês',
    level: 5
  },
  {
    name: 'Inglês',
    level: 4.5
  },
  {
    name: 'Espanhol',
    level: 1.5
  }
]