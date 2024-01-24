import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Location::APIKey Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html}
 */
export type LocationAPIKeyProperties = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  ExpireTime?: string;
  ForceDelete?: boolean;
  ForceUpdate?: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  KeyName: string;
  NoExpiry?: boolean;
  Restrictions: ApiKeyRestrictions;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Location::APIKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#aws-resource-location-apikey-return-values}
 */
export type LocationAPIKeyAttributes = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  Arn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreateTime: string;
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  KeyArn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Location::APIKey.ApiKeyRestrictions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-apikeyrestrictions.html}
 */
export type ApiKeyRestrictions = {
  /**
   * @minLength `1`
   * @maxLength `7`
   */
  AllowActions: string[];
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  AllowReferers?: string[];
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  AllowResources: string[];
};
/**
 * Type definition for `AWS::Location::APIKey.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-apikey-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `\A(?!aws:)[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `\A[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Value: string;
};
/**
 * Definition of AWS::Location::APIKey Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html}
 */
export class LocationAPIKey extends $Resource<
  "AWS::Location::APIKey",
  LocationAPIKeyProperties,
  LocationAPIKeyAttributes
> {
  public static readonly Type = "AWS::Location::APIKey";
  constructor(
    logicalId: string,
    properties: LocationAPIKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LocationAPIKey.Type, properties, options);
  }
}
