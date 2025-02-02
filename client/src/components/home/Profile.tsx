import { Suspense, useState } from 'react';
import UserIcon from '../../assets/UserIcon';
import { useQueryLoader } from 'react-relay';
import { styled } from '@stitches/react';
import ProfileContent, { ProfileContentPreloadQuery } from './ProfileContent';
import type { ProfileContentPreloadQuery as ProfileContentPreloadQueryType } from './__generated__/ProfileContentPreloadQuery.graphql';

export default function Profile() {
  const [queryRef, loadQuery] = useQueryLoader<ProfileContentPreloadQueryType>(
    ProfileContentPreloadQuery
  );

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
      }}
      onClick={() => {
        loadQuery({});
        setIsClicked((prev) => !prev);
      }}
    >
      <UserIcon size={25} />
      {isClicked && queryRef && (
        <Absolute>
          <HoverName>
            <Suspense fallback={<div>로딩중</div>}>
              <ProfileContent queryRef={queryRef} />
            </Suspense>
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
