import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::LakeFormation::TagAssociation`.
 * A resource schema representing a Lake Formation Tag Association. While tag associations are not explicit Lake Formation resources, this CloudFormation resource can be used to associate tags with Lake Formation entities.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html}
 */
export type LakeFormationTagAssociationProperties = {
  /**
   * List of Lake Formation Tags to associate with the Lake Formation Resource
   */
  LFTags: LFTagPair[];
  /**
   * Resource to tag with the Lake Formation Tags
   */
  Resource: Resource;
};
/**
 * Attribute type definition for `AWS::LakeFormation::TagAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html#aws-resource-lakeformation-tagassociation-return-values}
 */
export type LakeFormationTagAssociationAttributes = {
  /**
   * Unique string identifying the resource. Used as primary identifier, which ideally should be a string
   */
  ResourceIdentifier: string;
  /**
   * Unique string identifying the resource's tags. Used as primary identifier, which ideally should be a string
   */
  TagsIdentifier: string;
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.CatalogResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-catalogresource.html}
 */
export type CatalogResource = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.DataLakePrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.DatabaseResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html}
 */
export type DatabaseResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.LFTagPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html}
 */
export type LFTagPair = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  TagKey: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues: string[];
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.Resource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html}
 */
export type Resource = {
  Catalog?: CatalogResource;
  Database?: DatabaseResource;
  Table?: TableResource;
  TableWithColumns?: TableWithColumnsResource;
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.ResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resourcetype.html}
 */
export type ResourceType = "DATABASE" | "TABLE";
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.TableResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html}
 */
export type TableResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  TableWildcard?: TableWildcard;
};
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.TableWildcard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewildcard.html}
 */
export type TableWildcard = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::TagAssociation.TableWithColumnsResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html}
 */
export type TableWithColumnsResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  ColumnNames: string[];
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * Resource type definition for `AWS::LakeFormation::TagAssociation`.
 * A resource schema representing a Lake Formation Tag Association. While tag associations are not explicit Lake Formation resources, this CloudFormation resource can be used to associate tags with Lake Formation entities.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html}
 */
export class LakeFormationTagAssociation extends $Resource<
  "AWS::LakeFormation::TagAssociation",
  LakeFormationTagAssociationProperties,
  LakeFormationTagAssociationAttributes
> {
  public static readonly Type = "AWS::LakeFormation::TagAssociation";
  public static readonly AttributeNames = [
    "ResourceIdentifier" as const,
    "TagsIdentifier" as const,
  ];
  constructor(
    logicalId: string,
    properties: LakeFormationTagAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LakeFormationTagAssociation.Type,
      properties,
      LakeFormationTagAssociation.AttributeNames,
      options,
    );
  }
}
