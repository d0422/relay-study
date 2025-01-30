import HeartIcon from '../../assets/HeartIcon';

interface HeartProps {
  likeNum: number;
  isLiked: boolean;
}

export default function Heart({ likeNum, isLiked }: HeartProps) {
  return <HeartIcon size={16} />;
}
