import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Portal
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html}
 */
export type IoTSiteWisePortalProperties = {
  /**
   * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   */
  Alarms?: {
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
     */
    AlarmRoleArn?: string;
    /**
     * The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.
     */
    NotificationLambdaArn?: string;
  };
  /**
   * The email address that sends alarm notifications.
   */
  NotificationSenderEmail?: string;
  /**
   * The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
   */
  PortalAuthMode?: string;
  /**
   * The AWS administrator's contact email address.
   */
  PortalContactEmail: string;
  /**
   * A description for the portal.
   */
  PortalDescription?: string;
  /**
   * A friendly name for the portal.
   */
  PortalName: string;
  /**
   * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
   */
  RoleArn: string;
  /**
   * A list of key-value pairs that contain metadata for the portal.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Portal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html#aws-resource-iotsitewise-portal-return-values}
 */
export type IoTSiteWisePortalAttributes = {
  /**
   * The ARN of the portal, which has the following format.
   */
  PortalArn: string;
  /**
   * The AWS SSO application generated client ID (used with AWS SSO APIs).
   */
  PortalClientId: string;
  /**
   * The ID of the portal.
   */
  PortalId: string;
  /**
   * The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
   */
  PortalStartUrl: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Portal.Tag`.
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-portal-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Portal
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html}
 */
export class IoTSiteWisePortal extends $Resource<
  "AWS::IoTSiteWise::Portal",
  IoTSiteWisePortalProperties,
  IoTSiteWisePortalAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Portal";
  constructor(
    logicalId: string,
    properties: IoTSiteWisePortalProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWisePortal.Type, properties, options);
  }
}
