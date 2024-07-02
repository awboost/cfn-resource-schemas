import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryControl::ControlPanel`.
 * AWS Route53 Recovery Control Control Panel resource schema .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html}
 */
export type Route53RecoveryControlControlPanelProperties = {
  /**
   * Cluster to associate with the Control Panel
   * @pattern `^[A-Za-z0-9:\/_-]*$`
   */
  ClusterArn?: string;
  /**
   * The name of the control panel. You can use any non-white space character in the name.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryControl::ControlPanel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html#aws-resource-route53recoverycontrol-controlpanel-return-values}
 */
export type Route53RecoveryControlControlPanelAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   * @pattern `^[A-Za-z0-9:\/_-]*$`
   */
  ControlPanelArn: string;
  /**
   * A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.
   */
  DefaultControlPanel: boolean;
  /**
   * Count of associated routing controls
   */
  RoutingControlCount: number;
  /**
   * The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
};
/**
 * Type definition for `AWS::Route53RecoveryControl::ControlPanel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-controlpanel-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryControl::ControlPanel`.
 * AWS Route53 Recovery Control Control Panel resource schema .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html}
 */
export class Route53RecoveryControlControlPanel extends $Resource<
  "AWS::Route53RecoveryControl::ControlPanel",
  Route53RecoveryControlControlPanelProperties,
  Route53RecoveryControlControlPanelAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryControl::ControlPanel";
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlControlPanelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryControlControlPanel.Type,
      properties,
      options,
    );
  }
}
