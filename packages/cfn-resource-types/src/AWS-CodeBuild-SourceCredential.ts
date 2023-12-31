import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export type CodeBuildSourceCredentialProperties = {
  AuthType: string;
  ServerType: string;
  Token: string;
  Username?: string;
};
/**
 * Attribute type definition for `AWS::CodeBuild::SourceCredential`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#aws-resource-codebuild-sourcecredential-return-values}
 */
export type CodeBuildSourceCredentialAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export class CodeBuildSourceCredential extends $Resource<
  "AWS::CodeBuild::SourceCredential",
  CodeBuildSourceCredentialProperties,
  CodeBuildSourceCredentialAttributes
> {
  public static readonly Type = "AWS::CodeBuild::SourceCredential";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CodeBuildSourceCredentialProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeBuildSourceCredential.Type,
      properties,
      CodeBuildSourceCredential.AttributeNames,
      options,
    );
  }
}
