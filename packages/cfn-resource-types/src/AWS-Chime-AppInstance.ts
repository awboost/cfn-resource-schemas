import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Chime::AppInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstance.html}
 */
export type ChimeAppInstanceProperties = {
  /**
   * The metadata of the AppInstance. Limited to a 1KB string in UTF-8.
   * @minLength `0`
   * @maxLength `1024`
   */
  Metadata?: string;
  /**
   * The name of the AppInstance.
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  /**
   * Tags assigned to the AppInstance.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Chime::AppInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstance.html#aws-resource-chime-appinstance-return-values}
 */
export type ChimeAppInstanceAttributes = {
  /**
   * The Amazon Resource Number (ARN) of the AppInstance.
   * @minLength `5`
   * @maxLength `1600`
   */
  AppInstanceArn: string;
  /**
   * The time at which an AppInstance was created. In epoch milliseconds.
   */
  CreatedTimestamp: number;
  /**
   * The time an AppInstance was last updated. In epoch milliseconds.
   */
  LastUpdatedTimestamp: number;
};
/**
 * Type definition for `AWS::Chime::AppInstance.Tag`.
 * A tag object containing a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstance-tag.html}
 */
export type Tag = {
  /**
   * The key in a tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value in a tag.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Chime::AppInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstance.html}
 */
export class ChimeAppInstance extends $Resource<
  "AWS::Chime::AppInstance",
  ChimeAppInstanceProperties,
  ChimeAppInstanceAttributes
> {
  public static readonly Type = "AWS::Chime::AppInstance";
  constructor(
    logicalId: string,
    properties: ChimeAppInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ChimeAppInstance.Type, properties, options);
  }
}
