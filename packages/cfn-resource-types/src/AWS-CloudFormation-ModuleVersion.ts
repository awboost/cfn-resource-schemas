import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::ModuleVersion`.
 * A module that has been registered in the CloudFormation registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html}
 */
export type CloudFormationModuleVersionProperties = {
  /**
     * The name of the module being registered.
    
    Recommended module naming pattern: company_or_organization::service::type::MODULE.
     * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE`
     */
  ModuleName: string;
  /**
   * The url to the S3 bucket containing the schema and template fragment for the module you want to register.
   */
  ModulePackage: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::ModuleVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#aws-resource-cloudformation-moduleversion-return-values}
 */
export type CloudFormationModuleVersionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the module.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/module/.+$`
   */
  Arn: string;
  /**
   * The description of the registered module.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description: string;
  /**
   * The URL of a page providing detailed documentation for this module.
   * @maxLength `4096`
   */
  DocumentationUrl: string;
  /**
   * Indicator of whether this module version is the current default version
   */
  IsDefaultVersion: boolean;
  /**
   * The schema defining input parameters to and resources generated by the module.
   * @minLength `1`
   * @maxLength `16777216`
   */
  Schema: string;
  /**
   * The time that the specified module version was registered.
   */
  TimeCreated: string;
  /**
   * The version ID of the module represented by this module instance.
   * @pattern `^[0-9]{8}$`
   */
  VersionId: string;
  /**
     * The scope at which the type is visible and usable in CloudFormation operations.
    
    The only allowed value at present is:
    
    PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.
     */
  Visibility: "PRIVATE";
};
/**
 * Resource type definition for `AWS::CloudFormation::ModuleVersion`.
 * A module that has been registered in the CloudFormation registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html}
 */
export class CloudFormationModuleVersion extends $Resource<
  "AWS::CloudFormation::ModuleVersion",
  CloudFormationModuleVersionProperties,
  CloudFormationModuleVersionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::ModuleVersion";
  constructor(
    logicalId: string,
    properties: CloudFormationModuleVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationModuleVersion.Type, properties, options);
  }
}