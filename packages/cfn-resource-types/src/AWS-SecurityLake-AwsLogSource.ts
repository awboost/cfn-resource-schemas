import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityLake::AwsLogSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html}
 */
export type SecurityLakeAwsLogSourceProperties = {
  /**
   * AWS account where you want to collect logs from.
   */
  Accounts?: string[];
  /**
   * The ARN for the data lake.
   * @minLength `1`
   * @maxLength `256`
   */
  DataLakeArn: string;
  /**
   * The name for a AWS source. This must be a Regionally unique value.
   */
  SourceName: string;
  /**
   * The version for a AWS source. This must be a Regionally unique value.
   * @pattern `^(latest|[0-9]\.[0-9])$`
   */
  SourceVersion: string;
};
/**
 * Resource Type definition for AWS::SecurityLake::AwsLogSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html}
 */
export class SecurityLakeAwsLogSource extends $Resource<
  "AWS::SecurityLake::AwsLogSource",
  SecurityLakeAwsLogSourceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecurityLake::AwsLogSource";
  constructor(
    logicalId: string,
    properties: SecurityLakeAwsLogSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityLakeAwsLogSource.Type, properties, options);
  }
}
