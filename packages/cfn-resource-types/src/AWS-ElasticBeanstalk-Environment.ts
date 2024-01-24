import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticBeanstalk::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html}
 */
export type ElasticBeanstalkEnvironmentProperties = {
  /**
   * The name of the application that is associated with this environment.
   */
  ApplicationName: string;
  /**
   * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
   */
  CNAMEPrefix?: string;
  /**
   * Your description for this environment.
   */
  Description?: string;
  /**
   * A unique name for the environment.
   */
  EnvironmentName?: string;
  /**
   * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
   */
  OperationsRole?: string;
  /**
   * Key-value pairs defining configuration options for this environment, such as the instance type.
   */
  OptionSettings?: OptionSetting[];
  /**
   * The Amazon Resource Name (ARN) of the custom platform to use with the environment.
   */
  PlatformArn?: string;
  /**
   * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
   */
  SolutionStackName?: string;
  /**
   * Specifies the tags applied to resources in the environment.
   */
  Tags?: Tag[];
  /**
   * The name of the Elastic Beanstalk configuration template to use with the environment.
   */
  TemplateName?: string;
  /**
   * Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
   */
  Tier?: Tier;
  /**
   * The name of the application version to deploy.
   */
  VersionLabel?: string;
};
/**
 * Attribute type definition for `AWS::ElasticBeanstalk::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#aws-resource-elasticbeanstalk-environment-return-values}
 */
export type ElasticBeanstalkEnvironmentAttributes = {
  EndpointURL: string;
};
/**
 * Type definition for `AWS::ElasticBeanstalk::Environment.OptionSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html}
 */
export type OptionSetting = {
  /**
   * A unique namespace that identifies the option's associated AWS resource.
   */
  Namespace: string;
  /**
   * The name of the configuration option.
   */
  OptionName: string;
  /**
   * A unique resource name for the option setting. Use it for a time–based scaling configuration option.
   */
  ResourceName?: string;
  /**
   * The current value for the configuration option.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticBeanstalk::Environment.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::ElasticBeanstalk::Environment.Tier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html}
 */
export type Tier = {
  /**
   * The name of this environment tier.
   */
  Name?: string;
  /**
   * The type of this environment tier.
   */
  Type?: string;
  /**
   * The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.
   */
  Version?: string;
};
/**
 * Resource Type definition for AWS::ElasticBeanstalk::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html}
 */
export class ElasticBeanstalkEnvironment extends $Resource<
  "AWS::ElasticBeanstalk::Environment",
  ElasticBeanstalkEnvironmentProperties,
  ElasticBeanstalkEnvironmentAttributes
> {
  public static readonly Type = "AWS::ElasticBeanstalk::Environment";
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElasticBeanstalkEnvironment.Type, properties, options);
  }
}
