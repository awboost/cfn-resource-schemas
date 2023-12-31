import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MSK::BatchScramSecret
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html}
 */
export type MSKBatchScramSecretProperties = {
  ClusterArn: string;
  SecretArnList?: string[];
};
/**
 * Resource Type definition for AWS::MSK::BatchScramSecret
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html}
 */
export class MSKBatchScramSecret extends $Resource<
  "AWS::MSK::BatchScramSecret",
  MSKBatchScramSecretProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MSK::BatchScramSecret";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MSKBatchScramSecretProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MSKBatchScramSecret.Type,
      properties,
      MSKBatchScramSecret.AttributeNames,
      options,
    );
  }
}
