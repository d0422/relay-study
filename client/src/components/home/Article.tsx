import { graphql, useFragment } from 'react-relay';
import { ArticleFragment$key } from './__generated__/ArticleFragment.graphql';
import { styled } from '@stitches/react';
import Author from './Author';
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

export default function Article({ article }: { article: ArticleFragment$key }) {
  const { title, content, author, id } = useFragment(ArticleFragment, article);
  const { push } = useFlow();

  return (
    <ArticleBox onClick={() => push('Detail', { id })}>
      <h1>{title}</h1>
      <div>{content}</div>
      <Author author={author} />
    </ArticleBox>
  );
}

const ArticleBox = styled('div', {
  padding: 16,
  borderTop: 'solid 0.5px',
  borderBottom: 'solid 0.5px',
});
