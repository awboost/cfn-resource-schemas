import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CustomerProfiles::DomainObjectType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domainobjecttype.html}
 */
export type CustomerProfilesDomainObjectTypeProperties = {
  /**
   * Description of the domain object type.
   * @minLength `1`
   * @maxLength `10000`
   */
  Description?: string;
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * The default encryption key
   * @minLength `0`
   * @maxLength `255`
   */
  EncryptionKey?: string;
  /**
   * A map of the name and ObjectType field.
   */
  Fields: DomainObjectTypeFields;
  /**
   * The name of the domain object type.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  ObjectTypeName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::DomainObjectType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domainobjecttype.html#aws-resource-customerprofiles-domainobjecttype-return-values}
 */
export type CustomerProfilesDomainObjectTypeAttributes = {
  /**
   * The timestamp of when the domain object type was created.
   */
  CreatedAt: string;
  /**
   * The timestamp of when the domain object type was most recently edited.
   */
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::DomainObjectType.DomainObjectTypeField`.
 * Represents a field in a DomainObjectType.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domainobjecttype-domainobjecttypefield.html}
 */
export type DomainObjectTypeField = {
  /**
   * The content type of the field.
   */
  ContentType?: "STRING" | "NUMBER";
  /**
   * The feature type of the field.
   */
  FeatureType?: "TEXTUAL" | "CATEGORICAL";
  /**
   * The source field name.
   * @minLength `1`
   * @maxLength `1000`
   */
  Source: string;
  /**
   * The target field name.
   * @minLength `1`
   * @maxLength `1000`
   */
  Target: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::DomainObjectType.DomainObjectTypeFields`.
 * A map of the name and ObjectType field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domainobjecttype-domainobjecttypefields.html}
 */
export type DomainObjectTypeFields = Record<string, DomainObjectTypeField>;
/**
 * Type definition for `AWS::CustomerProfiles::DomainObjectType.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domainobjecttype-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CustomerProfiles::DomainObjectType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domainobjecttype.html}
 */
export class CustomerProfilesDomainObjectType extends $Resource<
  "AWS::CustomerProfiles::DomainObjectType",
  CustomerProfilesDomainObjectTypeProperties,
  CustomerProfilesDomainObjectTypeAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::DomainObjectType";
  constructor(
    logicalId: string,
    properties: CustomerProfilesDomainObjectTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CustomerProfilesDomainObjectType.Type,
      properties,
      options,
    );
  }
}
