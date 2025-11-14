import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RTBFabric::InboundExternalLink Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-inboundexternallink.html}
 */
export type RTBFabricInboundExternalLinkProperties = {
  /**
   * @pattern `^rtb-gw-[a-z0-9-]{1,25}$`
   */
  GatewayId: string;
  LinkAttributes?: LinkAttributes;
  LinkLogSettings: LinkLogSettings;
  /**
   * Tags to assign to the Link.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RTBFabric::InboundExternalLink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-inboundexternallink.html#aws-resource-rtbfabric-inboundexternallink-return-values}
 */
export type RTBFabricInboundExternalLinkAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws:rtbfabric:[a-zA-Z0-9_-]+:[0-9]{12}:gateway/[a-zA-Z0-9-]+/link/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  CreatedTimestamp: string;
  /**
   * @pattern `^link-[a-z0-9-]{1,25}$`
   */
  LinkId: string;
  LinkStatus: LinkStatus;
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.LinkAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-linkattributes.html}
 */
export type LinkAttributes = {
  CustomerProvidedId?: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ResponderErrorMasking?: ResponderErrorMaskingForHttpCode[];
};
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.LinkLogSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-linklogsettings.html}
 */
export type LinkLogSettings = {
  ApplicationLogs: {
    LinkApplicationLogSampling: {
      /**
       * @min `0`
       * @max `100`
       */
      ErrorLog: number;
      /**
       * @min `0`
       * @max `100`
       */
      FilterLog: number;
    };
  };
};
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.LinkStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-linkstatus.html}
 */
export type LinkStatus =
  | "PENDING_CREATION"
  | "PENDING_REQUEST"
  | "REQUESTED"
  | "ACCEPTED"
  | "ACTIVE"
  | "REJECTED"
  | "FAILED"
  | "PENDING_DELETION"
  | "DELETED"
  | "PENDING_UPDATE"
  | "PENDING_ISOLATION"
  | "ISOLATED"
  | "PENDING_RESTORATION"
  | "UNKNOWN_TO_SDK_VERSION";
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.ResponderErrorMaskingForHttpCode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-respondererrormaskingforhttpcode.html}
 */
export type ResponderErrorMaskingForHttpCode = {
  Action: "NO_BID" | "PASSTHROUGH";
  /**
   * @minLength `3`
   * @maxLength `7`
   * @pattern `^DEFAULT|4XX|5XX|\d{3}$`
   */
  HttpCode: string;
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  LoggingTypes: ResponderErrorMaskingLoggingType[];
  /**
   * @min `0`
   * @max `100`
   */
  ResponseLoggingPercentage?: number;
};
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.ResponderErrorMaskingLoggingType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-respondererrormaskingloggingtype.html}
 */
export type ResponderErrorMaskingLoggingType = "NONE" | "METRIC" | "RESPONSE";
/**
 * Type definition for `AWS::RTBFabric::InboundExternalLink.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-inboundexternallink-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::RTBFabric::InboundExternalLink Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-inboundexternallink.html}
 */
export class RTBFabricInboundExternalLink extends $Resource<
  "AWS::RTBFabric::InboundExternalLink",
  RTBFabricInboundExternalLinkProperties,
  RTBFabricInboundExternalLinkAttributes
> {
  public static readonly Type = "AWS::RTBFabric::InboundExternalLink";
  constructor(
    logicalId: string,
    properties: RTBFabricInboundExternalLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RTBFabricInboundExternalLink.Type, properties, options);
  }
}
