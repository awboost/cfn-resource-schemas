import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ControlTower::LandingZone Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html}
 */
export type ControlTowerLandingZoneProperties = {
  Manifest: any;
  Tags?: Tag[];
  /**
   * @minLength `3`
   * @maxLength `10`
   * @pattern `\d+.\d+`
   */
  Version: string;
};
/**
 * Attribute type definition for `AWS::ControlTower::LandingZone`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html#aws-resource-controltower-landingzone-return-values}
 */
export type ControlTowerLandingZoneAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  Arn: string;
  DriftStatus: LandingZoneDriftStatus;
  LandingZoneIdentifier: string;
  /**
   * @minLength `3`
   * @maxLength `10`
   * @pattern `\d+.\d+`
   */
  LatestAvailableVersion: string;
  Status: LandingZoneStatus;
};
/**
 * Type definition for `AWS::ControlTower::LandingZone.LandingZoneDriftStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-landingzone-landingzonedriftstatus.html}
 */
export type LandingZoneDriftStatus = "DRIFTED" | "IN_SYNC";
/**
 * Type definition for `AWS::ControlTower::LandingZone.LandingZoneStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-landingzone-landingzonestatus.html}
 */
export type LandingZoneStatus = "ACTIVE" | "PROCESSING" | "FAILED";
/**
 * Type definition for `AWS::ControlTower::LandingZone.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-landingzone-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Definition of AWS::ControlTower::LandingZone Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html}
 */
export class ControlTowerLandingZone extends $Resource<
  "AWS::ControlTower::LandingZone",
  ControlTowerLandingZoneProperties,
  ControlTowerLandingZoneAttributes
> {
  public static readonly Type = "AWS::ControlTower::LandingZone";
  constructor(
    logicalId: string,
    properties: ControlTowerLandingZoneProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ControlTowerLandingZone.Type, properties, options);
  }
}
