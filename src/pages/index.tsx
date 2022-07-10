import { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic'
import { HomeContainer, PostItem } from './Home.styles'

interface Post {
  uid?: string
  first_publication_date: string | null
  data: {
    title: string
    subtitle: string
    author: string
  }
}

interface PostPagination {
  next_page: string
  results: Post[]
}

interface HomeProps {
  postsPagination: PostPagination
}

export default function Home(props: HomeProps) {
  console.log(props)
  return (
    <HomeContainer>
      <div />
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const postsResponse = await prismic.getByType('homepage')

  return {
    props: {
      postsResponse,
    },
  }
}
