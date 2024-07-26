import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html}
 */
export type ARCZonalShiftAutoshiftObserverNotificationStatusProperties = {
  Status: AutoshiftObserverNotificationStatus;
};
/**
 * Attribute type definition for `AWS::ARCZonalShift::AutoshiftObserverNotificationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html#aws-resource-arczonalshift-autoshiftobservernotificationstatus-return-values}
 */
export type ARCZonalShiftAutoshiftObserverNotificationStatusAttributes = {
  /**
   * User account id, used as part of the primary identifier for the resource
   * @pattern `^\d{12}$`
   */
  AccountId: string;
  /**
   * Region, used as part of the primary identifier for the resource
   * @minLength `5`
   * @maxLength `30`
   * @pattern `^[a-z0-9-]*$`
   */
  Region: string;
};
/**
 * Type definition for `AWS::ARCZonalShift::AutoshiftObserverNotificationStatus.AutoshiftObserverNotificationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-autoshiftobservernotificationstatus-autoshiftobservernotificationstatus.html}
 */
export type AutoshiftObserverNotificationStatus = "ENABLED";
/**
 * Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html}
 */
export class ARCZonalShiftAutoshiftObserverNotificationStatus extends $Resource<
  "AWS::ARCZonalShift::AutoshiftObserverNotificationStatus",
  ARCZonalShiftAutoshiftObserverNotificationStatusProperties,
  ARCZonalShiftAutoshiftObserverNotificationStatusAttributes
> {
  public static readonly Type =
    "AWS::ARCZonalShift::AutoshiftObserverNotificationStatus";
  constructor(
    logicalId: string,
    properties: ARCZonalShiftAutoshiftObserverNotificationStatusProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ARCZonalShiftAutoshiftObserverNotificationStatus.Type,
      properties,
      options,
    );
  }
}
