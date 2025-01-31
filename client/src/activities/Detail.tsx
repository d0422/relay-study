import { AppScreen } from '@stackflow/plugin-basic-ui';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { DetailQuery as DetailQueryType } from './__generated__/DetailQuery.graphql';
import { styled } from '@stitches/react';
import Author from '../components/shared/Author';
import HeartIcon from '../assets/HeartIcon';
import { Layout } from '../components/shared/Layout';

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
      isLiked
      likeNum
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
          <Gap>
            <HeartIcon size={16} fill={getArticle.isLiked ? 'red' : 'white'} />
            <p>{getArticle.likeNum}</p>
          </Gap>
        </div>
      </Layout>
    </AppScreen>
  );
}

const Gap = styled('div', {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
});
