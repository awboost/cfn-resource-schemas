import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53Profiles::ProfileResourceAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html}
 */
export type Route53ProfilesProfileResourceAssociationProperties = {
  /**
   * The name of an association between the  Profile and resource.
   */
  Name: string;
  /**
   * The ID of the  profile that you associated the resource to that is specified by ResourceArn.
   */
  ProfileId: string;
  /**
   * The arn of the resource that you associated to the  Profile.
   */
  ResourceArn: string;
  /**
   * A JSON-formatted string with key-value pairs specifying the properties of the associated resource.
   */
  ResourceProperties?: string;
};
/**
 * Attribute type definition for `AWS::Route53Profiles::ProfileResourceAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html#aws-resource-route53profiles-profileresourceassociation-return-values}
 */
export type Route53ProfilesProfileResourceAssociationAttributes = {
  /**
   * Primary Identifier for  Profile Resource Association
   */
  Id: string;
  /**
   * The type of the resource associated to the  Profile.
   */
  ResourceType: string;
};
/**
 * Resource Type definition for AWS::Route53Profiles::ProfileResourceAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html}
 */
export class Route53ProfilesProfileResourceAssociation extends $Resource<
  "AWS::Route53Profiles::ProfileResourceAssociation",
  Route53ProfilesProfileResourceAssociationProperties,
  Route53ProfilesProfileResourceAssociationAttributes
> {
  public static readonly Type =
    "AWS::Route53Profiles::ProfileResourceAssociation";
  constructor(
    logicalId: string,
    properties: Route53ProfilesProfileResourceAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ProfilesProfileResourceAssociation.Type,
      properties,
      options,
    );
  }
}
