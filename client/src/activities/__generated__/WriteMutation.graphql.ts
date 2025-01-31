/**
 * @generated SignedSource<<4e956fcfb37186461052d10926ddf836>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type WriteMutation$variables = {
  connections: ReadonlyArray<string>;
  content: string;
  title: string;
};
export type WriteMutation$data = {
  readonly createArticle: {
    readonly node: {
      readonly author: {
        readonly id: string;
        readonly name: string;
      };
      readonly content: string;
      readonly id: string;
      readonly isLiked: boolean | null | undefined;
      readonly likeNum: number | null | undefined;
      readonly title: string;
    };
  } | null | undefined;
};
export type WriteMutation = {
  response: WriteMutation$data;
  variables: WriteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      },
      {
        "kind": "Literal",
        "name": "userId",
        "value": "user0"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": (v3/*: any*/),
  "concreteType": "ArticleEdge",
  "kind": "LinkedField",
  "name": "createArticle",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Article",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "author",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "likeNum",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isLiked",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "WriteMutation",
    "selections": [
      (v5/*: any*/)
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "WriteMutation",
    "selections": [
      (v5/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": null,
        "handle": "prependEdge",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createArticle",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "00599c33b4968b319dd4a4c7fab3e266",
    "id": null,
    "metadata": {},
    "name": "WriteMutation",
    "operationKind": "mutation",
    "text": "mutation WriteMutation(\n  $title: String!\n  $content: String!\n) {\n  createArticle(input: {title: $title, content: $content, userId: \"user0\"}) {\n    node {\n      id\n      title\n      content\n      author {\n        id\n        name\n      }\n      likeNum\n      isLiked\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ddb4b6095f09b9fdc4468fae416bfe2f";

export default node;
