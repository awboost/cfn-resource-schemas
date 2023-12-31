import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ManagedBlockchain::Accessor`.
 * Definition of AWS::ManagedBlockchain::com.amazonaws.taiga.webservice.api#Accessor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html}
 */
export type ManagedBlockchainAccessorProperties = {
  AccessorType: AccessorType;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ManagedBlockchain::Accessor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#aws-resource-managedblockchain-accessor-return-values}
 */
export type ManagedBlockchainAccessorAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:.+:.+:.+:.+:.+$`
   */
  Arn: string;
  /**
   * @minLength `42`
   * @maxLength `42`
   */
  BillingToken: string;
  CreationDate: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  Id: string;
  Status: AccessorStatus;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Accessor.AccessorStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-accessor-accessorstatus.html}
 */
export type AccessorStatus = "AVAILABLE" | "PENDING_DELETION" | "DELETED";
/**
 * Type definition for `AWS::ManagedBlockchain::Accessor.AccessorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-accessor-accessortype.html}
 */
export type AccessorType = "BILLING_TOKEN";
/**
 * Type definition for `AWS::ManagedBlockchain::Accessor.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-accessor-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ManagedBlockchain::Accessor`.
 * Definition of AWS::ManagedBlockchain::com.amazonaws.taiga.webservice.api#Accessor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html}
 */
export class ManagedBlockchainAccessor extends $Resource<
  "AWS::ManagedBlockchain::Accessor",
  ManagedBlockchainAccessorProperties,
  ManagedBlockchainAccessorAttributes
> {
  public static readonly Type = "AWS::ManagedBlockchain::Accessor";
  constructor(
    logicalId: string,
    properties: ManagedBlockchainAccessorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ManagedBlockchainAccessor.Type, properties, options);
  }
}
