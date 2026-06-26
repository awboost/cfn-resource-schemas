import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ControlCatalog::Control`.
 * Returns details about a control from the AWS Control Catalog, including its name, description, behavior, severity, region configuration, and implementation details.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-control.html}
 */
export type ControlCatalogControlProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::ControlCatalog::Control`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-control.html#aws-resource-controlcatalog-control-return-values}
 */
export type ControlCatalogControlAttributes = {
  /**
   * A list of alternative identifiers for the control.
   */
  Aliases: string[];
  /**
   * The Amazon Resource Name (ARN) of the control.
   * @minLength `34`
   * @maxLength `2048`
   * @pattern `^arn:(aws(?:[-a-z]*)?):(controlcatalog|controltower):[a-zA-Z0-9-]*::control/[0-9a-zA-Z_\-]+$`
   */
  Arn: string;
  /**
   * A term that identifies the control's functional behavior.
   */
  Behavior: "PREVENTIVE" | "PROACTIVE" | "DETECTIVE";
  /**
   * The unique opaque identifier of the control.
   * @pattern `^[0-9a-zA-Z_\-]+$`
   */
  ControlId: string;
  /**
   * A timestamp that notes the time when the control was released.
   */
  CreateTime: string;
  /**
   * A description of what the control does.
   */
  Description: string;
  /**
   * A list of AWS resource types that are governed by this control.
   */
  GovernedResources: string[];
  /**
   * An object that describes the implementation type for a control.
   */
  Implementation: {
    /**
     * A service-specific identifier for the control.
     * @minLength `1`
     * @maxLength `256`
     * @pattern `^[a-zA-Z0-9_\.-]+$`
     */
    Identifier: string;
    /**
     * A string that describes a control's implementation type.
     * @minLength `7`
     * @maxLength `2048`
     * @pattern `^[A-Za-z0-9]+(::[A-Za-z0-9_]+){2,3}$`
     */
    Type: string;
  };
  /**
   * The display name of the control.
   */
  Name: string;
  /**
   * Information about the control's region configuration.
   */
  RegionConfiguration: {
    /**
     * Regions in which the control is available to be deployed.
     */
    DeployableRegions: string[];
    /**
     * The scope of the control.
     */
    Scope: "GLOBAL" | "REGIONAL";
  };
  /**
   * The severity of the control.
   */
  Severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
};
/**
 * Type definition for `AWS::ControlCatalog::Control.ImplementationDetails`.
 * An object that describes the implementation type for a control.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controlcatalog-control-implementationdetails.html}
 */
export type ImplementationDetails = {
  /**
   * A service-specific identifier for the control.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_\.-]+$`
   */
  Identifier?: string;
  /**
   * A string that describes a control's implementation type.
   * @minLength `7`
   * @maxLength `2048`
   * @pattern `^[A-Za-z0-9]+(::[A-Za-z0-9_]+){2,3}$`
   */
  Type: string;
};
/**
 * Type definition for `AWS::ControlCatalog::Control.RegionConfiguration`.
 * Information about the control's region configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controlcatalog-control-regionconfiguration.html}
 */
export type RegionConfiguration = {
  /**
   * Regions in which the control is available to be deployed.
   */
  DeployableRegions?: string[];
  /**
   * The scope of the control.
   */
  Scope: "GLOBAL" | "REGIONAL";
};
/**
 * Resource type definition for `AWS::ControlCatalog::Control`.
 * Returns details about a control from the AWS Control Catalog, including its name, description, behavior, severity, region configuration, and implementation details.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-control.html}
 */
export class ControlCatalogControl extends $Resource<
  "AWS::ControlCatalog::Control",
  ControlCatalogControlProperties,
  ControlCatalogControlAttributes
> {
  public static readonly Type = "AWS::ControlCatalog::Control";
  constructor(
    logicalId: string,
    properties: ControlCatalogControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ControlCatalogControl.Type, properties, options);
  }
}
