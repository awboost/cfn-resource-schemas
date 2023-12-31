import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html}
 */
export type ElasticBeanstalkConfigurationTemplateProperties = {
  /**
   * The name of the Elastic Beanstalk application to associate with this configuration template.
   */
  ApplicationName: string;
  /**
   * An optional description for this configuration.
   */
  Description?: string;
  /**
   * The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.
   */
  EnvironmentId?: string;
  /**
   * Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.
   */
  OptionSettings?: ConfigurationOptionSetting[];
  /**
   * The Amazon Resource Name (ARN) of the custom platform. For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.
   */
  PlatformArn?: string;
  /**
     * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.
    
     You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.
    
     Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.
     */
  SolutionStackName?: string;
  /**
     * An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.
    
    Values specified in OptionSettings override any values obtained from the SourceConfiguration.
    
    You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.
    
    Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
     */
  SourceConfiguration?: SourceConfiguration;
};
/**
 * Attribute type definition for `AWS::ElasticBeanstalk::ConfigurationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#aws-resource-elasticbeanstalk-configurationtemplate-return-values}
 */
export type ElasticBeanstalkConfigurationTemplateAttributes = {
  /**
   * The name of the configuration template
   */
  TemplateName: string;
};
/**
 * Type definition for `AWS::ElasticBeanstalk::ConfigurationTemplate.ConfigurationOptionSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html}
 */
export type ConfigurationOptionSetting = {
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
 * Type definition for `AWS::ElasticBeanstalk::ConfigurationTemplate.SourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html}
 */
export type SourceConfiguration = {
  /**
   * The name of the application associated with the configuration.
   */
  ApplicationName: string;
  /**
   * The name of the configuration template.
   */
  TemplateName: string;
};
/**
 * Resource Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html}
 */
export class ElasticBeanstalkConfigurationTemplate extends $Resource<
  "AWS::ElasticBeanstalk::ConfigurationTemplate",
  ElasticBeanstalkConfigurationTemplateProperties,
  ElasticBeanstalkConfigurationTemplateAttributes
> {
  public static readonly Type = "AWS::ElasticBeanstalk::ConfigurationTemplate";
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkConfigurationTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticBeanstalkConfigurationTemplate.Type,
      properties,
      options,
    );
  }
}
