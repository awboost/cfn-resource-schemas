import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VerifiedPermissions::PolicyStore`.
 * Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html}
 */
export type VerifiedPermissionsPolicyStoreProperties = {
  DeletionProtection?: DeletionProtection;
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  Description?: string;
  Schema?: SchemaDefinition;
  /**
   * The tags to add to the policy store
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.DeletionMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-deletionmode.html}
 */
export type DeletionMode = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.DeletionProtection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-deletionprotection.html}
 */
export type DeletionProtection = {
  Mode: DeletionMode;
};
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.SchemaDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-schemadefinition.html}
 */
export type SchemaDefinition =
  | {
      CedarJson: string;
    }
  | {
      CedarFormat: string;
    };
/**
 * Type definition for `AWS::VerifiedPermissions::PolicyStore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
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
 * Resource type definition for `AWS::VerifiedPermissions::PolicyStore`.
 * Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests
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
