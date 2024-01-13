import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::VerifiedPermissions::Policy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html}
 */
export type VerifiedPermissionsPolicyProperties = {
  Definition: PolicyDefinition;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId: string;
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
 * Type definition for `AWS::VerifiedPermissions::Policy.PolicyDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policydefinition.html}
 */
export type PolicyDefinition =
  | {
      Static: StaticPolicyDefinition;
    }
  | {
      TemplateLinked: TemplateLinkedPolicyDefinition;
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
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VerifiedPermissionsPolicy.Type, properties, options);
  }
}
