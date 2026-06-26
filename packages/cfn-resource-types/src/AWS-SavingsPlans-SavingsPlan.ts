import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SavingsPlans::SavingsPlan`.
 * Resource type definition for a Savings Plan.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-savingsplans-savingsplan.html}
 */
export type SavingsPlansSavingsPlanProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::SavingsPlans::SavingsPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-savingsplans-savingsplan.html#aws-resource-savingsplans-savingsplan-return-values}
 */
export type SavingsPlansSavingsPlanAttributes = {
  /**
   * The hourly commitment amount in the specified currency.
   */
  Commitment: string;
  /**
   * The currency.
   */
  Currency: "CNY" | "USD" | "EUR";
  /**
   * The description.
   */
  Description: string;
  /**
   * The end time.
   */
  End: string;
  /**
   * The payment option.
   */
  PaymentOption: "All Upfront" | "Partial Upfront" | "No Upfront";
  /**
   * The product types.
   */
  ProductTypes: (
    | "EC2"
    | "Fargate"
    | "Lambda"
    | "SageMaker"
    | "RDS"
    | "DSQL"
    | "DynamoDB"
    | "ElastiCache"
    | "DocDB"
    | "Neptune"
    | "Timestream"
    | "Keyspaces"
    | "DMS"
    | "OpenSearch"
  )[];
  /**
   * The recurring payment amount.
   */
  RecurringPaymentAmount: string;
  /**
   * The Amazon Resource Name (ARN) of the Savings Plan.
   */
  SavingsPlanArn: string;
  /**
   * The ID of the Savings Plan.
   */
  SavingsPlanId: string;
  /**
   * The ID of the offering.
   */
  SavingsPlanOfferingId: string;
  /**
   * The plan type.
   */
  SavingsPlanType: "Compute" | "EC2Instance" | "SageMaker" | "Database";
  /**
   * The start time.
   */
  Start: string;
  /**
   * The current state of the Savings Plan.
   */
  State:
    | "payment-pending"
    | "payment-failed"
    | "active"
    | "retired"
    | "queued"
    | "queued-deleted"
    | "pending-return"
    | "returned";
  /**
   * One or more tags.
   */
  Tags: {
    /**
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
  /**
   * The duration of the term, in seconds.
   */
  TermDurationInSeconds: number;
  /**
   * The up-front payment amount.
   */
  UpfrontPaymentAmount: string;
};
/**
 * Type definition for `AWS::SavingsPlans::SavingsPlan.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-savingsplans-savingsplan-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::SavingsPlans::SavingsPlan`.
 * Resource type definition for a Savings Plan.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-savingsplans-savingsplan.html}
 */
export class SavingsPlansSavingsPlan extends $Resource<
  "AWS::SavingsPlans::SavingsPlan",
  SavingsPlansSavingsPlanProperties,
  SavingsPlansSavingsPlanAttributes
> {
  public static readonly Type = "AWS::SavingsPlans::SavingsPlan";
  constructor(
    logicalId: string,
    properties: SavingsPlansSavingsPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SavingsPlansSavingsPlan.Type, properties, options);
  }
}
