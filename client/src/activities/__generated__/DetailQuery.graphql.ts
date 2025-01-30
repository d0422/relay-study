/**
 * @generated SignedSource<<04a56c3dcf91229506f868fab0e07db9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DetailQuery$variables = {
  articleID: string;
};
export type DetailQuery$data = {
  readonly getArticle: {
    readonly content: string;
    readonly title: string;
  } | null | undefined;
};
export type DetailQuery = {
  response: DetailQuery$data;
  variables: DetailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "articleID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "articleID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "getArticle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "getArticle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "22bcfd08a26e83b80d8fdcde436ffa16",
    "id": null,
    "metadata": {},
    "name": "DetailQuery",
    "operationKind": "query",
    "text": "query DetailQuery(\n  $articleID: ID!\n) {\n  getArticle(id: $articleID) {\n    title\n    content\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "02abffbe797e83e623d7ac1c4989a0ea";

export default node;
