/**
 * @generated SignedSource<<9c63ee983ad7e9f960316148230c0376>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type EditMainQuery$variables = {
  id: string;
};
export type EditMainQuery$data = {
  readonly getArticle: {
    readonly content: string;
    readonly id: string;
    readonly title: string;
  };
};
export type EditMainQuery = {
  response: EditMainQuery$data;
  variables: EditMainQuery$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Article",
    "kind": "LinkedField",
    "name": "getArticle",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditMainQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditMainQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "01b9e4f25218839c267618638458035b",
    "id": null,
    "metadata": {},
    "name": "EditMainQuery",
    "operationKind": "query",
    "text": "query EditMainQuery(\n  $id: ID!\n) {\n  getArticle(id: $id) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "a4992769377eeca5e0e3b8694f1bf3b5";

export default node;
