import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GroundStation::MissionProfile`.
 * AWS Ground Station Mission Profile resource type for CloudFormation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html}
 */
export type GroundStationMissionProfileProperties = {
  /**
   * Post-pass time needed after the contact.
   */
  ContactPostPassDurationSeconds?: number;
  /**
   * Pre-pass time needed before the contact.
   */
  ContactPrePassDurationSeconds?: number;
  /**
   * @minLength `1`
   */
  DataflowEdges: DataflowEdge[];
  /**
   * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
   */
  MinimumViableContactDurationSeconds: number;
  /**
   * A name used to identify a mission profile.
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
  /**
   * The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.
   */
  StreamsKmsKey?: StreamsKmsKey;
  /**
   * The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.
   */
  StreamsKmsRole?: string;
  Tags?: Tag[];
  TrackingConfigArn: string;
};
/**
 * Attribute type definition for `AWS::GroundStation::MissionProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#aws-resource-groundstation-missionprofile-return-values}
 */
export type GroundStationMissionProfileAttributes = {
  Arn: string;
  Id: string;
  Region: string;
};
/**
 * Type definition for `AWS::GroundStation::MissionProfile.DataflowEdge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html}
 */
export type DataflowEdge = {
  Destination?: string;
  Source?: string;
};
/**
 * Type definition for `AWS::GroundStation::MissionProfile.StreamsKmsKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html}
 */
export type StreamsKmsKey = {
  KmsAliasArn?: string;
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::GroundStation::MissionProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-tag.html}
 */
export type Tag = {
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
   */
  Key: string;
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::GroundStation::MissionProfile`.
 * AWS Ground Station Mission Profile resource type for CloudFormation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html}
 */
export class GroundStationMissionProfile extends $Resource<
  "AWS::GroundStation::MissionProfile",
  GroundStationMissionProfileProperties,
  GroundStationMissionProfileAttributes
> {
  public static readonly Type = "AWS::GroundStation::MissionProfile";
  constructor(
    logicalId: string,
    properties: GroundStationMissionProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GroundStationMissionProfile.Type, properties, options);
  }
}
