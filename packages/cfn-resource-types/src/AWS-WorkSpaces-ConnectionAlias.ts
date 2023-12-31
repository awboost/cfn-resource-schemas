import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WorkSpaces::ConnectionAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html}
 */
export type WorkSpacesConnectionAliasProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[.0-9a-zA-Z\-]{1,255}$`
   */
  ConnectionString: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpaces::ConnectionAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html#aws-resource-workspaces-connectionalias-return-values}
 */
export type WorkSpacesConnectionAliasAttributes = {
  /**
   * @minLength `13`
   * @maxLength `68`
   * @pattern `^wsca-[0-9a-z]{8,63}$`
   */
  AliasId: string;
  Associations: ConnectionAliasAssociation[];
  ConnectionAliasState: "CREATING" | "CREATED" | "DELETING";
};
/**
 * Type definition for `AWS::WorkSpaces::ConnectionAlias.ConnectionAliasAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html}
 */
export type ConnectionAliasAssociation = {
  AssociatedAccountId?: string;
  AssociationStatus?:
    | "NOT_ASSOCIATED"
    | "PENDING_ASSOCIATION"
    | "ASSOCIATED_WITH_OWNER_ACCOUNT"
    | "ASSOCIATED_WITH_SHARED_ACCOUNT"
    | "PENDING_DISASSOCIATION";
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ConnectionIdentifier?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `.+`
   */
  ResourceId?: string;
};
/**
 * Type definition for `AWS::WorkSpaces::ConnectionAlias.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::WorkSpaces::ConnectionAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html}
 */
export class WorkSpacesConnectionAlias extends $Resource<
  "AWS::WorkSpaces::ConnectionAlias",
  WorkSpacesConnectionAliasProperties,
  WorkSpacesConnectionAliasAttributes
> {
  public static readonly Type = "AWS::WorkSpaces::ConnectionAlias";
  public static readonly AttributeNames = [
    "AliasId" as const,
    "Associations" as const,
    "ConnectionAliasState" as const,
  ];
  constructor(
    logicalId: string,
    properties: WorkSpacesConnectionAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesConnectionAlias.Type,
      properties,
      WorkSpacesConnectionAlias.AttributeNames,
      options,
    );
  }
}
