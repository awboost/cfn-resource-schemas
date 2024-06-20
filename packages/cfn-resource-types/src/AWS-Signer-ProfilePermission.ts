import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Signer::ProfilePermission`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html}
 */
export type SignerProfilePermissionProperties = {
  Action: string;
  Principal: string;
  /**
   * @pattern `^[0-9a-zA-Z_]{2,64}$`
   */
  ProfileName: string;
  /**
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  ProfileVersion?: string;
  StatementId: string;
};
/**
 * Resource type definition for `AWS::Signer::ProfilePermission`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html}
 */
export class SignerProfilePermission extends $Resource<
  "AWS::Signer::ProfilePermission",
  SignerProfilePermissionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Signer::ProfilePermission";
  constructor(
    logicalId: string,
    properties: SignerProfilePermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SignerProfilePermission.Type, properties, options);
  }
}
