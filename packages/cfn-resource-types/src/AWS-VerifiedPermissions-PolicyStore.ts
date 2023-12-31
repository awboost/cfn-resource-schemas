import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::VerifiedPermissions::PolicyStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html}
 */
export type VerifiedPermissionsPolicyStoreProperties = {
  Schema?: SchemaDefinition;
  ValidationSettings: ValidationSettings;
};
/**
 * Attribute type definition for `AWS::VerifiedPermissions::PolicyStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#aws-resource-verifiedpermissions-policystore-return-values}
 */
export type VerifiedPermissionsPolicyStoreAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2500`
   * @pattern `^arn:[^:]*:[^:]*:[^:]*:[^:]*:.*$`
   */
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.SchemaDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-schemadefinition.html}
 */
export type SchemaDefinition = {
  CedarJson?: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.ValidationMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-validationmode.html}
 */
export type ValidationMode = "OFF" | "STRICT";
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.ValidationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-validationsettings.html}
 */
export type ValidationSettings = {
  Mode: ValidationMode;
};
/**
 * Definition of AWS::VerifiedPermissions::PolicyStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html}
 */
export class VerifiedPermissionsPolicyStore extends $Resource<
  "AWS::VerifiedPermissions::PolicyStore",
  VerifiedPermissionsPolicyStoreProperties,
  VerifiedPermissionsPolicyStoreAttributes
> {
  public static readonly Type = "AWS::VerifiedPermissions::PolicyStore";
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VerifiedPermissionsPolicyStore.Type, properties, options);
  }
}
