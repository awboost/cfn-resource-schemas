import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SDB::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sdb-domain.html}
 */
export type SDBDomainProperties = {
  Description?: string;
};
/**
 * Attribute type definition for `AWS::SDB::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sdb-domain.html#aws-resource-sdb-domain-return-values}
 */
export type SDBDomainAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::SDB::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sdb-domain.html}
 */
export class SDBDomain extends $Resource<
  "AWS::SDB::Domain",
  SDBDomainProperties,
  SDBDomainAttributes
> {
  public static readonly Type = "AWS::SDB::Domain";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SDBDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SDBDomain.Type,
      properties,
      SDBDomain.AttributeNames,
      options,
    );
  }
}
