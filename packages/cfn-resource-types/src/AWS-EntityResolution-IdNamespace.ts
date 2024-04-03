import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EntityResolution::IdNamespace`.
 * IdNamespace defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html}
 */
export type EntityResolutionIdNamespaceProperties = {
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  IdMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9-]*$`
   */
  IdNamespaceName: string;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  InputSourceConfig?: IdNamespaceInputSource[];
  /**
   * @minLength `32`
   * @maxLength `512`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: "SOURCE" | "TARGET";
};
/**
 * Attribute type definition for `AWS::EntityResolution::IdNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#aws-resource-entityresolution-idnamespace-return-values}
 */
export type EntityResolutionIdNamespaceAttributes = {
  /**
   * The date and time when the IdNamespace was created
   */
  CreatedAt: string;
  /**
   * The arn associated with the IdNamespace
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(idnamespace/[a-zA-Z_0-9-]{1,255})$`
   */
  IdNamespaceArn: string;
  /**
   * The date and time when the IdNamespace was updated
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdNamespace.IdNamespaceIdMappingWorkflowProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties.html}
 */
export type IdNamespaceIdMappingWorkflowProperties = {
  IdMappingType: "PROVIDER";
  ProviderProperties?: NamespaceProviderProperties;
};
/**
 * Type definition for `AWS::EntityResolution::IdNamespace.IdNamespaceInputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-idnamespaceinputsource.html}
 */
export type IdNamespaceInputSource = {
  /**
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(idnamespace/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):glue:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(table/[a-zA-Z_0-9-]{1,255}/[a-zA-Z_0-9-]{1,255})$`
   */
  InputSourceARN: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9-]*$`
   */
  SchemaName?: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdNamespace.NamespaceProviderProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-namespaceproviderproperties.html}
 */
export type NamespaceProviderProperties = {
  /**
   * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.
   */
  ProviderConfiguration?: Record<string, string>;
  /**
   * @minLength `20`
   * @maxLength `255`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):(entityresolution):([a-z]{2}-[a-z]{1,10}-[0-9])::providerservice/([a-zA-Z0-9_-]{1,255})/([a-zA-Z0-9_-]{1,255})$`
   */
  ProviderServiceArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdNamespace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idnamespace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EntityResolution::IdNamespace`.
 * IdNamespace defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html}
 */
export class EntityResolutionIdNamespace extends $Resource<
  "AWS::EntityResolution::IdNamespace",
  EntityResolutionIdNamespaceProperties,
  EntityResolutionIdNamespaceAttributes
> {
  public static readonly Type = "AWS::EntityResolution::IdNamespace";
  constructor(
    logicalId: string,
    properties: EntityResolutionIdNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EntityResolutionIdNamespace.Type, properties, options);
  }
}
