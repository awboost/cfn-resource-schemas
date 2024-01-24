import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: SDBDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SDBDomain.Type, properties, options);
  }
}
