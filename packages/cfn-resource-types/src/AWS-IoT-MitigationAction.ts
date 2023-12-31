import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::MitigationAction`.
 * Mitigation actions can be used to take actions to mitigate issues that were found in an Audit finding or Detect violation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html}
 */
export type IoTMitigationActionProperties = {
  /**
   * A unique identifier for the mitigation action.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  ActionName?: string;
  /**
   * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
   */
  ActionParams: ActionParams;
  RoleArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::MitigationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#aws-resource-iot-mitigationaction-return-values}
 */
export type IoTMitigationActionAttributes = {
  MitigationActionArn: string;
  MitigationActionId: string;
};
/**
 * Type definition for `AWS::IoT::MitigationAction.ActionParams`.
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html}
 */
export type ActionParams = {
  /**
   * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
   */
  AddThingsToThingGroupParams?: AddThingsToThingGroupParams;
  /**
   * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
   */
  EnableIoTLoggingParams?: EnableIoTLoggingParams;
  /**
   * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
   */
  PublishFindingToSnsParams?: PublishFindingToSnsParams;
  /**
   * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
   */
  ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
  /**
   * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
   */
  UpdateCACertificateParams?: UpdateCACertificateParams;
  /**
   * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
   */
  UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams;
};
/**
 * Type definition for `AWS::IoT::MitigationAction.AddThingsToThingGroupParams`.
 * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html}
 */
export type AddThingsToThingGroupParams = {
  /**
   * Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
   */
  OverrideDynamicGroups?: boolean;
  /**
   * The list of groups to which you want to add the things that triggered the mitigation action.
   * @minLength `1`
   * @maxLength `10`
   */
  ThingGroupNames: string[];
};
/**
 * Type definition for `AWS::IoT::MitigationAction.EnableIoTLoggingParams`.
 * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html}
 */
export type EnableIoTLoggingParams = {
  /**
   *  Specifies which types of information are logged.
   */
  LogLevel: "DEBUG" | "INFO" | "ERROR" | "WARN" | "UNSET_VALUE";
  /**
   *  The ARN of the IAM role used for logging.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArnForLogging: string;
};
/**
 * Type definition for `AWS::IoT::MitigationAction.PublishFindingToSnsParams`.
 * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html}
 */
export type PublishFindingToSnsParams = {
  /**
   * The ARN of the topic to which you want to publish the findings.
   * @minLength `20`
   * @maxLength `2048`
   */
  TopicArn: string;
};
/**
 * Type definition for `AWS::IoT::MitigationAction.ReplaceDefaultPolicyVersionParams`.
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html}
 */
export type ReplaceDefaultPolicyVersionParams = {
  TemplateName: "BLANK_POLICY" | "UNSET_VALUE";
};
/**
 * Type definition for `AWS::IoT::MitigationAction.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::IoT::MitigationAction.UpdateCACertificateParams`.
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html}
 */
export type UpdateCACertificateParams = {
  Action: "DEACTIVATE" | "UNSET_VALUE";
};
/**
 * Type definition for `AWS::IoT::MitigationAction.UpdateDeviceCertificateParams`.
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html}
 */
export type UpdateDeviceCertificateParams = {
  Action: "DEACTIVATE" | "UNSET_VALUE";
};
/**
 * Resource type definition for `AWS::IoT::MitigationAction`.
 * Mitigation actions can be used to take actions to mitigate issues that were found in an Audit finding or Detect violation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html}
 */
export class IoTMitigationAction extends $Resource<
  "AWS::IoT::MitigationAction",
  IoTMitigationActionProperties,
  IoTMitigationActionAttributes
> {
  public static readonly Type = "AWS::IoT::MitigationAction";
  constructor(
    logicalId: string,
    properties: IoTMitigationActionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTMitigationAction.Type, properties, options);
  }
}
