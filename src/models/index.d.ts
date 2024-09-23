import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPetstoreModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PetstoreModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly About: string;
  readonly Age: number;
  readonly Colour: string;
  readonly Image: string;
  readonly Breed: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPetstoreModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PetstoreModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly About: string;
  readonly Age: number;
  readonly Colour: string;
  readonly Image: string;
  readonly Breed: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PetstoreModel = LazyLoading extends LazyLoadingDisabled ? EagerPetstoreModel : LazyPetstoreModel

export declare const PetstoreModel: (new (init: ModelInit<PetstoreModel>) => PetstoreModel) & {
  copyOf(source: PetstoreModel, mutator: (draft: MutableModel<PetstoreModel>) => MutableModel<PetstoreModel> | void): PetstoreModel;
}