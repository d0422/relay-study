/**
 * @generated SignedSource<<e60271a6fd922503988bd5dd56dd3cb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeartFragmnet$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    },
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

(node as any).hash = "7159b7d1080f0064917dc49a55487fc5";

export default node;
