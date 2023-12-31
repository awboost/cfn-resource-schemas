import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DevOpsGuru::LogAnomalyDetectionIntegration`.
 * This resource schema represents the LogAnomalyDetectionIntegration resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html}
 */
export type DevOpsGuruLogAnomalyDetectionIntegrationProperties = {};
/**
 * Attribute type definition for `AWS::DevOpsGuru::LogAnomalyDetectionIntegration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html#aws-resource-devopsguru-loganomalydetectionintegration-return-values}
 */
export type DevOpsGuruLogAnomalyDetectionIntegrationAttributes = {
  /**
   * User account id, used as the primary identifier for the resource
   * @pattern `^\d{12}$`
   */
  AccountId: string;
};
/**
 * Resource type definition for `AWS::DevOpsGuru::LogAnomalyDetectionIntegration`.
 * This resource schema represents the LogAnomalyDetectionIntegration resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html}
 */
export class DevOpsGuruLogAnomalyDetectionIntegration extends $Resource<
  "AWS::DevOpsGuru::LogAnomalyDetectionIntegration",
  DevOpsGuruLogAnomalyDetectionIntegrationProperties,
  DevOpsGuruLogAnomalyDetectionIntegrationAttributes
> {
  public static readonly Type =
    "AWS::DevOpsGuru::LogAnomalyDetectionIntegration";
  constructor(
    logicalId: string,
    properties: DevOpsGuruLogAnomalyDetectionIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DevOpsGuruLogAnomalyDetectionIntegration.Type,
      properties,
      options,
    );
  }
}
