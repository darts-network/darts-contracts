/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IHiveMediationHandler,
  IHiveMediationHandlerInterface,
} from "../../../contracts/IHiveMediation.sol/IHiveMediationHandler";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "dealId",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "solver",
                type: "address",
              },
              {
                internalType: "address",
                name: "jobCreator",
                type: "address",
              },
              {
                internalType: "address",
                name: "resourceProvider",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "mediators",
                type: "address[]",
              },
            ],
            internalType: "struct SharedStructs.DealMembers",
            name: "members",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "timeout",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "collateral",
                    type: "uint256",
                  },
                ],
                internalType: "struct SharedStructs.DealTimeout",
                name: "agree",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "timeout",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "collateral",
                    type: "uint256",
                  },
                ],
                internalType: "struct SharedStructs.DealTimeout",
                name: "submitResults",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "timeout",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "collateral",
                    type: "uint256",
                  },
                ],
                internalType: "struct SharedStructs.DealTimeout",
                name: "judgeResults",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "timeout",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "collateral",
                    type: "uint256",
                  },
                ],
                internalType: "struct SharedStructs.DealTimeout",
                name: "mediateResults",
                type: "tuple",
              },
            ],
            internalType: "struct SharedStructs.DealTimeouts",
            name: "timeouts",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "instructionPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "paymentCollateral",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "resultsCollateralMultiple",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mediationFee",
                type: "uint256",
              },
            ],
            internalType: "struct SharedStructs.DealPricing",
            name: "pricing",
            type: "tuple",
          },
        ],
        internalType: "struct SharedStructs.Deal",
        name: "deal",
        type: "tuple",
      },
    ],
    name: "mediationRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IHiveMediationHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IHiveMediationHandlerInterface {
    return new Interface(_abi) as IHiveMediationHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IHiveMediationHandler {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IHiveMediationHandler;
  }
}
