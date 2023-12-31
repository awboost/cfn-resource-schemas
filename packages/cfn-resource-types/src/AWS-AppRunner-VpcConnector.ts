import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::AppRunner::VpcConnector resource specifies an App Runner VpcConnector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html}
 */
export type AppRunnerVpcConnectorProperties = {
  /**
   * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
   */
  SecurityGroups?: string[];
  /**
   * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
   * @minLength `1`
   */
  Subnets: string[];
  /**
   * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
   */
  Tags?: Tag[];
  /**
   * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
   * @minLength `4`
   * @maxLength `40`
   * @pattern `^[A-Za-z0-9][A-Za-z0-9-\\_]{3,39}$`
   */
  VpcConnectorName?: string;
};
/**
 * Attribute type definition for `AWS::AppRunner::VpcConnector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#aws-resource-apprunner-vpcconnector-return-values}
 */
export type AppRunnerVpcConnectorAttributes = {
  /**
   * The Amazon Resource Name (ARN) of this VPC connector.
   * @minLength `44`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   */
  VpcConnectorArn: string;
  /**
   * The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same Name.
   */
  VpcConnectorRevision: number;
};
/**
 * Type definition for `AWS::AppRunner::VpcConnector.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcconnector-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * The AWS::AppRunner::VpcConnector resource specifies an App Runner VpcConnector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html}
 */
export class AppRunnerVpcConnector extends $Resource<
  "AWS::AppRunner::VpcConnector",
  AppRunnerVpcConnectorProperties,
  AppRunnerVpcConnectorAttributes
> {
  public static readonly Type = "AWS::AppRunner::VpcConnector";
  public static readonly AttributeNames = [
    "VpcConnectorArn" as const,
    "VpcConnectorRevision" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppRunnerVpcConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppRunnerVpcConnector.Type,
      properties,
      AppRunnerVpcConnector.AttributeNames,
      options,
    );
  }
}
