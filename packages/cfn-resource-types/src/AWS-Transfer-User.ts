import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Transfer::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html}
 */
export type TransferUserProperties = {
  HomeDirectory?: string;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  HomeDirectoryType?: string;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role: string;
  ServerId: string;
  SshPublicKeys?: SshPublicKey[];
  Tags?: Tag[];
  UserName: string;
};
/**
 * Attribute type definition for `AWS::Transfer::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#aws-resource-transfer-user-return-values}
 */
export type TransferUserAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::Transfer::User.HomeDirectoryMapEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html}
 */
export type HomeDirectoryMapEntry = {
  Entry: string;
  Target: string;
};
/**
 * Type definition for `AWS::Transfer::User.PosixProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html}
 */
export type PosixProfile = {
  Gid: number;
  SecondaryGids?: number[];
  Uid: number;
};
/**
 * Type definition for `AWS::Transfer::User.SshPublicKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-sshpublickey.html}
 */
export type SshPublicKey = Record<string, any>;
/**
 * Type definition for `AWS::Transfer::User.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Transfer::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html}
 */
export class TransferUser extends $Resource<
  "AWS::Transfer::User",
  TransferUserProperties,
  TransferUserAttributes
> {
  public static readonly Type = "AWS::Transfer::User";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: TransferUserProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      TransferUser.Type,
      properties,
      TransferUser.AttributeNames,
      options,
    );
  }
}
