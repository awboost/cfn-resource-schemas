import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::Segment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html}
 */
export type PinpointSegmentProperties = {
  ApplicationId: string;
  Dimensions?: SegmentDimensions;
  Name: string;
  SegmentGroups?: SegmentGroups;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Pinpoint::Segment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#aws-resource-pinpoint-segment-return-values}
 */
export type PinpointSegmentAttributes = {
  Arn: string;
  SegmentId: string;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Behavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-behavior.html}
 */
export type Behavior = {
  Recency?: Recency;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Coordinates`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-coordinates.html}
 */
export type Coordinates = {
  Latitude: number;
  Longitude: number;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Demographic`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html}
 */
export type Demographic = {
  AppVersion?: SetDimension;
  Channel?: SetDimension;
  DeviceType?: SetDimension;
  Make?: SetDimension;
  Model?: SetDimension;
  Platform?: SetDimension;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.GPSPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-gpspoint.html}
 */
export type GPSPoint = {
  Coordinates: Coordinates;
  RangeInKilometers: number;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Groups`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html}
 */
export type Groups = {
  Dimensions?: SegmentDimensions[];
  SourceSegments?: SourceSegments[];
  SourceType?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-location.html}
 */
export type Location = {
  Country?: SetDimension;
  GPSPoint?: GPSPoint;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.Recency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-recency.html}
 */
export type Recency = {
  Duration: string;
  RecencyType: string;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.SegmentDimensions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html}
 */
export type SegmentDimensions = {
  Attributes?: Record<string, any>;
  Behavior?: Behavior;
  Demographic?: Demographic;
  Location?: Location;
  Metrics?: Record<string, any>;
  UserAttributes?: Record<string, any>;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.SegmentGroups`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html}
 */
export type SegmentGroups = {
  Groups?: Groups[];
  Include?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Segment.SetDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html}
 */
export type SetDimension = {
  DimensionType?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::Pinpoint::Segment.SourceSegments`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-sourcesegments.html}
 */
export type SourceSegments = {
  Id: string;
  Version?: number;
};
/**
 * Resource Type definition for AWS::Pinpoint::Segment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html}
 */
export class PinpointSegment extends $Resource<
  "AWS::Pinpoint::Segment",
  PinpointSegmentProperties,
  PinpointSegmentAttributes
> {
  public static readonly Type = "AWS::Pinpoint::Segment";
  constructor(
    logicalId: string,
    properties: PinpointSegmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointSegment.Type, properties, options);
  }
}
