/**
 * @generated SignedSource<<2dd54061c2554ad4e99a282eaac325b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HeartLikeMutation$variables = {
  articleID: string;
};
export type HeartLikeMutation$data = {
  readonly likeArticle: {
    readonly isLiked: boolean | null | undefined;
    readonly likeNum: number | null | undefined;
  } | null | undefined;
};
export type HeartLikeMutation = {
  response: HeartLikeMutation$data;
  variables: HeartLikeMutation$variables;
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
    "name": "articleID",
    "variableName": "articleID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "likeNum",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isLiked",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HeartLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "likeArticle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeartLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "likeArticle",
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
    "cacheID": "7adcfcedcab8520d497c225db1466fb5",
    "id": null,
    "metadata": {},
    "name": "HeartLikeMutation",
    "operationKind": "mutation",
    "text": "mutation HeartLikeMutation(\n  $articleID: ID!\n) {\n  likeArticle(articleID: $articleID) {\n    likeNum\n    isLiked\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "70663d2294698c592bc50260736f6ef8";

export default node;
