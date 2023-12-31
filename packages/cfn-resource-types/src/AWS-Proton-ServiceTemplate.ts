import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Proton::ServiceTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html}
 */
export type ProtonServiceTemplateProperties = {
  /**
   * <p>A description of the service template.</p>
   * @maxLength `500`
   */
  Description?: string;
  /**
   * <p>The name of the service template as displayed in the developer interface.</p>
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName?: string;
  /**
   * <p>A customer provided encryption key that's used to encrypt data.</p>
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
  PipelineProvisioning?: Provisioning;
  /**
     * <p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p>
             <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
            <i>Proton User Guide</i>.</p>
     * @maxLength `50`
     */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Proton::ServiceTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#aws-resource-proton-servicetemplate-return-values}
 */
export type ProtonServiceTemplateAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):[a-zA-Z0-9-]+:[a-zA-Z0-9-]*:\d{12}:([\w+=,.@-]+[/:])*[\w+=,.@-]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Proton::ServiceTemplate.Provisioning`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-servicetemplate-provisioning.html}
 */
export type Provisioning = "CUSTOMER_MANAGED";
/**
 * Type definition for `AWS::Proton::ServiceTemplate.Tag`.
 * <p>A description of a resource tag.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-servicetemplate-tag.html}
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
 * Definition of AWS::Proton::ServiceTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html}
 */
export class ProtonServiceTemplate extends $Resource<
  "AWS::Proton::ServiceTemplate",
  ProtonServiceTemplateProperties,
  ProtonServiceTemplateAttributes
> {
  public static readonly Type = "AWS::Proton::ServiceTemplate";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: ProtonServiceTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ProtonServiceTemplate.Type,
      properties,
      ProtonServiceTemplate.AttributeNames,
      options,
    );
  }
}
