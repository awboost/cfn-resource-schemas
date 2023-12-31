import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ManagedBlockchain::Node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html}
 */
export type ManagedBlockchainNodeProperties = {
  MemberId?: string;
  NetworkId: string;
  NodeConfiguration: NodeConfiguration;
};
/**
 * Attribute type definition for `AWS::ManagedBlockchain::Node`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#aws-resource-managedblockchain-node-return-values}
 */
export type ManagedBlockchainNodeAttributes = {
  Arn: string;
  NodeId: string;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Node.NodeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html}
 */
export type NodeConfiguration = {
  AvailabilityZone: string;
  InstanceType: string;
};
/**
 * Resource Type definition for AWS::ManagedBlockchain::Node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html}
 */
export class ManagedBlockchainNode extends $Resource<
  "AWS::ManagedBlockchain::Node",
  ManagedBlockchainNodeProperties,
  ManagedBlockchainNodeAttributes
> {
  public static readonly Type = "AWS::ManagedBlockchain::Node";
  public static readonly AttributeNames = ["Arn" as const, "NodeId" as const];
  constructor(
    logicalId: string,
    properties: ManagedBlockchainNodeProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ManagedBlockchainNode.Type,
      properties,
      ManagedBlockchainNode.AttributeNames,
      options,
    );
  }
}
