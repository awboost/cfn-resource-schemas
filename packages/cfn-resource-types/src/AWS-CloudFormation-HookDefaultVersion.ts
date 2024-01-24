import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::HookDefaultVersion`.
 * Set a version as default version for a hook in CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html}
 */
export type CloudFormationHookDefaultVersionProperties = {
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     */
  TypeName?: string;
  /**
   * The Amazon Resource Name (ARN) of the type version.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  TypeVersionArn?: string;
  /**
   * The ID of an existing version of the hook to set as the default.
   * @pattern `^[A-Za-z0-9-]{1,128}$`
   */
  VersionId?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::HookDefaultVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#aws-resource-cloudformation-hookdefaultversion-return-values}
 */
export type CloudFormationHookDefaultVersionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  Arn: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::HookDefaultVersion`.
 * Set a version as default version for a hook in CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html}
 */
export class CloudFormationHookDefaultVersion extends $Resource<
  "AWS::CloudFormation::HookDefaultVersion",
  CloudFormationHookDefaultVersionProperties,
  CloudFormationHookDefaultVersionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::HookDefaultVersion";
  constructor(
    logicalId: string,
    properties: CloudFormationHookDefaultVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationHookDefaultVersion.Type,
      properties,
      options,
    );
  }
}
