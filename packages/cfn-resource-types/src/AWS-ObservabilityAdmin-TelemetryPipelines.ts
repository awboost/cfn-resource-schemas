import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ObservabilityAdmin::TelemetryPipelines
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetrypipelines.html}
 */
export type ObservabilityAdminTelemetryPipelinesProperties = {
  Configuration: TelemetryPipelineConfiguration;
  /**
   * @minLength `3`
   * @maxLength `28`
   * @pattern `[a-z][a-z0-9\-]+`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ObservabilityAdmin::TelemetryPipelines`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetrypipelines.html#aws-resource-observabilityadmin-telemetrypipelines-return-values}
 */
export type ObservabilityAdminTelemetryPipelinesAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  Arn: string;
  Pipeline: {
    /**
     * @minLength `1`
     * @maxLength `1011`
     * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
     */
    Arn: string;
    Configuration: {
      /**
       * @minLength `1`
       * @maxLength `24000`
       */
      Body: string;
    };
    CreatedTimeStamp: number;
    LastUpdateTimeStamp: number;
    /**
     * @minLength `3`
     * @maxLength `28`
     * @pattern `[a-z][a-z0-9\-]+`
     */
    Name: string;
    Status: TelemetryPipelineStatus;
    StatusReason: {
      Description: string;
    };
    /**
     * An array of key-value pairs to apply to this resource
     */
    Tags: {
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
      Value: string;
    }[];
  };
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  PipelineIdentifier: string;
  Status: TelemetryPipelineStatus;
  StatusReason: {
    Description: string;
  };
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryPipelines.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetrypipelines-tag.html}
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
  Value: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryPipelines.TelemetryPipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetrypipelines-telemetrypipeline.html}
 */
export type TelemetryPipeline = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  Arn?: string;
  Configuration?: TelemetryPipelineConfiguration;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  /**
   * @minLength `3`
   * @maxLength `28`
   * @pattern `[a-z][a-z0-9\-]+`
   */
  Name?: string;
  Status?: TelemetryPipelineStatus;
  StatusReason?: TelemetryPipelineStatusReason;
  /**
   * An array of key-value pairs to apply to this resource
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryPipelines.TelemetryPipelineConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetrypipelines-telemetrypipelineconfiguration.html}
 */
export type TelemetryPipelineConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `24000`
   */
  Body: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryPipelines.TelemetryPipelineStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetrypipelines-telemetrypipelinestatus.html}
 */
export type TelemetryPipelineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED";
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryPipelines.TelemetryPipelineStatusReason`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetrypipelines-telemetrypipelinestatusreason.html}
 */
export type TelemetryPipelineStatusReason = {
  Description?: string;
};
/**
 * Resource Type definition for AWS::ObservabilityAdmin::TelemetryPipelines
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetrypipelines.html}
 */
export class ObservabilityAdminTelemetryPipelines extends $Resource<
  "AWS::ObservabilityAdmin::TelemetryPipelines",
  ObservabilityAdminTelemetryPipelinesProperties,
  ObservabilityAdminTelemetryPipelinesAttributes
> {
  public static readonly Type = "AWS::ObservabilityAdmin::TelemetryPipelines";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminTelemetryPipelinesProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ObservabilityAdminTelemetryPipelines.Type,
      properties,
      options,
    );
  }
}
