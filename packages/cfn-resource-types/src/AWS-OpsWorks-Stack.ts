import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::OpsWorks::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html}
 */
export type OpsWorksStackProperties = {
  AgentVersion?: string;
  Attributes?: Record<string, string>;
  ChefConfiguration?: ChefConfiguration;
  CloneAppIds?: string[];
  ClonePermissions?: boolean;
  ConfigurationManager?: StackConfigurationManager;
  CustomCookbooksSource?: Source;
  CustomJson?: Record<string, any>;
  DefaultAvailabilityZone?: string;
  DefaultInstanceProfileArn: string;
  DefaultOs?: string;
  DefaultRootDeviceType?: string;
  DefaultSshKeyName?: string;
  DefaultSubnetId?: string;
  EcsClusterArn?: string;
  ElasticIps?: ElasticIp[];
  HostnameTheme?: string;
  Name: string;
  RdsDbInstances?: RdsDbInstance[];
  ServiceRoleArn: string;
  SourceStackId?: string;
  Tags?: Tag[];
  UseCustomCookbooks?: boolean;
  UseOpsworksSecurityGroups?: boolean;
  VpcId?: string;
};
/**
 * Attribute type definition for `AWS::OpsWorks::Stack`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#aws-resource-opsworks-stack-return-values}
 */
export type OpsWorksStackAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.ChefConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html}
 */
export type ChefConfiguration = {
  BerkshelfVersion?: string;
  ManageBerkshelf?: boolean;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.ElasticIp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html}
 */
export type ElasticIp = {
  Ip: string;
  Name?: string;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.RdsDbInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html}
 */
export type RdsDbInstance = {
  DbPassword: string;
  DbUser: string;
  RdsDbInstanceArn: string;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.Source`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html}
 */
export type Source = {
  Password?: string;
  Revision?: string;
  SshKey?: string;
  Type?: string;
  Url?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.StackConfigurationManager`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigurationmanager.html}
 */
export type StackConfigurationManager = {
  Name?: string;
  Version?: string;
};
/**
 * Type definition for `AWS::OpsWorks::Stack.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html}
 */
export class OpsWorksStack extends $Resource<
  "AWS::OpsWorks::Stack",
  OpsWorksStackProperties,
  OpsWorksStackAttributes
> {
  public static readonly Type = "AWS::OpsWorks::Stack";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: OpsWorksStackProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksStack.Type,
      properties,
      OpsWorksStack.AttributeNames,
      options,
    );
  }
}
