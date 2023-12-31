import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Proton::EnvironmentTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html}
 */
export type ProtonEnvironmentTemplateProperties = {
  /**
   * <p>A description of the environment template.</p>
   * @maxLength `500`
   */
  Description?: string;
  /**
   * <p>The environment template name as displayed in the developer interface.</p>
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName?: string;
  /**
   * <p>A customer provided encryption key that Proton uses to encrypt data.</p>
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):[a-zA-Z0-9-]+:[a-zA-Z0-9-]*:\d{12}:([\w+=,.@-]+[/:])*[\w+=,.@-]+$`
   */
  EncryptionKey?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z]+[0-9A-Za-z_\-]*$`
   */
  Name?: string;
  Provisioning?: Provisioning;
  /**
     * <p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p>
             <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
            <i>Proton User Guide</i>.</p>
     * @maxLength `50`
     */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Proton::EnvironmentTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#aws-resource-proton-environmenttemplate-return-values}
 */
export type ProtonEnvironmentTemplateAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Proton::EnvironmentTemplate.Provisioning`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-environmenttemplate-provisioning.html}
 */
export type Provisioning = "CUSTOMER_MANAGED";
/**
 * Type definition for `AWS::Proton::EnvironmentTemplate.Tag`.
 * <p>A description of a resource tag.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-environmenttemplate-tag.html}
 */
export type Tag = {
  /**
   * <p>The key of the resource tag.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>The value of the resource tag.</p>
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Proton::EnvironmentTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html}
 */
export class ProtonEnvironmentTemplate extends $Resource<
  "AWS::Proton::EnvironmentTemplate",
  ProtonEnvironmentTemplateProperties,
  ProtonEnvironmentTemplateAttributes
> {
  public static readonly Type = "AWS::Proton::EnvironmentTemplate";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: ProtonEnvironmentTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ProtonEnvironmentTemplate.Type,
      properties,
      ProtonEnvironmentTemplate.AttributeNames,
      options,
    );
  }
}
