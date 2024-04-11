import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::PrivacyBudgetTemplate`.
 * Represents a privacy budget within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html}
 */
export type CleanRoomsPrivacyBudgetTemplateProperties = {
  AutoRefresh: "CALENDAR_MONTH" | "NONE";
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  MembershipIdentifier: string;
  Parameters: {
    /**
     * @min `1`
     * @max `20`
     */
    Epsilon: number;
    /**
     * @min `10`
     * @max `100`
     */
    UsersNoisePerQuery: number;
  };
  PrivacyBudgetType: "DIFFERENTIAL_PRIVACY";
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::PrivacyBudgetTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html#aws-resource-cleanrooms-privacybudgettemplate-return-values}
 */
export type CleanRoomsPrivacyBudgetTemplateAttributes = {
  /**
   * @maxLength `200`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
  /**
   * @maxLength `100`
   */
  MembershipArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  PrivacyBudgetTemplateIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::PrivacyBudgetTemplate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-privacybudgettemplate-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::PrivacyBudgetTemplate`.
 * Represents a privacy budget within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html}
 */
export class CleanRoomsPrivacyBudgetTemplate extends $Resource<
  "AWS::CleanRooms::PrivacyBudgetTemplate",
  CleanRoomsPrivacyBudgetTemplateProperties,
  CleanRoomsPrivacyBudgetTemplateAttributes
> {
  public static readonly Type = "AWS::CleanRooms::PrivacyBudgetTemplate";
  constructor(
    logicalId: string,
    properties: CleanRoomsPrivacyBudgetTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsPrivacyBudgetTemplate.Type, properties, options);
  }
}
