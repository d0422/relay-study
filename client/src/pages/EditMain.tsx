import { graphql, useLazyLoadQuery, useMutation } from 'react-relay';
import withSuspense from '../hoc/withSuspense';
import { Layout } from '../components/shared/Layout';
import { Button, Input, InputTitle, Textarea } from '../activities/Write';
import useInput from '../hooks/useInput';
import type { EditMainQuery as EditMainQueryType } from './__generated__/EditMainQuery.graphql';
import { useFlow } from '../stackflow';

const EditMainQuery = graphql`
  query EditMainQuery($id: ID!) {
    getArticle(id: $id) {
      id
      title
      content
    }
  }
`;

const EditMainEditMutation = graphql`
  mutation EditMainEditMutation($id: ID!, $title: String!, $content: String!) {
    modifyArticle(input: { title: $title, content: $content, id: $id }) {
      id
      title
      content
    }
  }
`;

interface EditMainProps {
  id: string;
}

const EditMain = withSuspense(({ id }: EditMainProps) => {
  const { getArticle } = useLazyLoadQuery<EditMainQueryType>(EditMainQuery, {
    id,
  });
  const [editMutation] = useMutation(EditMainEditMutation);

  const { value, handleChange } = useInput(getArticle.title);
  const { value: textareaValue, handleChange: textareaChange } = useInput(
    getArticle.content
  );

  const { pop } = useFlow();

  return (
    <Layout>
      <div>
        <InputTitle>제목</InputTitle>
        <Input onChange={handleChange} value={value} />
      </div>
      <div>
        <InputTitle>내용</InputTitle>
        <Textarea onChange={textareaChange} value={textareaValue} />
      </div>

      <Button
        onClick={async () => {
          pop({ animate: true });
          editMutation({
            variables: {
              id,
              title: value,
              content: textareaValue,
            },
          });
        }}
      >
        완료
      </Button>
    </Layout>
  );
});

export default EditMain;
