import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Panorama::ApplicationInstance`.
 * Schema for ApplicationInstance CloudFormation Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html}
 */
export type PanoramaApplicationInstanceProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  ApplicationInstanceIdToReplace?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  DefaultRuntimeContextDevice: string;
  /**
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Description?: string;
  ManifestOverridesPayload?: ManifestOverridesPayload;
  ManifestPayload: ManifestPayload;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:[a-z0-9][-.a-z0-9]{0,62}:iam::[0-9]{12}:role/.+$`
   */
  RuntimeRoleArn?: string;
  /**
   * List of tags
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Panorama::ApplicationInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#aws-resource-panorama-applicationinstance-return-values}
 */
export type PanoramaApplicationInstanceAttributes = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  ApplicationInstanceId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Arn: string;
  CreatedTime: number;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  DefaultRuntimeContextDeviceName: string;
  HealthStatus: ApplicationInstanceHealthStatus;
  LastUpdatedTime: number;
  Status: ApplicationInstanceStatus;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  StatusDescription: string;
};
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.ApplicationInstanceHealthStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-applicationinstancehealthstatus.html}
 */
export type ApplicationInstanceHealthStatus =
  | "RUNNING"
  | "ERROR"
  | "NOT_AVAILABLE";
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.ApplicationInstanceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-applicationinstancestatus.html}
 */
export type ApplicationInstanceStatus =
  | "DEPLOYMENT_PENDING"
  | "DEPLOYMENT_REQUESTED"
  | "DEPLOYMENT_IN_PROGRESS"
  | "DEPLOYMENT_ERROR"
  | "DEPLOYMENT_SUCCEEDED"
  | "REMOVAL_PENDING"
  | "REMOVAL_REQUESTED"
  | "REMOVAL_IN_PROGRESS"
  | "REMOVAL_FAILED"
  | "REMOVAL_SUCCEEDED";
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.ManifestOverridesPayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html}
 */
export type ManifestOverridesPayload = {
  /**
   * @maxLength `51200`
   * @pattern `^.+$`
   */
  PayloadData?: string;
};
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.ManifestPayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html}
 */
export type ManifestPayload = {
  /**
   * @minLength `1`
   * @maxLength `51200`
   * @pattern `^.+$`
   */
  PayloadData?: string;
};
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.StatusFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-statusfilter.html}
 */
export type StatusFilter =
  | "DEPLOYMENT_SUCCEEDED"
  | "DEPLOYMENT_ERROR"
  | "REMOVAL_SUCCEEDED"
  | "REMOVAL_FAILED"
  | "PROCESSING_DEPLOYMENT"
  | "PROCESSING_REMOVAL";
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.+$`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @maxLength `256`
   * @pattern `^.+$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Panorama::ApplicationInstance`.
 * Schema for ApplicationInstance CloudFormation Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html}
 */
export class PanoramaApplicationInstance extends $Resource<
  "AWS::Panorama::ApplicationInstance",
  PanoramaApplicationInstanceProperties,
  PanoramaApplicationInstanceAttributes
> {
  public static readonly Type = "AWS::Panorama::ApplicationInstance";
  public static readonly AttributeNames = [
    "ApplicationInstanceId" as const,
    "Arn" as const,
    "CreatedTime" as const,
    "DefaultRuntimeContextDeviceName" as const,
    "HealthStatus" as const,
    "LastUpdatedTime" as const,
    "Status" as const,
    "StatusDescription" as const,
  ];
  constructor(
    logicalId: string,
    properties: PanoramaApplicationInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PanoramaApplicationInstance.Type,
      properties,
      PanoramaApplicationInstance.AttributeNames,
      options,
    );
  }
}
