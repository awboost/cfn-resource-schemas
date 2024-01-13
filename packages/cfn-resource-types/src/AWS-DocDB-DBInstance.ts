import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DocDB::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html}
 */
export type DocDBDBInstanceProperties = {
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  CACertificateIdentifier?: string;
  CertificateRotationRestart?: boolean;
  DBClusterIdentifier: string;
  DBInstanceClass: string;
  DBInstanceIdentifier?: string;
  EnablePerformanceInsights?: boolean;
  PreferredMaintenanceWindow?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DocDB::DBInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html#aws-resource-docdb-dbinstance-return-values}
 */
export type DocDBDBInstanceAttributes = {
  Endpoint: string;
  Id: string;
  Port: string;
};
/**
 * Type definition for `AWS::DocDB::DBInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-dbinstance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DocDB::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html}
 */
export class DocDBDBInstance extends $Resource<
  "AWS::DocDB::DBInstance",
  DocDBDBInstanceProperties,
  DocDBDBInstanceAttributes
> {
  public static readonly Type = "AWS::DocDB::DBInstance";
  constructor(
    logicalId: string,
    properties: DocDBDBInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBDBInstance.Type, properties, options);
  }
}
