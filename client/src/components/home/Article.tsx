import { graphql, useFragment, useMutation } from 'react-relay';
import { ArticleFragment$key } from './__generated__/ArticleFragment.graphql';
import { styled } from '@stitches/react';
import Author from '../shared/Author';
import { useFlow } from '../../stackflow';

const ArticleFragment = graphql`
  fragment ArticleFragment on Article {
    id
    title
    content
    author {
      ...AuthorFragment
    }
  }
`;

export default function Article({
  article,
  articlesId,
}: {
  article: ArticleFragment$key;
  articlesId: string;
}) {
  const { title, content, author, id } = useFragment(ArticleFragment, article);
  const { push } = useFlow();

  const [deleteArticle] = useMutation(graphql`
    mutation ArticleDeleteMutation(
      $input: ArticleDeleteInput!
      $connections: [ID!]!
    ) {
      deleteArticle(input: $input) {
        id @deleteEdge(connections: $connections)
      }
    }
  `);

  return (
    <AritcleWrapper>
      <ArticleBox onClick={() => push('Detail', { id })}>
        <h1>{title}</h1>
        <div>{content}</div>
        <Author author={author} />
      </ArticleBox>
      <ModifyButton
        onClick={() => {
          deleteArticle({
            variables: {
              input: {
                id,
              },
              connections: [articlesId],
            },
          });
        }}
      >
        글 삭제
      </ModifyButton>
    </AritcleWrapper>
  );
}

const AritcleWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignContent: 'center',
  borderTop: 'solid 0.5px',
  borderBottom: 'solid 0.5px',
});

const ArticleBox = styled('div', {
  width: '100%',
  padding: 16,
});

const ModifyButton = styled('button', {
  backgroundColor: 'white',
  border: 'none',
  width: 60,
  height: 60,
  justifySelf: 'center',
  alignSelf: 'center',
});
