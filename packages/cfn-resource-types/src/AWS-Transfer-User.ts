import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Transfer::User Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html}
 */
export type TransferUserProperties = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^(|/.*)$`
   */
  HomeDirectory?: string;
  /**
   * @minLength `1`
   * @maxLength `50000`
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  HomeDirectoryType?: HomeDirectoryType;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  Policy?: string;
  PosixProfile?: PosixProfile;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*role/\S+$`
   */
  Role: string;
  /**
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^s-([0-9a-f]{17})$`
   */
  ServerId: string;
  /**
   * This represents the SSH User Public Keys for CloudFormation resource
   */
  SshPublicKeys?: string[];
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `3`
   * @maxLength `100`
   * @pattern `^[\w][\w@.-]{2,99}$`
   */
  UserName: string;
};
/**
 * Attribute type definition for `AWS::Transfer::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#aws-resource-transfer-user-return-values}
 */
export type TransferUserAttributes = {
  /**
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `^arn:\S+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Transfer::User.HomeDirectoryMapEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html}
 */
export type HomeDirectoryMapEntry = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^/.*$`
   */
  Entry: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^/.*$`
   */
  Target: string;
  Type?: MapType;
};
/**
 * Type definition for `AWS::Transfer::User.HomeDirectoryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorytype.html}
 */
export type HomeDirectoryType = "PATH" | "LOGICAL";
/**
 * Type definition for `AWS::Transfer::User.MapType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-maptype.html}
 */
export type MapType = "FILE" | "DIRECTORY";
/**
 * Type definition for `AWS::Transfer::User.PosixProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html}
 */
export type PosixProfile = {
  /**
   * @min `0`
   * @max `4294967295`
   */
  Gid: number;
  /**
   * @minLength `0`
   * @maxLength `16`
   */
  SecondaryGids?: number[];
  /**
   * @min `0`
   * @max `4294967295`
   */
  Uid: number;
};
/**
 * Type definition for `AWS::Transfer::User.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-tag.html}
 */
export type Tag = {
  /**
   * @minLength `0`
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
 * Definition of AWS::Transfer::User Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html}
 */
export class TransferUser extends $Resource<
  "AWS::Transfer::User",
  TransferUserProperties,
  TransferUserAttributes
> {
  public static readonly Type = "AWS::Transfer::User";
  constructor(
    logicalId: string,
    properties: TransferUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferUser.Type, properties, options);
  }
}
