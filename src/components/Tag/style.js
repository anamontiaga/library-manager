import styled from 'styled-components'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const Categories = {
  Aventuras: 'Aventuras',
  CienciaFicción: 'Ciencia ficción',
  Distopía: 'Distopía',
  Ensayo: 'Ensayo',
  Histórica: 'Histórica',
  Narrativa: 'Narrativa',
  NovelaFantástica: 'Novela fantástica',
}

const LABEL_COLOR_CONTAINER = {
  [Categories.Aventuras]: `${Colors.green}`,
  [Categories.CienciaFicción]: `${Colors.red}`,
  [Categories.Distopía]: `${Colors.blue}`,
  [Categories.Ensayo]: `${Colors.green}`,
  [Categories.Histórica]: `${Colors.red}`,
  [Categories.Narrativa]: `${Colors.purple}`,
  [Categories.NovelaFantástica]: `${Colors.yellow}`,
}

const BACKGROUND_COLOR_CONTAINER = {
  [Categories.Aventuras]: `${Colors.greenOpacity}`,
  [Categories.CienciaFicción]: `${Colors.redOpacity}`,
  [Categories.Distopía]: `${Colors.blueOpacity}`,
  [Categories.Ensayo]: `${Colors.greenOpacity}`,
  [Categories.Histórica]: `${Colors.redOpacity}`,
  [Categories.Narrativa]: `${Colors.purpleOpacity}`,
  [Categories.NovelaFantástica]: `${Colors.yellowOpacity}`,
}

export const ContainerEl = styled.div`
  align-items: center;
  background: ${(props) => BACKGROUND_COLOR_CONTAINER[props.type]};
  border-radius: 2em;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  padding: 5px;
`

export const LabelEl = styled.p`
  color: ${(props) => LABEL_COLOR_CONTAINER[props.type]};
  font-family: ${Fonts.body.regular};
  font-size: 12px;
`
