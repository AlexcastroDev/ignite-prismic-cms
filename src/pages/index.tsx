import { GetStaticProps } from 'next'
import Header from '../components/Header'
import { getPrismicClient } from '../services/prismic'
import { HomeContainer } from './Home.styles'
import { PostItem } from '../../slices'

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
  const { postsResponse } = props
  return (
    <>
      <Header />
      <HomeContainer>
        <div />
      </HomeContainer>
    </>
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
