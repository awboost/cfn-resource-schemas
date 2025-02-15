import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EMR::StudioSessionMapping`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/cli/latest/reference/emr/create-studio-session-mapping.html}
 */
export type EMRStudioSessionMappingProperties = {
  /**
   * The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
   */
  IdentityName: string;
  /**
   * Specifies whether the identity to map to the Studio is a user or a group.
   */
  IdentityType: "USER" | "GROUP";
  /**
   * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
   * @pattern `^arn:aws(-(cn|us-gov|iso-f|iso-e))?:iam::([0-9]{12})?:policy\/[^.]+$`
   */
  SessionPolicyArn: string;
  /**
   * The ID of the Amazon EMR Studio to which the user or group will be mapped.
   * @minLength `4`
   * @maxLength `256`
   * @pattern `^es-[0-9A-Z]+`
   */
  StudioId: string;
};
/**
 * Resource type definition for `AWS::EMR::StudioSessionMapping`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/cli/latest/reference/emr/create-studio-session-mapping.html}
 */
export class EMRStudioSessionMapping extends $Resource<
  "AWS::EMR::StudioSessionMapping",
  EMRStudioSessionMappingProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::StudioSessionMapping";
  constructor(
    logicalId: string,
    properties: EMRStudioSessionMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRStudioSessionMapping.Type, properties, options);
  }
}
