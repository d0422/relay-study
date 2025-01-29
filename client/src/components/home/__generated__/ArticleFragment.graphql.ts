/**
 * @generated SignedSource<<46a04a13e0bea1bf140565411b6ce9fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleFragment$data = {
  readonly author: {
    readonly " $fragmentSpreads": FragmentRefs<"AuthorFragment">;
  };
  readonly content: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "ArticleFragment";
};
export type ArticleFragment$key = {
  readonly " $data"?: ArticleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "AuthorFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "70bd39bc9e544f5f7d30101690e46459";

export default node;
