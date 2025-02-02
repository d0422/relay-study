/**
 * @generated SignedSource<<332522a15708694287b81ddbaeb861e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ProfileContentPreloadQuery$variables = Record<PropertyKey, never>;
export type ProfileContentPreloadQuery$data = {
  readonly getUser: {
    readonly name: string;
  } | null | undefined;
};
export type ProfileContentPreloadQuery = {
  response: ProfileContentPreloadQuery$data;
  variables: ProfileContentPreloadQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "user0"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileContentPreloadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "getUser(id:\"user0\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProfileContentPreloadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "getUser(id:\"user0\")"
      }
    ]
  },
  "params": {
    "cacheID": "f3643a27a031a4d858e305140ca6d3bb",
    "id": null,
    "metadata": {},
    "name": "ProfileContentPreloadQuery",
    "operationKind": "query",
    "text": "query ProfileContentPreloadQuery {\n  getUser(id: \"user0\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "cfd7a08163c22d19b4035c89dc87ce23";

export default node;
