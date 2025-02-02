import { graphql, useLazyLoadQuery } from 'react-relay';
import { Layout } from '../components/shared/Layout';
import Heart from '../components/shared/Heart';
import type { DetailMainQuery as DetailMainQueryType } from './__generated__/DetailMainQuery.graphql';
import withSuspense from '../hoc/withSuspense';
import Author from '../components/shared/Author';

const DetailMainQuery = graphql`
  query DetailMainQuery($id: ID!) {
    getArticle(id: $id) {
      title
      content
      author {
        ...AuthorFragment
      }
      ...HeartFragmnet
    }
  }
`;

interface DetailMainProps {
  id: string;
}

const DetailMain = withSuspense(({ id }: DetailMainProps) => {
  const { getArticle } = useLazyLoadQuery<DetailMainQueryType>(
    DetailMainQuery,
    {
      id,
    }
  );

  return (
    <Layout>
      <div>
        <h2>{getArticle.title}</h2>
        <p>{getArticle.content}</p>
        <Author author={getArticle.author} />
        <Heart article={getArticle} />
      </div>
    </Layout>
  );
});

export default DetailMain;
