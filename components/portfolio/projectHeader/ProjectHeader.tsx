import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react'
import CircleListIcon from './circleListIcon/CircleListIcon'

interface ProjectHeaderProps {
  title: string
  role: string
  date: string
  link?: string
  brief: string
}

const ProjectHeader: React.FunctionComponent<ProjectHeaderProps> = ({
  title,
  role,
  date,
  link,
  brief,
}) => {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      spacing={8}
      justifyContent={['', 'space-evenly']}
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Box>
        <Heading variant='heading48' pb='1rem'>
          {title}
        </Heading>
        <List spacing={1}>
          <ListItem>
            <Text variant='subheading18Md'>
              <CircleListIcon />
              {role}
            </Text>
          </ListItem>
          <ListItem>
            <Text variant='subheading18Md'>
              <CircleListIcon />
              {date}
            </Text>
          </ListItem>
          <ListItem>
            {link && (
              <Link href={link} style={{ textDecoration: 'none' }} isExternal>
                <Box
                  bg='lightPurple'
                  _hover={{ bg: 'darkPurple' }}
                  width={['full', 'fit-content']}
                  textAlign={['center', 'left']}
                  p='.6rem 2rem'
                  m='.6rem 0 0 .3rem'
                  borderRadius={8}
                >
                  <Text variant='interactiveHyperLink18Alt'>
                    See it in action
                  </Text>
                </Box>
              </Link>
            )}
          </ListItem>
        </List>
      </Box>
      <Box>
        <Text
          borderLeft='.35rem solid'
          borderBottomLeftRadius='.175rem'
          borderTopLeftRadius='.175rem'
          borderColor='lightPurple'
          pl={2}
        >
          {brief}
        </Text>
      </Box>
    </Stack>
  )
}

export default ProjectHeader
