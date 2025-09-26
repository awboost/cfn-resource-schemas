import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::Owner`.
 * A owner can set up authorization permissions on their resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html}
 */
export type DataZoneOwnerProperties = {
  /**
   * The ID of the domain in which you want to add the entity owner.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The ID of the entity to which you want to add an owner.
   */
  EntityIdentifier: string;
  /**
   * The type of an entity.
   */
  EntityType: "DOMAIN_UNIT";
  /**
   * The owner that you want to add to the entity.
   */
  Owner: OwnerProperties;
};
/**
 * Attribute type definition for `AWS::DataZone::Owner`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#aws-resource-datazone-owner-return-values}
 */
export type DataZoneOwnerAttributes = {
  OwnerIdentifier: string;
  OwnerType: "USER" | "GROUP";
};
/**
 * Type definition for `AWS::DataZone::Owner.OwnerGroupProperties`.
 * The properties of the domain unit owners group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-owner-ownergroupproperties.html}
 */
export type OwnerGroupProperties = {
  /**
   * The ID of the domain unit owners group.
   * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r ]+)`
   */
  GroupIdentifier?: string;
};
/**
 * Type definition for `AWS::DataZone::Owner.OwnerProperties`.
 * The properties of a domain unit's owner.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-owner-ownerproperties.html}
 */
export type OwnerProperties =
  | {
      /**
       * The properties of the domain unit owners group.
       */
      Group?: OwnerGroupProperties;
    }
  | {
      /**
       * The properties of the owner user.
       */
      User?: OwnerUserProperties;
    };
/**
 * Type definition for `AWS::DataZone::Owner.OwnerUserProperties`.
 * The properties of the owner user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-owner-owneruserproperties.html}
 */
export type OwnerUserProperties = {
  /**
   * The ID of the owner user.
   * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|^[a-zA-Z_0-9+=,.@-]+$|^arn:aws:iam::\d{12}:.+$)`
   */
  UserIdentifier?: string;
};
/**
 * Resource type definition for `AWS::DataZone::Owner`.
 * A owner can set up authorization permissions on their resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html}
 */
export class DataZoneOwner extends $Resource<
  "AWS::DataZone::Owner",
  DataZoneOwnerProperties,
  DataZoneOwnerAttributes
> {
  public static readonly Type = "AWS::DataZone::Owner";
  constructor(
    logicalId: string,
    properties: DataZoneOwnerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneOwner.Type, properties, options);
  }
}
