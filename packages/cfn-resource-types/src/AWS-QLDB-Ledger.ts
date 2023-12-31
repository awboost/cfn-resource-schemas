import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::QLDB::Ledger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html}
 */
export type QLDBLedgerProperties = {
  DeletionProtection?: boolean;
  KmsKey?: string;
  Name?: string;
  PermissionsMode: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QLDB::Ledger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#aws-resource-qldb-ledger-return-values}
 */
export type QLDBLedgerAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::QLDB::Ledger.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qldb-ledger-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::QLDB::Ledger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html}
 */
export class QLDBLedger extends $Resource<
  "AWS::QLDB::Ledger",
  QLDBLedgerProperties,
  QLDBLedgerAttributes
> {
  public static readonly Type = "AWS::QLDB::Ledger";
  constructor(
    logicalId: string,
    properties: QLDBLedgerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QLDBLedger.Type, properties, options);
  }
}
