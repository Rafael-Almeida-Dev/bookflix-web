import { Flex, Spinner } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const AuthorList = ({  data, isLoading }) => {
  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX={['scroll', 'auto']}
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>Autores</Text.ScreenTitle>
      <Flex mt={['12px', '24px']} flexDir="row">
        {isLoading && (
          <Flex h="230px" alignItems="center" justifyContent="center">
            <Spinner />
          </Flex>
        )}
        {((!isLoading && data?.length === 0) || !data) && (
          <Flex h="30px" alignItems="center" justifyContent="center">
            <Text>Nenhum autor relacionado encontrado</Text>
          </Flex>
        )}
        {data &&
          data?.map((item) => <AuthorCard key={`author_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
