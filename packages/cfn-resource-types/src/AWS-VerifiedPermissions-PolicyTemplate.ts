import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html}
 */
export type VerifiedPermissionsPolicyTemplateProperties = {
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId?: string;
  /**
   * @minLength `1`
   * @maxLength `10000`
   */
  Statement: string;
};
/**
 * Attribute type definition for `AWS::VerifiedPermissions::PolicyTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html#aws-resource-verifiedpermissions-policytemplate-return-values}
 */
export type VerifiedPermissionsPolicyTemplateAttributes = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyTemplateId: string;
};
/**
 * Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html}
 */
export class VerifiedPermissionsPolicyTemplate extends $Resource<
  "AWS::VerifiedPermissions::PolicyTemplate",
  VerifiedPermissionsPolicyTemplateProperties,
  VerifiedPermissionsPolicyTemplateAttributes
> {
  public static readonly Type = "AWS::VerifiedPermissions::PolicyTemplate";
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VerifiedPermissionsPolicyTemplate.Type,
      properties,
      options,
    );
  }
}
