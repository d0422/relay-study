/**
 * @generated SignedSource<<8321a7f4651618808572d11d1eb63b2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "ProfileFragment";
};
export type ProfileFragment$key = {
  readonly " $data"?: ProfileFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileFragment",
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

(node as any).hash = "bd5ba83663b4f40c0389a356865739d2";

export default node;
