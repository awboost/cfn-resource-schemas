import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::DocDB::DBClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html}
 */
export type DocDBDBClusterParameterGroupProperties = {
  Description: string;
  Family: string;
  Name?: string;
  Parameters: Record<string, any>;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DocDB::DBClusterParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html#aws-resource-docdb-dbclusterparametergroup-return-values}
 */
export type DocDBDBClusterParameterGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::DocDB::DBClusterParameterGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-dbclusterparametergroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DocDB::DBClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html}
 */
export class DocDBDBClusterParameterGroup extends $Resource<
  "AWS::DocDB::DBClusterParameterGroup",
  DocDBDBClusterParameterGroupProperties,
  DocDBDBClusterParameterGroupAttributes
> {
  public static readonly Type = "AWS::DocDB::DBClusterParameterGroup";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: DocDBDBClusterParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DocDBDBClusterParameterGroup.Type,
      properties,
      DocDBDBClusterParameterGroup.AttributeNames,
      options,
    );
  }
}
