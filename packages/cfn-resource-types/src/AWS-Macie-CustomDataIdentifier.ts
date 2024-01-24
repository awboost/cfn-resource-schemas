import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Macie::CustomDataIdentifier`.
 * Macie CustomDataIdentifier resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html}
 */
export type MacieCustomDataIdentifierProperties = {
  /**
   * Description of custom data identifier.
   */
  Description?: string;
  /**
   * Words to be ignored.
   */
  IgnoreWords?: string[];
  /**
   * Keywords to be matched against.
   */
  Keywords?: string[];
  /**
   * Maximum match distance.
   */
  MaximumMatchDistance?: number;
  /**
   * Name of custom data identifier.
   */
  Name: string;
  /**
   * Regular expression for custom data identifier.
   */
  Regex: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Macie::CustomDataIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#aws-resource-macie-customdataidentifier-return-values}
 */
export type MacieCustomDataIdentifierAttributes = {
  /**
   * Custom data identifier ARN.
   */
  Arn: string;
  /**
   * Custom data identifier ID.
   */
  Id: string;
};
/**
 * Type definition for `AWS::Macie::CustomDataIdentifier.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-customdataidentifier-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Macie::CustomDataIdentifier`.
 * Macie CustomDataIdentifier resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html}
 */
export class MacieCustomDataIdentifier extends $Resource<
  "AWS::Macie::CustomDataIdentifier",
  MacieCustomDataIdentifierProperties,
  MacieCustomDataIdentifierAttributes
> {
  public static readonly Type = "AWS::Macie::CustomDataIdentifier";
  constructor(
    logicalId: string,
    properties: MacieCustomDataIdentifierProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MacieCustomDataIdentifier.Type, properties, options);
  }
}
