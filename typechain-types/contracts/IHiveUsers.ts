/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace SharedStructs {
  export type UserStruct = {
    userAddress: AddressLike;
    metadataCID: string;
    url: string;
    roles: BigNumberish[];
  };

  export type UserStructOutput = [
    userAddress: string,
    metadataCID: string,
    url: string,
    roles: bigint[]
  ] & {
    userAddress: string;
    metadataCID: string;
    url: string;
    roles: bigint[];
  };
}

export interface IHiveUsersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addUserToList"
      | "getUser"
      | "removeUserFromList"
      | "showUsersInList"
      | "updateUser"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addUserToList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUser",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUserFromList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "showUsersInList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUser",
    values: [string, string, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "addUserToList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeUserFromList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "showUsersInList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateUser", data: BytesLike): Result;
}

export interface IHiveUsers extends BaseContract {
  connect(runner?: ContractRunner | null): IHiveUsers;
  waitForDeployment(): Promise<this>;

  interface: IHiveUsersInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addUserToList: TypedContractMethod<
    [serviceType: BigNumberish],
    [void],
    "nonpayable"
  >;

  getUser: TypedContractMethod<
    [userAddress: AddressLike],
    [SharedStructs.UserStructOutput],
    "nonpayable"
  >;

  removeUserFromList: TypedContractMethod<
    [serviceType: BigNumberish],
    [void],
    "nonpayable"
  >;

  showUsersInList: TypedContractMethod<
    [serviceType: BigNumberish],
    [string[]],
    "nonpayable"
  >;

  updateUser: TypedContractMethod<
    [metadataCID: string, url: string, roles: BigNumberish[]],
    [SharedStructs.UserStructOutput],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addUserToList"
  ): TypedContractMethod<[serviceType: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getUser"
  ): TypedContractMethod<
    [userAddress: AddressLike],
    [SharedStructs.UserStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeUserFromList"
  ): TypedContractMethod<[serviceType: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "showUsersInList"
  ): TypedContractMethod<[serviceType: BigNumberish], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "updateUser"
  ): TypedContractMethod<
    [metadataCID: string, url: string, roles: BigNumberish[]],
    [SharedStructs.UserStructOutput],
    "nonpayable"
  >;

  filters: {};
}
