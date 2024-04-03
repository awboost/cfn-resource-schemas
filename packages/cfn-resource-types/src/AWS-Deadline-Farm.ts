import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::Farm Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-farm.html}
 */
export type DeadlineFarmProperties = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^arn:aws[-a-z]*:kms:.*:key/.*`
   */
  KmsKeyArn?: string;
};
/**
 * Attribute type definition for `AWS::Deadline::Farm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-farm.html#aws-resource-deadline-farm-return-values}
 */
export type DeadlineFarmAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):deadline:[a-z0-9-]+:[0-9]+:farm/.+?`
   */
  Arn: string;
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
};
/**
 * Definition of AWS::Deadline::Farm Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-farm.html}
 */
export class DeadlineFarm extends $Resource<
  "AWS::Deadline::Farm",
  DeadlineFarmProperties,
  DeadlineFarmAttributes
> {
  public static readonly Type = "AWS::Deadline::Farm";
  constructor(
    logicalId: string,
    properties: DeadlineFarmProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineFarm.Type, properties, options);
  }
}
