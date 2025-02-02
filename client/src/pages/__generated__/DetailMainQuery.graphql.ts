/**
 * @generated SignedSource<<0c5994e2971c581477ed2f1275fc31ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailMainQuery$variables = {
  id: string;
};
export type DetailMainQuery$data = {
  readonly getArticle: {
    readonly author: {
      readonly " $fragmentSpreads": FragmentRefs<"AuthorFragment">;
    };
    readonly content: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"HeartFragmnet">;
  };
};
export type DetailMainQuery = {
  response: DetailMainQuery$data;
  variables: DetailMainQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailMainQuery",
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeartFragmnet"
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
    "name": "DetailMainQuery",
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
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isLiked",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "likeNum",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bc9b7689a0b83d81d62ec99be4c6e57e",
    "id": null,
    "metadata": {},
    "name": "DetailMainQuery",
    "operationKind": "query",
    "text": "query DetailMainQuery(\n  $id: ID!\n) {\n  getArticle(id: $id) {\n    title\n    content\n    author {\n      ...AuthorFragment\n      id\n    }\n    ...HeartFragmnet\n    id\n  }\n}\n\nfragment AuthorFragment on User {\n  name\n}\n\nfragment HeartFragmnet on Article {\n  id\n  isLiked\n  likeNum\n}\n"
  }
};
})();

(node as any).hash = "6b9de776c35f26bd36d4ac67bd28a18f";

export default node;
