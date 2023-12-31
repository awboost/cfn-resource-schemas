import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ACMPCA::Permission`.
 * Permission set on private certificate authority
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html}
 */
export type ACMPCAPermissionProperties = {
  /**
   * The actions that the specified AWS service principal can use. Actions IssueCertificate, GetCertificate and ListPermissions must be provided.
   */
  Actions: string[];
  /**
   * The Amazon Resource Name (ARN) of the Private Certificate Authority that grants the permission.
   */
  CertificateAuthorityArn: string;
  /**
   * The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
   */
  Principal: string;
  /**
   * The ID of the calling account.
   */
  SourceAccount?: string;
};
/**
 * Resource type definition for `AWS::ACMPCA::Permission`.
 * Permission set on private certificate authority
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html}
 */
export class ACMPCAPermission extends $Resource<
  "AWS::ACMPCA::Permission",
  ACMPCAPermissionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ACMPCA::Permission";
  constructor(
    logicalId: string,
    properties: ACMPCAPermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ACMPCAPermission.Type, properties, options);
  }
}
