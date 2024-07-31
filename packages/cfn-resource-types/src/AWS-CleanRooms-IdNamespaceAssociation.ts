import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::IdNamespaceAssociation`.
 * Represents an association between an ID namespace and a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idnamespaceassociation.html}
 */
export type CleanRoomsIdNamespaceAssociationProperties = {
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  IdMappingConfig?: IdMappingConfig;
  InputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  MembershipIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::IdNamespaceAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idnamespaceassociation.html#aws-resource-cleanrooms-idnamespaceassociation-return-values}
 */
export type CleanRoomsIdNamespaceAssociationAttributes = {
  /**
   * @maxLength `256`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  CollaborationIdentifier: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  IdNamespaceAssociationIdentifier: string;
  InputReferenceProperties: {
    IdMappingWorkflowsSupported: Record<string, any>[];
    IdNamespaceType: "SOURCE" | "TARGET";
  };
  /**
   * @maxLength `100`
   */
  MembershipArn: string;
};
/**
 * Type definition for `AWS::CleanRooms::IdNamespaceAssociation.Document`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idnamespaceassociation-document.html}
 */
export type Document = Record<string, any>;
/**
 * Type definition for `AWS::CleanRooms::IdNamespaceAssociation.IdMappingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idnamespaceassociation-idmappingconfig.html}
 */
export type IdMappingConfig = {
  AllowUseAsDimensionColumn: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::IdNamespaceAssociation.IdNamespaceAssociationInputReferenceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idnamespaceassociation-idnamespaceassociationinputreferenceconfig.html}
 */
export type IdNamespaceAssociationInputReferenceConfig = {
  /**
   * @maxLength `256`
   */
  InputReferenceArn: string;
  ManageResourcePolicies: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::IdNamespaceAssociation.IdNamespaceAssociationInputReferenceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idnamespaceassociation-idnamespaceassociationinputreferenceproperties.html}
 */
export type IdNamespaceAssociationInputReferenceProperties = {
  IdMappingWorkflowsSupported?: Document[];
  IdNamespaceType?: "SOURCE" | "TARGET";
};
/**
 * Type definition for `AWS::CleanRooms::IdNamespaceAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idnamespaceassociation-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CleanRooms::IdNamespaceAssociation`.
 * Represents an association between an ID namespace and a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idnamespaceassociation.html}
 */
export class CleanRoomsIdNamespaceAssociation extends $Resource<
  "AWS::CleanRooms::IdNamespaceAssociation",
  CleanRoomsIdNamespaceAssociationProperties,
  CleanRoomsIdNamespaceAssociationAttributes
> {
  public static readonly Type = "AWS::CleanRooms::IdNamespaceAssociation";
  constructor(
    logicalId: string,
    properties: CleanRoomsIdNamespaceAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsIdNamespaceAssociation.Type,
      properties,
      options,
    );
  }
}
