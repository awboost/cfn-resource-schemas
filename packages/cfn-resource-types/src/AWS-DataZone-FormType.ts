import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::FormType`.
 * Create and manage form types in Amazon Datazone
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-formtype.html}
 */
export type DataZoneFormTypeProperties = {
  /**
   * The description of this Amazon DataZone metadata form type.
   * @minLength `0`
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The model of this Amazon DataZone metadata form type.
   */
  Model: Model;
  /**
   * The name of this Amazon DataZone metadata form type.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?![0-9_])\w+$|^_\w*[a-zA-Z0-9]\w*$`
   */
  Name: string;
  /**
   * The ID of the Amazon DataZone project that owns this metadata form type.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  OwningProjectIdentifier: string;
  /**
   * The status of this Amazon DataZone metadata form type.
   */
  Status?: "ENABLED" | "DISABLED";
};
/**
 * Attribute type definition for `AWS::DataZone::FormType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-formtype.html#aws-resource-datazone-formtype-return-values}
 */
export type DataZoneFormTypeAttributes = {
  /**
   * The timestamp of when this Amazon DataZone metadata form type was created.
   */
  CreatedAt: string;
  /**
   * The user who created this Amazon DataZone metadata form type.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  CreatedBy: string;
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of this Amazon DataZone metadata form type.
   * @minLength `1`
   * @maxLength `385`
   * @pattern `^(?!\.)[\w\.]*\w$`
   */
  FormTypeIdentifier: string;
  /**
   * The ID of the project that owns this Amazon DataZone metadata form type.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  OwningProjectId: string;
  /**
   * The revision of this Amazon DataZone metadata form type.
   * @minLength `1`
   * @maxLength `64`
   */
  Revision: string;
};
/**
 * Type definition for `AWS::DataZone::FormType.Model`.
 * Indicates the smithy model of the API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-formtype-model.html}
 */
export type Model = {
  /**
   * @minLength `1`
   * @maxLength `100000`
   */
  Smithy?: string;
};
/**
 * Resource type definition for `AWS::DataZone::FormType`.
 * Create and manage form types in Amazon Datazone
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-formtype.html}
 */
export class DataZoneFormType extends $Resource<
  "AWS::DataZone::FormType",
  DataZoneFormTypeProperties,
  DataZoneFormTypeAttributes
> {
  public static readonly Type = "AWS::DataZone::FormType";
  constructor(
    logicalId: string,
    properties: DataZoneFormTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneFormType.Type, properties, options);
  }
}
