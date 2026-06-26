import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::PartnerCentral::ConnectionPreferences`.
 * Represents the connection preferences for a partner account in AWS Partner Central, including access settings and exclusions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-partnercentral-connectionpreferences.html}
 */
export type PartnerCentralConnectionPreferencesProperties = {
  /**
   * The catalog identifier for the partner account.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Catalog?: string;
};
/**
 * Attribute type definition for `AWS::PartnerCentral::ConnectionPreferences`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-partnercentral-connectionpreferences.html#aws-resource-partnercentral-connectionpreferences-return-values}
 */
export type PartnerCentralConnectionPreferencesAttributes = {
  /**
   * The access type setting for connections.
   */
  AccessType: "ALLOW_ALL" | "DENY_ALL" | "ALLOW_BY_DEFAULT_DENY_SOME";
  /**
   * The Amazon Resource Name (ARN) of the connection preferences.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:[a-zA-Z0-9-]+:partnercentral:[a-z0-9\-]*::catalog/[a-zA-Z]+/connection-preferences$`
   */
  Arn: string;
  /**
   * A list of participant IDs that are excluded from connection requests or interactions.
   */
  ExcludedParticipantIds: string[];
  /**
   * The revision number of the connection preferences for optimistic locking.
   */
  Revision: number;
  /**
   * The timestamp when the connection preferences were last updated.
   */
  UpdatedAt: string;
};
/**
 * Resource type definition for `AWS::PartnerCentral::ConnectionPreferences`.
 * Represents the connection preferences for a partner account in AWS Partner Central, including access settings and exclusions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-partnercentral-connectionpreferences.html}
 */
export class PartnerCentralConnectionPreferences extends $Resource<
  "AWS::PartnerCentral::ConnectionPreferences",
  PartnerCentralConnectionPreferencesProperties,
  PartnerCentralConnectionPreferencesAttributes
> {
  public static readonly Type = "AWS::PartnerCentral::ConnectionPreferences";
  constructor(
    logicalId: string,
    properties: PartnerCentralConnectionPreferencesProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PartnerCentralConnectionPreferences.Type,
      properties,
      options,
    );
  }
}
