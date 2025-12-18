import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::DAX::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export type DAXSubnetGroupProperties = {
  Description?: string;
  SubnetGroupName?: string;
  SubnetIds: string[];
};
/**
 * Resource type definition for AWS::DAX::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export class DAXSubnetGroup extends $Resource<
  "AWS::DAX::SubnetGroup",
  DAXSubnetGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DAX::SubnetGroup";
  constructor(
    logicalId: string,
    properties: DAXSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DAXSubnetGroup.Type, properties, options);
  }
}
