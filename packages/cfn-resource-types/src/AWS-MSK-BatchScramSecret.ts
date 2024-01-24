import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: MSKBatchScramSecretProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKBatchScramSecret.Type, properties, options);
  }
}
