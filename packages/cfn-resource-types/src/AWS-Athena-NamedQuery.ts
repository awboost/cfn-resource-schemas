import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Athena::NamedQuery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html}
 */
export type AthenaNamedQueryProperties = {
  /**
   * The database to which the query belongs.
   * @minLength `1`
   * @maxLength `255`
   */
  Database: string;
  /**
   * The query description.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The query name.
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  /**
   * The contents of the query with all query statements.
   * @minLength `1`
   * @maxLength `262144`
   */
  QueryString: string;
  /**
   * The name of the workgroup that contains the named query.
   * @minLength `1`
   * @maxLength `128`
   */
  WorkGroup?: string;
};
/**
 * Attribute type definition for `AWS::Athena::NamedQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#aws-resource-athena-namedquery-return-values}
 */
export type AthenaNamedQueryAttributes = {
  /**
   * The unique ID of the query.
   */
  NamedQueryId: string;
};
/**
 * Resource schema for AWS::Athena::NamedQuery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html}
 */
export class AthenaNamedQuery extends $Resource<
  "AWS::Athena::NamedQuery",
  AthenaNamedQueryProperties,
  AthenaNamedQueryAttributes
> {
  public static readonly Type = "AWS::Athena::NamedQuery";
  constructor(
    logicalId: string,
    properties: AthenaNamedQueryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AthenaNamedQuery.Type, properties, options);
  }
}
