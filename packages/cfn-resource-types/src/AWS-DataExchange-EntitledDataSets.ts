import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataExchange::EntitledDataSets Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dataexchange-entitleddatasets.html}
 */
export type DataExchangeEntitledDataSetsProperties = {
  /**
   * The type of asset that is added to a data set.
   */
  AssetType?:
    | "S3_SNAPSHOT"
    | "REDSHIFT_DATA_SHARE"
    | "API_GATEWAY_API"
    | "S3_DATA_ACCESS"
    | "LAKE_FORMATION_DATA_PERMISSION";
  /**
   * A description for the data set.
   */
  Description?: string;
  /**
   * The name of the data set.
   */
  Name?: string;
};
/**
 * Attribute type definition for `AWS::DataExchange::EntitledDataSets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dataexchange-entitleddatasets.html#aws-resource-dataexchange-entitleddatasets-return-values}
 */
export type DataExchangeEntitledDataSetsAttributes = {
  /**
   * The ARN for the data set.
   */
  Arn: string;
  /**
   * The date and time that the data set was created, in ISO 8601 format.
   */
  CreatedAt: string;
  /**
   * The unique identifier for the data set.
   * @pattern `^[a-zA-Z0-9]{30,40}$`
   */
  DataSetId: string;
  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   */
  Origin: "OWNED" | "ENTITLED";
  /**
   * The data set ID of the owned data set corresponding to the entitled data set being viewed.
   */
  SourceId: string;
  /**
   * The date and time that the data set was last updated, in ISO 8601 format.
   */
  UpdatedAt: string;
};
/**
 * Definition of AWS::DataExchange::EntitledDataSets Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dataexchange-entitleddatasets.html}
 */
export class DataExchangeEntitledDataSets extends $Resource<
  "AWS::DataExchange::EntitledDataSets",
  DataExchangeEntitledDataSetsProperties,
  DataExchangeEntitledDataSetsAttributes
> {
  public static readonly Type = "AWS::DataExchange::EntitledDataSets";
  constructor(
    logicalId: string,
    properties: DataExchangeEntitledDataSetsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataExchangeEntitledDataSets.Type, properties, options);
  }
}
