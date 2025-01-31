import { styled } from '@stitches/react';
import HeartIcon from '../../assets/HeartIcon';
import { graphql, useFragment } from 'react-relay';
import { HeartFragmnet$key } from './__generated__/HeartFragmnet.graphql';

interface HeartProps {
  article: HeartFragmnet$key;
}

const HeartFragment = graphql`
  fragment HeartFragmnet on Article {
    isLiked
    likeNum
  }
`;

export default function Heart({ article }: HeartProps) {
  const { likeNum, isLiked } = useFragment(HeartFragment, article);
  return (
    <Gap>
      <HeartIcon size={16} fill={isLiked ? 'red' : 'white'} />
      <p>{likeNum}</p>
    </Gap>
  );
}

const Gap = styled('div', {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
});
