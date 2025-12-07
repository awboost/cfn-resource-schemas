import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoTFleetHub::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html}
 */
export type IoTFleetHubApplicationProperties = {
  ApplicationDescription?: string;
  ApplicationName: string;
  RoleArn: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetHub::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#aws-resource-iotfleethub-application-return-values}
 */
export type IoTFleetHubApplicationAttributes = {
  ApplicationArn: string;
  ApplicationCreationDate: number;
  ApplicationId: string;
  ApplicationLastUpdateDate: number;
  ApplicationState: string;
  ApplicationUrl: string;
  ErrorMessage: string;
  SsoClientId: string;
};
/**
 * Type definition for `AWS::IoTFleetHub::Application.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleethub-application-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::IoTFleetHub::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html}
 */
export class IoTFleetHubApplication extends $Resource<
  "AWS::IoTFleetHub::Application",
  IoTFleetHubApplicationProperties,
  IoTFleetHubApplicationAttributes
> {
  public static readonly Type = "AWS::IoTFleetHub::Application";
  constructor(
    logicalId: string,
    properties: IoTFleetHubApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetHubApplication.Type, properties, options);
  }
}
