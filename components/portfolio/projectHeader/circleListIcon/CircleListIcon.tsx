import { InfoIcon } from '@chakra-ui/icons'
import { ListIcon } from '@chakra-ui/react'

interface CircleListIconProps {}

const CircleListIcon: React.FunctionComponent<CircleListIconProps> = () => {
  return (
    <ListIcon
      as={InfoIcon}
      color='lightOrange'
      bg='lightOrange'
      borderRadius={10}
      ml='.325rem'
    />
  )
}

export default CircleListIcon
