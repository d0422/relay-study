import { useState } from 'react';
import UserIcon from '../../assets/UserIcon';
import { graphql, useFragment } from 'react-relay';
import { ProfileFragment$key } from './__generated__/ProfileFragment.graphql';
import { styled } from '@stitches/react';

const ProfileFragment = graphql`
  fragment ProfileFragment on User {
    name
  }
`;

interface ProfileProps {
  profile: ProfileFragment$key | null | undefined;
}

export default function Profile({ profile }: ProfileProps) {
  const data = useFragment(ProfileFragment, profile);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
      }}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <UserIcon size={25} />
      {isClicked && (
        <Absolute>
          <HoverName>
            <p style={{ color: 'black' }}>{data?.name}</p>
          </HoverName>
        </Absolute>
      )}
    </div>
  );
}

const Absolute = styled('div', {
  position: 'absolute',
  top: '100%',
  right: 0,
});

const HoverName = styled('div', {
  border: '1px solid black',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 25px 10px 25px',
  borderRadius: 10,
});
