import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html}
 */
export type IoTSiteWiseDashboardProperties = {
  /**
   * The dashboard definition specified in a JSON literal.
   */
  DashboardDefinition: string;
  /**
   * A description for the dashboard.
   */
  DashboardDescription: string;
  /**
   * A friendly name for the dashboard.
   */
  DashboardName: string;
  /**
   * The ID of the project in which to create the dashboard.
   */
  ProjectId?: string;
  /**
   * A list of key-value pairs that contain metadata for the dashboard.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Dashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html#aws-resource-iotsitewise-dashboard-return-values}
 */
export type IoTSiteWiseDashboardAttributes = {
  /**
   * The ARN of the dashboard.
   */
  DashboardArn: string;
  /**
   * The ID of the dashboard.
   */
  DashboardId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Dashboard.Tag`.
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-dashboard-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html}
 */
export class IoTSiteWiseDashboard extends $Resource<
  "AWS::IoTSiteWise::Dashboard",
  IoTSiteWiseDashboardProperties,
  IoTSiteWiseDashboardAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Dashboard";
  constructor(
    logicalId: string,
    properties: IoTSiteWiseDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseDashboard.Type, properties, options);
  }
}
