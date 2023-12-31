import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::ProvisioningTemplate`.
 * Creates a fleet provisioning template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html}
 */
export type IoTProvisioningTemplateProperties = {
  /**
   * @maxLength `500`
   */
  Description?: string;
  Enabled?: boolean;
  PreProvisioningHook?: ProvisioningHook;
  ProvisioningRoleArn: string;
  Tags?: Tag[];
  TemplateBody: string;
  /**
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[0-9A-Za-z_-]+$`
   */
  TemplateName?: string;
  TemplateType?: "FLEET_PROVISIONING" | "JITP";
};
/**
 * Attribute type definition for `AWS::IoT::ProvisioningTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#aws-resource-iot-provisioningtemplate-return-values}
 */
export type IoTProvisioningTemplateAttributes = {
  TemplateArn: string;
};
/**
 * Type definition for `AWS::IoT::ProvisioningTemplate.ProvisioningHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-provisioninghook.html}
 */
export type ProvisioningHook = {
  PayloadVersion?: string;
  TargetArn?: string;
};
/**
 * Type definition for `AWS::IoT::ProvisioningTemplate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::ProvisioningTemplate`.
 * Creates a fleet provisioning template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html}
 */
export class IoTProvisioningTemplate extends $Resource<
  "AWS::IoT::ProvisioningTemplate",
  IoTProvisioningTemplateProperties,
  IoTProvisioningTemplateAttributes
> {
  public static readonly Type = "AWS::IoT::ProvisioningTemplate";
  constructor(
    logicalId: string,
    properties: IoTProvisioningTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTProvisioningTemplate.Type, properties, options);
  }
}
