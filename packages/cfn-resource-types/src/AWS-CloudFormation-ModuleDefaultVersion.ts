import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CloudFormation::ModuleDefaultVersion`.
 * A module that has been registered in the CloudFormation registry as the default version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html}
 */
export type CloudFormationModuleDefaultVersionProperties = {
  /**
   * The Amazon Resource Name (ARN) of the module version to set as the default version.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/module/.+/[0-9]{8}$`
   */
  Arn?: string;
  /**
   * The name of a module existing in the registry.
   * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE`
   */
  ModuleName?: string;
  /**
   * The ID of an existing version of the named module to set as the default.
   * @pattern `^[0-9]{8}$`
   */
  VersionId?: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::ModuleDefaultVersion`.
 * A module that has been registered in the CloudFormation registry as the default version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html}
 */
export class CloudFormationModuleDefaultVersion extends $Resource<
  "AWS::CloudFormation::ModuleDefaultVersion",
  CloudFormationModuleDefaultVersionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::ModuleDefaultVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationModuleDefaultVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationModuleDefaultVersion.Type,
      properties,
      CloudFormationModuleDefaultVersion.AttributeNames,
      options,
    );
  }
}
