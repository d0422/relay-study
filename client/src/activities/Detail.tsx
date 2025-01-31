import { AppScreen } from '@stackflow/plugin-basic-ui';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { DetailQuery as DetailQueryType } from './__generated__/DetailQuery.graphql';
import Author from '../components/shared/Author';
import { Layout } from '../components/shared/Layout';
import Heart from '../components/shared/Heart';

type DetailParams = {
  params: {
    id: string;
  };
};

const DetailQuery = graphql`
  query DetailQuery($id: ID!) {
    getArticle(id: $id) {
      title
      content
      ...HeartFragmnet
      author {
        ...AuthorFragment
      }
    }
  }
`;

export default function Detail({ params: { id } }: DetailParams) {
  const { getArticle } = useLazyLoadQuery<DetailQueryType>(DetailQuery, {
    id,
  });

  if (!getArticle) {
    return null;
  }

  return (
    <AppScreen
      appBar={{
        title: '글 보기',
      }}
    >
      <Layout>
        <div>
          <h2>{getArticle.title}</h2>
          <p>{getArticle.content}</p>
          <Author author={getArticle.author} />
          <Heart article={getArticle} />
        </div>
      </Layout>
    </AppScreen>
  );
}
