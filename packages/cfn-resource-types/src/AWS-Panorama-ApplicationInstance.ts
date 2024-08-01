import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Panorama::ApplicationInstance`.
 * Creates an application instance and deploys it to a device.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html}
 */
export type PanoramaApplicationInstanceProperties = {
  /**
   * The ID of an application instance to replace with the new instance.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  ApplicationInstanceIdToReplace?: string;
  /**
   * The device's ID.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  DefaultRuntimeContextDevice: string;
  /**
   * A description for the application instance.
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Description?: string;
  /**
   * Setting overrides for the application manifest.
   */
  ManifestOverridesPayload?: ManifestOverridesPayload;
  /**
   * The application's manifest document.
   */
  ManifestPayload: ManifestPayload;
  /**
   * A name for the application instance.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  Name?: string;
  /**
   * The ARN of a runtime role for the application instance.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:[a-z0-9][-.a-z0-9]{0,62}:iam::[0-9]{12}:role/.+$`
   */
  RuntimeRoleArn?: string;
  /**
   * Tags for the application instance.
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
 * Parameter overrides for an application instance. This is a JSON document that has a single key (``PayloadData``) where the value is an escaped string representation of the overrides document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html}
 */
export type ManifestOverridesPayload = {
  /**
   * The overrides document.
   * @minLength `0`
   * @maxLength `51200`
   * @pattern `^.+$`
   */
  PayloadData?: string;
};
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.ManifestPayload`.
 * A application verion's manifest file. This is a JSON document that has a single key (``PayloadData``) where the value is an escaped string representation of the application manifest (``graph.json``). This file is located in the ``graphs`` folder in your application source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html}
 */
export type ManifestPayload = {
  /**
   * The application manifest.
   * @minLength `1`
   * @maxLength `51200`
   * @pattern `^.+$`
   */
  PayloadData?: string;
};
/**
 * Type definition for `AWS::Panorama::ApplicationInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Panorama::ApplicationInstance`.
 * Creates an application instance and deploys it to a device.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html}
 */
export class PanoramaApplicationInstance extends $Resource<
  "AWS::Panorama::ApplicationInstance",
  PanoramaApplicationInstanceProperties,
  PanoramaApplicationInstanceAttributes
> {
  public static readonly Type = "AWS::Panorama::ApplicationInstance";
  constructor(
    logicalId: string,
    properties: PanoramaApplicationInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PanoramaApplicationInstance.Type, properties, options);
  }
}
