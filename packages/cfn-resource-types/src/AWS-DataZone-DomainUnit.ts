import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::DomainUnit`.
 * A domain unit enables you to easily organize your assets and other domain entities under specific business units and teams.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html}
 */
export type DataZoneDomainUnitProperties = {
  /**
   * The description of the domain unit.
   * @minLength `0`
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The ID of the domain where you want to create a domain unit.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The name of the domain unit.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  /**
   * The ID of the parent domain unit.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_-]+$`
   */
  ParentDomainUnitIdentifier: string;
};
/**
 * Attribute type definition for `AWS::DataZone::DomainUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html#aws-resource-datazone-domainunit-return-values}
 */
export type DataZoneDomainUnitAttributes = {
  /**
   * The timestamp at which the domain unit was created.
   */
  CreatedAt: string;
  /**
   * The ID of the domain where the domain unit was created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the domain unit.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_-]+$`
   */
  Id: string;
  /**
   * The identifier of the domain unit that you want to get.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_-]+$`
   */
  Identifier: string;
  /**
   * The timestamp at which the domain unit was last updated.
   */
  LastUpdatedAt: string;
  /**
   * The ID of the parent domain unit.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_-]+$`
   */
  ParentDomainUnitId: string;
};
/**
 * Resource type definition for `AWS::DataZone::DomainUnit`.
 * A domain unit enables you to easily organize your assets and other domain entities under specific business units and teams.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html}
 */
export class DataZoneDomainUnit extends $Resource<
  "AWS::DataZone::DomainUnit",
  DataZoneDomainUnitProperties,
  DataZoneDomainUnitAttributes
> {
  public static readonly Type = "AWS::DataZone::DomainUnit";
  constructor(
    logicalId: string,
    properties: DataZoneDomainUnitProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneDomainUnit.Type, properties, options);
  }
}
