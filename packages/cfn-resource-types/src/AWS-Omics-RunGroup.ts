import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Omics::RunGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html}
 */
export type OmicsRunGroupProperties = {
  /**
   * @min `1`
   * @max `100000`
   */
  MaxCpus?: number;
  /**
   * @min `1`
   * @max `100000`
   */
  MaxDuration?: number;
  /**
   * @min `1`
   * @max `100000`
   */
  MaxGpus?: number;
  /**
   * @min `1`
   * @max `100000`
   */
  MaxRuns?: number;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Name?: string;
  /**
   * A map of resource tags
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::RunGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#aws-resource-omics-rungroup-return-values}
 */
export type OmicsRunGroupAttributes = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  CreationTime: string;
  /**
   * @minLength `1`
   * @maxLength `18`
   * @pattern `^[0-9]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Omics::RunGroup.TagMap`.
 * A map of resource tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-rungroup-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::Omics::RunGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html}
 */
export class OmicsRunGroup extends $Resource<
  "AWS::Omics::RunGroup",
  OmicsRunGroupProperties,
  OmicsRunGroupAttributes
> {
  public static readonly Type = "AWS::Omics::RunGroup";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: OmicsRunGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OmicsRunGroup.Type,
      properties,
      OmicsRunGroup.AttributeNames,
      options,
    );
  }
}
