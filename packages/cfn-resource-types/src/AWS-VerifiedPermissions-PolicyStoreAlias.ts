import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::VerifiedPermissions::PolicyStoreAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystorealias.html}
 */
export type VerifiedPermissionsPolicyStoreAliasProperties = {
  /**
   * @minLength `1`
   * @maxLength `150`
   * @pattern `^[a-zA-Z0-9-_/]*$`
   */
  AliasName: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId: string;
};
/**
 * Definition of AWS::VerifiedPermissions::PolicyStoreAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystorealias.html}
 */
export class VerifiedPermissionsPolicyStoreAlias extends $Resource<
  "AWS::VerifiedPermissions::PolicyStoreAlias",
  VerifiedPermissionsPolicyStoreAliasProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::VerifiedPermissions::PolicyStoreAlias";
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyStoreAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VerifiedPermissionsPolicyStoreAlias.Type,
      properties,
      options,
    );
  }
}
