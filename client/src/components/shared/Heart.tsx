import { styled } from '@stitches/react';
import { graphql, useFragment, useMutation } from 'react-relay';
import HeartIcon from '../../assets/HeartIcon';
import { HeartFragmnet$key } from './__generated__/HeartFragmnet.graphql';

interface HeartProps {
  article: HeartFragmnet$key;
}

const HeartFragment = graphql`
  fragment HeartFragmnet on Article {
    id
    isLiked
    likeNum
  }
`;

const HeartLikeMutation = graphql`
  mutation HeartLikeMutation($articleID: ID!) {
    likeArticle(articleID: $articleID) {
      likeNum
      isLiked
    }
  }
`;

export default function Heart({ article }: HeartProps) {
  const { likeNum, isLiked, id } = useFragment(HeartFragment, article);
  const [like] = useMutation(HeartLikeMutation);
  return (
    <Button
      onClick={() => {
        console.log(id);
        like({ variables: { articleID: id } });
      }}
    >
      <Gap>
        <HeartIcon size={16} fill={isLiked ? 'red' : 'white'} />
        <p>{likeNum}</p>
      </Gap>
    </Button>
  );
}
const Button = styled('button', {
  backgroundColor: 'white',
  border: 'none',
});

const Gap = styled('div', {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
});
