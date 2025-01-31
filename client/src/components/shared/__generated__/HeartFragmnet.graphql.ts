/**
 * @generated SignedSource<<aeb0d811332320ac842fa26f9e4d2bfb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeartFragmnet$data = {
  readonly isLiked: boolean | null | undefined;
  readonly likeNum: number | null | undefined;
  readonly " $fragmentType": "HeartFragmnet";
};
export type HeartFragmnet$key = {
  readonly " $data"?: HeartFragmnet$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeartFragmnet">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeartFragmnet",
  "selections": [
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
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "51d2f63432f52c525a65399ad698b8c1";

export default node;
