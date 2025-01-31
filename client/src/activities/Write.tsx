import { AppScreen } from '@stackflow/plugin-basic-ui';
import useInput from '../hooks/useInput';
import XIcon from '../assets/XIcon';
import { useFlow } from '../stackflow';
import { styled } from '@stitches/react';
import { Layout } from '../components/shared/Layout';
import { graphql, useMutation } from 'react-relay';
import { ActivityComponentType } from '@stackflow/react';

type WriteParams = {
  articlesConnectionID: string;
};

const WriteMutation = graphql`
  mutation WriteMutation(
    $title: String!
    $content: String!
    $connections: [ID!]!
  ) {
    createArticle(input: { title: $title, content: $content, userId: "user0" })
      @prependEdge(connections: $connections) {
      node {
        id
        title
        content
        author {
          id
          name
        }
        likeNum
        isLiked
      }
    }
  }
`;

const Write: ActivityComponentType<WriteParams> = ({ params }) => {
  const { value, handleChange } = useInput();
  const { value: textareaValue, handleChange: textareaChange } = useInput();
  const [write] = useMutation(WriteMutation);
  const { pop } = useFlow();

  return (
    <AppScreen
      appBar={{
        title: '글쓰기',
        backButton: {
          render: () => (
            <div onClick={() => pop({ animate: true })}>
              <XIcon size={30} />
            </div>
          ),
        },
      }}
    >
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
            await write({
              variables: {
                title: value,
                content: textareaValue,
                connections: [params.articlesConnectionID],
              },
            });
            pop({ animate: true });
          }}
        >
          완료
        </Button>
      </Layout>
    </AppScreen>
  );
};

const Input = styled('input', {
  fontSize: 20,
  borderRadius: 10,
  padding: 8,
  width: 250,
});

const Textarea = styled('textarea', {
  fontSize: 20,
  borderRadius: 10,
  padding: 8,
  width: 250,
});

const InputTitle = styled('p', {
  fontSize: 20,
  fontWeight: 600,
});

const Button = styled('button', {
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 16,
  fontSize: 20,
  border: '1px solid',
});

export default Write;
