import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Signer::ProfilePermission`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html}
 */
export type SignerProfilePermissionProperties = {
  Action: string;
  Principal: string;
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SignerProfilePermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SignerProfilePermission.Type,
      properties,
      SignerProfilePermission.AttributeNames,
      options,
    );
  }
}
