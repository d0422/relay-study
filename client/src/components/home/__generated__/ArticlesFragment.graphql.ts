/**
 * @generated SignedSource<<6fbbf2aeeb0365f22af2104d798ab5d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticlesFragment$data = {
  readonly author: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly content: string | null | undefined;
  readonly id: string;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArticlesFragment";
};
export type ArticlesFragment$key = {
  readonly " $data"?: ArticlesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticlesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticlesFragment",
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
    },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "3f35f2bfa90a14a4ecd9277de7dd3744";

export default node;
