import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SSM::Parameter`` resource creates an SSM parameter in SYSlong Parameter Store.
  To create an SSM parameter, you must have the IAMlong (IAM) permissions ``ssm:PutParameter`` and ``ssm:AddTagsToResource``. On stack creation, CFNlong adds the following three tags to the parameter: ``aws:cloudformation:stack-name``, ``aws:cloudformation:logical-id``, and ``aws:cloudformation:stack-id``, in addition to any custom tags you specify.
 To add, update, or remove tags during stack update, you must have IAM permissions for both ``ssm:AddTagsToResource`` and ``ssm:RemoveTagsFromResource``. For more information, see [Managing Access Using Policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security_iam_access-manage) in the *User Guide*.
  For information about valid values for parameters, see [About requirements and constraints for parameter names](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints) in the *User Guide* and [PutParameter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html) in the *API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html}
 */
export type SSMParameterProperties = {
  /**
   * A regular expression used to validate the parameter value. For example, for ``String`` types with values restricted to numbers, you can specify the following: ``AllowedPattern=^\d+$``
   */
  AllowedPattern?: string;
  /**
   * The data type of the parameter, such as ``text`` or ``aws:ec2:image``. The default is ``text``.
   */
  DataType?: "text" | "aws:ec2:image";
  /**
   * Information about the parameter.
   */
  Description?: string;
  /**
     * The name of the parameter.
      The maximum length constraint listed below includes capacity for additional system attributes that aren't part of the name. The maximum length for a parameter name, including the full length of the parameter Amazon Resource Name (ARN), is 1011 characters. For example, the length of the following parameter name is 65 characters, not 20 characters: ``arn:aws:ssm:us-east-2:111222333444:parameter/ExampleParameterName``
     */
  Name?: string;
  /**
     * Information about the policies assigned to a parameter.
      [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *User Guide*.
     */
  Policies?: string;
  /**
   * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
   */
  Tags?: Record<string, string>;
  /**
   * The parameter tier.
   */
  Tier?: "Standard" | "Advanced" | "Intelligent-Tiering";
  /**
   * The type of parameter.
   */
  Type: "String" | "StringList";
  /**
     * The parameter value.
      If type is ``StringList``, the system returns a comma-separated string with no spaces between commas in the ``Value`` field.
     */
  Value: string;
};
/**
 * The ``AWS::SSM::Parameter`` resource creates an SSM parameter in SYSlong Parameter Store.
  To create an SSM parameter, you must have the IAMlong (IAM) permissions ``ssm:PutParameter`` and ``ssm:AddTagsToResource``. On stack creation, CFNlong adds the following three tags to the parameter: ``aws:cloudformation:stack-name``, ``aws:cloudformation:logical-id``, and ``aws:cloudformation:stack-id``, in addition to any custom tags you specify.
 To add, update, or remove tags during stack update, you must have IAM permissions for both ``ssm:AddTagsToResource`` and ``ssm:RemoveTagsFromResource``. For more information, see [Managing Access Using Policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security_iam_access-manage) in the *User Guide*.
  For information about valid values for parameters, see [About requirements and constraints for parameter names](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints) in the *User Guide* and [PutParameter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html) in the *API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html}
 */
export class SSMParameter extends $Resource<
  "AWS::SSM::Parameter",
  SSMParameterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::Parameter";
  constructor(
    logicalId: string,
    properties: SSMParameterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMParameter.Type, properties, options);
  }
}
