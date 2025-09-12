import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-resourcepolicy.html}
 */
export type SMSVOICEResourcePolicyProperties = {
  /**
   * The JSON formatted resource-based policy to attach.
   */
  PolicyDocument: Record<string, any>;
  /**
   * The Amazon Resource Name (ARN) of the AWS End User Messaging SMS and Voice resource to attach the resource-based policy to.
   * @pattern `^arn:\S+$`
   */
  ResourceArn: string;
};
/**
 * Resource Type definition for AWS::SMSVOICE::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-resourcepolicy.html}
 */
export class SMSVOICEResourcePolicy extends $Resource<
  "AWS::SMSVOICE::ResourcePolicy",
  SMSVOICEResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SMSVOICE::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: SMSVOICEResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICEResourcePolicy.Type, properties, options);
  }
}
