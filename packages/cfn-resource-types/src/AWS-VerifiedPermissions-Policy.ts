import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::VerifiedPermissions::Policy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html}
 */
export type VerifiedPermissionsPolicyProperties = {
  Definition:
    | {
        Static: StaticPolicyDefinition;
      }
    | {
        TemplateLinked: TemplateLinkedPolicyDefinition;
      };
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId?: string;
};
/**
 * Attribute type definition for `AWS::VerifiedPermissions::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#aws-resource-verifiedpermissions-policy-return-values}
 */
export type VerifiedPermissionsPolicyAttributes = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyId: string;
  PolicyType: PolicyType;
};
/**
 * Type definition for `AWS::VerifiedPermissions::Policy.EntityIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-entityidentifier.html}
 */
export type EntityIdentifier = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^.*$`
   */
  EntityId: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^.*$`
   */
  EntityType: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::Policy.PolicyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policytype.html}
 */
export type PolicyType = "STATIC" | "TEMPLATE_LINKED";
/**
 * Type definition for `AWS::VerifiedPermissions::Policy.StaticPolicyDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-staticpolicydefinition.html}
 */
export type StaticPolicyDefinition = {
  /**
   * @maxLength `150`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `10000`
   */
  Statement: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::Policy.TemplateLinkedPolicyDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html}
 */
export type TemplateLinkedPolicyDefinition = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyTemplateId: string;
  Principal?: EntityIdentifier;
  Resource?: EntityIdentifier;
};
/**
 * Definition of AWS::VerifiedPermissions::Policy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html}
 */
export class VerifiedPermissionsPolicy extends $Resource<
  "AWS::VerifiedPermissions::Policy",
  VerifiedPermissionsPolicyProperties,
  VerifiedPermissionsPolicyAttributes
> {
  public static readonly Type = "AWS::VerifiedPermissions::Policy";
  public static readonly AttributeNames = [
    "PolicyId" as const,
    "PolicyType" as const,
  ];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VerifiedPermissionsPolicy.Type,
      properties,
      VerifiedPermissionsPolicy.AttributeNames,
      options,
    );
  }
}
