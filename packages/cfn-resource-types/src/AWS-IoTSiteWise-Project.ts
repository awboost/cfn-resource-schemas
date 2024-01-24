import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html}
 */
export type IoTSiteWiseProjectProperties = {
  /**
   * The IDs of the assets to be associated to the project.
   */
  AssetIds?: string[];
  /**
   * The ID of the portal in which to create the project.
   */
  PortalId: string;
  /**
   * A description for the project.
   */
  ProjectDescription?: string;
  /**
   * A friendly name for the project.
   */
  ProjectName: string;
  /**
   * A list of key-value pairs that contain metadata for the project.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html#aws-resource-iotsitewise-project-return-values}
 */
export type IoTSiteWiseProjectAttributes = {
  /**
   * The ARN of the project.
   */
  ProjectArn: string;
  /**
   * The ID of the project.
   */
  ProjectId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Project.Tag`.
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-project-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html}
 */
export class IoTSiteWiseProject extends $Resource<
  "AWS::IoTSiteWise::Project",
  IoTSiteWiseProjectProperties,
  IoTSiteWiseProjectAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Project";
  constructor(
    logicalId: string,
    properties: IoTSiteWiseProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseProject.Type, properties, options);
  }
}
