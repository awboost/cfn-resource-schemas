import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RTBFabric::Link Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-link.html}
 */
export type RTBFabricLinkProperties = {
  /**
   * @pattern `^rtb-gw-[a-z0-9-]{1,25}$`
   */
  GatewayId: string;
  HttpResponderAllowed?: boolean;
  LinkAttributes?: LinkAttributes;
  LinkLogSettings: LinkLogSettings;
  ModuleConfigurationList?: ModuleConfiguration[];
  /**
   * @pattern `^rtb-gw-[a-z0-9-]{1,25}$`
   */
  PeerGatewayId: string;
  /**
   * Tags to assign to the Link.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RTBFabric::Link`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-link.html#aws-resource-rtbfabric-link-return-values}
 */
export type RTBFabricLinkAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws:rtbfabric:[a-zA-Z0-9_-]+:[0-9]{12}:gateway/[a-zA-Z0-9-]+/link/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  CreatedTimestamp: string;
  LinkDirection: LinkDirection;
  /**
   * @pattern `^link-[a-z0-9-]{1,25}$`
   */
  LinkId: string;
  LinkStatus: LinkStatus;
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::RTBFabric::Link.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-filter.html}
 */
export type Filter = {
  Criteria: FilterCriterion[];
};
/**
 * Type definition for `AWS::RTBFabric::Link.FilterCriterion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-filtercriterion.html}
 */
export type FilterCriterion = {
  Path: string;
  /**
   * @minLength `1`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::RTBFabric::Link.HeaderTagAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-headertagaction.html}
 */
export type HeaderTagAction = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::RTBFabric::Link.LinkAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-linkattributes.html}
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
 * Type definition for `AWS::RTBFabric::Link.LinkDirection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-linkdirection.html}
 */
export type LinkDirection = "REQUEST" | "RESPONSE";
/**
 * Type definition for `AWS::RTBFabric::Link.LinkLogSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-linklogsettings.html}
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
 * Type definition for `AWS::RTBFabric::Link.LinkStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-linkstatus.html}
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
 * Type definition for `AWS::RTBFabric::Link.ModuleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-moduleconfiguration.html}
 */
export type ModuleConfiguration = {
  DependsOn?: string[];
  ModuleParameters?: ModuleParameters;
  /**
   * @pattern `^[A-Za-z0-9 -]+$`
   */
  Name: string;
  /**
   * @pattern `^[a-z0-9]{1,25}$`
   */
  Version?: string;
};
/**
 * Type definition for `AWS::RTBFabric::Link.ModuleParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-moduleparameters.html}
 */
export type ModuleParameters =
  | {
      NoBid: NoBidModuleParameters;
    }
  | {
      OpenRtbAttribute: OpenRtbAttributeModuleParameters;
    };
/**
 * Type definition for `AWS::RTBFabric::Link.NoBidAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-nobidaction.html}
 */
export type NoBidAction = {
  /**
   * @min `0`
   */
  NoBidReasonCode?: number;
};
/**
 * Type definition for `AWS::RTBFabric::Link.NoBidModuleParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-nobidmoduleparameters.html}
 */
export type NoBidModuleParameters = {
  /**
   * @min `0`
   * @max `100`
   */
  PassThroughPercentage?: number;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  Reason?: string;
  /**
   * @min `0`
   * @max `10`
   */
  ReasonCode?: number;
};
/**
 * Type definition for `AWS::RTBFabric::Link.OpenRtbAttributeModuleParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-openrtbattributemoduleparameters.html}
 */
export type OpenRtbAttributeModuleParameters = {
  Action:
    | {
        NoBid: NoBidAction;
      }
    | {
        HeaderTag: HeaderTagAction;
      };
  FilterConfiguration: Filter[];
  FilterType: "INCLUDE" | "EXCLUDE";
  /**
   * @min `0`
   * @max `100`
   */
  HoldbackPercentage: number;
};
/**
 * Type definition for `AWS::RTBFabric::Link.ResponderErrorMaskingForHttpCode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-respondererrormaskingforhttpcode.html}
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
 * Type definition for `AWS::RTBFabric::Link.ResponderErrorMaskingLoggingType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-respondererrormaskingloggingtype.html}
 */
export type ResponderErrorMaskingLoggingType = "NONE" | "METRIC" | "RESPONSE";
/**
 * Type definition for `AWS::RTBFabric::Link.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-link-tag.html}
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
 * Resource Type definition for AWS::RTBFabric::Link Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-link.html}
 */
export class RTBFabricLink extends $Resource<
  "AWS::RTBFabric::Link",
  RTBFabricLinkProperties,
  RTBFabricLinkAttributes
> {
  public static readonly Type = "AWS::RTBFabric::Link";
  constructor(
    logicalId: string,
    properties: RTBFabricLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RTBFabricLink.Type, properties, options);
  }
}
