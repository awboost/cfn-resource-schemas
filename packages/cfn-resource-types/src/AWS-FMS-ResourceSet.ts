import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::FMS::ResourceSet`.
 * Creates an AWS Firewall Manager resource set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html}
 */
export type FMSResourceSetProperties = {
  /**
   * @maxLength `256`
   * @pattern `^([a-zA-Z0-9_.:/=+\-@\s]*)$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([a-zA-Z0-9_.:/=+\-@\s]+)$`
   */
  Name: string;
  ResourceTypeList: string[];
  Resources?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FMS::ResourceSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#aws-resource-fms-resourceset-return-values}
 */
export type FMSResourceSetAttributes = {
  /**
   * A Base62 ID
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^([a-z0-9A-Z]*)$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::FMS::ResourceSet.Tag`.
 * A tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-resourceset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([^\s]*)$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^([^\s]*)$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::FMS::ResourceSet`.
 * Creates an AWS Firewall Manager resource set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html}
 */
export class FMSResourceSet extends $Resource<
  "AWS::FMS::ResourceSet",
  FMSResourceSetProperties,
  FMSResourceSetAttributes
> {
  public static readonly Type = "AWS::FMS::ResourceSet";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: FMSResourceSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      FMSResourceSet.Type,
      properties,
      FMSResourceSet.AttributeNames,
      options,
    );
  }
}
