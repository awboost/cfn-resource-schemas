import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::EnvironmentActions Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentactions.html}
 */
export type DataZoneEnvironmentActionsProperties = {
  /**
   * The description of the Amazon DataZone environment action.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The identifier of the Amazon DataZone domain in which the environment would be created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier?: string;
  /**
   * The identifier of the Amazon DataZone environment in which the action is taking place
   * @minLength `1`
   * @maxLength `36`
   * @pattern `[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentIdentifier?: string;
  /**
   * The ID of the Amazon DataZone environment action.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Identifier?: string;
  /**
   * The name of the environment action.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  /**
   * The parameters of the environment action.
   */
  Parameters?: AwsConsoleLinkParameters;
};
/**
 * Attribute type definition for `AWS::DataZone::EnvironmentActions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentactions.html#aws-resource-datazone-environmentactions-return-values}
 */
export type DataZoneEnvironmentActionsAttributes = {
  /**
   * The identifier of the Amazon DataZone domain in which the environment is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The identifier of the Amazon DataZone environment in which the action is taking place
   * @minLength `1`
   * @maxLength `36`
   * @pattern `[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentId: string;
  /**
   * The ID of the Amazon DataZone environment action.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::DataZone::EnvironmentActions.AwsConsoleLinkParameters`.
 * The parameters of the console link specified as part of the environment action
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentactions-awsconsolelinkparameters.html}
 */
export type AwsConsoleLinkParameters = {
  /**
   * The URI of the console link specified as part of the environment action.
   * @minLength `1`
   * @maxLength `2048`
   */
  Uri?: string;
};
/**
 * Definition of AWS::DataZone::EnvironmentActions Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentactions.html}
 */
export class DataZoneEnvironmentActions extends $Resource<
  "AWS::DataZone::EnvironmentActions",
  DataZoneEnvironmentActionsProperties,
  DataZoneEnvironmentActionsAttributes
> {
  public static readonly Type = "AWS::DataZone::EnvironmentActions";
  constructor(
    logicalId: string,
    properties: DataZoneEnvironmentActionsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneEnvironmentActions.Type, properties, options);
  }
}
