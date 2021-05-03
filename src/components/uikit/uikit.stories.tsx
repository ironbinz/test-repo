import {
  Grid,
  Button,
  Stack,
  Switch,
  Input,
  CheckboxGroup,
  HStack,
  Checkbox,
  Tag,
  TagLabel,
} from '@chakra-ui/react'

export const Overview = (props: { colorScheme: string }) => {
  const { colorScheme } = props

  return (
    <Grid p="8" gridGap="8">
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme={colorScheme} size="xs">
          Button
        </Button>
        <Button colorScheme={colorScheme} size="sm">
          Button
        </Button>
        <Button colorScheme={colorScheme} size="md">
          Button
        </Button>
        <Button colorScheme={colorScheme} size="lg">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme={colorScheme} variant="solid">
          Button
        </Button>
        <Button colorScheme={colorScheme} variant="outline">
          Button
        </Button>
        <Button colorScheme={colorScheme} variant="ghost">
          Button
        </Button>
        <Button colorScheme={colorScheme} variant="link">
          Button
        </Button>
      </Stack>
      <Stack align="center" direction="row">
        <Switch size="sm" colorScheme="brand" />
        <Switch isDisabled isChecked size="md" colorScheme="brand" />
        <Switch size="lg" colorScheme="brand" />
      </Stack>
      <Stack spacing={3}>
        <Input
          focusBorderColor={`${colorScheme}.400`}
          placeholder="large size"
          size="lg"
        />
        <Input
          focusBorderColor={`${colorScheme}.400`}
          placeholder="default size"
          size="md"
        />
        <Input
          focusBorderColor={`${colorScheme}.400`}
          placeholder="small size"
          size="sm"
        />
      </Stack>
      <CheckboxGroup defaultValue={['naruto', 'kakashi']}>
        <HStack>
          <Checkbox colorScheme={colorScheme} value="naruto">
            Naruto
          </Checkbox>
          <Checkbox colorScheme={colorScheme} value="sasuke">
            Sasuke
          </Checkbox>
          <Checkbox colorScheme={colorScheme} value="kakashi">
            kakashi
          </Checkbox>
        </HStack>
      </CheckboxGroup>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag
            size={size}
            key={size}
            borderRadius="full"
            variant="solid"
            colorScheme={colorScheme}
          >
            <TagLabel>Green</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Grid>
  )
}

export default {
  title: 'UI Kit',
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: ['brand', 'red', 'green'],
      },
    },
  },
  args: {
    colorScheme: 'brand',
  },
}
