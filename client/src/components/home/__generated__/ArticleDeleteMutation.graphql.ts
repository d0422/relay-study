/**
 * @generated SignedSource<<8b40ad3fad84dbc36e75a65be6b28fd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ArticleDeleteInput = {
  id: string;
};
export type ArticleDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: ArticleDeleteInput;
};
export type ArticleDeleteMutation$data = {
  readonly deleteArticle: {
    readonly id: string;
  } | null | undefined;
};
export type ArticleDeleteMutation = {
  response: ArticleDeleteMutation$data;
  variables: ArticleDeleteMutation$variables;
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
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "deleteArticle",
        "plural": false,
        "selections": [
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ArticleDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "deleteArticle",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "39c2e96d2c22dfdf10d613699e176c37",
    "id": null,
    "metadata": {},
    "name": "ArticleDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ArticleDeleteMutation(\n  $input: ArticleDeleteInput!\n) {\n  deleteArticle(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a589902e2908355f1ddcf9a8b0fa853";

export default node;
