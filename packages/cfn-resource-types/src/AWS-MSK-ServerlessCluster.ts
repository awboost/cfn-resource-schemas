import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MSK::ServerlessCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html}
 */
export type MSKServerlessClusterProperties = {
  ClientAuthentication: ClientAuthentication;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  ClusterName: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  VpcConfigs: VpcConfig[];
};
/**
 * Attribute type definition for `AWS::MSK::ServerlessCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#aws-resource-msk-serverlesscluster-return-values}
 */
export type MSKServerlessClusterAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::MSK::ServerlessCluster.ClientAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-clientauthentication.html}
 */
export type ClientAuthentication = {
  Sasl: Sasl;
};
/**
 * Type definition for `AWS::MSK::ServerlessCluster.Iam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-iam.html}
 */
export type Iam = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::ServerlessCluster.Sasl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-sasl.html}
 */
export type Sasl = {
  Iam: Iam;
};
/**
 * Type definition for `AWS::MSK::ServerlessCluster.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroups?: string[];
  SubnetIds: string[];
};
/**
 * Resource Type definition for AWS::MSK::ServerlessCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html}
 */
export class MSKServerlessCluster extends $Resource<
  "AWS::MSK::ServerlessCluster",
  MSKServerlessClusterProperties,
  MSKServerlessClusterAttributes
> {
  public static readonly Type = "AWS::MSK::ServerlessCluster";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: MSKServerlessClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MSKServerlessCluster.Type,
      properties,
      MSKServerlessCluster.AttributeNames,
      options,
    );
  }
}
