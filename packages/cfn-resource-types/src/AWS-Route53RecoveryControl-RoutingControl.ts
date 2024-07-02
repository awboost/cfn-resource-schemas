import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryControl::RoutingControl`.
 * AWS Route53 Recovery Control Routing Control resource schema .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html}
 */
export type Route53RecoveryControlRoutingControlProperties = {
  /**
   * Arn associated with Control Panel
   * @pattern `^[A-Za-z0-9:\/_-]*$`
   */
  ClusterArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   * @pattern `^[A-Za-z0-9:\/_-]*$`
   */
  ControlPanelArn?: string;
  /**
   * The name of the routing control. You can use any non-white space character in the name.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::Route53RecoveryControl::RoutingControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#aws-resource-route53recoverycontrol-routingcontrol-return-values}
 */
export type Route53RecoveryControlRoutingControlAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the routing control.
   * @pattern `^[A-Za-z0-9:\/_-]*$`
   */
  RoutingControlArn: string;
  /**
   * The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
};
/**
 * Resource type definition for `AWS::Route53RecoveryControl::RoutingControl`.
 * AWS Route53 Recovery Control Routing Control resource schema .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html}
 */
export class Route53RecoveryControlRoutingControl extends $Resource<
  "AWS::Route53RecoveryControl::RoutingControl",
  Route53RecoveryControlRoutingControlProperties,
  Route53RecoveryControlRoutingControlAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryControl::RoutingControl";
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlRoutingControlProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryControlRoutingControl.Type,
      properties,
      options,
    );
  }
}
