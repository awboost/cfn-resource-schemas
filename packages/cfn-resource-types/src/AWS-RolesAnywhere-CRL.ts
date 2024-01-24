import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RolesAnywhere::CRL Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html}
 */
export type RolesAnywhereCRLProperties = {
  CrlData: string;
  Enabled?: boolean;
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @pattern `^arn:aws(-[^:]+)?:rolesanywhere(:.*){2}(:trust-anchor.*)$`
   */
  TrustAnchorArn?: string;
};
/**
 * Attribute type definition for `AWS::RolesAnywhere::CRL`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html#aws-resource-rolesanywhere-crl-return-values}
 */
export type RolesAnywhereCRLAttributes = {
  /**
   * @pattern `[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}`
   */
  CrlId: string;
};
/**
 * Type definition for `AWS::RolesAnywhere::CRL.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-crl-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::RolesAnywhere::CRL Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html}
 */
export class RolesAnywhereCRL extends $Resource<
  "AWS::RolesAnywhere::CRL",
  RolesAnywhereCRLProperties,
  RolesAnywhereCRLAttributes
> {
  public static readonly Type = "AWS::RolesAnywhere::CRL";
  constructor(
    logicalId: string,
    properties: RolesAnywhereCRLProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RolesAnywhereCRL.Type, properties, options);
  }
}
