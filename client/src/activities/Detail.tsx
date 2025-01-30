import { AppScreen } from '@stackflow/plugin-basic-ui';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { DetailQuery as DetailQueryType } from './__generated__/DetailQuery.graphql';
import { styled } from '@stitches/react';

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
    }
  }
`;

export default function Detail({ params: { id } }: DetailParams) {
  const { getArticle } = useLazyLoadQuery<DetailQueryType>(DetailQuery, {
    id,
  });

  return (
    <AppScreen
      appBar={{
        title: '글 보기',
      }}
    >
      <Box>
        <h2>{getArticle?.title}</h2>
        <p>{getArticle?.content}</p>
      </Box>
    </AppScreen>
  );
}

const Box = styled('div', {
  padding: 16,
});
