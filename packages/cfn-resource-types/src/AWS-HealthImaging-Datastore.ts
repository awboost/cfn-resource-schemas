import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::HealthImaging::Datastore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html}
 */
export type HealthImagingDatastoreProperties = {
  /**
   * User friendly name for Datastore.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9._/#-]+$`
   */
  DatastoreName?: string;
  /**
   * ARN referencing a KMS key or KMS key alias.
   * @minLength `1`
   * @maxLength `512`
   */
  KmsKeyArn?: string;
  /**
   * A Map of key value pairs for Tags.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::HealthImaging::Datastore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html#aws-resource-healthimaging-datastore-return-values}
 */
export type HealthImagingDatastoreAttributes = {
  /**
   * The timestamp when the data store was created.
   */
  CreatedAt: string;
  /**
   * The Datastore's ARN.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:medical-imaging:[a-z0-9-]+:[0-9]{12}:datastore/[0-9a-z]{32}(/imageset/[0-9a-z]{32})?$`
   */
  DatastoreArn: string;
  /**
   * @minLength `0`
   * @maxLength `32`
   * @pattern `^[0-9a-z]{32}$`
   */
  DatastoreId: string;
  /**
   * A string to denote the Datastore's state.
   * @minLength `1`
   * @maxLength `127`
   */
  DatastoreStatus: DatastoreStatus;
  /**
   * The timestamp when the data store was created.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::HealthImaging::Datastore.DatastoreStatus`.
 * A string to denote the Datastore's state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthimaging-datastore-datastorestatus.html}
 */
export type DatastoreStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "DELETED";
/**
 * Type definition for `AWS::HealthImaging::Datastore.Tags`.
 * A Map of key value pairs for Tags.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthimaging-datastore-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Definition of AWS::HealthImaging::Datastore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html}
 */
export class HealthImagingDatastore extends $Resource<
  "AWS::HealthImaging::Datastore",
  HealthImagingDatastoreProperties,
  HealthImagingDatastoreAttributes
> {
  public static readonly Type = "AWS::HealthImaging::Datastore";
  constructor(
    logicalId: string,
    properties: HealthImagingDatastoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, HealthImagingDatastore.Type, properties, options);
  }
}
