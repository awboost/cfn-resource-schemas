import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::HookTypeConfig`.
 * Specifies the configuration data for a registered hook in CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html}
 */
export type CloudFormationHookTypeConfigProperties = {
  /**
   * The configuration data for the extension, in this account and region.
   * @pattern `[\s\S]+`
   */
  Configuration?: string;
  /**
   * An alias by which to refer to this extension configuration data.
   * @pattern `^[a-zA-Z0-9]{1,256}$`
   */
  ConfigurationAlias?: "default";
  /**
   * The Amazon Resource Name (ARN) of the type without version number.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  TypeArn?: string;
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     */
  TypeName?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::HookTypeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#aws-resource-cloudformation-hooktypeconfig-return-values}
 */
export type CloudFormationHookTypeConfigAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the configuration data, in this account and region.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type(-configuration)?/hook/.+$`
   */
  ConfigurationArn: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::HookTypeConfig`.
 * Specifies the configuration data for a registered hook in CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html}
 */
export class CloudFormationHookTypeConfig extends $Resource<
  "AWS::CloudFormation::HookTypeConfig",
  CloudFormationHookTypeConfigProperties,
  CloudFormationHookTypeConfigAttributes
> {
  public static readonly Type = "AWS::CloudFormation::HookTypeConfig";
  constructor(
    logicalId: string,
    properties: CloudFormationHookTypeConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationHookTypeConfig.Type, properties, options);
  }
}
