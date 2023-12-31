import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cloud9::EnvironmentEC2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html}
 */
export type Cloud9EnvironmentEC2Properties = {
  AutomaticStopTimeMinutes?: number;
  ConnectionType?: string;
  Description?: string;
  ImageId?: string;
  InstanceType: string;
  Name?: string;
  OwnerArn?: string;
  Repositories?: Repository[];
  SubnetId?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Cloud9::EnvironmentEC2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#aws-resource-cloud9-environmentec2-return-values}
 */
export type Cloud9EnvironmentEC2Attributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::Cloud9::EnvironmentEC2.Repository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html}
 */
export type Repository = {
  PathComponent: string;
  RepositoryUrl: string;
};
/**
 * Type definition for `AWS::Cloud9::EnvironmentEC2.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Cloud9::EnvironmentEC2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html}
 */
export class Cloud9EnvironmentEC2 extends $Resource<
  "AWS::Cloud9::EnvironmentEC2",
  Cloud9EnvironmentEC2Properties,
  Cloud9EnvironmentEC2Attributes
> {
  public static readonly Type = "AWS::Cloud9::EnvironmentEC2";
  constructor(
    logicalId: string,
    properties: Cloud9EnvironmentEC2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Cloud9EnvironmentEC2.Type, properties, options);
  }
}
