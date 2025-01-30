/**
 * @generated SignedSource<<2fbd458e602bb933e4f1464f8342b11d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailQuery$variables = {
  id: string;
};
export type DetailQuery$data = {
  readonly getArticle: {
    readonly author: {
      readonly " $fragmentSpreads": FragmentRefs<"AuthorFragment">;
    };
    readonly content: string;
    readonly isLiked: boolean | null | undefined;
    readonly likeNum: number | null | undefined;
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isLiked",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "likeNum",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AuthorFragment"
              }
            ],
            "storageKey": null
          }
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
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d794412fb0fe9957b06828c3ab4a3b20",
    "id": null,
    "metadata": {},
    "name": "DetailQuery",
    "operationKind": "query",
    "text": "query DetailQuery(\n  $id: ID!\n) {\n  getArticle(id: $id) {\n    title\n    content\n    isLiked\n    likeNum\n    author {\n      ...AuthorFragment\n      id\n    }\n    id\n  }\n}\n\nfragment AuthorFragment on User {\n  name\n}\n"
  }
};
})();

(node as any).hash = "396ed5b9dbbb75b12d5dccfb1dd32771";

export default node;
