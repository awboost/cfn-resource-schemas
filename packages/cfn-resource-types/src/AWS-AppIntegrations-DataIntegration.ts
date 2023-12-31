import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppIntegrations::DataIntegration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html}
 */
export type AppIntegrationsDataIntegrationProperties = {
  /**
   * The data integration description.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The configuration for what files should be pulled from the source.
   */
  FileConfiguration?: FileConfiguration;
  /**
   * The KMS key of the data integration.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*\S.*`
   */
  KmsKey: string;
  /**
   * The name of the data integration.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Name: string;
  /**
   * The configuration for what data should be pulled from the source.
   */
  ObjectConfiguration?: ObjectConfiguration;
  /**
   * The name of the data and how often it should be pulled from the source.
   */
  ScheduleConfig?: ScheduleConfig;
  /**
   * The URI of the data source.
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+$)|(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+[\w/!@#+=.-]+[\w/!@#+=.,-]+$)`
   */
  SourceURI: string;
  /**
   * The tags (keys and values) associated with the data integration.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppIntegrations::DataIntegration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#aws-resource-appintegrations-dataintegration-return-values}
 */
export type AppIntegrationsDataIntegrationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the data integration.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  DataIntegrationArn: string;
  /**
   * The unique identifer of the data integration.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::AppIntegrations::DataIntegration.FileConfiguration`.
 * The configuration for what files should be pulled from the source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-fileconfiguration.html}
 */
export type FileConfiguration = {
  /**
   * Restrictions for what files should be pulled from the source.
   */
  Filters?: Record<string, string[]>;
  /**
   * Identifiers for the source folders to pull all files from recursively.
   * @minLength `1`
   * @maxLength `10`
   */
  Folders: string[];
};
/**
 * Type definition for `AWS::AppIntegrations::DataIntegration.ObjectConfiguration`.
 * The configuration for what data should be pulled from the source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-objectconfiguration.html}
 */
export type ObjectConfiguration = Record<string, Record<string, string[]>>;
/**
 * Type definition for `AWS::AppIntegrations::DataIntegration.ScheduleConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html}
 */
export type ScheduleConfig = {
  /**
   * The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*\S.*`
   */
  FirstExecutionFrom?: string;
  /**
   * The name of the object to pull from the data source.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Object?: string;
  /**
   * How often the data should be pulled from data source.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*\S.*`
   */
  ScheduleExpression: string;
};
/**
 * Type definition for `AWS::AppIntegrations::DataIntegration.Tag`.
 * A label for tagging DataIntegration resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::AppIntegrations::DataIntegration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html}
 */
export class AppIntegrationsDataIntegration extends $Resource<
  "AWS::AppIntegrations::DataIntegration",
  AppIntegrationsDataIntegrationProperties,
  AppIntegrationsDataIntegrationAttributes
> {
  public static readonly Type = "AWS::AppIntegrations::DataIntegration";
  constructor(
    logicalId: string,
    properties: AppIntegrationsDataIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppIntegrationsDataIntegration.Type, properties, options);
  }
}
