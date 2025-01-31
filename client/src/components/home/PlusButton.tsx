import { styled } from '@stitches/react';
import PlusIcon from '../../assets/PlusIcon';

interface PlusButtonProps {
  onClick: () => void;
}

export default function PlusButton({ onClick }: PlusButtonProps) {
  return (
    <Button onClick={onClick}>
      <PlusIcon size={30} />
    </Button>
  );
}

const Button = styled('button', {
  position: 'absolute',
  bottom: 16,
  right: 16,
  borderRadius: '50%',
  backgroundColor: 'white',
  width: 50,
  height: 50,
});
