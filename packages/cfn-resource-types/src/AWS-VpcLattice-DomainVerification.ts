import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::DomainVerification`.
 * Creates a Lattice Domain Verification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-domainverification.html}
 */
export type VpcLatticeDomainVerificationProperties = {
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  DomainName: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::DomainVerification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-domainverification.html#aws-resource-vpclattice-domainverification-return-values}
 */
export type VpcLatticeDomainVerificationAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:domainverification/dv-[0-9a-z]{17}$`
   */
  Arn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((dv-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:domainverification/dv-[0-9a-z]{17}))$`
   */
  Id: string;
  Status: "VERIFIED" | "PENDING" | "VERIFICATION_TIMED_OUT";
  TxtMethodConfig: {
    name: string;
    value: string;
  };
};
/**
 * Type definition for `AWS::VpcLattice::DomainVerification.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-domainverification-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::DomainVerification`.
 * Creates a Lattice Domain Verification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-domainverification.html}
 */
export class VpcLatticeDomainVerification extends $Resource<
  "AWS::VpcLattice::DomainVerification",
  VpcLatticeDomainVerificationProperties,
  VpcLatticeDomainVerificationAttributes
> {
  public static readonly Type = "AWS::VpcLattice::DomainVerification";
  constructor(
    logicalId: string,
    properties: VpcLatticeDomainVerificationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeDomainVerification.Type, properties, options);
  }
}
