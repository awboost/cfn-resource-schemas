import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MPA::IdentitySource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-identitysource.html}
 */
export type MPAIdentitySourceProperties = {
  IdentitySourceParameters: IdentitySourceParameters;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MPA::IdentitySource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-identitysource.html#aws-resource-mpa-identitysource-return-values}
 */
export type MPAIdentitySourceAttributes = {
  CreationTime: string;
  IdentitySourceArn: string;
  IdentitySourceParameters: {
    IamIdentityCenter: {
      ApprovalPortalUrl: string;
    };
  };
  IdentitySourceType: string;
  Status: string;
  StatusCode: string;
  StatusMessage: string;
};
/**
 * Type definition for `AWS::MPA::IdentitySource.IamIdentityCenter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-identitysource-iamidentitycenter.html}
 */
export type IamIdentityCenter = {
  /**
   * @pattern `^arn:.+:sso:::instance/(?:sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  InstanceArn: string;
  Region: string;
};
/**
 * Type definition for `AWS::MPA::IdentitySource.IdentitySourceParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-identitysource-identitysourceparameters.html}
 */
export type IdentitySourceParameters = {
  IamIdentityCenter: IamIdentityCenter;
};
/**
 * Type definition for `AWS::MPA::IdentitySource.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-identitysource-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::MPA::IdentitySource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-identitysource.html}
 */
export class MPAIdentitySource extends $Resource<
  "AWS::MPA::IdentitySource",
  MPAIdentitySourceProperties,
  MPAIdentitySourceAttributes
> {
  public static readonly Type = "AWS::MPA::IdentitySource";
  constructor(
    logicalId: string,
    properties: MPAIdentitySourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MPAIdentitySource.Type, properties, options);
  }
}
