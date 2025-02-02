/**
 * @generated SignedSource<<85f4fe48dd74877e62aa0464fbcee4e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type EditMainEditMutation$variables = {
  content: string;
  id: string;
  title: string;
};
export type EditMainEditMutation$data = {
  readonly modifyArticle: {
    readonly content: string;
    readonly id: string;
    readonly title: string;
  } | null | undefined;
};
export type EditMainEditMutation = {
  response: EditMainEditMutation$data;
  variables: EditMainEditMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "Article",
    "kind": "LinkedField",
    "name": "modifyArticle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditMainEditMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditMainEditMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "aeb39f95d87539800d8661022fefb21e",
    "id": null,
    "metadata": {},
    "name": "EditMainEditMutation",
    "operationKind": "mutation",
    "text": "mutation EditMainEditMutation(\n  $id: ID!\n  $title: String!\n  $content: String!\n) {\n  modifyArticle(input: {title: $title, content: $content, id: $id}) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "3734c2267339f6f60cd06860fb01944e";

export default node;
