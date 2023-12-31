import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html}
 */
export type VerifiedPermissionsPolicyTemplateProperties = {
  /**
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
  public static readonly AttributeNames = ["PolicyTemplateId" as const];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VerifiedPermissionsPolicyTemplate.Type,
      properties,
      VerifiedPermissionsPolicyTemplate.AttributeNames,
      options,
    );
  }
}
