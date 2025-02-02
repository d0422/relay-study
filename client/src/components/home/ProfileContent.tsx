import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import type { ProfileContentPreloadQuery as ProfileContentPreloadQueryType } from './__generated__/ProfileContentPreloadQuery.graphql';

export const ProfileContentPreloadQuery = graphql`
  query ProfileContentPreloadQuery {
    getUser(id: "user0") {
      name
    }
  }
`;

interface ProfileContentProps {
  queryRef: PreloadedQuery<ProfileContentPreloadQueryType>;
}

export default function ProfileContent({ queryRef }: ProfileContentProps) {
  const { getUser: data } = usePreloadedQuery(
    ProfileContentPreloadQuery,
    queryRef
  );

  return <p style={{ color: 'black' }}>{data?.name}</p>;
}
