/**
 * @generated SignedSource<<33694c5244d9d9911efbb72cf976eebb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "AuthorFragment";
};
export type AuthorFragment$key = {
  readonly " $data"?: AuthorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1edf00e2696131d31797a5e2f8ae14fa";

export default node;
