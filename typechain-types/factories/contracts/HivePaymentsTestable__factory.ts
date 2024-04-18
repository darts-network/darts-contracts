/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  HivePaymentsTestable,
  HivePaymentsTestableInterface,
} from "../../contracts/HivePaymentsTestable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum HivePayments.PaymentReason",
        name: "reason",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum HivePayments.PaymentDirection",
        name: "direction",
        type: "uint8",
      },
    ],
    name: "Payment",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "jobCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "acceptResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "addResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "agreeJobCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "agreeResourceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mediationFee",
        type: "uint256",
      },
    ],
    name: "checkResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableChangeControllerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableChangeTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getControllerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "jobCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mediationFee",
        type: "uint256",
      },
    ],
    name: "mediationAcceptResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mediationFee",
        type: "uint256",
      },
    ],
    name: "mediationRejectResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controllerAddress",
        type: "address",
      },
    ],
    name: "setControllerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "setTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "timeoutAgreeRefundJobCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "timeoutAgreeRefundResourceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "timeoutJudgeResults",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultsCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mediationFee",
        type: "uint256",
      },
    ],
    name: "timeoutMediateResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dealId",
        type: "string",
      },
      {
        internalType: "address",
        name: "resourceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "jobCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeoutCollateral",
        type: "uint256",
      },
    ],
    name: "timeoutSubmitResults",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260018060146101000a81548160ff0219169083151502179055506001600360146101000a81548160ff0219169083151502179055503480156200004657600080fd5b50620000676200005b6200006d60201b60201c565b6200007560201b60201c565b62000139565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6127b180620001496000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80639e3868dc116100b8578063b91880351161007c578063b9188035146102d5578063c4d66de8146102f1578063c57380a21461030d578063d2485cce1461032b578063f2fde38b14610347578063f3d3d4481461036357610142565b80639e3868dc1461025b578063a470295814610277578063aea3825114610281578063afe1dff71461029d578063b1356714146102b957610142565b80632a1f90721161010a5780632a1f9072146101d557806338698529146101f15780634bc28da11461020d578063715018a614610217578063823f3de1146102215780638da5cb5b1461023d57610142565b806302fd8f801461014757806309cab510146101635780630ef0d89e1461017f57806310fe9ae81461019b57806326a4e8d2146101b9575b600080fd5b610161600480360381019061015c919061187f565b61037f565b005b61017d60048036038101906101789190611916565b610424565b005b61019960048036038101906101949190611999565b6104ba565b005b6101a3610543565b6040516101b09190611a17565b60405180910390f35b6101d360048036038101906101ce9190611a32565b61056d565b005b6101ef60048036038101906101ea9190611a5f565b6106b8565b005b61020b6004803603810190610206919061187f565b610732565b005b6102156107ca565b005b61021f6107ef565b005b61023b60048036038101906102369190611b1d565b610803565b005b6102456108df565b6040516102529190611a17565b60405180910390f35b61027560048036038101906102709190611999565b610908565b005b61027f610990565b005b61029b60048036038101906102969190611916565b6109b5565b005b6102b760048036038101906102b29190611916565b610a4b565b005b6102d360048036038101906102ce9190611a5f565b610ae2565b005b6102ef60048036038101906102ea9190611916565b610bc9565b005b61030b60048036038101906103069190611a32565b610c5e565b005b610315610da1565b6040516103229190611a17565b60405180910390f35b61034560048036038101906103409190611b1d565b610dcb565b005b610361600480360381019061035c9190611a32565b610e04565b005b61037d60048036038101906103789190611a32565b610e87565b005b610387610f91565b508273ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146103f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ed90611c49565b60405180910390fd5b6104038584846000610f9a565b6104108584836002610f9a565b61041d85858360026110c5565b5050505050565b61042c610f91565b508273ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161461049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290611cdb565b60405180910390fd5b6104a7848360016111f0565b6104b48484836002610f9a565b50505050565b6104c2610f91565b508173ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611cdb565b60405180910390fd5b61053e8383836002610f9a565b505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105756113f6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db90611d6d565b60405180910390fd5b600360149054906101000a900460ff16610633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062a90611dff565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6106c0610f91565b5060008490506000848611156106d8578491506106e7565b85856106e49190611e4e565b90505b6106f589888a856003611474565b610703898832866004611474565b600081111561071a576107198988836000610f9a565b5b6107278989866001610f9a565b505050505050505050565b61073a610f91565b508373ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146107a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a090611cdb565b60405180910390fd5b6107b68585846001610f9a565b6107c385848360026110c5565b5050505050565b6107d26113f6565b6000600360146101000a81548160ff021916908315150217905550565b6107f76113f6565b61080160006115a2565b565b61080b610f91565b508473ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16148061087157508373ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16145b6108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a790611ef4565b60405180910390fd5b6108bd8686846001610f9a565b6108ca8685856000610f9a565b6108d78685836004610f9a565b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610910610f91565b508173ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161461097f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097690611cdb565b60405180910390fd5b61098b838260026111f0565b505050565b6109986113f6565b6000600160146101000a81548160ff021916908315150217905550565b6109bd610f91565b508273ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390611c49565b60405180910390fd5b610a398484846002610f9a565b610a45848260046111f0565b50505050565b610a53610f91565b508273ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610ac2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab990611c49565b60405180910390fd5b610acf8484846000610f9a565b610adc8484836002610f9a565b50505050565b610aea610f91565b508473ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610b59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5090611c49565b60405180910390fd5b6000849050600084861115610b7057849150610b7f565b8585610b7c9190611e4e565b90505b610b8d89888a856003611474565b6000811115610ba457610ba38988836000610f9a565b5b610bb18988856002610f9a565b610bbe8989866001610f9a565b505050505050505050565b610bd1610f91565b508273ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3790611c49565b60405180910390fd5b610c4c848360006111f0565b610c58848260026111f0565b50505050565b6000600160169054906101000a900460ff16159050808015610c91575060018060159054906101000a900460ff1660ff16105b80610cbf5750610ca030611666565b158015610cbe575060018060159054906101000a900460ff1660ff16145b5b610cfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf590611f86565b60405180910390fd5b60018060156101000a81548160ff021916908360ff1602179055508015610d3a5760018060166101000a81548160ff0219169083151502179055505b610d438261056d565b8015610d9d576000600160166101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610d949190611ff8565b60405180910390a15b5050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610dd3610f91565b50610de18685856000610f9a565b610def868532846004611474565b610dfc86868460016110c5565b505050505050565b610e0c6113f6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7290612085565b60405180910390fd5b610e84816115a2565b50565b610e8f6113f6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610efe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef590612117565b60405180910390fd5b600160149054906101000a900460ff16610f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f44906121a9565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006001905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663599efa6b85856040518363ffffffff1660e01b8152600401610ff99291906121d8565b6020604051808303816000875af1158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c9190612239565b90508061107e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611075906122d8565b60405180910390fd5b7f64861f505d0cfce7a0cc3629c70eb54f7de27be35939b48300935694958a98428585858560026040516110b6959493929190612425565b60405180910390a15050505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166388c2bdfe85856040518363ffffffff1660e01b81526004016111249291906121d8565b6020604051808303816000875af1158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190612239565b9050806111a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a0906124f1565b60405180910390fd5b7f64861f505d0cfce7a0cc3629c70eb54f7de27be35939b48300935694958a98428585858560036040516111e1959493929190612425565b60405180910390a15050505050565b81600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231326040518263ffffffff1660e01b815260040161124c9190611a17565b602060405180830381865afa158015611269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128d9190612526565b10156112ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c5906125c5565b60405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635407e93c846040518263ffffffff1660e01b815260040161132b91906125e5565b6020604051808303816000875af115801561134a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136e9190612239565b9050806113b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a79061264c565b60405180910390fd5b7f64861f505d0cfce7a0cc3629c70eb54f7de27be35939b48300935694958a98428432858560006040516113e8959493929190612425565b60405180910390a150505050565b6113fe611689565b73ffffffffffffffffffffffffffffffffffffffff1661141c6108df565b73ffffffffffffffffffffffffffffffffffffffff1614611472576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611469906126b8565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663065e86c88686866040518463ffffffff1660e01b81526004016114d5939291906126d8565b6020604051808303816000875af11580156114f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115189190612239565b90508061155a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115519061275b565b60405180910390fd5b7f64861f505d0cfce7a0cc3629c70eb54f7de27be35939b48300935694958a9842868585856001604051611592959493929190612425565b60405180910390a1505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116f8826116af565b810181811067ffffffffffffffff82111715611717576117166116c0565b5b80604052505050565b600061172a611691565b905061173682826116ef565b919050565b600067ffffffffffffffff821115611756576117556116c0565b5b61175f826116af565b9050602081019050919050565b82818337600083830152505050565b600061178e6117898461173b565b611720565b9050828152602081018484840111156117aa576117a96116aa565b5b6117b584828561176c565b509392505050565b600082601f8301126117d2576117d16116a5565b5b81356117e284826020860161177b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611816826117eb565b9050919050565b6118268161180b565b811461183157600080fd5b50565b6000813590506118438161181d565b92915050565b6000819050919050565b61185c81611849565b811461186757600080fd5b50565b60008135905061187981611853565b92915050565b600080600080600060a0868803121561189b5761189a61169b565b5b600086013567ffffffffffffffff8111156118b9576118b86116a0565b5b6118c5888289016117bd565b95505060206118d688828901611834565b94505060406118e788828901611834565b93505060606118f88882890161186a565b92505060806119098882890161186a565b9150509295509295909350565b600080600080608085870312156119305761192f61169b565b5b600085013567ffffffffffffffff81111561194e5761194d6116a0565b5b61195a878288016117bd565b945050602061196b87828801611834565b935050604061197c8782880161186a565b925050606061198d8782880161186a565b91505092959194509250565b6000806000606084860312156119b2576119b161169b565b5b600084013567ffffffffffffffff8111156119d0576119cf6116a0565b5b6119dc868287016117bd565b93505060206119ed86828701611834565b92505060406119fe8682870161186a565b9150509250925092565b611a118161180b565b82525050565b6000602082019050611a2c6000830184611a08565b92915050565b600060208284031215611a4857611a4761169b565b5b6000611a5684828501611834565b91505092915050565b600080600080600080600060e0888a031215611a7e57611a7d61169b565b5b600088013567ffffffffffffffff811115611a9c57611a9b6116a0565b5b611aa88a828b016117bd565b9750506020611ab98a828b01611834565b9650506040611aca8a828b01611834565b9550506060611adb8a828b0161186a565b9450506080611aec8a828b0161186a565b93505060a0611afd8a828b0161186a565b92505060c0611b0e8a828b0161186a565b91505092959891949750929550565b60008060008060008060c08789031215611b3a57611b3961169b565b5b600087013567ffffffffffffffff811115611b5857611b576116a0565b5b611b6489828a016117bd565b9650506020611b7589828a01611834565b9550506040611b8689828a01611834565b9450506060611b9789828a0161186a565b9350506080611ba889828a0161186a565b92505060a0611bb989828a0161186a565b9150509295509295509295565b600082825260208201905092915050565b7f486976655061796d656e74733a2043616e206f6e6c792062652063616c6c656460008201527f20627920746865204a4300000000000000000000000000000000000000000000602082015250565b6000611c33602a83611bc6565b9150611c3e82611bd7565b604082019050919050565b60006020820190508181036000830152611c6281611c26565b9050919050565b7f486976655061796d656e74733a2043616e206f6e6c792062652063616c6c656460008201527f2062792074686520525000000000000000000000000000000000000000000000602082015250565b6000611cc5602a83611bc6565b9150611cd082611c69565b604082019050919050565b60006020820190508181036000830152611cf481611cb8565b9050919050565b7f486976655061796d656e74733a20546f6b656e2061646472657373206d75737460008201527f20626520646566696e6564000000000000000000000000000000000000000000602082015250565b6000611d57602b83611bc6565b9150611d6282611cfb565b604082019050919050565b60006020820190508181036000830152611d8681611d4a565b9050919050565b7f48697665546f6b656e3a2063616e4368616e6765546f6b656e4164647265737360008201527f2069732064697361626c65640000000000000000000000000000000000000000602082015250565b6000611de9602c83611bc6565b9150611df482611d8d565b604082019050919050565b60006020820190508181036000830152611e1881611ddc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e5982611849565b9150611e6483611849565b9250828203905081811115611e7c57611e7b611e1f565b5b92915050565b7f486976655061796d656e74733a2043616e206f6e6c792062652063616c6c656460008201527f20627920746865205250206f72204a4300000000000000000000000000000000602082015250565b6000611ede603083611bc6565b9150611ee982611e82565b604082019050919050565b60006020820190508181036000830152611f0d81611ed1565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611f70602e83611bc6565b9150611f7b82611f14565b604082019050919050565b60006020820190508181036000830152611f9f81611f63565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000611fe2611fdd611fd884611fa6565b611fbd565b611fb0565b9050919050565b611ff281611fc7565b82525050565b600060208201905061200d6000830184611fe9565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061206f602683611bc6565b915061207a82612013565b604082019050919050565b6000602082019050818103600083015261209e81612062565b9050919050565b7f436f6e74726f6c6c65724f776e61626c653a20436f6e74726f6c6c657220616460008201527f6472657373206d75737420626520646566696e65640000000000000000000000602082015250565b6000612101603583611bc6565b915061210c826120a5565b604082019050919050565b60006020820190508181036000830152612130816120f4565b9050919050565b7f436f6e74726f6c6c65724f776e61626c653a2063616e4368616e6765436f6e7460008201527f726f6c6c6572416464726573732069732064697361626c656400000000000000602082015250565b6000612193603983611bc6565b915061219e82612137565b604082019050919050565b600060208201905081810360008301526121c281612186565b9050919050565b6121d281611849565b82525050565b60006040820190506121ed6000830185611a08565b6121fa60208301846121c9565b9392505050565b60008115159050919050565b61221681612201565b811461222157600080fd5b50565b6000815190506122338161220d565b92915050565b60006020828403121561224f5761224e61169b565b5b600061225d84828501612224565b91505092915050565b7f486976655061796d656e74733a20526566756e6420657363726f77206661696c60008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b60006122c2602283611bc6565b91506122cd82612266565b604082019050919050565b600060208201905081810360008301526122f1816122b5565b9050919050565b600081519050919050565b60005b83811015612321578082015181840152602081019050612306565b60008484015250505050565b6000612338826122f8565b6123428185611bc6565b9350612352818560208601612303565b61235b816116af565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600581106123a6576123a5612366565b5b50565b60008190506123b782612395565b919050565b60006123c7826123a9565b9050919050565b6123d7816123bc565b82525050565b600481106123ee576123ed612366565b5b50565b60008190506123ff826123dd565b919050565b600061240f826123f1565b9050919050565b61241f81612404565b82525050565b600060a082019050818103600083015261243f818861232d565b905061244e6020830187611a08565b61245b60408301866121c9565b61246860608301856123ce565b6124756080830184612416565b9695505050505050565b7f486976655061796d656e74733a20536c61736820657363726f77206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b60006124db602183611bc6565b91506124e68261247f565b604082019050919050565b6000602082019050818103600083015261250a816124ce565b9050919050565b60008151905061252081611853565b92915050565b60006020828403121561253c5761253b61169b565b5b600061254a84828501612511565b91505092915050565b7f486976655061796d656e74733a20496e73756666696369656e742062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006125af602283611bc6565b91506125ba82612553565b604082019050919050565b600060208201905081810360008301526125de816125a2565b9050919050565b60006020820190506125fa60008301846121c9565b92915050565b7f486976655061796d656e74733a2050617920657363726f77206661696c656400600082015250565b6000612636601f83611bc6565b915061264182612600565b602082019050919050565b6000602082019050818103600083015261266581612629565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006126a2602083611bc6565b91506126ad8261266c565b602082019050919050565b600060208201905081810360008301526126d181612695565b9050919050565b60006060820190506126ed6000830186611a08565b6126fa6020830185611a08565b61270760408301846121c9565b949350505050565b7f486976655061796d656e74733a20506179206a6f62206661696c656400000000600082015250565b6000612745601c83611bc6565b91506127508261270f565b602082019050919050565b6000602082019050818103600083015261277481612738565b905091905056fea26469706673582212203c785539db0b2ecc4818649328dce7542f3c085d900ce3bfdd5aa4dd3f0f9b4364736f6c63430008150033";

type HivePaymentsTestableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HivePaymentsTestableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HivePaymentsTestable__factory extends ContractFactory {
  constructor(...args: HivePaymentsTestableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      HivePaymentsTestable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): HivePaymentsTestable__factory {
    return super.connect(runner) as HivePaymentsTestable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HivePaymentsTestableInterface {
    return new Interface(_abi) as HivePaymentsTestableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HivePaymentsTestable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as HivePaymentsTestable;
  }
}
