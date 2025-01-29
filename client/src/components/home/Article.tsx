import { graphql, useFragment } from 'react-relay';
import { ArticleFragment$key } from './__generated__/ArticleFragment.graphql';
import { styled } from '@stitches/react';
import Author from './Author';

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
  const { title, content, author } = useFragment(ArticleFragment, article);
  return (
    <ArticleBox>
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
