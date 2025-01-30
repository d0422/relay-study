import { graphql, useFragment } from 'react-relay';
import { AuthorFragment$key } from '../home/__generated__/AuthorFragment.graphql';
import { styled } from '@stitches/react';

const AuthorFragment = graphql`
  fragment AuthorFragment on User {
    name
  }
`;

export default function Author({ author }: { author: AuthorFragment$key }) {
  const { name } = useFragment(AuthorFragment, author);
  return (
    <Flex>
      <p>작성자</p>
      <Writer>{name}</Writer>
    </Flex>
  );
}

const Writer = styled('div', {
  fontSize: 14,
  fontWeight: 700,
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});
