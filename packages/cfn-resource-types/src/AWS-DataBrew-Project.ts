import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataBrew::Project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html}
 */
export type DataBrewProjectProperties = {
  /**
   * Dataset name
   * @minLength `1`
   * @maxLength `255`
   */
  DatasetName: string;
  /**
   * Project name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Recipe name
   * @minLength `1`
   * @maxLength `255`
   */
  RecipeName: string;
  /**
   * Role arn
   */
  RoleArn: string;
  /**
   * Sample
   */
  Sample?: Sample;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::DataBrew::Project.Sample`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-sample.html}
 */
export type Sample = {
  /**
   * Sample size
   * @min `1`
   */
  Size?: number;
  /**
   * Sample type
   */
  Type: "FIRST_N" | "LAST_N" | "RANDOM";
};
/**
 * Type definition for `AWS::DataBrew::Project.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-tag.html}
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
 * Resource schema for AWS::DataBrew::Project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html}
 */
export class DataBrewProject extends $Resource<
  "AWS::DataBrew::Project",
  DataBrewProjectProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Project";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataBrewProject.Type,
      properties,
      DataBrewProject.AttributeNames,
      options,
    );
  }
}
